const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//   // GET route code here
// });

/**
 * POST route template
 */
router.post('/', (req, res) => {

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