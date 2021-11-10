import React from 'react';
import CarCard from './CarCard';

const CarCardMain = () => {
    return (
        <div className="container">
            <div className="row">
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                <CarCard></CarCard>
                {/* <CarCard></CarCard> */}

            </div>

        </div>
    );
};

export default CarCardMain;