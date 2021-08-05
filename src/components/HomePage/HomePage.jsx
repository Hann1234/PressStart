import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (
    <div className="container">
      <h2>Hello there, {user.username}! Press START to find your squad!</h2>
      <p>Your ID is: {user.id}</p>
      <button className="btn" onClick={ () => history.push('/gameselect')}>START</button>
      <button className="btn" onClick={ () => history.push('/timeselect')}>PROFILE</button>
      <button className="btn" onClick={ () => history.push('/squadselect')}>SQUAD</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
