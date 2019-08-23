import React from 'react';

const Image = (props) =>
  <img
    src={props.image.src}
    alt={props.image.name}
    style={props.image.style}
    onClick={props.onClick}
  />

export default Image;
