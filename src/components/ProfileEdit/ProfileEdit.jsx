import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProfileEdit.css';

//Form Dialog imports:
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

//Radio Button imports:
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function ProfileEdit() {

  const user = useSelector((store) => store.user);

  const [username, setUsername] = useState(user.username);
  const [image, setImage] = useState(user.profile_image);
  const [description, setDescription] = useState(user.profile_description);
  const [style, setStyle] = useState(user.user_play_style);
  const [discordLink, setDiscordLink] = useState(user.discord_link);

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
          discord_link: discordLink,
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
      <h3 id="form-dialog-title" >EDIT PROFILE</h3>
      <DialogContent>
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Play Style: {style}</FormLabel>
            <RadioGroup aria-label="style" name="play_style" value={style} onChange={(event) => setStyle(event.target.value)}>
              <FormControlLabel value="competitive" control={<Radio />} label="Competitive" />
              <FormControlLabel value="casual" control={<Radio />} label="Casual" />
            </RadioGroup>
        </FormControl>
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