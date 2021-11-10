import React from 'react';
import './LatestNew.css'

const LatestNew = (props) => {
    const {name,comment, editor,carImage,peopleImage}=props.data
    console.log(props)
    return (
      <div class="card cards">
      <img src={carImage} className="img-fluid col-md-4" class="card-img-top" alt="..."/>
      <div class="card-body col-md-3">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div> 

    );
};

export default LatestNew;