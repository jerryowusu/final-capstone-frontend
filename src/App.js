import React from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Reservations from './redux/Reservations/reservation';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import AddCar from './components/AddCar';
import AddReservationForm from './components/reservations/AddReservationForm';
import DeleteCar from './components/DeleteCar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" exactly element={<Homepage />} />
        <Route path="/Reservations" component={Reservations} />
        <Route path="/add_reservations" element={<AddReservationForm />} />
        <Route path="/add_car" element={<AddCar />} />
        <Route path="/delete_car" element={<DeleteCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
