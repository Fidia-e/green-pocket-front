// Import : Local
import {
  FETCH_PLANT,
  FETCH_PLANT_SUCCESS,
  FETCH_PLANT_ERROR,
  FETCH_PLANT_BACK,
  FETCH_PLANT_NEXT,
  FETCH_PLANT_FIRST,
  FETCH_PLANT_LAST,
} from '../actions/listPlantApiAction';
import {
  ADD_PLANT_INPUT_CHANGE,
  ADD_PLANT_SUCCESS,
  ADD_ID_PLANT,
  RESET_ADD_TXT,
} from '../actions/addPlantAction';

// The State
const initialState = {
  list: [],
  loading: false,
  error: false,
  errorMessage: '',
  numberPage: 1,
  totalPage: '',
  nbrResultAPI: '',
  pseudoAddPlant: '',
  idPlantCreate: '',
  txtAddPlant: '',
};

const plantListApi = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PLANT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLANT_SUCCESS:
      return {
        ...state,
        list: [...action.payload.data],
        loading: false,
        totalPage: action.payload.info.nbPage,
        nbrResultAPI: action.payload.info.nbPlant,
      };
    case FETCH_PLANT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: 'Le site rencontre un problème, merci de patienter',
      };
    case FETCH_PLANT_BACK:
      return {
        ...state,
        numberPage: handleBackPage(state.numberPage),
      };
    case FETCH_PLANT_NEXT:
      return {
        ...state,
        numberPage: handleNextPage(state.numberPage, state.totalPage),
      };
    case FETCH_PLANT_FIRST:
      return {
        ...state,
        numberPage: handleFirstPage(),
      };
    case FETCH_PLANT_LAST:
      return {
        ...state,
        numberPage: handleLastPage(state.totalPage),
      };
    case ADD_PLANT_INPUT_CHANGE:
      return {
        ...state,
        pseudoAddPlant: action.payload,
      };
    case ADD_ID_PLANT:
      return {
        ...state,
        idPlantCreate: action.payload,
      };
    case ADD_PLANT_SUCCESS:
      return {
        ...state,
        pseudoAddPlant: '',
        txtAddPlant: 'Ta plante à bien été ajoutée dans ton jardin.',
      };
    case RESET_ADD_TXT:
      return {
        ...state,
        txtAddPlant: '',
      };
    default:
      return state;
  }
};
export default plantListApi;

// Paginnation back :
const handleBackPage = (page) => {
  if (page > 1) {
    return page - 1;
  }
  return 1;
};

// Paginnation next :
const handleNextPage = (page, totalPage) => {
  if (page < totalPage) {
    return page + 1;
  }
  return totalPage;
};

// Paginnation first :
const handleFirstPage = () => 1;

// Paginnation last :
const handleLastPage = (lastPage) => lastPage;
