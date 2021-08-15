import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './HomePage.css';

//material.ui button imports:
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//material.ui badge imports:
import Badge from '@material-ui/core/Badge';

//animate.css:
import "animate.css"

const useStyles = makeStyles({
  button: {
    // fontFamily: 'Press Start 2P',
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
  const count = useSelector((store) => store.inviteCount);

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_INVITE_COUNT' });
}, []);

  return (
    <center>
      <style>{
            `body {
              background-image: url('https://thumbs.gfycat.com/ImpressionableWeeCow-max-1mb.gif'), url('https://thumbs.gfycat.com/ImpressionableWeeCow-max-1mb.gif');
              background-repeat: no-repeat, no-repeat;
              background-attachment: fixed, fixed;
              background-position: left, right;
            }`}
        </style>
    <div className="container" class="animate__animated animate__zoomInUp">
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <h2>Hello there, {user.username}!</h2>
      </Grid>
      <Grid item xs={12}>
      <h2>Press</h2>
      </Grid>
      <Grid item xs={12}>
        <div class="animate__animated animate__pulse animate__infinite">
        <Button className={classes.button} onClick={ () => history.push('/gameselect')}>START</Button>
        </div>
      </Grid>
      <Grid item xs={12}>
        <h2>to find your squad!</h2>
      </Grid>
      <Grid item xs={12}>
      <Button className={classes.button} onClick={ () => history.push('/profile')}>PROFILE</Button>
      </Grid>
      <Grid item xs={12}>
      <Badge badgeContent={count.length === 0 ? 0 : Number(count[0].count)} color="primary">
      <Button className={classes.button} onClick={ () => history.push('/squadlist')}>SQUAD</Button>
      </Badge>
      </Grid>
      <Grid item xs={12}>
      <LogOutButton className={classes.button} />
      </Grid>
    </Grid>
    </div>
    </center>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
