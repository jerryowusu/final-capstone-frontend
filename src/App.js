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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" exactly element={<Homepage />} />
        <Route path="/Reservations" component={Reservations} />
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
