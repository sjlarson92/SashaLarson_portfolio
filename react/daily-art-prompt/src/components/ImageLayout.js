import React from 'react';

import Image from './Image.js'

class ImageLayout extends React.Component {
  state = {

  }

  getClassName = (liked) => {
    const className = liked ? "" : "hidden";
    return className
  }

  render(){
    const { onDoubleClick, image} = this.props;
    const likedClassName = this.getClassName(image.liked)

    return (
      <div className="column">
        <Image
        image={image}
        onDoubleClick={() => onDoubleClick(image.id)}
        />
        <div className={likedClassName}>Liked</div>
        <div className="comment"></div>
      </div>
    )
  }
}


export default ImageLayout;
