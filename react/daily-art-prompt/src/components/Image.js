import React from 'react';

const Image = ({image: {src, name}, onDoubleClick}) =>
  <img
    src={src}
    alt={name}
    onDoubleClick={onDoubleClick}
  />

export default Image;
