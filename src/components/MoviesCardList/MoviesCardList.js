import React, { useEffect, useState, useLayoutEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MAX_NUMBER_OF_CARDS_1280, ADDED_NUMBER_OF_CARDS_1280 } from '../../utils/constants';

function MoviesCardList({movies, isOpenSavedMovies=false, onButtonSaveMovieClick, onButtonDeleteMovieClick}) {
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
          function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        console.log('size', size);
        return size;
    }
    
    const [width, height] = useWindowSize();
    useEffect(() => {
        if (width > 1279){
            console.log("Ширина 1280 или больше")
        } else if (width > 767) {
            console.log("Ширина 768 или больше")
        } else {
            console.log("Ширина 320 или больше")
        }

    },[width])


    return (
        <div className="card-list">
            {movies.map((item) => (
                <div className="card-item" key={item.movieId}>
                    <MoviesCard movie={item} isOpenSavedMovies={isOpenSavedMovies} onButtonSaveMovieClick={onButtonSaveMovieClick} onButtonDeleteMovieClick={onButtonDeleteMovieClick}/>
                </div>
            ))}
        </div>
    );
}

export default MoviesCardList;