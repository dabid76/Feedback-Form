const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const feedbackRouter = require('./routes/feedback.router.js');
app.use('/feedback', feedbackRouter)

// app.delete( '/delete/:id', (req, res) => {
//     let id = req.params.id;
//     console.log('Delete route', id);
//     let queryText = `DELETE FROM "feedback" WHERE "id" = $1` ;
//     pool.query(queryText, [id])
//     .then((result) => {
//         console.log('in results', result)
//         res.sendStatus(200)
//     })
//     .catch((error) => {
//         console.log("error on router.delete", error)
//         res.sendStatus(500);
//     })
// }) 



/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});