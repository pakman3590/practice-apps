import React from 'react';

class SearchWord extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <form>
        <h4>Search the Glossary:</h4>
        <label>
          Word:
          <input type='text'></input>
        </label>
        <input type='submit' value='Search' />
      </form>
    )
  }
}

export default SearchWord;