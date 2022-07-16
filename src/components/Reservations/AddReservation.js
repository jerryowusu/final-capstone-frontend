import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLocalStorage } from '../../logics/localStore';
import { createReserve, setCars } from '../../redux/Reservations/reservation';
import { carsURL, reservationsURL } from '../../logics/urls';
// import { fetchCars } from '../../redux/Cars/cars';

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
      navigate('/my_reservations');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createReservation();
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">
          City:
          <input
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </label>
        <label htmlFor="car">
          Car:
          <select
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
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
        <div>
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
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddReservation;
