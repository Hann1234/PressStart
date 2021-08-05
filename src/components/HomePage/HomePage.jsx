import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Hello there, {user.username}! Press START to find your squad!</h2>
      <p>Your ID is: {user.id}</p>
      <button className="btn">START</button>
      <button className="btn">PROFILE</button>
      <button className="btn">SQUAD</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
