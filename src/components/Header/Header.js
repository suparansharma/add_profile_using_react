import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'
const Header = () => {
    return (
        <div className="header"> 
            <h1>Project start from here</h1>
            <img src={logo} alt="" />
            <nav>
                <a href="">All Suggest</a>
                <a href="">Select People</a>
                <a href="">ALL</a>
                </nav>
        </div>
        
    );
};

export default Header;