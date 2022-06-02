import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import Logo from '../Logo/Logo';

function Header({isActive}) {
    return (
        <header className="header">
            <Logo />
            {isActive && <Navigation />}
            <div className={`header__inter ${isActive && 'header__inter_hide'}`}>
                <a href="#" className="header__text">Регистрация</a>
                <button className="header__button-signin">Войти</button>
            </div>
            <Link to='/profile' className={`header__link-profile ${!isActive && 'header__link-profile_hide'}`}>Аккаунт</Link>
        </header>
    );
}

export default Header;