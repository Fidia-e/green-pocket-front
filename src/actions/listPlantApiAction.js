// Names actions :
export const FETCH_PLANT_SUCCESS = 'FETCH_PLANT_SUCCESS';
export const FETCH_PLANT = 'FETCH_PLANT';
export const FETCH_PLANT_ERROR = 'FETCH_PLANT_ERROR';
export const FETCH_PLANT_BACK = 'FETCH_PLANT_BACK';
export const FETCH_PLANT_NEXT = 'FETCH_PLANT_NEXT';
export const FETCH_PLANT_FIRST = 'FETCH_PLANT_FIRST';
export const FETCH_PLANT_LAST = 'FETCH_PLANT_LAST';

// Function actions :
export const fetchPlant = () => ({
  type: FETCH_PLANT,
});

export const fetchPlantSuccess = (payload) => ({
  type: FETCH_PLANT_SUCCESS,
  payload,
});

export const fetchPlantError = () => ({
  type: FETCH_PLANT_ERROR,
});

export const fetchPlantBack = () => ({
  type: FETCH_PLANT_BACK,
});

export const fetchPlantNext = () => ({
  type: FETCH_PLANT_NEXT,
});

export const fetchPlantFirst = () => ({
  type: FETCH_PLANT_FIRST,
});

export const fetchPlantLast = () => ({
  type: FETCH_PLANT_LAST,
});
