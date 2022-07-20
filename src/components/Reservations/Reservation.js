/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservationsURL } from '../../logics/urls';
import { fetchCars } from '../../redux/Cars/cars';
import { deleteData, setCars } from '../../redux/Reservations/reservation';

const Reservation = ({
  id, city, date, carId,
}) => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.allReservation.cars);

  const car = useSelector((state) => state.allReservation.cars.filter((item) => item.id === carId));

  if (cars.length === 0) {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  }

  const deleteReservation = (id) => {
    axios.delete(`${reservationsURL}/${id}`);
  };

  const handleDelete = (id) => {
    deleteReservation(id);
    dispatch(deleteData(id));
  };

  return (
    <>
      <div className="reservation-holder">
        <div className="img-holder">
          <img src={cars.image_url} alt="car" />
        </div>
        <div className="info-holder">
          {
      car.length !== 0
      && <h2>{car[0].name}</h2>
    }
          <p>
            City:
            {' '}
            {city}
          </p>
          <p>
            Date:
            {' '}
            {date}
          </p>

        </div>
        <button className="delete-button" type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Reservation;
