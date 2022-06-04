import React from "react";
import './Menu.css'
import { NavLink } from 'react-router-dom';

function Menu({isOpen, onClose}){

  return (
    <div className={`menu ${isOpen && 'menu_opened'}`}>
      <div className="menu__container">
        <button className="menu__close-button" onClick={onClose} type="button" aria-label="Close"></button>
        <div className='menu__links'>
            <nav className='menu__nav'>
                <NavLink to='/' className='menu__link' exact activeClassName="menu__link_active" onClick={onClose}>Главная</NavLink>
                <NavLink to='/movies' className='menu__link' exact activeClassName="menu__link_active" onClick={onClose}>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='menu__link' exact activeClassName="menu__link_active" onClick={onClose}>Сохраненные фильмы</NavLink>
            </nav>
                <NavLink to='/profile' className='menu__link-profile' onClick={onClose}>Аккаунт</NavLink>
            </div>
      </div>
    </div>
  )
}

export default Menu;