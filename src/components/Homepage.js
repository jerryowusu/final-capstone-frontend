import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Homepage.css';
import { fetchCars } from '../redux/Cars/cars';
import { setCars } from '../redux/Reservations/reservation';
import CarDetails from './CarDetails';

const Homepage = () => {
  const cars = useSelector((state) => state.allReservation.cars);
  const dispatch = useDispatch();

  const handleFetchCars = () => {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  };

  useEffect(() => {
    handleFetchCars();
  }, []);

  return (
    <div className="home-container">
      <h1>Available Cars</h1>
      <h3>For the best, luxurious and comfortable rides, look no further</h3>
      <div className="cards-container">
        welcome
        <CarDetails cars={cars} />
      </div>
    </div>
  );
};

export default Homepage;
