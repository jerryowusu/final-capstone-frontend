import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carsURL } from '../logics/urls';
import { deleteCar } from '../redux/Reservations/reservation';

const DeleteCar = () => {
  const cars = useSelector((state) => state.allReservation.cars);
  const dispatch = useDispatch();

  const deleteOperation = (id) => {
    axios.delete(`${carsURL}/${id}`);
  };

  const handleDelete = (id) => {
    deleteOperation(id);
    dispatch(deleteCar(id));
  };

  return (
    <section>
      <h1 className="text-center">Delete Cars</h1>
      <ul className="cars-container">
        {
          cars.map((car) => (
            <li className="card-car" key={car.id}>
              <img className="car-image" src={car.image_url} alt="car_image" width="100px" />
              <div className="car-detail">
                <span className="car-title">
                  {car.name}
                  {' '}
                  {car.model}
                </span>
                <button className="delete-button" type="button" onClick={() => handleDelete(car.id)}> Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default DeleteCar;
