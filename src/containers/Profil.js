import { connect } from 'react-redux';

import Profil from '../components/Profil';

import { editProfil } from '../actions/profilActions';

// PrivateRoute container :
const mapState = (state) => ({
  currentUser: state.loginReducer.user,
  profilEdit: state.profilReducer.onEditInput,
});

const mapDispatch = (dispacth) => ({
  onEditInput: () => {
    dispacth(editProfil());
  },
});

export default connect(mapState, mapDispatch)(Profil);
