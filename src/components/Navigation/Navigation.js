import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink to='/movies' className='navigation__link' exact activeClassName="navigation__link_active">Фильмы</NavLink>
            <NavLink to='/saved-movies' className='navigation__link' exact activeClassName="navigation__link_active">Сохраненные фильмы</NavLink>
        </nav>
    );
}

export default Navigation;