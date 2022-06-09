import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, isOpenSavedMovies=false}) {
    return (
        <div className="card-list">
            {movies.map((item) => (
                <div className="card-item" key={item.movieId}>
                    <MoviesCard movie={item} isOpenSavedMovies={isOpenSavedMovies}/>
                </div>
            ))}
        </div>
    );
}

export default MoviesCardList;