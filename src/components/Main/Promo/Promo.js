import React from 'react';
import './Promo.css';

function Promo({handleClick}) {
  function handleButtonClick() {
    handleClick();
  }
    return (
        <div className="promo">
            <div className="promo__info">
                <div className="promo__text">
                    <h1 className="promo__text-title">Учебный проект студента факультета Веб-разработки.</h1>
                    <p className="promo__text-paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <div className="promo__logo"></div>
            </div>
            <button className="promo__button" onClick={handleButtonClick}>Узнать больше</button>
        </div>
    );
}

export default Promo;