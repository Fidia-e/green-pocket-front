// Import

// Import : Local
import { EDIT_PROFIL } from '../actions/profilActions';

// The State
const initialState = {
  onEditInput: false,
};

const profilReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case EDIT_PROFIL:
      return {
        ...state,
        onEditInput: !state.onEditInput,
      };
    default:
      return state;
  }
};

export default profilReducer;
