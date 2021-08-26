import { connect } from 'react-redux';
import MiniProfil from '../components/MiniProfil';
import { logoutSuccess } from '../actions/loginActions';

const mapState = (state) => ({
  firstName: state.loginReducer.user.firstName,
  lastName: state.loginReducer.user.lastName,
});

const mapDispatch = (dispatch) => ({
  onLogout: () => {
    dispatch(logoutSuccess());
  },
});

export default connect(mapState, mapDispatch)(MiniProfil);
