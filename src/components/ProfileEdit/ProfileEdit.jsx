import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';

//Form Dialog imports:
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function ProfileEdit() {

  const user = useSelector((store) => store.user);

  const [username, setUsername] = useState(user.username);
  const [image, setImage] = useState(user.profile_image);
  const [description, setDescription] = useState(user.profile_description);
  const [style, setStyle] = useState(user.user_play_style);
  const [discordLink, setDiscordLink] = useState(user.discord_link);

  const dispatch = useDispatch();
  // const history = useHistory();
  // const params = useParams();

  const editProfile = (event) => {
    
    event.preventDefault();

    dispatch({
      type: 'EDIT_PROFILE',
      payload: {
          username: username,
          profile_image: image,
          profile_description: description,
          user_play_style: style,
          discord_link: discordLink,
          // history: history
      },
    });
  }; // end editProfile

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      EDIT PROFILE
    </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <form className="formPanel" onSubmit={editProfile}>
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          EDIT PROFILE
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="User Name:"
          type="text"
          defaultValue={username}
          onChange={(event) => setUsername(event.target.value)}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="profilePic"
          label="Profile Picture:"
          type="text"
          defaultValue={image}
          onChange={(event) => setImage(event.target.value)}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Profile Description:"
          type="text"
          defaultValue={description}
          onChange={(event) => setDescription(event.target.value)}
          fullWidth
        />
        <div>
        <p>Play Style: {style}</p>
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
      <TextField
          autoFocus
          margin="dense"
          id="discord"
          label="Discord Invite Link:"
          type="text"
          defaultValue={discordLink}
          onChange={(event) => setDiscordLink(event.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button type="submit" name="submit" onClick={handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
      </form>
    </Dialog>
  </div>
  );
}

export default ProfileEdit;

{/* <div>
    <form className="formPanel" onSubmit={editProfile}>
      <h2>Edit Profile</h2>
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
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
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Profile Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
      </div>
      <div>
        <p>Play Style: {style}</p>
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
            value={discordLink}
            onChange={(event) => setDiscordLink(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="SAVE CHANGES" />
      </div>
    </form>
    <button className="btn" onClick ={() => history.push(`/profile`)}>RETURN</button>
</div> */}