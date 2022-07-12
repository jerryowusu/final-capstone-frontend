import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCars, postCar } from '../redux/Cars/cars';
import CarDetails from './CarDetails';

const Homepage = () => {
  const cars = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();

  const handleFetchCars = () => {
    fetchCars().then((response) => {
      dispatch(postCar(response.data));
    });
  };

  useEffect(() => {
    handleFetchCars();
  }, []);

  return (
    <div className="home-container">
      <h1>Available Cars</h1>
      <h3>For the best, luxurious and comfortable rides, look no further</h3>
      <div className="car-container">
        <CarDetails cars={cars} />
      </div>
    </div>
  );
};

export default Homepage;
