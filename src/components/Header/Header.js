import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';
import './Header.css';
import Logo from '../Logo/Logo';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from '../../customHooks/defineWindowSize'

function Header({isActive}) {
    const history = useHistory();
    const [width, height] = useWindowSize();
    function onButtonSignInClick(){
        history.push('/signin');
    }
    return (
        <header className="header">
            <Logo />
            {isActive && (width > 768 ? <Navigation /> : <BurgerNavigation />)}
            <div className={`header__inter ${isActive && 'header__inter_hide'}`}>
                <Link to='/signup' href="#" className="header__text">Регистрация</Link>
                <button className="header__button-signin" onClick={onButtonSignInClick}>Войти</button>
            </div>
        </header>
    );
}

export default Header;