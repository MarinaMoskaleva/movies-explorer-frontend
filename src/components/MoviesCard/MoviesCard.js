import React from 'react';
import './MoviesCard.css';

function MoviesCard({movie, isOpenSavedMovies, onButtonSaveMovieClick, onButtonDeleteMovieClick}) {
    function handleButtonClick(){
        isOpenSavedMovies ? onButtonDeleteMovieClick(movie._id) :
            movie.isSaved ?  onButtonDeleteMovieClick(movie._id):
                onButtonSaveMovieClick({
                    country: movie.country,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: movie.image,
                    trailerLink: movie.trailerLink,
                    nameRU: movie.nameRU,
                    nameEN: movie.nameEN,
                    thumbnail: movie.thumbnail,
                    movieId: movie.movieId
                });
    }
    return (
        <div className="card">
            <div className="card__desc">
                <h3 className="card__title">{movie.nameRU}</h3>
                <p className="card__duration">{movie.duration}</p>
            </div>
            <a className="card__link" href={movie.trailerLink} target="_blank" rel="noreferrer">
                <img src={movie.image} className="card__img" alt={`Постер фильма ${movie.nameRu}`}/>
            </a>
            <button onClick={handleButtonClick} className={`card__button ${movie.isSaved && 'card__button_saved'} ${isOpenSavedMovies && 'card__button_unsaved'}`}></button>
        </div>
    );
}

export default MoviesCard;