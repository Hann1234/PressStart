const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

//GET route for games

router.get('/', rejectUnauthenticated, (req, res) => {

    const query = `
    SELECT * FROM "games"
    ORDER BY "id"
    `;
    pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {
  // POST route code here
// });

module.exports = router;