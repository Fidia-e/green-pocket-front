// Names actions :
export const FETCH_PLANT_USER = 'FETCH_PLANT_USER';
export const FETCH_PLANT_USER_SUCCESS = 'FETCH_PLANT_USER_SUCCESS';

// Import : Function action
export const fetchPlantUser = () => ({
  type: FETCH_PLANT_USER,
});

export const fetchPlantUserSuccess = (payload) => ({
  type: FETCH_PLANT_USER_SUCCESS,
  payload,
});
