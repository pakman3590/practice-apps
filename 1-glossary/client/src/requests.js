import axios from 'axios';

// response data parser
const dataFix = (wordObjArray) => {
  const reparse = (wordObj) => {
    return {
      word: wordObj._id,
      definition: wordObj.definition
    }
  };
  return wordObjArray.map(wordObj => reparse(wordObj));
}

// fetch all request
const fetchAll = (callback) => {
  axios.get('/words')
    .then((response) => callback(dataFix(response.data)))
    .catch((err) => console.log(err))
}

// fetch search request
const fetchSearch = (word, callback) => {
  axios.get('/words', { params: { word } })
    .then((response) => callback(dataFix(response.data)))
    .catch((err) => console.log(err))
}

// post new request
const postNew = (wordObj, callback) => {
  axios.post('/words', wordObj)
    .then(() => console.log('Word Submitted!'))
    .catch((err) => console.log(err))
}

// put edit request
const editWord = (wordObj, callback) => {
  axios.put('/words', wordObj)
    .then(() => console.log('Definition Updated!'))
    .catch((err) => console.log(err))
}

// delete request
const deleteWord = (word, callback) => {
  axios.delete('/words', { params: { word } })
    .then(() => console.log('Word Deleted!'))
    .catch((err) => console.log(err))
}

export {fetchAll, fetchSearch, postNew, editWord, deleteWord}