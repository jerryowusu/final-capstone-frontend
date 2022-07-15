import axios from 'axios';
import { carsURL } from '../../logics/urls';

const FETCH_DATA = 'cars/FETCH_DATA';
const POST_DATA = 'cars/POST_DATA';
const DELETE_CAR = 'cars/DELETE_CARS';

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

export const deleteCar = (id) => async (dispatch) => {
  await axios.delete(`${carsURL}/${id}`)
    .then((response) => {
      dispatch({ type: DELETE_CAR, payload: response });
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
    case DELETE_CAR:
      return {
        ...state,
        cars: state.cars.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default carReducers;
