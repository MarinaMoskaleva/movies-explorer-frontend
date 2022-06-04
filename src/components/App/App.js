import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { moviesData, savedMoviesData } from '../../utils/initialData'
import Error from '../Error/Error';
// import Navigation from '../Navigation/Navigation';

function App() {
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
            <Movies movies={moviesData}/>
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
