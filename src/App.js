import React from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Reservations from './redux/Reservations/reservation';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import AddCar from './components/AddCar';
import AddReservation from './components/Reservations/AddReservation';
import DeleteCar from './components/DeleteCar';
import CarDetails from './components/CarDetails';
import LoadingPage from './components/LoadingPage';

function App() {
  const cars = useSelector((state) => state.allReservation.cars);
  return (
    <>
      <Navbar />
      <Routes>
        {!cars.length ? (
          <Route path="/" element={<LoadingPage />} />
        ) : (
          <Route path="/" element={<Homepage />} />
        )}
        <Route exact path="/car/:id" exactly element={<CarDetails />} />
        <Route path="/add_car" element={<AddCar />} />
        <Route path="/delete_car" element={<DeleteCar />} />
        <Route path="/add_reservations" element={<AddReservation />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
