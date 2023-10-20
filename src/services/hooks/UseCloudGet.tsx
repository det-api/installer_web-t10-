import  {useReducer } from 'react';
import { Action,  GetCloud, State } from '../../types/UseLogin.types';
import { cloudInstance } from '../axios';



enum ACTIONS {
  API_REQUEST = 'api-request',
  FETCH_DATA = 'fetch-data',
  ERROR = 'error',
};

const initialState: GetCloud = {
  data_gc: [],
  loading_gc: false,
  error_gc: null,
};

const reducer = (state: State, action: Action): any => {
  switch (action.type) {
    case ACTIONS.API_REQUEST:
      return { ...state, loading_gc: true, error_gc: null };
    case ACTIONS.FETCH_DATA:
      return { ...state, loading_gc: false, data_gc: action.payload };
    case ACTIONS.ERROR:
      return { ...state, loading_gc: false, error_gc: action.payload };
    default:
      return state;
  }
};

function UseCloudGet(): any {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getToCloud = (url: string,token: string) => {
     dispatch({ type: ACTIONS.API_REQUEST });
    cloudInstance
      .get(url, {
       headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data'
    }
      })
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e });
      });
  };

  return [state,getToCloud];
};

export default UseCloudGet;
