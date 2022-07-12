/* eslint-disable default-param-last */
import { carsURL } from '../../logics/urls';

const FETCH_CARS = 'cars/FETCH_CARS';
const POST_CAR = 'cars/POST_CAR';

const initialState = [];

const getCars = (payload) => ({
  type: FETCH_CARS,
  payload,
});

export const postCar = (payload) => ({
  type: POST_CAR,
  payload,
});

export const fetchCars = () => (dispatch) => {
  fetch(carsURL).then((res) => res.json()).then((data) => {
    dispatch(getCars(data.data));
  });
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return [...state, ...action.payload];
    case POST_CAR:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default carReducer;
