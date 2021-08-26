// Import :
import React from 'react';
import Proptypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, isLogged, ...rest }) => (
  <Route
    {...rest}
    render={() => (
      isLogged
        ? children
        : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  isLogged: Proptypes.bool.isRequired,
  children: Proptypes.bool.isRequired,
};

export default PrivateRoute;
