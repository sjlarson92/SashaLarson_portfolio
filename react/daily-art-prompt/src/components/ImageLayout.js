import React from 'react';
import Image from './Image.js'

const ImageLayout = ({onDoubleClick, image}) => {

  const getClassName = (liked) => {
    const className = liked ? "" : "hidden";
    return className
  }

  const likedClassName = getClassName(image.liked)

  return (
    <div className="column">
      <Image
        image={image}
        onDoubleClick={() => onDoubleClick(image.id)}
      />
      <div testID="likedDiv" className={likedClassName}>
        Liked
      </div>
    </div>
  )
}


export default ImageLayout;
