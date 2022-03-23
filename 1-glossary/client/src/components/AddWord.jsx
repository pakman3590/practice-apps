import React from 'react';

class AddWord extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newWord: '',
      newDef: ''
    }

    this.handleDefEntry = this.handleDefEntry.bind(this)
    this.handleWordEntry = this.handleWordEntry.bind(this)
  }

  handleWordEntry(event) {
    this.setState({ newWord: event.target.value })
  }

  handleDefEntry(event) {
    this.setState({ newDef: event.target.value })
  }

  render() {
    return (
      <form className='addBar' onSubmit={SOME HELPER}>
        <label>
          Word:
          <input type='text' value={this.state.newWord} onChange={this.handleWordEntry}/>
        </label>
        <label>
          Definition:
          <input type='text' value={this.state.newDef} onChange={this.handleDefEntry} />
        </label>
        <input type='submit' value='Add Word' />
      </form>
    )
  }
}

export default AddWord;