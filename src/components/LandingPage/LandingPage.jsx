import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

//material.ui button imports:
import { makeStyles } from '@material-ui/core/styles';

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

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();
  const classes = useStyles();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <center>
      <h2>{heading}</h2>

        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className={classes.button} onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </center>
    </div>
  );
}

export default LandingPage;
