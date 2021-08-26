// Import

// Import : Local
import {
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  REGISTER_FORM_SUBMIT,
  REGISTER_INPUT_CHANGE,
  ADD_USER_SUCCESS,
  ADD_USER_ERR,
  GET_CURRENT_USER,
  SET_LOADING_STATE,
} from '../actions/loginActions';

// The State
const initialState = {
  user: {
    firstName: '',
    lastName: '',
    pseudo: '',
    email: '',
    password: '',
    dateofbirth: '',
    country: '',
    citycode: '',
    token: '',
  },
  txtNewUser: '',
  txtUserLog: '',
  isLogged: false,
  loading: false,
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          token: localStorage.getItem('token'),
        },
        loading: false,
        isLogged: true,
        txtUserLog: 'Tu es bien connecté.',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        isLogged: false,
        txtUserLog: 'Il y a une erreur sur ton mail mot de passe?',
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: '',
          lastName: '',
          pseudo: '',
          email: '',
          dateofbirth: '',
          country: '',
          citycode: '',
          token: localStorage.removeItem('token'),
        },
        isLogged: false,
        txtUserLog: 'Tu es bien déconecté.',
      };
    case REGISTER_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case REGISTER_FORM_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        txtNewUser: 'Tu es bien enregistré, bienvenue nouveau jardiner! Tu peux désormé te connecter',
      };
    case ADD_USER_ERR:
      return {
        ...state,
        txtNewUser: 'Une erreur est survenue sur une information, il faut faire attention!',
        loading: false,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload.firstname,
          lastName: action.payload.lastname,
          pseudo: action.payload.pseudo,
          email: action.payload.email,
          dateofbirth: action.payload.dateofbirth,
          country: action.payload.country,
          citycode: action.payload.citycode,
        },
      };
    case SET_LOADING_STATE:
      return {
        ...state,
        loading: action.loading,
      };

    default:
      return state;
  }
};

export default loginReducer;
