import React, { useState } from 'react';
import Car from './Car';
import CarNews from './CarNews';
import './CarNews.css'

const CarNewsMain = () => {
    const [data] = useState(Car)
    return (
        <div className="container colo mt-5">

            <div className="row m-2 p-2 justify-content-center">

                {
                    data.map(data => <CarNews data={data}></CarNews>)
                }

            </div>

        </div>


    );
};

export default CarNewsMain;