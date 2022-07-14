import axios from 'axios';
import { carsURL } from '../../logics/urls';

const FETCH_DATA = 'cars/FETCH_DATA';
const POST_DATA = 'cars/POST_DATA';

const initialState = [];

export const fetchCars = async () => {
  const response = await axios.get(carsURL);
  return response;
};

export const postCarsToApi = (data) => async (dispatch) => {
  await axios.post(carsURL, data)
    .then((response) => {
      dispatch({ type: POST_DATA, payload: response });
    });
};

const carReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        cars: action.payload,
      };
    case POST_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default carReducers;
