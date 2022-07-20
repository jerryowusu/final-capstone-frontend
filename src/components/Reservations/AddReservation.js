import React, { useEffect, useState } from 'react';
import './reservations.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
      <form onSubmit={handleSubmit} className="submit-form">
        <label htmlFor="city" className="form-group">
          City:
          <input
            id="city"
            type="text"
            className="input-field"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          />
        </label>
        <label htmlFor="car" className="form-group">
          Car:
          <select
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
            className="form-group select-cars"
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
        </label>
        <div className="date">
          Date:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(new Date(`${date.getMonth()}/${date.getDate() + 1}/${date.getFullYear()}`))}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableMonthYearDropdown
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default AddReservation;
