import React from 'react';
import './NavBar.css'
import img from '../../../carsData/logo.png'

const NavBar = () => {
    return (
        <div className="navbar ml-5">

            <nav className="ml-5">
                <img src={img} alt="" />
                <a href="cSale">Cars for Sale</a>
                <a href="reviews">Resarch & Review</a>
                <a href="news">News & Videos</a>
                <a href="sell">Sell Your Car</a>
                <a href="service">Service & Repairs</a>

                <a className="signIn mr-auto" href="">Sign In/Sign Up</a>

            </nav>
        </div>
    );
};

export default NavBar;