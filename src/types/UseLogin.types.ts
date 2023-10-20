enum ACTIONS {
  API_REQUEST = 'api-request',
  FETCH_DATA = 'fetch-data',
  ERROR = 'error',
}

export interface Action {
  type: ACTIONS;
  payload?: any; // Change 'any' to the actual payload type
}

export interface State {
    data: any[],
    loading: boolean,
    error:string | null
};

export interface GetState{
   data_g: any[],
   loading_g: boolean,
   error_g:string | null
};

export interface DeleteState{
  data_d: any[],
  loading_d: boolean,
  error_d:string | null
}

export interface CloudPost{
   data_c_post: any[],
  loading_c_post: boolean,
  error_c_post: null | string,
}

export interface PatchState{
  data_pch: any[],
  loading_pch: boolean,
  error_pch:null | string
}

export interface GetCloud{
  data_gc: any[],
  loading_gc: boolean,
  error_gc:null| string
}