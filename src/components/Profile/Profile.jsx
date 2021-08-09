import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function Profile() {
  // this component displays user profile information
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();
  
//   useEffect(() => {
//     dispatch({ type: 'FETCH_USER' });
// }, []);


  return (
    <div className="container">
    
        <h2>CHOOSE A CHARACTER</h2>
        <h3>{user.username}</h3>
        <img src={user.profile_image} alt={user.username}/>
        <p>{user.profile_description}</p>
        <p>PLAY STYLE: {user.user_play_style}</p>
        <p>ACTIVE GAME: {user.active_game}</p>
        <p>RANK: {user.active_game_rank}</p>
        <p>DISCORD LINK: {user.discord_link}</p>
        <button className="btn" onClick={ () => history.push('/profileedit')}>EDIT PROFILE</button>
        <button className="btn" onClick={ () => history.push('/')}>RETURN</button>
    </div>
  );
}

export default Profile;