import  {useReducer } from 'react';
import { Action, PatchState } from '../../types/UseLogin.types';
import { localInstance } from '../axios';



enum ACTIONS {
  API_REQUEST = 'api-request',
  FETCH_DATA = 'fetch-data',
  ERROR = 'error',
};

const initialState: PatchState = {
  data_pch: [],
  loading_pch: false,
  error_pch: null,
};

const reducer = (state: PatchState, action: Action): any => {
  switch (action.type) {
    case ACTIONS.API_REQUEST:
      return { ...state, loading_pch: true, error_pch: null };
    case ACTIONS.FETCH_DATA:
      return { ...state, loading_pch: false, data_pch: action.payload };
    case ACTIONS.ERROR:
      return { ...state, loading_pch: false, error_pch: action.payload };
    default:
      return state;
  }
};

function UsePatch(): any {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const patchIt = (url: string, user: object, token: string) => {
     dispatch({ type: ACTIONS.API_REQUEST });
    localInstance
      .patch(url, user, {
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

  return [state,patchIt];
};

export default UsePatch;
