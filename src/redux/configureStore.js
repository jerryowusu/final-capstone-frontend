import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import carReducers from './Cars/cars';
import reservationReducers from './Reservations/reservation';
import userReducer from './user/user';

const reducers = combineReducers({
  carReducers, userReducer, allReservation: reservationReducers,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
