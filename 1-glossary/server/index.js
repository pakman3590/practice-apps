require("dotenv").config();
const express = require("express");
const path = require("path");
const {addWord, getWords} = require('./db.js')

const app = express();

app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// all words fetch
app.get('/words', (req, res) => {

  console.log('server GET')

  getWords((err, results) => {
    if (err) {
      res.sendStatus(404)
    } else {
      res.status(200).send(results)
    }
  })
})

// new word post
app.post('/words', (req, res) => {

  console.log('server POST')

  let newWord = req.body.word;
  let newDef = req.body.definition;
  addWord(newWord, newDef, (err) => {
    if (err) {
      res.sendStatus(400)
    } else (
      res.sendStatus(201)
    )
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
