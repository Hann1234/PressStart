import React, { Fragment, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//material.ui:

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function TimeSelect() {
    // this component is the time selection screen for the user.

    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    const handleClick = (event) => {

        event.preventDefault();

        // alert user to fill in missing time field

        if (!selectedStartDate) {
            alert('Please select a time.')
            }
            
            else {
            // Tell redux that we want to add new info
            dispatch({
                type: 'ADD_USER_GAME',
                // Pass in the information, that we're tracking in state
                payload: {
                    user_id: user.id,
                    game_id: params.id,
                    time_start: selectedStartDate}
            });

        }

        history.push(`/squadselect`);
    }
    

    return (
    <div className="container">
        <h1>SELECT YOUR TIME</h1>

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
        <button className="btn" onClick ={() => handleClick()}>START</button>
        <button className="btn" onClick ={() => history.push(`/gameselect`)}>RETURN</button>
    </div>
    );
}

export default TimeSelect;