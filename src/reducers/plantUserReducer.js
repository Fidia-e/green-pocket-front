// Import

// Import : Local
import { FETCH_PLANT_USER_SUCCESS } from '../actions/userPlantActions';
import { REMOVE_PLANT_USER } from '../actions/removePlantAction';

// The State
const initialState = {
  list: [],
  loading: false,
  currentPlant: '',
};

const plantUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLANT_USER_SUCCESS:
      return {
        ...state,
        list: [...action.payload.data],
        loading: false,
        nbrResultUser: action.payload.info.nbPlant,
      };
    case REMOVE_PLANT_USER:
      return {
        ...state,
        currentPlant: action.payload,
      };
    default:
      return state;
  }
};

export default plantUserReducer;
