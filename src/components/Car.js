/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './card-details.scss';
import settings from './caroussel';

const Car = ({ cars }) => (
  cars.length <= 2
    ? (
      <div className="caroussel_row">
        {
          cars.map((car) => (
            <Link id={car.id} to={`car/${car.id}`} key={car.id}>
              <div className="car-card">
                <img src={car.image_url} alt={car.name} />
                <div className="descript">
                  <p>
                    {car.name}
                  </p>
                  <div className="model">
                    {car.model}
                  </div>
                  <p>
                    {car.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    )

    : (
      <Slider {...settings}>
        {
            cars.map((car) => (
              <Link to={`car/${car.id}`} key={car.id}>
                <div className="car-card">
                  <img src={car.image_url} alt={car.name} />
                  <div>
                    <p>
                      {car.model}
                    </p>
                  </div>
                  <p className="show-description">
                    {car.description}
                  </p>
                </div>
              </Link>
            ))
          }
      </Slider>
    ));

export default Car;
