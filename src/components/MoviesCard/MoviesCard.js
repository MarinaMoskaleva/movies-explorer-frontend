import React from 'react';
import './MoviesCard.css';

function MoviesCard({title, duration, img, isSaved, isOpenSavedMovies}) {
    return (
        <div className="card">
            <div className="card__desc">
                <h3 className="card__title">{title}</h3>
                <p className="card__duration">{duration}</p>
            </div>
            <img src={img} className="card__img" alt={`Постер фильма ${title}`}/>
            <button className={`card__button ${!isSaved && 'card__button_saved'} ${isOpenSavedMovies && 'card__button_unsaved'}`}></button>
        </div>
    );
}

export default MoviesCard;