import React from 'react';

//const possibleDeaths = ["eaten by ", "murdered by ", "sat on by "]

const Death = (props) => {
  console.log(props.text);
  return (
    <li>{props.text}</li>
  )
}

export default Death;
