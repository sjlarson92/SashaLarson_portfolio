import React from 'react';
import { connect } from 'react-redux'
import Image from './Image.js'
import CommentLayout from './CommentLayout'
import * as TYPES from '../store/actions'

export const ImageLayout = ({
  onDoubleClick,
  image,
  onKeyDown,
  deleteComment,
  updateClassName,
  editComment,
}) => {

  const handleSubmit = (e, imageId, commentId) => {
    if (e.keyCode === 13) {
      const value = e.target.value
      editComment(imageId, commentId, value)
    }
  }
  return (
    <div className="column">
      <Image
        image={image}
        onDoubleClick={() => onDoubleClick(image.id)}
      />
      {image.liked && (
        <div
          data-testid="likedDiv" className="likedText">
          Liked
        </div>
      )}
      <div>
        <div>
          {image.comments && image.comments.map(comment =>
            !comment.deleted && (
              <CommentLayout
                data-testid={`comment-${comment.id}`}
                key={`comment-${comment.id}-${image.id}`}
                comment={comment}
                onDelete={() => deleteComment(image.id, comment.id)}
                onEdit={() => updateClassName(image.id, comment.id, comment.editing)}
                onCancel={() => updateClassName(image.id, comment.id, comment.editing)}
                onSubmit={(e) => handleSubmit(e, image.id, comment.id)}
              />
            )
          )}
        </div>
        <input
          data-testid='inputBox'
          type='text'
          name='commentBox'
          onKeyDown={(e) => onKeyDown(e, image.id)}
          placeholder='Add Comment...' />
      </div>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  deleteComment: (imageId, commentId) => dispatch({
    type: TYPES.DELETE_COMMENT,
    payload: {
      imageId,
      commentId
    }
  }),
  updateClassName: (imageId, commentId, editing) => dispatch({
    type: TYPES.UPDATE_COMMENT_EDITING,
    payload: {
      imageId,
      commentId,
      editing
    }
  }),
  editComment: (imageId, commentId, value) => dispatch({
    type: TYPES.EDIT_COMMENT,
    payload: {
      imageId,
      commentId,
      value
    }
  })
})

const ConnectedImageLayout = connect(null, mapDispatchToProps)(ImageLayout)

export default ConnectedImageLayout;
