import React from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import AddCar from './components/AddCar';
import DeleteCar from './components/DeleteCar';
// import Reservation from './components/Reservations/Reservation';
import AddReservation from './components/Reservations/AddReservation';
import ReservationsList from './components/Reservations/ReservationsList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" exactly element={<Homepage />} />
        <Route path="/my_reservations" element={<ReservationsList />} />
        <Route path="/add_car" element={<AddCar />} />
        <Route path="/add_reservation" element={<AddReservation />} />
        <Route path="/delete_car" element={<DeleteCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
