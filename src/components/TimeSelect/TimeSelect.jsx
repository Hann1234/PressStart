import React, { Fragment, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//material.ui time picker:
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

//material.ui button imports:
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

//animate.css:
import "animate.css"

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

function TimeSelect() {
    // this component is the time selection screen for the user.

    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();
    const classes = useStyles();


    const handleSubmit = (event) => {

        event.preventDefault();


        dispatch({
            type: 'ADD_USER_GAME',
            // Pass in the game id, and selected time, and history.push
            payload: {
                game_id: params.id,
                time_start: selectedStartDate,
                history: history
            }
        });
        
        // history.push(`/squadselect/${params.id}`);
    }
    

    return (
    <div className="container">
        <center>
        <h1>SELECT YOUR TIME</h1>
            <form onSubmit={handleSubmit}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Fragment>
                        <p>Required:</p>
                    <DateTimePicker
                        value={selectedStartDate}
                        disablePast
                        onChange={handleStartDateChange}
                        label="Start Date and Time"
                        showTodayButton
                    />
                    </Fragment>
                </MuiPickersUtilsProvider>
                <br></br>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <div class="animate__animated animate__pulse animate__infinite">
                            <Button className={classes.button} type="submit">START</Button>
                        </div>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button} onClick ={() => history.push(`/gameselect`)}>RETURN</Button>
                    </Grid>
                </Grid>
                </form>
                </center>
    </div>
    );
}

export default TimeSelect;