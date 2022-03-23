import React from 'react';
import AddWord from './AddWord.jsx';
import List from './List.jsx';
import SearchWord from './SearchWord.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return(
      <div>
        <AddWord />
        <SearchWord />
        <List />
      </div>
    )
  }
}


export default App;