const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

router.get('/sentinvites', rejectUnauthenticated, (req, res) => {

    const queryText = `
    SELECT "user".id, "user".username, "user".profile_image, "user".profile_description, "user".user_play_style, "user".discord_link, games.game_title, matches.matched_time, matches.invite_status
    FROM "user"
    JOIN matches ON "user".id = matches.secondary_user_id
    JOIN games ON matches.matched_game_id = games.id
    WHERE primary_user_id = $1
    ORDER BY matches.matched_time ASC;
    `;
    pool.query(queryText, [req.user.id])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: GET matches', err);
        res.sendStatus(500)
    })
});

router.get('/receivedinvites', rejectUnauthenticated, (req, res) => {

    const queryText = `
    SELECT "user".id, "user".username, "user".profile_image, "user".profile_description, "user".user_play_style, "user".discord_link, games.game_title, matches.matched_time, matches.invite_status
    FROM "user"
    JOIN matches ON "user".id = matches.primary_user_id
    JOIN games ON matches.matched_game_id = games.id
    WHERE secondary_user_id = $1
    ORDER BY matches.matched_time ASC;
    `;
    pool.query(queryText, [req.user.id])
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: GET matches', err);
        res.sendStatus(500)
    })
});

router.post('/invite', rejectUnauthenticated, (req, res) => {
    console.log('inside matches/invite post router', req.body);
    const queryText = `
    INSERT INTO matches (primary_user_id, secondary_user_id, matched_game_id, matched_time)
    VALUES ($1, $2, $3, $4)
    ;`;

    pool.query(queryText, [req.user.id, req.body.secondary_user_id, req.body.params.id, req.body.matched_time])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add pending match failed: ', err);
      res.sendStatus(500);
    });
});

router.put('/accept', rejectUnauthenticated, (req, res) => {
    const queryText = `
    UPDATE matches
    SET invite_status = 'accepted'
    WHERE primary_user_id = $1 AND secondary_user_id = $2
    ;`;
    pool.query(queryText, [req.body.usersID, req.user.id])
    .then(response => {
      console.log('inside router PUT(accept):', response);
      res.send(response.rows);
    })
    .catch(error => {
      console.log('error accepting invite in router:', error);
      res.sendStatus(500);
    })
  });

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {

    console.log('inside delete router', req.params.id);
    const queryText = `
    DELETE FROM matches
    WHERE (primary_user_id = $1 AND secondary_user_id = $2) OR (primary_user_id = $2 AND secondary_user_id = $1)
    ;`;
    pool.query(queryText, [req.user.id, req.params.id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Delete match failed: ', err);
      res.sendStatus(500);
    });
});


module.exports = router;