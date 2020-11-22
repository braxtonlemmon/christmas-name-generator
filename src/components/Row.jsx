import React from 'react';

function Row({ giver, receiver} ) {
  return (
    <p>{giver} gives to {receiver}</p>
  )
}

export default Row;