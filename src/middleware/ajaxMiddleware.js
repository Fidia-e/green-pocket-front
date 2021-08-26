// Import : npm
import axios from 'axios';

// Import local : actions
import {
  FETCH_PLANT,
  fetchPlantSuccess,
  fetchPlantError,
} from '../actions/listPlantApiAction';

import {
  addPlantSuccess,
  ADD_PLANT_SUBMIT,
  resetTxtAddPlant,
} from '../actions/addPlantAction';

import { REMOVE_PLANT_USER } from '../actions/removePlantAction';

import { FETCH_PLANT_USER, fetchPlantUserSuccess, fetchPlantUser } from '../actions/userPlantActions';

// Utils :
const baseURI = 'http://54.87.69.37/Projet-green-pocket-back/public/';

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_PLANT: {
      const { token } = store.getState().loginReducer.user;
      const nbrPage = store.getState().plantListApi.numberPage;
      axios({
        method: 'post',
        url: `${baseURI}api/plantmodel/list`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          nbPlantPage: 8,
          numberPage: `${nbrPage}`,
        },
      })
        .then((res) => {
          const list = res.data;
          // console.log(list);
          store.dispatch(fetchPlantSuccess(list));
        })
        .catch((err) => {
          // console.log(err);
          store.dispatch(fetchPlantError(err));
        });

      break;
    }
    case ADD_PLANT_SUBMIT: {
      const { token } = store.getState().loginReducer.user;
      const pseudoPlant = store.getState().plantListApi.pseudoAddPlant;
      const newIdPlant = store.getState().plantListApi.idPlantCreate;
      axios({
        method: 'post',
        url: `${baseURI}api/plant/user/create`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          pseudoPlant: `${pseudoPlant}`,
          plantModel: `${newIdPlant}`,
        },
      })
        .then((res) => {
          console.log('LA PLANTE EST AJOUTEE!!!');
          store.dispatch(addPlantSuccess(res.data));
          setTimeout(() => {
            store.dispatch(resetTxtAddPlant());
          }, 4000);
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    case FETCH_PLANT_USER: {
      const { token } = store.getState().loginReducer.user;
      const nbrPage = store.getState().plantListApi.numberPage;
      axios({
        method: 'post',
        url: `${baseURI}api/plant/user/list`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          nbPlantPage: 8,
          numberPage: `${nbrPage}`,
        },
      })
        .then((res) => {
          console.log('AJAX');
          console.log(res.data);
          console.log(res.data.info);
          store.dispatch(fetchPlantUserSuccess(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    case REMOVE_PLANT_USER: {
      const { token } = store.getState().loginReducer.user;
      const { currentPlant } = store.getState().plantUserReducer;
      axios({
        method: 'post',
        url: `${baseURI}api/plant/user/delete`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          id: `${currentPlant}`,
        },
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(fetchPlantUser());
        })
        .catch((err) => {
          console.log(err);
        });
      break;
    }
    default:
  }
};
