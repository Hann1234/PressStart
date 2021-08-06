import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProfileEdit() {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('');
  const [discordLink, setDiscordLink] = useState('');

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const editProfile = (event) => {
    event.preventDefault();

    dispatch({
      type: 'EDIT_PROFILE',
      payload: {
        username: username,
        profile_image: image,
        profile_description: description,
        user_play_style: style,
        discord_link: discordLink
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            value={image} 
            onChange={event => setImage(event.target.value)}
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
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
            value={discordLink}
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