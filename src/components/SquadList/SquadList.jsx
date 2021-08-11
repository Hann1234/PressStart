import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function SquadList() {
    // The Squad List component displays players that the user has accepted matches with
    const squadList = useSelector((store) => store.matches);
    const history = useHistory();
    const dispatch = useDispatch();

    console.log('squadList', squadList);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_MATCHES'
            });
    }, []);

    return (
    <div className="container">
        <h1>MANAGE SQUAD</h1>
        <button className="btn" onClick={() => history.push('/')}>RETURN HOME</button>
        <section className="squad">
            <h2>CURRENT SQUAD</h2>
                {squadList.map(users => {
                    return (users.invite_status === 'accepted' && 
                        <div key={users.id} >
                            <h2>{users.username}</h2>
                            <h3>{users.time_start}</h3>
                            <img src={users.profile_image} alt={users.username}/>
                            <p>{users.profile_description}</p>
                            <p>{users.user_play_style}</p>
                            <button className="btn" onClick={() => handleClick(users.id)}>REMOVE FROM SQUAD</button>
                        </div>
                    )
                })}
            </section>
    </div>
    );
}

export default SquadList;

// conditionally render pending requests