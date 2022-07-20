import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './loading.scss';
import { setCars } from '../redux/Reservations/reservation';
import { fetchCars } from './Reservations/AddReservation';

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
