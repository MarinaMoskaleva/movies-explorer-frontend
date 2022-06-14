import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Error from '../Error/Error';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { filterMoviesArray, markSavedMovies } from '../../utils/utils';
import { registerErrors, profileErrors, loginErrors } from '../../utils/errorMessage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const [movies, setMovies] = useState([]);
  const [savedMoviesByKeywords, setSavedMoviesByKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMovieFound, setMovieFound] = useState(false);
  const [isSavedMovieFound, setSavedMovieFound] = useState(false);
  const [isDataEmpty, setDataEmpty] = useState(false);
  const [isSomethingWrong, setSomethingWrong] = useState(false);
  const [errorReg, setErrorReg] = useState('');
  const [errorLog, setErrorLog] = useState('');
  const [infoProf, setInfoProf] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({name:'', email:''});
  const [currentSavedMovies, setCurrentSavedMovies] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [isShortFilmsSuitable, setShortFilmsSuitable] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      Promise.all([mainApi.getUser(), mainApi.getSavedMovies()])
      .then(([userData, savMoviesData])=>{
        if (userData){
          setLoggedIn(true);
          setCurrentUser(userData.user);
          setCurrentSavedMovies(savMoviesData.movies);
          history.push('/movies')
        }
        })
        .catch((err)=>{
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
   if (isMovieFound) {
      setMovies(markSavedMovies(movies, currentSavedMovies));
    }
    if (isSavedMovieFound) {
      setSavedMoviesByKeywords(filterMoviesArray(isShortFilmsSuitable, currentSavedMovies, keywords));
    }
  }, [currentSavedMovies]);
  
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
        thumbnail: 'https://api.nomoreparties.co'+item.image.formats.thumbnail.url,
        movieId: item.id,
        isSaved: false
      }
    })
  }
  function getMoviesData(keywordsData, shortData){
    setLoading(true);
    setDataEmpty(false);
    setMovieFound(false);
    moviesApi.getMovies()
    .then(moviesData=>{
      setLoading(false);
      setMovieFound(true);
      if (moviesData.length === 0){
        setDataEmpty(true);
      } else {
        setMovies(filterMoviesArray(shortData, formMoviesData(moviesData), keywordsData, currentSavedMovies));
      }
      
    })
    .catch((err)=>{
      setLoading(false);
      setMovieFound(false);
      setSomethingWrong(true);
      console.log(err);
    });
  }
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
        .then(()=>{
          handleLogin(email, password);
        })
        .catch((err)=>{
          if (err.statusCode === 409){
            setErrorReg(registerErrors.emailError);
          } else {
            setErrorReg(registerErrors.genError);
          }
        });
  }
  function handleLogin(email, password){
    mainApi.login(email, password)
        .then((data)=>{
          if (data.token){
            localStorage.setItem('token', data.token);
            setLoggedIn(true);
          }
        })
        .catch((err)=>{
          if (err.statusCode === 401) {
            setErrorLog(loginErrors.wrongData);
          } else if (err.statusCode === 400) {
            setErrorLog(loginErrors.invalidToken);
          } else {
            setErrorLog(loginErrors.incorrectToken);
          }
        });
  }
  function handleProfile({name, email}){
    mainApi.patchUserData({name, email})
        .then((data)=>{
          setCurrentUser({name: data.user.name, email: data.user.email});
          setInfoProf({type: "success", text: "Профиль успешно обновлен"});
        })
        .catch((err)=>{
          if (err.statusCode === 409){
            setInfoProf({type: "error", text: profileErrors.emailError});
          } else {
            setInfoProf({type: "error", text: profileErrors.genError});
          }
        });
  }
  function handleProfileSignOut(){
    if (localStorage.getItem('token')){
      localStorage.removeItem('token');
      history.push('/');
      setLoggedIn(false);
    }
  }
  function handleButtonSaveMovie(data) {
    mainApi.postSavedMovie(data)
        .then((data)=>{
          setCurrentSavedMovies([data.movie, ...currentSavedMovies]);
        })
        .catch((err)=>{
          console.log(err);
        });
  }
  function handleButtonDeleteMovie(movieId) {
    console.log('delete', movieId);
    mainApi.deleteMovie(movieId)
        .then((data)=>{
          console.log('delete data', data);
          setCurrentSavedMovies(currentSavedMovies.filter(item => item.movieId !== data.movieId));
        })
        .catch((err)=>{
          console.log(err);
        });
  }

  function getSavedMoviesData(keywordsData, shortData){
    console.log('getSavedMoviesData')
    setLoading(true);
    setDataEmpty(false);
    setSavedMovieFound(false);
    setKeywords(keywordsData);
    setShortFilmsSuitable(shortData);
    mainApi.getSavedMovies()
    .then(moviesData=>{
      console.log('savedMoviesData', moviesData);
      setLoading(false);
      setSavedMovieFound(true);
      if (moviesData.length === 0){
        setDataEmpty(true);
      } else {
        setSavedMoviesByKeywords(filterMoviesArray(shortData, moviesData.movies, keywordsData));
      }
      
    })
    .catch((err)=>{
      setLoading(false);
      setSavedMovieFound(false);
      setSomethingWrong(true);
      console.log(err);
    });
  }

  function clearErrorMessages(){
    !(Object.keys(infoProf).length === 0) && setInfoProf({});
    errorReg && setErrorReg('');
    errorLog && setErrorLog('');
  };


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='root' onClick={clearErrorMessages}>
        <Switch>
            <Route path="/signup">
              {loggedIn ? <Redirect to='/movies'/> : <Register onRegSubmit={handleRegister} error={errorReg}/>}
            </Route>
            <Route path="/signin">
              {loggedIn ? <Redirect to='/movies'/> : <Login handleLogin={handleLogin} error={errorLog}/>}
            </Route>
            <Route exact path="/">
              <Main loggedIn={loggedIn}/>
            </Route>
            <ProtectedRoute 
              path="/profile"
              loggedIn={loggedIn}
              handleProfile={handleProfile}
              info={infoProf}
              handleSignOut={handleProfileSignOut}
              component={Profile}
            />
            <ProtectedRoute 
              path="/movies"
              loggedIn={loggedIn}
              movies={movies}
              onButtonSearchClick={getMoviesData}
              loading={loading}
              isDataFound={isMovieFound}
              onButtonSaveMovieClick={handleButtonSaveMovie}
              onButtonDeleteMovieClick={handleButtonDeleteMovie}
              component={Movies}
            />
            <ProtectedRoute 
              path="/saved-movies"
              loggedIn={loggedIn} 
              movies={savedMoviesByKeywords}
              onButtonSearchClick={getSavedMoviesData}
              loading={loading}
              isDataFound={isMovieFound}
              onButtonDeleteMovieClick={handleButtonDeleteMovie}
              isOpenSavedMovies={true}
              component={SavedMovies}
            />
         </Switch>
      </div>
      </CurrentUserContext.Provider>
    
  );
}

export default App;
