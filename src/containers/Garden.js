// Import :
import { connect } from 'react-redux';

// Import local :
import Garden from '../components/Garden';

// Import actions :
import {
  fetchPlantBack,
  fetchPlantNext,
  fetchPlantFirst,
  fetchPlantLast,
} from '../actions/listPlantApiAction';

import { fetchPlantUser } from '../actions/userPlantActions';

import { removePlantUser } from '../actions/removePlantAction';

// Container Garden :
const mapState = (state) => ({
  listPlantUser: state.plantUserReducer.list,
  nbPlant: state.plantUserReducer.nbrResultUser,
});

const mapDispatch = (dispatch) => ({
  previousPage: () => {
    console.log('PAGE BACK');
    dispatch(fetchPlantBack());
    dispatch(fetchPlantUser());
  },
  nextPage: () => {
    console.log('PAGE NEXT');
    dispatch(fetchPlantNext());
    dispatch(fetchPlantUser());
  },
  firstPage: () => {
    console.log('PAGE NEXT');
    dispatch(fetchPlantFirst());
    dispatch(fetchPlantUser());
  },
  lastPage: () => {
    console.log('PAGE NEXT');
    dispatch(fetchPlantLast());
    dispatch(fetchPlantUser());
  },
  removePlant: (idPlant) => {
    dispatch(removePlantUser(idPlant));
  },
});

export default connect(mapState, mapDispatch)(Garden);
