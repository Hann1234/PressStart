import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

//material.ui button imports:
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//animate.css:
import "animate.css"

const useStyles = makeStyles({
  button: {
    fontFamily: 'Press Start 2P',
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
    <center>
    <div className="container">
      <h2>Hello there, {user.username}! Press START to find your squad!</h2>
      <Grid container spacing={3}>
      <Grid item>
        <div class="animate__animated animate__pulse animate__infinite">
        <Button className={classes.button} onClick={ () => history.push('/gameselect')}>START</Button>
        </div>
      </Grid>
      <Grid item>
      <Button className={classes.button} onClick={ () => history.push('/profile')}>PROFILE</Button>
      </Grid>
      <Grid item>
      <Button className={classes.button} onClick={ () => history.push('/squadlist')}>SQUAD</Button>
      </Grid>
      <Grid item>
      <LogOutButton className={classes.button} />
      </Grid>
    </Grid>
    </div>
    </center>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
