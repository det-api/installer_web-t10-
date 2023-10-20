import  {useReducer } from 'react';
import { Action, State } from '../../types/UseLogin.types';
import { cloudInstance } from '../axios';


enum ACTIONS {
  API_REQUEST = 'api-request',
  FETCH_DATA = 'fetch-data',
  ERROR = 'error',
};

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state: State, action: Action): any => {
  switch (action.type) {
    case ACTIONS.API_REQUEST:
      return { ...state, loading: true, error: null };
    case ACTIONS.FETCH_DATA:
      return { ...state, loading: false, data: action.payload };
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function useLogin(): any {
  const [state, dispatch] = useReducer(reducer, initialState);
    
  const fetchIt = (url:string,user:object)=>{
     dispatch({ type: ACTIONS.API_REQUEST });
    cloudInstance
      .post(url,user)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data.result });
      })
        .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: e.message });
      });
  };

  return [state,fetchIt];
};

export default useLogin;
