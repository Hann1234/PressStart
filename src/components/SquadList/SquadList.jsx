import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns'


//material.ui card imports:
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

//material.ui button imports:
import Button from '@material-ui/core/Button';

//animate.css:
import "animate.css"

//import sweetalert2:
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
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


function SquadList() {
    // The Squad List component displays players that the user has accepted matches with
    const userInvites = useSelector((store) => store.matches.userMatches);
    const otherInvites = useSelector((store) => store.matches.otherMatches);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log('userInvites', userInvites);
    console.log('otherInvites', otherInvites);


    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MATCHES'
            });
    }, []);

    const handleDelete = (usersID) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ 
                    type: 'DELETE_MATCH',
                    payload: usersID
                    });
                    console.log('inside dispatch', usersID);
            }
          })
        
     };

     const handleAccept = (usersID) => {
         dispatch({
             type: 'ACCEPT_INVITE',
             payload: {
             usersID: usersID
             }
         });
         console.log('inside ACCEPT_INVITE dispatch', usersID);
     };

     //material.ui card consts:
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false); //can we rotate with this still?
    const [expandedId, setExpandedId] = React.useState(-1);
    const [expandedId2, setExpandedId2] = React.useState(-1);
    const [expandedId3, setExpandedId3] = React.useState(-1);
    const [expandedId4, setExpandedId4] = React.useState(-1);

    const handleExpandClick = (i) => {
        setExpandedId(expandedId === i ? -1 : i);
    };

    const handleExpandClick2 = (i) => {
        setExpandedId2(expandedId2 === i ? -1 : i);
    };

    const handleExpandClick3 = (i) => {
        setExpandedId3(expandedId3 === i ? -1 : i);
    };

    const handleExpandClick4 = (i) => {
        setExpandedId4(expandedId4 === i ? -1 : i);
    };

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
        <h2>MANAGE SQUAD</h2>
        <Button className={classes.button} onClick={() => history.push('/')}>RETURN HOME</Button>
        <section className="squad">
            <h2>CURRENT SQUAD</h2>
            <div class="animate__animated animate__fadeInDown">
            <Grid container spacing={3} justifyContent="center">
            {userInvites.map((users, i) => {
                return (users.invite_status === 'accepted' &&
                <Grid item style={{display: "flex"}} key={i}>
                    <div>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="profilepic" className={classes.avatar} src={users.profile_image} alt={users.username} />
                            }
                            titleTypographyProps={{variant:'h5' }}
                            title={users.username}
                            subheader={users.game_title}
                        />
                        <CardActions disableSpacing>
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedId === i,
                            })}
                            onClick={() => {handleExpandClick(i)}}
                            aria-expanded={expandedId === i}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Scheduled Time: {format(parseISO(users.matched_time), 'MMM d, h:mmaa')}</Typography>
                            <Typography paragraph>Profile Description:</Typography>
                            <Typography paragraph>
                            {users.profile_description}
                            </Typography>
                            <Typography paragraph>
                            Play Style: {users.user_play_style}
                            </Typography>
                            <Typography paragraph>
                            Discord Link: {users.discord_link}
                            </Typography>
                            <Button className={classes.button} onClick={() => handleDelete(users.id)}>REMOVE FROM SQUAD</Button>
                            </CardContent>
                        </Collapse>
                    </Card>
                    </div>
                </Grid>
                );
            })}
        </Grid>
        <Grid container spacing={3} justifyContent="center">
            {otherInvites.map((users, i) => {
                return (users.invite_status === 'accepted' &&
                <Grid item style={{display: "flex"}} key={i}>
                    <div>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="profilepic" className={classes.avatar} src={users.profile_image} alt={users.username} />
                            }
                            titleTypographyProps={{variant:'h5' }}
                            title={users.username}
                            subheader={users.game_title}
                        />
                        <CardActions disableSpacing>
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedId2 === i,
                            })}
                            onClick={() => {handleExpandClick2(i)}}
                            aria-expanded={expandedId2 === i}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expandedId2 === i} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Scheduled Time: {format(parseISO(users.matched_time), 'MMM d, h:mmaa')}</Typography>
                            <Typography paragraph>Profile Description:</Typography>
                            <Typography paragraph>
                            {users.profile_description}
                            </Typography>
                            <Typography paragraph>
                            Play Style: {users.user_play_style}
                            </Typography>
                            <Typography paragraph>
                            Discord Link: {users.discord_link}
                            </Typography>
                            <Button className={classes.button} onClick={() => handleDelete(users.id)}>REMOVE FROM SQUAD</Button>
                            </CardContent>
                        </Collapse>
                    </Card>
                    </div>
                </Grid>
                );
            })}
        </Grid>
        </div>
            </section>
            <section className="pendingInvites">
            <h2>RECEIVED INVITES</h2>
            <div class="animate__animated animate__fadeInDown">
            <Grid container spacing={3} justifyContent="center">
            {otherInvites.map((users, i) => {
                return (users.invite_status === 'pending' &&
                <Grid item style={{display: "flex"}} key={i}>
                    <div>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="profilepic" className={classes.avatar} src={users.profile_image} alt={users.username} />
                            }
                            titleTypographyProps={{variant:'h5' }}
                            title={users.username}
                            subheader={users.game_title}
                        />
                        <CardActions disableSpacing>
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedId3 === i,
                            })}
                            onClick={() => {handleExpandClick3(i)}}
                            aria-expanded={expandedId3 === i}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expandedId3 === i} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Scheduled Time: {format(parseISO(users.matched_time), 'MMM d, h:mmaa')}</Typography>
                            <Typography paragraph>Profile Description:</Typography>
                            <Typography paragraph>
                            {users.profile_description}
                            </Typography>
                            <Typography paragraph>
                            Play Style: {users.user_play_style}
                            </Typography>
                            <div class="animate__animated animate__pulse animate__infinite">
                            <Button className={classes.button} onClick={() => handleAccept(users.id)}>ACCEPT INVITE</Button>
                            </div>
                            <br></br>
                            <Button className={classes.button} onClick={() => handleDelete(users.id)}>DECLINE INVITE</Button>
                            </CardContent>
                        </Collapse>
                    </Card>
                    </div>
                </Grid>
                );
            })}
        </Grid>
        </div>
            </section>
            <section className="sentInvites">
            <h2>SENT INVITES</h2>
            <div class="animate__animated animate__fadeInDown">
            <Grid container spacing={3} justifyContent="center">
            {userInvites.map((users, i) => {
                return (users.invite_status === 'pending' &&
                <Grid item style={{display: "flex"}} key={i}>
                    <div>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="profilepic" className={classes.avatar} src={users.profile_image} alt={users.username} />
                            }
                            titleTypographyProps={{variant:'h5' }}
                            title={users.username}
                            subheader={users.game_title}
                        />
                        <CardActions disableSpacing>
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedId4 === i,
                            })}
                            onClick={() => {handleExpandClick4(i)}}
                            aria-expanded={expandedId4 === i}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expandedId4 === i} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Scheduled Time: {format(parseISO(users.matched_time), 'MMM d, h:mmaa')}</Typography>
                            <Typography paragraph>Profile Description:</Typography>
                            <Typography paragraph>
                            {users.profile_description}
                            </Typography>
                            <Typography paragraph>
                            Play Style: {users.user_play_style}
                            </Typography>
                            <Button className={classes.button} onClick={() => handleDelete(users.id)}>CANCEL INVITE</Button>
                            </CardContent>
                        </Collapse>
                    </Card>
                    </div>
                </Grid>
                );
            })}
        </Grid>
        </div>
            </section>
    </div>
    </center>
    );
}

export default SquadList;

// conditionally render pending requests

{/* <div className="container">
<h1>MANAGE SQUAD</h1>
<button className="btn" onClick={() => history.push('/')}>RETURN HOME</button>
<section className="squad">
    <h2>CURRENT SQUAD</h2>
        {userInvites.map(users => {
            return (users.invite_status === 'accepted' && 
                <div key={users.id} >
                    <h2>{users.username}</h2>
                    <h2>{users.game_title}</h2>
                    <h3>{users.matched_time}</h3>
                    <img src={users.profile_image} alt={users.username}/>
                    <p>{users.profile_description}</p>
                    <p>{users.user_play_style}</p>
                    <button className="btn" onClick={() => handleDelete(users.id)}>REMOVE FROM SQUAD</button>
                </div>
            )
        })} 
        {otherInvites.map(users => {
            return (users.invite_status === 'accepted' && 
                <div key={users.id} >
                    <h2>{users.username}</h2>
                    <h2>{users.game_title}</h2>
                    <h3>{users.matched_time}</h3>
                    <img src={users.profile_image} alt={users.username}/>
                    <p>{users.profile_description}</p>
                    <p>{users.user_play_style}</p>
                    <button className="btn" onClick={() => handleDelete(users.id)}>REMOVE FROM SQUAD</button>
                </div>
            )
        })}
    </section>
    <section className="pendingInvites">
    <h2>SQUAD INVITES</h2>
        {otherInvites.map(users => {
            return (users.invite_status === 'pending' && 
                <div key={users.id} >
                    <h2>{users.username}</h2>
                    <h2>{users.game_title}</h2>
                    <h3>{users.matched_time}</h3>
                    <img src={users.profile_image} alt={users.username}/>
                    <p>{users.profile_description}</p>
                    <p>{users.user_play_style}</p>
                    <button className="btn" onClick={() => handleAccept(users.id)}>ACCEPT</button>
                    <button className="btn" onClick={() => handleDelete(users.id)}>DECLINE</button>
                </div>
            )
        })} 
    </section>
    <section className="sentInvites">
    <h2>SENT INVITES</h2>
        {userInvites.map(users => {
            return (users.invite_status === 'pending' && 
                <div key={users.id} >
                    <h2>{users.username}</h2>
                    <h2>{users.game_title}</h2>
                    <h3>{users.matched_time}</h3>
                    <img src={users.profile_image} alt={users.username}/>
                    <p>{users.profile_description}</p>
                    <p>{users.user_play_style}</p>
                    <button className="btn" onClick={() => handleDelete(users.id)}>CANCEL INVITE</button>
                </div>
            )
        })}
    </section>
</div> */}