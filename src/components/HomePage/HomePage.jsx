import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

//material.ui button imports:
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #910000 20%, #ff0000 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className="container">
      <h2>Hello there, {user.username}! Press START to find your squad!</h2>
      <Button className={classes.button} onClick={ () => history.push('/gameselect')}>START</Button>
      <Button className={classes.button} onClick={ () => history.push('/profile')}>PROFILE</Button>
      <Button className={classes.button} onClick={ () => history.push('/squadlist')}>SQUAD</Button>
      <LogOutButton className={classes.button} />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
