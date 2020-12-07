import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png'

const Header = () =>  {
    return (
        <header className="header">
            <img src={logo} alt=""/>
        </header>
    )
}

export default Header;