import React from 'react';
import AddWord from './AddWord.jsx';
import List from './List.jsx';
import SearchWord from './SearchWord.jsx';
import {fetchAll, fetchSearch, postNew, editWord, deleteWord} from '../requests.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      words: [{
        word: 'dummy',
        definition: 'I R Dummy'
      }]
    }
  }

  render() {
    return(
      <div>
        <AddWord />
        <SearchWord />
        <List words={this.state.words}/>
      </div>
    )
  }
}


export default App;