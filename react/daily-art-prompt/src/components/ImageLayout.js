import React from 'react';
import Image from './Image.js'
import Comment from './Comment.js'

const ImageLayout = ({ onDoubleClick, comments, image, onKeyDown }) =>
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
        {comments && comments.map(comment =>
          <Comment
            key={`comment-${comment.id}-${image.id}`}
            comment={comment.text}
          />)}
      </div>
      <input type='text' name='commentBox' onKeyDown={(e) => onKeyDown(e, image.id)} placeholder='Add Comment' />
    </div>
  </div>

export default ImageLayout
