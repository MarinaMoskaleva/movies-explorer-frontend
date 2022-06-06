import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import './Header.css';
import Logo from '../Logo/Logo';
import { useHistory } from 'react-router-dom';

function Header({isActive}) {
    const history = useHistory();
    function onButtonSignInClick(){
        history.push('/signin');
    }
    return (
        <header className="header">
            <Logo />
            {isActive && (window.innerWidth > 1023 ? <Navigation /> : <BurgerNavigation />)}
            <div className={`header__inter ${isActive && 'header__inter_hide'}`}>
                <Link to='/signup' href="#" className="header__text">Регистрация</Link>
                <button className="header__button-signin" onClick={onButtonSignInClick}>Войти</button>
            </div>
        </header>
    );
}

export default Header;