/* eslint-disable max-len */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Pour utiliser "REDUX", la dependance est installée, l'import du "PROVIDER" est fait, a décommenter puis
// mettre la balise <Provider store= "store"></Provider> dans les espaces prévus.
// Penser à importer le "STORE" une fois créé.
