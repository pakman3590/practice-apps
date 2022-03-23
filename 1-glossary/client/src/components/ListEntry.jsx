import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <li className='listEntry'>
        <span className='word'>
          {this.props.word.word}:
        </span>
        <span className='definition'>
          {this.props.word.definition}
        </span>
      </li>
    )
  }
}

export default ListEntry;