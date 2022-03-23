import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => {
  if (!props.words.length) {
    return (
      <h2>No Words Found</h2>
    )
  } else {
    return (
    <ul>
      {props.words.map(word => <ListEntry word={word} />)}
    </ul>
    )
  }
  }

export default List;