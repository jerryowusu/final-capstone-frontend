/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reservationsURL } from '../../logics/urls';
import { fetchCars } from '../../redux/Cars/cars';
import Car from '../../assets/images/download.jpeg';
import './addReservation.css';
import { deleteData, setCars } from '../../redux/Reservations/reservation';

const Reservation = ({
  id, city, date, carId,
}) => {
  const dispatch = useDispatch();

  //   const [info, setInfo] = useState({
  //     id: 1, city: '', date: '', car_id: 1,
  //   });

  const cars = useSelector((state) => state.allReservation.cars);

  const car = useSelector((state) => state.allReservation.cars.filter((item) => item.id === carId));

  if (cars.length === 0) {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  }

  const deleteReservation = (id) => {
    axios.delete(`${reservationsURL}/${id}`);
  };

  //   const showReservations = async (id) => {
  //     const response = await axios.get(`${reservationsURL}/${id}`);
  //     setInfo(response.data.data);
  //   };

  const handleDelete = (id) => {
    deleteReservation(id);
    dispatch(deleteData(id));
  };

  // return (
  //   <tr>
  //     <td>{city}</td>
  //     <td>{date}</td>
  //     {
  //     car.length !== 0
  //     && <td>{car[0].name}</td>
  //   }

  //     <td className="d-flex justify-content-around">
  //       <button className="btn btn-danger" type="button" onClick={() => handleDelete(id)}>
  //         Delete
  //       </button>

  //     </td>
  //   </tr>
  // );

  return (
    <>
      <div className="reservation-holder">
        <div className="img-holder">
          <img src={Car} alt="car" />
        </div>
        <div className="info-holder">
          <h2>Name: Car Name</h2>
          <p>City: {city}</p>
          <p>Date: {date}</p>
          <button className="btn btn-danger" type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      </div>

      <div className="reservation-holder">
      <div className="img-holder">
        <img src={Car} alt="car" />
      </div>
      <div className="info-holder">
        <h2>Name: Car Name</h2>
        <p>City: {city}</p>
        <p>Date: {date}</p>
        <button className="btn btn-danger" type="button" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
      </div>
    </>
  );
};

export default Reservation;
