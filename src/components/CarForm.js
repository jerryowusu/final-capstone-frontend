import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '../logics/localStore';
import { postCarsToApi } from '../redux/Cars/cars';

const CarForm = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      model,
      price,
      description,
      user_id: getLocalStorage().user_id,
      image_url: imageUrl,
    };

    dispatch(postCarsToApi(data));

    e.target.reset();
  };

  return (
    <section className="form-page">
      <h1 className="text-center">Create and Add New Cars </h1>
      <form onSubmit={handleSubmit} className="submit-form">
        <input
          className="add-car-input-field input-field"
          placeholder="Car Name"
          type="text"
          name="name"
          minLength="1"
          maxLength="100"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="add-car-input-field input-field"
          placeholder="Car Model"
          type="text"
          name="model"
          minLength="1"
          maxLength="100"
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <input
          className="add-car-input-field input-field"
          placeholder="Per Day Amount"
          type="number"
          name="price"
          minLength="1"
          maxLength="100"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          className="add-car-input-field input-field"
          type="text"
          name="image"
          id="car_image"
          placeholder="Car Image Link"
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        <textarea
          className="car-description add-car-input-field"
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Add description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          className="submit-button"
          type="submit"
        >
          Create Car
        </button>
      </form>
    </section>
  );
};

export default CarForm;
