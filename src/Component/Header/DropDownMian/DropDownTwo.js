import React from 'react';

const DropDownTwo = () => {
    return (
        <div className="container">
            <h3 className="font-weight-bold">Shop by What matters Most</h3>
            <small>From cargo space to tech, tell us what you like and well</small>
            <br />
            <small>find you cars to love</small>
            <br />
           <div class="dropdown">
                
                <button class="dropbtn"><small>new and used</small> <br /> Dropdown</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div class="dropdown">
                
                <button class="dropbtn"><small>new and used</small> <br /> Dropdown</button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> 
        </div>
    );
};

export default DropDownTwo;