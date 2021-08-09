const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const profile_image = req.body.profile_image;
  const profile_description = req.body.profile_description;
  const user_play_style = req.body.user_play_style;
  const discord_link = req.body.discord_link;
  
  const queryText = `
    INSERT INTO "user" (username, password, profile_image, profile_description, user_play_style, discord_link)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id
    ;`;
  pool
    .query(queryText, [username, password, profile_image, profile_description, user_play_style, discord_link])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

router.put('/edit', rejectUnauthenticated, (req, res) => {
  const queryText = `
  UPDATE "user"
  SET username=$1, profile_image=$2, profile_description=$3, user_play_style=$4, discord_link=$5
  WHERE id=$6
  ;`;
  pool.query(queryText, [req.body.username, req.body.profile_image, req.body.profile_description, req.body.user_play_style, req.body.discord_link, req.user.id])
  .then(response => {
    console.log('inside router PUT(update):', response);
    res.send(response.rows);
  })
  .catch(error => {
    console.log('error updating user profile:', error);
    res.sendStatus(500);
  })
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
