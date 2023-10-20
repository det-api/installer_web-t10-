import  {useReducer } from 'react';
import { Action, State } from '../../types/UseLogin.types';
import { localInstance } from '../axios';



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

function UsePost(): any {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchIt = (url: string, user: object, token: string) => {
     dispatch({ type: ACTIONS.API_REQUEST });
    localInstance
      .post(url, user, {
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

  return [state,fetchIt];
};

export default UsePost;
