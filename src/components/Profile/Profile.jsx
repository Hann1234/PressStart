import React from 'react';
import { useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

import ProfileEdit from '../ProfileEdit/ProfileEdit';

//material.ui card inputs:
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//animate.css:
import "animate.css"

//material.ui card const:
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  button: {
      background: 'linear-gradient(45deg, #910000 20%, #ff0000 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
}));

function Profile() {
  // this component displays user profile information
  const user = useSelector((store) => store.user);
  const history = useHistory();
  // const dispatch = useDispatch();
  
//   useEffect(() => {
//     dispatch({ type: 'FETCH_USER' });
// }, []);

const classes = useStyles();


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
    <div className="container">
        <h2>CHOOSE YOUR CHARACTER</h2>
        <div class="animate__animated animate__fadeInDown">
        <Grid container spacing={3} justifyContent="center">
          <Grid item style={{display: "flex"}}>
            <Card className={classes.root}>
              <CardHeader
                  avatar={
                  <Avatar aria-label="profilepic" className={classes.avatar} src={user.profile_image} alt={user.username} />
                  }
                  titleTypographyProps={{variant:'h4' }}
                  title={user.username}
              />
              <CardContent>
              <Typography paragraph>Profile Description:</Typography>
              <Typography paragraph>
              {user.profile_description}
              </Typography>
              <Typography paragraph>
              User Play Style: {user.user_play_style}
              </Typography>
              Discord Link: {user.discord_link}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <ProfileEdit />
        <br></br>
        <Button className={classes.button} onClick={ () => history.push('/')}>RETURN</Button>
        </div>
    </div>
    </center>
  );
}

export default Profile;

{/* <div className="container">
    
    <h2>CHOOSE A CHARACTER</h2>
    <h3>{user.username}</h3>
    <img src={user.profile_image} alt={user.username}/>
    <p>{user.profile_description}</p>
    <p>PLAY STYLE: {user.user_play_style}</p>
    <p>ACTIVE GAME: {user.active_game}</p>
    <p>RANK: {user.active_game_rank}</p>
    <p>DISCORD LINK: {user.discord_link}</p>
    <ProfileEdit />
    <Button className={classes.button} onClick={ () => history.push('/')}>RETURN</Button>
</div> */}