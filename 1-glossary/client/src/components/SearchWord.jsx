import React from 'react';

class SearchWord extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    return(
      <form onSubmit={() => this.props.handleSearch(event, this.state.search)}>
        <h4>Search the Glossary:</h4>
        <label>
          Word:
          <input type='text' value={this.state.search} onChange={this.handleChange}></input>
        </label>
        <input type='submit' value='Search' />
      </form>
    )
  }
}

export default SearchWord;