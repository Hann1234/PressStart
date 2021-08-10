const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('inside matches post router', req.body);
    const queryText = `
    INSERT INTO matches (primary_user_id, secondary_user_id)
    VALUES ($1, $2)
    ;`;

    pool.query(queryText, [req.user.id, req.body.secondary_user_id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add pending match failed: ', err);
      res.sendStatus(500);
    });
});


module.exports = router;