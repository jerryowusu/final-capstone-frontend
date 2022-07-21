import React from 'react';

const DeleteCar = () => (
  <section>
    <h1 className="text-center">Delete Cars</h1>
    <ul className="cars-container">
      <li className="card-car">
        <img className="car-image" src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg" alt="car_image" width="100px" />
        <div className="car-detail">
          <span className="car-title" />
          <button className="delete-button" type="button"> Delete</button>
        </div>
      </li>
    </ul>
  </section>
);

export default DeleteCar;
