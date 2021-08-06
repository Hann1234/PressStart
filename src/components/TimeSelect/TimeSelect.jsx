import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

//material.ui:

import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

function TimeSelect() {
    // this component is the game selection screen for the user.
    const history = useHistory();
    // const params = useParams();

    // const handleClick = () => {
    //     history.push(`/squadselect`);
    // }
    
    const [value, setValue] = useState(new Date());

    return (
    <div className="container">
        <h1>SELECT YOUR TIME</h1>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="DateTimePicker"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
            />
        </LocalizationProvider>

        <button className="btn" onClick ={() => history.push(`/squadselect`)}>START</button>
        <button className="btn" onClick ={() => history.push(`/gameselect`)}>RETURN</button>
    </div>
    );
}

export default TimeSelect;