import React from 'react';
import Image from './Image.js'
import CommentLayout from './CommentLayout'

const ImageLayout = ({ onDoubleClick, image, onKeyDown }) =>
  <div className="column">
    <Image
      image={image}
      onDoubleClick={() => onDoubleClick(image.id)}
    />
    <div
      data-testid="likedDiv" className={image.liked ? "likedText" : "hidden"}>
      Liked
    </div>
    <div>
      <div>
        {image.comments && image.comments.map(comment =>
          <CommentLayout
            key={`comment-${comment.id}-${image.id}`}
            comment={comment}
          />
        )}
      </div>
      <input
        data-testid='inputBox'
        type='text'
        name='commentBox'
        onKeyDown={(e) => onKeyDown(e, image.id)}
        placeholder='Add Comment' />
    </div>
  </div>

export default ImageLayout
