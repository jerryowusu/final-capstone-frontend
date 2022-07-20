import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUniqueCar } from '../redux/Cars/carDetails';
import './card-details.scss';

const CarDetails = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const idCAr = Number(id.id);
  const cars = useSelector((state) => state.uniqueCarReducer);
  useEffect(() => {
    dispatch(getUniqueCar(idCAr));
  }, []);

  return (
    <>
      <div className="car_container" key={cars.id}>
        <img src={cars.image_url} alt={cars.name} />
        <div className="car_details">
          <h2>{cars.name}</h2>
          <ul>
            <li>
              Model:
              {' '}
              <span>{cars.model}</span>
            </li>
            <li className="price">
              Price:
              {' '}
              <span>
                {cars.price}
                $
              </span>
            </li>
            <li>
              Availability:
              {cars.reserved === false ? (
                <span>No available</span>
              ) : (
                <span>available</span>
              )}
            </li>
          </ul>
          <span className="desc_short">Let us satisfy your desire!</span>
          <Link to="/add_reservations">
            <button
              type="button"
              className="add-button"
            >
              Reserve Car
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
