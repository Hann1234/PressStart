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

    const handleSubmit = (event) => {

        event.preventDefault();


        dispatch({
            type: 'ADD_USER_GAME',
            // Pass in the user id, game id, and selected time
            payload: {
                user_id: user.id,
                game_id: params.id,
                time_start: selectedStartDate}
        });
        
        history.push(`/squadselect/${params.id}`);
    }
    

    return (
    <div className="container">
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
                <button className="btn" type="submit">START</button>
                <button className="btn" onClick ={() => history.push(`/gameselect`)}>RETURN</button>
                </form>
    </div>
    );
}

export default TimeSelect;