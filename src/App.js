import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cars from './pages/Cars';
import AddReservation from './pages/Add Reservation';
import Reservations from './pages/Reservations';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Cars} />
          <Route path="/Add Reservation" component={AddReservation} />
          <Route path="/Reservations" component={Reservations} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
