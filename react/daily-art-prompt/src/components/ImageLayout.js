import React from 'react';
import Image from './Image.js'
import CommentLayout from './CommentLayout'

const ImageLayout = ({ onDoubleClick, image, onKeyDown }) => {

  const handleDeleteButton = (imageId, commentId) => {
    console.log('imageId is: ', imageId)
    console.log('commentId is: ', commentId)
  }

  return (
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
              onClick={() => handleDeleteButton(image.id, comment.id)}
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
  )
}


export default ImageLayout
