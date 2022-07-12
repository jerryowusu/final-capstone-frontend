import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cars from './redux/Cars/cars';
import Reservations from './redux/Reservations/reservation';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" exactly element={<Cars />} />
          <Route path="/Reservations" component={Reservations} />
          <Route path="/login" element={<Login />} />
          <Route path="/registeration" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
