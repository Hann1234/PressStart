import React, { Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//material.ui:

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

function TimeSelect() {
    // this component is the time selection screen for the user.

    const [selectedStartDate, handleStartDateChange] = useState(new Date());
    const [selectedEndDate, handleEndDateChange] = useState(new Date());


    const history = useHistory();

    // const params = useParams();

    // const handleClick = () => {
    //     history.push(`/squadselect`);
    // }
    

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
            <br></br>
            <p>Optional:</p>
            <DateTimePicker
                value={selectedEndDate}
                disablePast
                onChange={handleEndDateChange}
                label="End Date and Time"
                showTodayButton
            />
            </Fragment>
        </MuiPickersUtilsProvider>
        <br></br>
        <button className="btn" onClick ={() => history.push(`/squadselect`)}>START</button>
        <button className="btn" onClick ={() => history.push(`/gameselect`)}>RETURN</button>
    </div>
    );
}

export default TimeSelect;