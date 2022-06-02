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
          {/* <Navigation /> */}
            <Movies movies={moviesData}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies movies={savedMoviesData} isOpenSavedMovies={true}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
