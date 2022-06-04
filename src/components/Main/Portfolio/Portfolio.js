import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <a href='https://github.com/MarinaMoskaleva/how-to-learn' target="_blank" rel="noreferrer" className="portfolio__link">
                <p className="portfolio__text">Статичный сайт</p>
                <div className="portfolio__ico"></div>
            </a>
            <a href='https://github.com/MarinaMoskaleva/russian-travel' target="_blank" rel="noreferrer" className="portfolio__link">
                <p className="portfolio__text">Адаптивный сайт</p>
                <div className="portfolio__ico"></div>
            </a>
            <a href='https://github.com/MarinaMoskaleva/react-mesto-api-full' target="_blank" rel="noreferrer" className="portfolio__link">
                <p className="portfolio__text">Одностраничное приложение</p>
                <div className="portfolio__ico"></div>
            </a>
        </div>
    );
}

export default Portfolio;