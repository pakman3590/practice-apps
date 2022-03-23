const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGOURL || 'mongodb://localhost:3000/glossary' {

  })
}


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const wordSchema = new Schema({
  word: {
    name: String,
    unique: true
  },
  definition: String
});

const Word = mongoose.model('Word', wordSchema);


// add word fx
const addWord = (word, definition, callback) => {
  const newWord = new Word({ word, definition });
  newWord.save()
    .then(callback(null))
    .catch(callback(err))
}

// get all words fx
const getWords = (callback) => {
  Word.find({}, (err, results) => {
    if (err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
}

module.exports.addWord = addWord;
module.exports.getWords = getWords;