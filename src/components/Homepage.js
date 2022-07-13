import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Homepage.scss';
import { fetchCars } from '../redux/Cars/cars';
import { setCars } from '../redux/Reservations/reservation';
import Car from './Car';

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
      <h5>For the best, luxurious and comfortable rides, look no further</h5>
      <div className="cards-container">
        <Car cars={cars} />
      </div>
    </div>
  );
};

export default Homepage;
