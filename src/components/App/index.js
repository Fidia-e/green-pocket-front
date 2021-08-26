// Import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import Local
import './style.scss';
import { Route, Switch } from 'react-router-dom';

// Import route access :

// Import Components :
import SectionLeft from '../SectionLeft';
import LandingPage from '../LandingPage';
import Home from '../Home';
import Nav from '../Nav';
import Calendar from '../Calendar';

// Import Containers :
import Profil from '../../containers/Profil';
import Garden from '../../containers/Garden';
import SinglePlantUser from '../../containers/SinglePlantUser';
import SinglePlantApi from '../../containers/SinglePlantApi';
import Catalog from '../../containers/Catalog';
import Login from '../../containers/Login';
import Loading from '../Loading';
import Register from '../../containers/Register';
import PlantUserFromApi from '../../containers/PlantUserFromApi';

// Import PrivateRoute
import PrivateRoute from '../../containers/PrivateRoute';

// Component App =>
const App = ({
  isLogged,
  checkAuth,
  loadDataApi,
  loading,
  loadPlantUser,
}) => {
  useEffect(() => {
    // other code
    checkAuth();
    loadDataApi();
    loadPlantUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  return (

    <div className="App">
      {loading && <Loading />}
      {!loading && (
      <Switch>
        <PrivateRoute exact path="/">
          <Nav />
          <SectionLeft />
          <Home />
        </PrivateRoute>
        <Route exact path="/login">
          <LandingPage />
          <Login />
        </Route>
        <Route exact path="/register">
          <LandingPage />
          <Register />
        </Route>
        <PrivateRoute exact path="/catalog">
          <Nav />
          <SectionLeft />
          <Catalog />
        </PrivateRoute>
        <PrivateRoute exact path="/catalog/:slug">
          <Nav />
          <SectionLeft />
          <SinglePlantApi />
        </PrivateRoute>
        <PrivateRoute path="/plant/:slug">
          <Nav />
          <SectionLeft />
          <PlantUserFromApi />
        </PrivateRoute>
        <PrivateRoute path="/profil">
          <Nav />
          <SectionLeft />
          <Profil />
        </PrivateRoute>
        <PrivateRoute exact path="/garden">
          <Nav />
          <SectionLeft />
          <Garden />
        </PrivateRoute>
        <PrivateRoute path="/garden/:slug">
          <Nav />
          <SectionLeft />
          <SinglePlantUser />
        </PrivateRoute>
        <PrivateRoute path="/calendar">
          <Nav />
          <SectionLeft />
          <Calendar />
        </PrivateRoute>
      </Switch>
      )}
    </div>
  );
};

App.propTypes = {
  loadPlantUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  checkAuth: PropTypes.func.isRequired,
  loadDataApi: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default App;
