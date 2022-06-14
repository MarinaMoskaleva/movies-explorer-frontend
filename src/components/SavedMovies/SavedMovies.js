import React, { useEffect, useState } from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function SavedMovies({movies, isOpenSavedMovies, onButtonSearchClick, loading, isDataFound, onButtonDeleteMovieClick}) {
    console.log('movies', movies);
    const [isDataEmpty, setDataEmpty] = useState(false);
    useEffect(() => {
        console.log('isDataFound', isDataFound);
        if (movies.length === 0) {
            setDataEmpty(true);
        } else {
            setDataEmpty(false);
        }
    }, [movies]);
    return (
        <div className='saved-movies'>
            <Header isActive={true}/>
            <SearchForm onClick={onButtonSearchClick}/>
            {isDataFound && isDataEmpty && <NotFound />}
            {loading && <Preloader />}
            {isDataFound && !isDataEmpty &&  <MoviesCardList movies={movies} isOpenSavedMovies={isOpenSavedMovies} onButtonDeleteMovieClick={onButtonDeleteMovieClick}/>}
            <Footer />
        </div>
    );
}

export default SavedMovies;