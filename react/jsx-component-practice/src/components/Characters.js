import React from 'react';

const Character = (props) => {
  console.log(props.name);
  return (
    <li>{props.name}</li>
  )
}

export default Character;
