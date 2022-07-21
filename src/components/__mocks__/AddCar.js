import React from 'react';

const CarForm = () => (
  <section className="form-page">
    <h1 className="text-center">Create and Add New Cars </h1>
    <form className="submit-form">
      <input
        className="add-car-input-field input-field"
        placeholder="Car Name"
        type="text"
        name="name"
        minLength="1"
        maxLength="100"
        required
      />
      <input
        className="add-car-input-field input-field"
        placeholder="Car Model"
        type="text"
        name="model"
        minLength="1"
        maxLength="100"
        required
      />
      <input
        className="add-car-input-field input-field"
        placeholder="Per Day Amount"
        type="number"
        name="price"
        minLength="1"
        maxLength="100"
        required
      />
      <input
        className="add-car-input-field input-field"
        type="text"
        name="image"
        id="car_image"
        placeholder="Car Image Link"
        required
      />
      <button className="submit-button" type="submit">Create Car</button>
    </form>
  </section>
);

export default CarForm;
