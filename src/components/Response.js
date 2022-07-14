import React from 'react';
import { Alert } from 'react-bootstrap';
import CarForm from './CarForm';

// eslint-disable-next-line react/prop-types
const Response = ({ show, setShow }) => {
  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Congratulations!!!</Alert.Heading>
        <p>New listing has been successfully created.</p>
      </Alert>
    );
  }
  return <CarForm />;
};

export default Response;
