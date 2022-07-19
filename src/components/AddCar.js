import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CarForm from './CarForm';
import Response from './Response';

const AddCar = () => {
  const cars = useSelector((state) => state.userReducer);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1 className="text-center">Create and Add New Cars </h1>
      {
            cars.status === 201 ? (
              <Response show={show} setShow={setShow} />
            ) : (
              <CarForm />
            )
          }
    </>
  );
};

export default AddCar;
