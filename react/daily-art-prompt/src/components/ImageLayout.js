import React from 'react';
import { connect } from 'react-redux'
import Image from './Image.js'
import CommentLayout from './CommentLayout'
import * as TYPES from '../store/actions'

export const ImageLayout = ({ onDoubleClick, image, onKeyDown, deleteComment }) =>
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
          !comment.deleted && (
            <CommentLayout
              key={`comment-${comment.id}-${image.id}`}
              comment={comment}
              onClick={() => deleteComment(image.id, comment.id)}
            />
          )
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

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (imageId, commentId) => dispatch({
    type: TYPES.DELETE_COMMENT,
    payload: {
      imageId,
      commentId
    }
  })
})

const ConnectedImageLayout = connect(null, mapDispatchToProps)(ImageLayout)

export default ConnectedImageLayout;
