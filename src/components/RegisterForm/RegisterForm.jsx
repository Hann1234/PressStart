import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('');
  const [discordLink, setDiscordLink] = useState('');

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const classes = useStyles();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        profile_image: image,
        profile_description: description,
        user_play_style: style,
        discord_link: discordLink
      },
    });
  }; // end registerUser

  return (
    <center>
    <form className="formPanel" onSubmit={registerUser}>
      <h2 >Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter Strong Password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="profilePic">
          Profile Picture:
          <input 
            type="text"
            name="profilePic" 
            placeholder="Enter Image url" 
            value={image}
            required 
            onChange={event => setImage(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Profile Description:
          <input
            type="text"
            name="description"
            placeholder="Say something about yourself :)" 
            value={description}
            required
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Play Style:</p>
        <input 
          type="radio"
          id="Competitive" 
          name="play_style"
          value={style}
          onClick={() => setStyle('competitive')}
        />
        <label htmlFor="Competitive">Competitive</label>
        <input 
          type="radio"
          id="Casual" 
          name="play_style"
          value={style}
          onClick={() => setStyle('casual')}
        />
        <label htmlFor="Casual">Casual</label>
      </div>
      <div>
        <label htmlFor="discord">
          Discord Link:
          <input
            type="text"
            name="discord"
            placeholder="Enter Discord Invite Link" 
            value={discordLink}
            required
            onChange={(event) => setDiscordLink(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className={classes.button} type="submit" name="submit" value="Register" />
      </div>
    </form>
    </center>
  );
}

export default RegisterForm;
