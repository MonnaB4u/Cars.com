import React from 'react';
import CarCardMain from '../CarCard/CarCardMain';
import TEXtCAR from '../CarCard/TEXtCAR';
import CarNews from '../CarNews/CarNews';
import CarNewsMain from '../CarNews/CarNewsMain';
import DropDownMian from '../DropDownMian/DropDownMian';
import HomePage from '../HomePage/HomePage';
import Latest from '../LatestNew/Latest';
import LatestNewMain from '../LatestNew/LatestNewMain';
import NavBar from '../NavBar/NavBar';
import './HeaderMain.css';


const HeaderMain = () => {
    return (
        <div className>
            <NavBar></NavBar>
            <div className="container">
            <HomePage></HomePage>
            <DropDownMian></DropDownMian>
            <TEXtCAR></TEXtCAR>
            <CarCardMain></CarCardMain>
            </div>
           <CarNewsMain></CarNewsMain>
           <Latest></Latest>
            
        </div>
    );
};

export default HeaderMain;