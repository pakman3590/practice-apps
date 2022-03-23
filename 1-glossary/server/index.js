require("dotenv").config();
const express = require("express");
const path = require("path");
const {addWord, getWords} = require('./db.js')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

// all words fetch
app.get('/words', (req, res) => {

})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
