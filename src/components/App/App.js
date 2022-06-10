import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { savedMoviesData } from '../../utils/initialData'
import Error from '../Error/Error';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import {filterMoviesArray} from '../../utils/utils';
import { registerErrors, profileErrors, loginErrors } from '../../utils/errorMessage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDataFound, setDataFound] = useState(false);
  const [isDataEmpty, setDataEmpty] = useState(false);
  const [isSomethingWrong, setSomethingWrong] = useState(false);
  const [errorReg, setErrorReg] = useState('');
  const [errorLog, setErrorLog] = useState('');
  const [infoProf, setInfoProf] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({name:'', email:''});
  const history = useHistory();

  // function tokenCheck () {
  //   const jwt = localStorage.getItem('token');
  //   console.log('jwt',jwt);
  //   if (jwt){
  //     setLoggedIn(true);
  //     console.log('setLoggedIn', loggedIn);
      
  //     // mainApi.getContent(jwt)
  //     // .then((data) => {
  //     //   if (data){
  //     //     setCurrentUser({name: data.user.name, email: data.user.email});
  //     //     setLoggedIn(true);
  //     //   }
  //     // })
  //     // .catch((err)=>{
  //     //   console.log(err);
  //     // });
  //   }
  // }
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    console.log('useEffect jwt', jwt);
    if (jwt) {
      mainApi.getUser()
        .then((res) => {
          console.log('res', res);
          if (res) {
            setLoggedIn(true);
            history.push('/movies')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [loggedIn]);
  // useEffect(() => {
  //   const jwt = localStorage.getItem('token');
  //   console.log("поменялся loggedIn", loggedIn);
  //   console.log("localStorage", localStorage.getItem('token'));
  //   if (jwt) {
  //     console.log('Зашли');
  //     setLoggedIn(true);
  //   }
  // },[loggedIn]);

  
  
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
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
        .then((data)=>{
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
            console.log('data.token', data.token);
            console.log('localStorage.token',localStorage.getItem('token'));
            setLoggedIn(true);
            return mainApi.getUser()
            .then((data) => {
              setCurrentUser({name: data.user.name, email: data.user.email});
              history.push('/movies');
            })
            .catch((err)=>{
              console.log(err);
            });
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
              <Register onRegSubmit={handleRegister} error={errorReg}/>
            </Route>
            <Route path="/signin">
              <Login  handleLogin={handleLogin}  error={errorLog}/>
            </Route>
            <Route exact path="/">
              <Main />
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
              isDataFound={isDataFound}
              component={Movies}
            />
            <ProtectedRoute 
              path="/saved-movies"
              loggedIn={loggedIn} 
              movies={savedMoviesData}
              isOpenSavedMovies={true}
              component={SavedMovies}
            />
         </Switch>
      </div>
      </CurrentUserContext.Provider>
    
  );
}

export default App;
