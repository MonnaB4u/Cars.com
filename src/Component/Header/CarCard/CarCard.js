import React from 'react';
import car1 from '../../../carsData/image.jpg';
import './CarCard.css';

const CarCard = () => {
    return (
        <div className="col-md-3">
            <div class="card">
                <img className="cardimg" src={car1} alt="Avatar" />
                <div class ="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
                </div>
            </div>

        </div>
    );
};

export default CarCard;