import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { reserveCar } from '../../redux/Reservations/reservation';
import { getLocalStorage } from '../../logics/localStore';
import './AddReservationForm.css';

const AddReservationForm = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  // const cars = useSelector((state) => state.allReservation.cars);
  // const { id } = useParams();

  // const myCar = cars.filter((car) => car.id === id);
  // console.log(myCar);

  const postData = (e) => {
    e.preventDefault();
    dispatch(reserveCar({
      date,
      city,
      user_id: getLocalStorage().user_id,
      car_id: 1,
    }));
  };

  return (
    <div className="form">
      <h2>Add Reservation</h2>
      <form onSubmit={postData} className="input">
        <div className="border-form">
          <select>
            <option>Car 1</option>
            <option>Car 2</option>
          </select>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Reserve</button>
        </div>
      </form>
    </div>
  );
};

export default AddReservationForm;
