import React from 'react';
import DropDown from '../HomePage/DropDown';
import './DropDownMian.css'
import DropDownTwo from './DropDownTwo';

const DropDownMian = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm d1">
                   <DropDown></DropDown>
                </div>
                <div class="col-sm">
                    <DropDownTwo></DropDownTwo>
                </div>
                
            </div>
        </div>
    );
};

export default DropDownMian;