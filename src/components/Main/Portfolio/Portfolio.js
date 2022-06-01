import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <a href='#' className="portfolio__link">
                <p className="portfolio__text">Статичный сайт</p>
                <div className="portfolio__ico"></div>
            </a>
            <a href='#' className="portfolio__link">
                <p className="portfolio__text">Адаптивный сайт</p>
                <div className="portfolio__ico"></div>
            </a>
            <a href='#' className="portfolio__link">
                <p className="portfolio__text">Одностраничное приложение</p>
                <div className="portfolio__ico"></div>
            </a>
        </div>
    );
}

export default Portfolio;