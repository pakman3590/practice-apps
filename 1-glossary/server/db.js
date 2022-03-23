const mongoose = require("mongoose");
const { Schema } = mongoose;


mongoose.connect(process.env.MONGOURL || 'mongodb://localhost/glossary', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})



// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const wordSchema = new Schema({
  _id: String,
  definition: String
});

const Word = mongoose.model('Word', wordSchema);

module.exports = {
  // add word fx
  addWord(word, definition, callback) {
    console.log('DB POST')
    const newWord = new Word({ _id: word, definition });
    newWord.save()
      .then(() => callback(null))
      .catch((err) => callback(err))
  },

  // get all words fx
  getWords(callback) {
    console.log('DB GET')
    Word.find({}, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },

  // delete word fx
  deleteWord(word, callback) {
    console.log('DB DELETE');
    Word.deleteOne({ '_id': word}, (err) => {
      if (err) {
        callback(err)
      }
    })
  }
}
