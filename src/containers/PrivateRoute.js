import { connect } from 'react-redux';

import PrivateRoute from '../components/PrivateRoute';

// PrivateRoute container :
const mapState = (state) => ({
  isLogged: state.loginReducer.isLogged,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(PrivateRoute);
