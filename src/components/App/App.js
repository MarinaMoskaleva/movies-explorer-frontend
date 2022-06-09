import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { savedMoviesData } from '../../utils/initialData'
import Error from '../Error/Error';
import moviesApi from '../../utils/MoviesApi';
import {filterMoviesArray} from '../../utils/utils';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDataFound, setDataFound] = useState(false);
  const [isDataEmpty, setDataEmpty] = useState(false);
  const [isSomethingWrong, setSomethingWrong] = useState(false);
  
  function formMoviesData(MoviesArr){
    return MoviesArr.map(item => {
      return {
        country: item.country,
        director: item.director,
        duration: item.duration,
        year: item.year,
        description: item.description,
        image: 'https://api.nomoreparties.co'+item.image.url,
        trailerLink: item.trailerLink,
        nameRU: item.nameRU,
        nameEN: item.nameEN,
        thumbnail: item.thumbnail,
        movieId: item.id
      }
    })
  }
  function getMoviesData(keywordsData, shortData){
    setLoading(true);
    setDataEmpty(false);
    setDataFound(false);
    moviesApi.getMovies()
    .then(moviesData=>{
      setLoading(false);
      setDataFound(true);
      if (moviesData.length === 0){
        setDataEmpty(true);
      } else {
        setMovies(filterMoviesArray(shortData, formMoviesData(moviesData), keywordsData));
      }
      
    })
    .catch((err)=>{
      setLoading(false);
      setDataFound(false);
      setSomethingWrong(true);
      console.log(err);
    });
  }

  return (
    <div className='root'>
        <Switch>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/movies" >
            <Movies movies={movies} onButtonSearchClick={getMoviesData} loading={loading} isDataFound={isDataFound}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies movies={savedMoviesData} isOpenSavedMovies={true}/>
          </Route>
          <Route path="/err">
            <Error />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
