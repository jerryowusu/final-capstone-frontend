/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import './card-details.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import settings from './caroussel';

const CarDetails = ({ cars }) => {
  if (cars.length <= 2) {
    return (
      <div className="caroussel_row">
        {
          cars.map((car) => (
            <Link id={car.id} to={`car/${car.id}`} key={car.id}>
              <div className="car-card">
                <img src={car.image_url} alt={car.name} />
                <div className="description">
                  <p>
                    {car.name}
                  </p>
                  <div className="model">
                    {car.model}
                  </div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
  return (
    <Slider {...settings}>
      {
            cars.map((car) => (
              <Link to={`car/${car.id}`} key={car.id}>
                <div className="car-card">
                  <img src={car.image_url} alt={car.name} />
                  <div className="description">
                    <p>
                      {car.name}
                    </p>
                    <div className="model">
                      {car.model}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
    </Slider>
  );
};

export default CarDetails;
