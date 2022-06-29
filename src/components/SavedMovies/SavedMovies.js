import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import ServerError from "../ServerError/ServerError";

function SavedMovies({movies, isOpenSavedMovies, onButtonSearchClick, loading, isDataFound, onButtonDeleteMovieClick, isDataEmpty, isSomethingWrong}) {
    return (
        <div className='saved-movies'>
            <div className='saved-movies__top'>
                <Header isActive={true}/>
                <SearchForm onClick={onButtonSearchClick} isShort={true}/>
                {isSomethingWrong && <ServerError />}
                {loading && <Preloader />}
                {isDataFound && 
                    isDataEmpty ?
                        <NotFound /> :
                        <MoviesCardList movies={movies} isOpenSavedMovies={isOpenSavedMovies} onButtonDeleteMovieClick={onButtonDeleteMovieClick}/>}
            </div>
            <Footer />
        </div>
    );
}

export default SavedMovies;