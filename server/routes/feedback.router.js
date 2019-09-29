const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET FEELING
router.get('/', (req, res) => {
    let getData = req.body
    console.log('in get router', getData);
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;' ;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log('error on get router', err)
        res.sendStatus(500);
    })
}) // end GET

// POST FEELINGS
router.post('/',  ( req, res) => {
    let postData = req.body;
    console.log('in post router', postData)
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);` ;
    pool.query(queryText, [postData.feeling, postData.understanding, postData.support, postData.comments,])
    .then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('error on post router', err )
        res.sendStatus(500);
    })
}) // end POST

// DELETE IN ADMIN
router.delete( '/:id', (req, res) => {
    let id = req.params.id;
    console.log('Delete route', id);
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1` ;
    pool.query(queryText, [id])
    .then((result) => {
        console.log('in results', result)
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log("error on router.delete", error)
        res.sendStatus(500);
    })
}) // end DELETE

// PUT IN ADMIN
router.put('/:id/:boolean', (req, res) => {
    let id = req.params.id
    let boolean = req.params.boolean
    const queryText = 'UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;';
    pool.query(queryText,[boolean,id])
    .then((result)=>{
        res.sendStatus(202);
    }).catch((err)=>{
        console.log(err);
    })
}) // end PUT

module.exports = router;