import { connect } from 'react-redux';
import Login from '../components/Login';
import { changeInput, loginSubmit } from '../actions/loginActions';

const mapState = (state) => ({
  formDataLog: state.loginReducer.user,
  isLogged: state.loginReducer.isLogged,
  messageLog: state.loginReducer.txtUserLog,
});

const mapDispatch = (dispatch) => ({
  changeInput: (value, name) => {
    dispatch(changeInput(value, name));
  },

  onLoginSubmit: () => {
    dispatch(loginSubmit());
  },
});

export default connect(mapState, mapDispatch)(Login);
