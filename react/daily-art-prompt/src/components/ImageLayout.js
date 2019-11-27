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
  cancelCommentClassNames,
  editComment,
  editingCommentClassNames
}) => {

  const handleSubmit = (e, imageId, commentId) => {
    if (e.keyCode === 13) {
      const value = e.target.value
      console.log('updated comment is: ', value)
      editComment(imageId, commentId, value)
    }
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
            !comment.deleted && (
              <CommentLayout
                data-testid={comment.id}
                key={`comment-${comment.id}-${image.id}`}
                comment={comment}
                handleDeleteButton={() => deleteComment(image.id, comment.id)}
                handleEditButton={() => editingCommentClassNames(image.id, comment.id)}
                handleCancelButton={() => cancelCommentClassNames(image.id, comment.id)}
                handleSubmit={(e) => handleSubmit(e, image.id, comment.id)}
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
  editingCommentClassNames: (imageId, commentId) => dispatch({
    type: TYPES.EDIT_COMMENT_CLASS_NAMES,
    payload: {
      imageId,
      commentId
    }
  }),
  cancelCommentClassNames: (imageId, commentId) => dispatch({
    type: TYPES.CANCEL_EDIT_COMMENT_CLASS_NAMES,
    payload: {
      imageId,
      commentId
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
