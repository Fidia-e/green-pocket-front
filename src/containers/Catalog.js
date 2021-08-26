// Import : npm
import { connect } from 'react-redux';

// Import : Local
import Catalog from '../components/Catalog';

// Import : actions
import {
  fetchPlantBack,
  fetchPlantNext,
  fetchPlantFirst,
  fetchPlantLast,
  fetchPlant,
} from '../actions/listPlantApiAction';
import {
  addPlantInputChange,
  addPlantSubmit,
  addIdPlant,
} from '../actions/addPlantAction';

const mapState = (state) => ({
  plantListApi: state.plantListApi,
  currentPage: state.plantListApi.numberPage,
  nbPlant: state.plantListApi.nbrResultAPI,
  pseudoPlant: state.plantListApi.pseudoAddPlant,
  messageAddPlant: state.plantListApi.txtAddPlant,
});

const mapDispatch = (dispatch) => ({
  previousPage: () => {
    console.log('PAGE BACK');
    dispatch(fetchPlantBack());
    dispatch(fetchPlant());
  },
  nextPage: () => {
    console.log('PAGE NEXT');
    dispatch(fetchPlantNext());
    dispatch(fetchPlant());
  },
  firstPage: () => {
    console.log('PAGE NEXT');
    dispatch(fetchPlantFirst());
    dispatch(fetchPlant());
  },
  lastPage: () => {
    console.log('PAGE NEXT');
    dispatch(fetchPlantLast());
    dispatch(fetchPlant());
  },
  addPlantInputChange: (newPseudoPlant) => {
    console.log('pseudo plante user');
    dispatch(addPlantInputChange(newPseudoPlant));
  },
  addIdPlant: (idPlant) => {
    console.log(idPlant);
    dispatch(addIdPlant(idPlant));
  },
  onButtonSubmit: () => {
    console.log('j\'ajoute une plante');
    dispatch(addPlantSubmit());
  },
});

export default connect(mapState, mapDispatch)(Catalog);
