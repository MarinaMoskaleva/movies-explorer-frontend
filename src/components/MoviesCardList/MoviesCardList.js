import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies, isOpenSavedMovies=false}) {
    return (
        <div className="card-list">
            {movies.map((item) => (
                <div className="card-item" key={item._id}>
                    <MoviesCard title={item.title} duration={item.duration} img={item.imgMovie} isSaved={item.isSaved} isOpenSavedMovies={isOpenSavedMovies}/>
                </div>
            ))}
        </div>
    );
}

export default MoviesCardList;