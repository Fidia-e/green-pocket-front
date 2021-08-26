// Import name actions
export const ADD_PLANT_INPUT_CHANGE = 'ADD_PLANT_INPUT_CHANGE';
export const ADD_PLANT_SUBMIT = 'ADD_PLANT_SUBMIT';
export const ADD_PLANT_SUCCESS = 'ADD_PLANT_SUCCESS';
export const ADD_ID_PLANT = 'ADD_ID_PLANT';
export const RESET_ADD_TXT = 'RESET_ADD_TXT';

// Actions
export const resetTxtAddPlant = () => ({
  type: RESET_ADD_TXT,
});

export const addPlantInputChange = (payload) => ({
  type: ADD_PLANT_INPUT_CHANGE,
  payload,
});

export const addPlantSubmit = () => ({
  type: ADD_PLANT_SUBMIT,
});

export const addPlantSuccess = () => ({
  type: ADD_PLANT_SUCCESS,
});

export const addIdPlant = (payload) => ({
  type: ADD_ID_PLANT,
  payload,
});
