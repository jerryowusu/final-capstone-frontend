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
    <tr>
      <td>{id}</td>
      <td>{city}</td>
      <td>{date}</td>
      {
      car.length !== 0
      && <td>{car[0].name}</td>
    }

      <td className="d-flex justify-content-around">
        <button className="delete-button" type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>

      </td>
    </tr>
  );
};

export default Reservation;
