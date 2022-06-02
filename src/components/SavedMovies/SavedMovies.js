import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({movies, isOpenSavedMovies}) {

    return (
        <div className='saved-movies'>
            <Header isActive={true}/>
            <MoviesCardList movies={movies} isOpenSavedMovies={isOpenSavedMovies}/>
            <Footer />
        </div>
    );
}

export default SavedMovies;