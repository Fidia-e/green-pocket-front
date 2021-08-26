// Import : npm
import { connect } from 'react-redux';

// Import : Local
import Register from '../components/Register';

// Import : actions
import { registerInputChange, registerFormSubmit } from '../actions/loginActions';

const mapState = (state) => ({
  formData: state.loginReducer.user,
  messageLog: state.loginReducer.txtNewUser,
});

const mapDispatch = (dispatch) => ({
  onFormRegisterSubmit: () => {
    dispatch(registerFormSubmit());
  },

  onInputRegisterChange: (enteredText) => {
    dispatch(registerInputChange(enteredText));
  },
});

export default connect(mapState, mapDispatch)(Register);
