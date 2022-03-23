import React from 'react';
import AddWord from './AddWord.jsx';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)


  }

  render() {
    return(
      <div>
        <AddWord />
        <List />
      </div>
    )
  }
}


export default App;