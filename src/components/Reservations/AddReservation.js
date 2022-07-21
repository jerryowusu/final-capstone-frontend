// eslint-disable max-len
import React, { useEffect, useState } from 'react';
import './reservations.scss';
import './addReservation.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
import background from '../../assets/images/background_image.jpg';
import { getLocalStorage } from '../../logics/localStore';
import { createReserve, setCars } from '../../redux/Reservations/reservation';
import { carsURL, reservationsURL } from '../../logics/urls';

export const fetchCars = async () => {
  const response = await axios.get(carsURL);
  return response;
};

const AddReservation = () => {
  const cars = useSelector((state) => state.allReservation.cars);
  const [option, setOption] = useState(cars.length === 0 ? '' : cars[0].id);
  const [selectedDate, setSelectedDate] = useState(null);
  const [city, setCity] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const createReservation = async () => {
    const response = await axios.post(reservationsURL, {
      user_id: getLocalStorage().user_id,
      city,
      date: selectedDate,
      car_id: option,
    });

    if (response.status === 200) {
      dispatch(createReserve(response.data.data));
      navigate('/add_reservations');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createReservation();
    e.target.reset();
  };

  const handleFetchCars = () => {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  };

  useEffect(() => {
    handleFetchCars();
  }, []);

  return (
    <section className="add-reservation-container">
      <div className="top">
        <Link className="bars" to="/">
          <FaBars />
        </Link>
        <FaSearch />
      </div>
      <img src={background} alt="background" />
      <form onSubmit={handleSubmit} className="reservation-form submit-form">
        <div className="text">
          <h1>Book a Car</h1>
          <p>We have different versions and models of cars available for rentals. </p>
          <p>From luxury to basic and limited editions, we got you covered. </p>
        </div>

        <input
          id="city"
          type="text"
          placeholder="Enter City"
          className="control-form"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          required
        />

        <select
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
          className="control-form select-cars"
          id="cars"
        >
          {
              cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))
            }
        </select>
        <div className="control-form">
          <DatePicker
            placeholderText="Enter Date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(new Date(`${date.getMonth()}/${date.getDate() + 1}/${date.getFullYear()}`))}
            dateFormat="dd/mm/yyyy"
            className="date-picker"
            showYearDropdown
            scrollableMonthYearDropdown
            required
          />
        </div>
        <button type="submit" className="submit-button reserve-btn">Reserve</button>
      </form>
    </section>
  );
};

export default AddReservation;
