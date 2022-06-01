import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__info">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className="footer__line">
                <p className="footer__year">&copy; 2022.</p>
                <div className="footer__links">
                    <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/MarinaMoskaleva" className="footer__link">Github</a>
                    <a href="https://facebook.com/"className="footer__link">Facebook</a>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;