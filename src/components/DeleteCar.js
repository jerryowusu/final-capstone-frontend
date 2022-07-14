import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar } from '../redux/Cars/cars';

const DeleteCar = () => {
  const cars = useSelector((state) => state.allReservation.cars);
  const dispatch = useDispatch();

  console.log(cars);

  const handleDelete = (id) => {
    deleteCar(id);
    dispatch(deleteCar(id));
  };

  return (
    <section>
      <ul className="cars-container">
        {
          cars.map((car) => (
            <li className="car-card" key={car.id}>
              <img className="car-image" src={car.image_url} alt="car_image" width="100px" />
              <div className="car-details">
                <span className="car-title">
                  {car.name}
                  {' '}
                  {car.model}
                </span>
                <button className="btn btn-danger" type="button" onClick={() => handleDelete(car.id)}> Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default DeleteCar;
