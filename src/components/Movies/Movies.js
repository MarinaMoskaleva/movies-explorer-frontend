import React, { useEffect, useState } from "react";
import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import NotFound from "./NotFound/NotFound";

function Movies({movies, onButtonSearchClick, loading, isDataFound}) {
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
        <div className='movies'>
            <Header isActive={true}/>
            <SearchForm onClick={onButtonSearchClick}/>
            {loading && <Preloader />}
            {isDataFound && isDataEmpty && <NotFound />}
            {isDataFound && !isDataEmpty && <MoviesCardList movies={movies}/>}
            {isDataFound && !isDataEmpty && <button className="movies__even-more">Еще</button>}
            <Footer />
        </div>
    );
}

export default Movies;