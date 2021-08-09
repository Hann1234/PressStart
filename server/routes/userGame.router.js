const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

// /**
//  * GET user game
//  */

// router.get('/', rejectUnauthenticated, (req, res) => {
//     const queryText = `
//     SELECT * FROM user_game
//     WHERE user_id=$1
//     ;`;
//     pool.query(queryText, [req.body.user_id])
//     .then(response => {
//       console.log('inside router get:', response);
//       res.send(response.rows);
//     })
//     .catch(error => {
//       console.log('error retrieving user game:', error);
//       res.sendStatus(500);
//     })
//   });


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