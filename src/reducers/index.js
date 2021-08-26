// Import : npm
import { combineReducers } from 'redux';

// Import : Local
import loginReducer from './loginReducer';
import plantListApi from './plantListApi';
import plantUserReducer from './plantUserReducer';
import profilReducer from './profilReducer';

// Centralization of our files "reducers" here :
export default combineReducers({
  loginReducer,
  plantListApi,
  plantUserReducer,
  profilReducer,
});
