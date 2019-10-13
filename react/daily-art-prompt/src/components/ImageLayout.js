import React from 'react';

import Image from './Image.js'

const ImageLayout = (props) =>
  <div>
    {props.imagesArray.map(image =>
      <div key={image.id} className="column">
        <Image
        image={image}
        onDoubleClick={() => props.onDoubleClick()}
        />
        <div className="hidden">Liked</div>
      </div>
      )}
  </div>

export default ImageLayout;
