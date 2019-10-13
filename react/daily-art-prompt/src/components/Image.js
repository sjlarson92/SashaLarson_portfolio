import React from 'react';

const Image = (props) =>
  <img
    src={props.image.src}
    alt={props.image.name}
    onDoubleClick={props.onDoubleClick}
  />

export default Image;
