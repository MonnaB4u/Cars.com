import React from 'react';
import './CarNews.css'
import img from '../../../carsData/carnews.jpeg'

const CarNews = (props) => {
    const {name,details,image} = props.data;
    return (               
                <div className="row m-2 p-2 border col-md-3 new">
                    <div className="col-sm ">
                        <h4 className="lorem2">Find Your match</h4>
                        <h4 className="lorem2">faster</h4>
                        <p className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, ratione?</p>
                        <a className="lorem" href="">Download Our app</a>
                    </div>
                    <div className="col-sm">
                            <img className="img-fluid img" src={img} alt="" />
                    </div>
                </div>
    );
};

export default CarNews;