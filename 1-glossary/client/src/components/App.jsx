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

    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    fetchAll((results) => {
      this.setState({ words: results })
    })
  }

  handleSearch(event, search) {
    event.preventDefault();
    fetchSearch(search, (results) => {
      this.setState({ words: results })
    })
  }

  // handleAdd() {

  // }

  render() {
    return(
      <div>
        <AddWord />
        <SearchWord handleSearch={this.handleSearch}/>
        <List words={this.state.words}/>
      </div>
    )
  }
}


export default App;