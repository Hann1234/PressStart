import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
  }));

function SquadSelect() {
    // this component is the squad selection screen for the user to invite other users to their squad.
    const otherUsers = useSelector((store) => store.userGame);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

    //material.ui card consts:
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [expandedId, setExpandedId] = React.useState(-1);

    const handleExpandClick = (i) => {
        setExpandedId(expandedId === i ? -1 : i);
  };

    console.log('otherUsers', otherUsers);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_USERS',
            payload: {
                game_id: params.id
            } 
        });
    }, [params.id]); //need to include [params.id] here?

    const handleClick = (usersID, time) => {

        console.log('inside post dispatch', usersID);
        // event.preventDefault(); do i need to include this?

        dispatch({ 
            type: 'CREATE_INVITE',
            payload: {
                secondary_user_id: usersID,
                matched_game_id: params.id,
                matched_time: time
            } 
        });
    }
    
    return (
        <div>
        <h1>SELECT YOUR SQUAD</h1>
        <Button className={classes.button} onClick={() => history.push('/')}>RETURN HOME</Button>
        <Grid container spacing={3}>
            {otherUsers.map((users, i) => {
                return (
                <Grid item style={{display: "flex"}} key={i}>
                    <div>
                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                            <Avatar aria-label="profilepic" className={classes.avatar} src={users.profile_image} alt={users.username} />
                            }
                            title={users.username}
                            subheader={users.time_start}
                        />
                        <CardActions disableSpacing>
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
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
                            <Typography paragraph>Profile Description:</Typography>
                            <Typography paragraph>
                            {users.profile_description}
                            </Typography>
                            <Typography paragraph>
                            User Play Style: {users.user_play_style}
                            </Typography>
                            <Button className={classes.button} onClick={() => handleClick(users.id, users.time_start)}>ADD TO SQUAD</Button>
                            </CardContent>
                        </Collapse>
                    </Card>
                    </div>
                </Grid>
                );
            })}
        </Grid>
    </div>
    );
}

export default SquadSelect;

// function SquadSelect() {
//     // this component is the squad selection screen for the user to invite other users to their squad.
//     const otherUsers = useSelector((store) => store.userGame);
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const params = useParams();

//     console.log('otherUsers', otherUsers);

//     useEffect(() => {
//         dispatch({ 
//             type: 'FETCH_USERS',
//             payload: {
//                 game_id: params.id
//             } 
//         });
//     }, [params.id]); //need to include [params.id] here?

//     const handleClick = (usersID, time) => {

//         console.log('inside post dispatch', usersID);
//         // event.preventDefault(); do i need to include this?

//         dispatch({ 
//             type: 'CREATE_INVITE',
//             payload: {
//                 secondary_user_id: usersID,
//                 matched_game_id: params.id,
//                 matched_time: time
//             } 
//         });
//     }
    
//     return (
//     <div className="container">
//         <h1>SELECT YOUR SQUAD</h1>
//         <button className="btn" onClick={() => history.push('/')}>RETURN HOME</button>
//         <section className="users">
//             {otherUsers.map(users => {
//                 return (
//                     <div key={users.id} >
//                         <h2>{users.username}</h2>
//                         <h3>{users.time_start}</h3>
//                         <img src={users.profile_image} alt={users.username}/>
//                         <p>{users.profile_description}</p>
//                         <p>{users.user_play_style}</p>
//                         <button className="btn" onClick={() => handleClick(users.id, users.time_start)}>ADD TO SQUAD</button>
//                     </div>
//                 );
//             })}
//         </section>
//     </div>
//     );
// }