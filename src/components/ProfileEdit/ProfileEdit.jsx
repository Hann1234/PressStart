import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function ProfileEdit() {
//   const [username, setUsername] = useState('');
//   const [image, setImage] = useState('');
//   const [description, setDescription] = useState('');
  const [style, setStyle] = useState('');
//   const [discordLink, setDiscordLink] = useState('');

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();

  const editProfile = () => {
    
    // event.preventDefault();

    dispatch({
      type: 'EDIT_PROFILE',
      payload: {
        updates,
        user.id: user.id
      },
    });
  }; // end editProfile

  return (
    <form className="formPanel" onSubmit={editProfile}>
      <h2>Edit Profile</h2>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            placeholder={user.username}
            value={user.username}
            onChange={(event) => editProfile({username: event.target.value})}
          />
        </label>
      </div>
      <div>
        <label htmlFor="profilePic">
          Profile Picture:
          <input 
            type="text"
            name="profilePic" 
            placeholder="Enter New Image url" 
            value={user.profile_image} 
            onChange={event => editProfile({profile_image: event.target.value})}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Profile Description:
          <input
            type="text"
            name="description"
            placeholder={user.profile_description} 
            value={user.profile_description}
            onChange={(event) => editProfile({profile_description: event.target.value})}
          />
        </label>
      </div>
      <div>
        <p>Play Style:</p>
        <input 
          type="radio"
          id="Competitive" 
          name="play_style"
          value={style}
          onClick={() => setStyle('competitive')}
        />
        <label htmlFor="Competitive">Competitive</label>
        <input 
          type="radio"
          id="Casual" 
          name="play_style"
          value={style}
          onClick={() => setStyle('casual')}
        />
        <label htmlFor="Casual">Casual</label>
      </div>
      <div>
        <label htmlFor="discord">
          Discord Link:
          <input
            type="text"
            name="discord"
            placeholder={user.discord_link} 
            value={user.discord_link}
            onChange={(event) => setDiscordLink(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="SUBMIT EDIT" />
        <button className="btn" onClick ={() => history.push(`/profile`)}>RETURN</button>
      </div>
    </form>
  );
}

export default ProfileEdit;