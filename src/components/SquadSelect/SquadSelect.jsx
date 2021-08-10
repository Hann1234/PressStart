import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function SquadSelect() {
    // this component is the squad selection screen for the user to invite other users to their squad.
    const otherUsers = useSelector((store) => store.userGame);
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();

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
    <div className="container">
        <h1>SELECT YOUR SQUAD</h1>
        <button className="btn" onClick={() => history.push('/')}>RETURN HOME</button>
        <section className="users">
            {otherUsers.map(users => {
                return (
                    <div key={users.id} >
                        <h2>{users.username}</h2>
                        <h3>{users.time_start}</h3>
                        <img src={users.profile_image} alt={users.username}/>
                        <p>{users.profile_description}</p>
                        <p>{users.user_play_style}</p>
                        <button className="btn" onClick={() => handleClick(users.id, users.time_start)}>ADD TO SQUAD</button>
                    </div>
                );
            })}
        </section>
    </div>
    );
}

export default SquadSelect;
