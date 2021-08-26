// == Import npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : Local
import rootReducer from '../reducers';
import ajaxMiddleware from '../middleware/ajaxMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    loginMiddleware,
    ajaxMiddleware,
    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
