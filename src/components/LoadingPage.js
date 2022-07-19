import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './loading.scss';
import { fetchCars } from './Reservations/AddReservation';
import { setCars } from '../redux/Reservations/reservation';

const LoadingPage = () => {
  const dispatch = useDispatch();

  const handelFetchCars = () => {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  };
  useEffect(() => {
    handelFetchCars();
  }, []);

  return (
    <div className="loading_container">
      <div className="pulsion" />
    </div>

  );
};

export default LoadingPage;
