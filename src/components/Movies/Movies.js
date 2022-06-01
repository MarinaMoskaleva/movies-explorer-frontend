import React from "react";
import './Movies.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Preloader from "./Preloader/Preloader";
// import NotFound from "./NotFound/NotFound";

function Movies({movies}) {
    console.log(movies);
    return (
        <div className='movies'>
            <Header isActive={true}/>
            <SearchForm />
            {/* <NotFound /> */}
            <MoviesCardList movies={movies}/>
            {/* <Preloader /> */}
            <button className="movies__even-more">Еще</button>
            <Footer />
        </div>
    );
}

export default Movies;