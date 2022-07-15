import React, { useState } from 'react';
import './AddReservationForm.css';

const AddReservationForm = () => {
  const [city, setCity] = useState('');
  console.log(setCity);
  return (
    <div className="form">
      <h2>Add Reservation</h2>
      <form className="input">
        <div className="border-form">
          <select>
            <option>Car 1</option>
            <option>Car 2</option>
          </select>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
          />
          <input type="date" />
          <button type="submit">Reserve</button>
        </div>
      </form>
    </div>
  );
};

export default AddReservationForm;
