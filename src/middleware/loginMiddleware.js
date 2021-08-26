// Import : npm
import axios from 'axios';

// Import local : actions
import {
  LOGIN_SUBMIT,
  loginSuccess,
  loginError,
  CHECK_AUTH,
  REGISTER_FORM_SUBMIT,
  addUserSuccess,
  getCurrentUser,
  addUserErr,
} from '../actions/loginActions';

// Utils :
const baseURI = 'http://54.87.69.37/Projet-green-pocket-back/public/';

// Middleware :
export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  // request done :
  switch (action.type) {
    case LOGIN_SUBMIT: {
      // dispatch(setLoadingState(true));
      axios({
        method: 'post',
        url: `${baseURI}api/login_check`,
        withCredentials: true,
        data: {
          username: store.getState().loginReducer.user.email,
          password: store.getState().loginReducer.user.password,
        },
      })
        .then((res) => {
          // console.log(res.data);
          localStorage.setItem('token', res.data.token);
          dispatch(loginSuccess(res.data));
        })
        .catch((err) => {
          // console.log(err);
          dispatch(loginError(err));
        })
        .finally(() => {
          // dispatch(setLoadingState(false));
        });
      break;
    }
    case CHECK_AUTH: {
      // Request reload user
      const token = localStorage.getItem('token');
      axios({
        method: 'get',
        url: `${baseURI}api/user/verify`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          const { data } = res;
          dispatch(loginSuccess(data));
          dispatch(getCurrentUser(data));
        })
        .catch((res) => {
          console.log(res);
        });
      break;
    }
    case REGISTER_FORM_SUBMIT: {
      // Request for add new user :
      const userData = store.getState().loginReducer.user;
      axios({
        method: 'post',
        url: `${baseURI}api/login_register`,
        data: {
          email: userData.email,
          password: userData.password,
          firstname: userData.firstName,
          lastname: userData.lastName,
          pseudoUser: userData.pseudo,
          dateofbirth: userData.dateofbirth,
          country: userData.country,
          citycode: userData.citycode,
        },
      })
        .then((res) => {
          // console.log(res.data);
          dispatch(addUserSuccess());
        })
        .catch((err) => {
          console.log(err);
          dispatch(addUserErr());
        });
    }
      break;
    default:
  }
};
