import React, { useState } from 'react';

const AddReservationForm = () => {
  const [city, setCity] = useState('');
  console.log(setCity);
  return (
    <div>
      <h2>Add Reservation</h2>
      <form>
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
      </form>
    </div>
  );
};

export default AddReservationForm;
