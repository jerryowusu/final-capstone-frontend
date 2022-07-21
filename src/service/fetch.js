import axios from 'axios';
import { useDispatch } from 'react-redux';
import { carsURL, reservationsURL } from '../logics/urls';
import { setCars, setData } from '../redux/Reservations/reservation';

const dispatch = useDispatch;

const fetchReservations = async () => {
  const response = await axios.get(reservationsURL);
  useDispatch(setData(response.data.data));
};

export const fetchCars = async () => {
  const response = await axios.get(carsURL);
  return response;
};

export const handleFetchCars = () => {
  fetchCars().then((response) => {
    dispatch(setCars(response.data));
  });
};

export default fetchReservations;
