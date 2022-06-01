import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({isActive}) {
    console.log(isActive);
    return (
        <header className="header">
            <a href="#" className="header__logo"></a>
            {isActive && <Navigation />}
            <div className={`header__inter ${isActive && 'header__inter_hide'}`}>
                <a href="#" className="header__text">Регистрация</a>
                <button className="header__button-signin">Войти</button>
            </div>
            <button className={`header__button-profile ${!isActive && 'header__button-profile_hide'}`}>Аккаунт</button>
        </header>
    );
}

export default Header;