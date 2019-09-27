const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST FEELINGS
router.post('/', async ( req, res) => {
    const client = await pool.connect();
    await client.query('BEGIN')
    const feelingInsert = await client.query(`INSERT INTO "feedback" ("feeling")
    VALUES ($1) 
    RETURNING id;`, [feeling]);

    await client.query('COMMIT')
    res.sendStatus(201);
})

module.exports = router;