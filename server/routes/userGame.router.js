const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

// /**
//  * GET user game
//  */

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    const queryText = `
    SELECT "user".id, "user".username, "user".profile_image, "user".profile_description, "user".user_play_style, user_game.time_start, games.game_title
    FROM "user"
    JOIN user_game ON "user".id = user_game.user_id
    JOIN games ON user_game.game_id = games.id
    WHERE "user".id != $1 AND games.id = $2
    ORDER BY user_game.time_start ASC
    ;`;
    pool.query(queryText, [req.user.id, req.params.id])
    .then(response => {
      console.log('inside router get:', response);
      res.send(response.rows);
    })
    .catch(error => {
      console.log('error retrieving user game:', error);
      res.sendStatus(500);
    })
  });


/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {

    const queryText = `
    INSERT INTO user_game (user_id, game_id, time_start)
    VALUES ($1, $2, $3)
    ;`

    pool.query(queryText, [req.body.user_id, req.body.game_id, req.body.time_start])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add User Game Failed: ', err);
      res.sendStatus(500);
    });
});


module.exports = router;