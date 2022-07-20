/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect } from 'react';
import './reservations.scss';
import { useDispatch, useSelector } from 'react-redux';
import { reservationsURL } from '../../logics/urls';
import { setCars, setData } from '../../redux/Reservations/reservation';
import Reservation from './Reservation';
import { fetchCars } from './AddReservation';

const ReservationsList = () => {
  const reservations = useSelector((state) => state.allReservation.reservation);
  const cars = useSelector((state) => state.allReservation.cars);

  const dispatch = useDispatch();

  const fetchReservations = async () => {
    const response = await axios.get(reservationsURL);
    dispatch(setData(response.data.data));
  };

  const handleFetchCars = () => {
    fetchCars().then((response) => {
      dispatch(setCars(response.data));
    });
  };
  useEffect(() => {
    fetchReservations();
    handleFetchCars();
  }, []);

  return (
    <section className="reservation-list">
      {
            reservations.map((reservation) => {
              const {
                car_id, id, city, date,
              } = reservation;
              const { image_url } = cars;
              return (
                <Reservation
                  key={reservation.id}
                  id={id}
                  city={city}
                  date={date}
                  carId={car_id}
                  image={image_url}
                />
              );
            })
}
    </section>
  );
};

export default ReservationsList;
