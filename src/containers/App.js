// Import : npm
import { connect } from 'react-redux';

// Import : local
import App from '../components/App';

// Import : Actions
import { checkAuth } from '../actions/loginActions';
import { fetchPlant } from '../actions/listPlantApiAction';
import { fetchPlantUser } from '../actions/userPlantActions';

// App conatiner :
const mapState = (state) => ({
  isLogged: state.loginReducer.isLogged,
  loading: state.loginReducer.loading,
  error: state.plantListApi.error,
});

const mapDispatch = (dispatch) => ({
  checkAuth: () => {
    dispatch(checkAuth());
  },
  loadDataApi: () => {
    dispatch(fetchPlant());
  },
  loadPlantUser: () => {
    dispatch(fetchPlantUser());
  },
});

export default connect(mapState, mapDispatch)(App);
