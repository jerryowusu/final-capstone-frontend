import axios from 'axios';
import { carsURL } from '../../logics/urls';

const FETCH_DATA = 'FETCH_DATA';

const initialState = {
  cars: [],
};

export const fetchCars = async () => {
  const response = await axios.get(carsURL);
  return response;
};

const carReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default carReducers;
