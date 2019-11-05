import React from 'react';
import Image from './Image.js'

const ImageLayout = ({ onDoubleClick, image }) =>
  <div className="column">
    <Image
      image={image}
      onDoubleClick={() => onDoubleClick(image.id)}
    />
    <div
      data-testid="likedDiv" className={image.liked ? "" : "hidden"}>
      Liked
    </div>
  </div>

export default ImageLayout;
