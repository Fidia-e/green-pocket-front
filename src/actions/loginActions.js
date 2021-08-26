// Import : Name actions
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERREOR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CHECK_AUTH = 'CHECK_AUTH';
export const REGISTER_FORM_SUBMIT = 'REGISTER_FORM_SUBMIT';
export const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_ERR = 'ADD_USER_ERR';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

// Import : Function action
export const changeInput = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const registerInputChange = (payload) => ({
  type: REGISTER_INPUT_CHANGE,
  payload,
});

export const registerFormSubmit = () => ({
  type: REGISTER_FORM_SUBMIT,
});

export const addUserSuccess = () => ({
  type: ADD_USER_SUCCESS,
});

export const addUserErr = () => ({
  type: ADD_USER_ERR,
});

export const getCurrentUser = (payload) => ({
  type: GET_CURRENT_USER,
  payload,
});

export const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading,
});
