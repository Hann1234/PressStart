import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

//image list imports:
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { grey } from '@material-ui/core/colors';

import './GameSelect.css';

//animate.css:
import "animate.css"


//image list const:
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    imageList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));

function GameSelect() {
    // this component is the game selection screen for the user.
    const games = useSelector((store) => store.games);
    const history = useHistory();
    const dispatch = useDispatch();

    //image list const:
    const classes = useStyles();

    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES' });
    }, []);

    const handleClick = (gameID) => {
        history.push(`/timeselect/${gameID}`); // useParams to pass game id to time select page
    }
  
    return (
        <div className={classes.root}>
        <h2>SELECT YOUR GAME</h2>
        <div class="animate__animated animate__fadeInDown">
        <Grid container spacing={3} justifyContent="center" >
        <Grid item xs={10}>
            <ImageList className={classes.imageList} cols={3}>
                {games.map((item) => (
                <ImageListItem key={item.id}>
                    <img src={item.game_cover} alt={item.game_title} onClick={() => handleClick(item.id)}/>
                    <ImageListItemBar
                    title={item.game_title}
                    classes={{
                        root: classes.titleBar,
                        title: classes.title,
                    }}
                    actionIcon={
                        <IconButton aria-label={`star ${item.game_title}`}>
                        <StarBorderIcon className={classes.title} />
                        </IconButton>
                    }
                    />
                </ImageListItem>
                ))}
            </ImageList>
            </Grid>
        </Grid>
        </div>
        <div class="animate__animated animate__headShake animate__infinite">
          <ArrowBackIcon style={{ color: grey[50] }} fontSize="large" />
          <ArrowForwardIcon style={{ color: grey[50] }} fontSize="large" />                    
        </div>
    </div>
    );
}

export default GameSelect;

