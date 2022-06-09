import React from 'react';
import './MoviesCard.css';

function MoviesCard({movie, isOpenSavedMovies}) {
    return (
        <div className="card">
            <div className="card__desc">
                <h3 className="card__title">{movie.nameRU}</h3>
                <p className="card__duration">{movie.duration}</p>
            </div>
            <img src={movie.image} className="card__img" alt={`Постер фильма ${movie.nameRu}`}/>
            <button className={`card__button ${'card__button_saved'} ${isOpenSavedMovies && 'card__button_unsaved'}`}></button>
        </div>
    );
}

export default MoviesCard;