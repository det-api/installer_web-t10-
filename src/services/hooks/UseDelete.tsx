import  {useReducer } from 'react';
import { Action, DeleteState } from '../../types/UseLogin.types';
import { localInstance } from '../axios';


enum ACTIONS {
  API_REQUEST = 'api-request',
  FETCH_DATA = 'fetch-data',
  ERROR = 'error',
};

const initialState: DeleteState = {
  data_d: [],
  loading_d: false,
  error_d: null,
};

const reducer = (state: DeleteState, action: Action): any => {
  switch (action.type) {
    case ACTIONS.API_REQUEST:
      return { ...state, loading_d: true, error_d: null };
    case ACTIONS.FETCH_DATA:
      return { ...state, loading_d: false, data_d: action.payload };
    case ACTIONS.ERROR:
      return { ...state, loading_d: false, error_d: action.payload };
    default:
      return state;
  }
};

function UseDelete(): any {
  const [state, dispatch] = useReducer(reducer, initialState);
    
  const deleteIt = (url:string,token:string)=>{
     dispatch({ type: ACTIONS.API_REQUEST });
    localInstance
        .delete(url, {
            headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data'
    }
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.message });
      });
  };

  return [state,deleteIt];
};

export default UseDelete;
