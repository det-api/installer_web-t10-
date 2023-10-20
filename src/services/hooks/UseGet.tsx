import  {useReducer } from 'react';
import { Action, State,GetState } from '../../types/UseLogin.types';
import { localInstance } from '../axios';



enum ACTIONS {
  API_REQUEST = 'api-request',
  FETCH_DATA = 'fetch-data',
  ERROR = 'error',
};

const initialState: GetState = {
  data_g:[],
  loading_g: false,
  error_g: null,
};

const reducer = (state: State, action: Action): any => {
  switch (action.type) {
    case ACTIONS.API_REQUEST:
      return { ...state, loading_g: true, error_g: null };
    case ACTIONS.FETCH_DATA:
      return { ...state, loading_g: false, data_g: action.payload };
    case ACTIONS.ERROR:
      return { ...state, loading_g: false, error_g: action.payload };
    default:
      return state;
  }
};

function UseGet(): any {
  const [state, dispatch] = useReducer(reducer, initialState);
    
  const fetchItGet = (url:string,token:string)=>{
    dispatch({ type: ACTIONS.API_REQUEST });
    localInstance
      .get(url,{
       headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': 'Bearer ' + token
    }
      })
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data.result });
      })
        .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.message });
      });
  };

  return [state,fetchItGet];
};

export default UseGet;
