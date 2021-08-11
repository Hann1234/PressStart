import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import gamesReducer from '../../redux/reducers/games.reducer';


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
        dispatch({ 
            type: 'DELETE_MATCH',
            payload: usersID
            });
            console.log('inside dispatch', usersID);
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

    return (
    <div className="container">
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
    </div>
    );
}

export default SquadList;

// conditionally render pending requests