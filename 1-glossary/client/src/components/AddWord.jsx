import React from 'react';

class AddWord extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      word: '',
      definition: ''
    }

    this.handleDefEntry = this.handleDefEntry.bind(this)
    this.handleWordEntry = this.handleWordEntry.bind(this)
  }

  handleWordEntry(event) {
    this.setState({ word: event.target.value })
  }

  handleDefEntry(event) {
    this.setState({ definition: event.target.value })
  }

  render() {
    return (
      <form className='addBar' /* onChange={} */>
        <h4>Add A Word:</h4>
        <label>
          Word:
          <input type='text' value={this.state.word} onChange={this.handleWordEntry}/>
        </label>
        <label>
          Definition:
          <input type='text' value={this.state.definition} onChange={this.handleDefEntry} />
        </label>
        <input type='submit' value='Add Word' />
      </form>
    )
  }
}

export default AddWord;