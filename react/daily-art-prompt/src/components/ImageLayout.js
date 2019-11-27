import React from 'react';
import { connect } from 'react-redux'
import Image from './Image.js'
import CommentLayout from './CommentLayout'
import * as TYPES from '../store/actions'

export const ImageLayout = ({ onDoubleClick, image, onKeyDown, deleteComment, handleCancelButton, updateCommentClassNames }) =>

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
              handleEditButton={() => updateCommentClassNames(image.id, comment.id)}
              handleCancelButton={() => handleCancelButton()}
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

export const maptStateToProps = (state) => ({
})

export const mapDispatchToProps = (dispatch) => ({
  deleteComment: (imageId, commentId) => dispatch({
    type: TYPES.DELETE_COMMENT,
    payload: {
      imageId,
      commentId
    }
  }),
  updateCommentClassNames: (imageId, commentId) => dispatch({
    type: TYPES.EDIT_COMMENT_CLASS_NAMES,
    payload: {
      imageId,
      commentId
    }
  }),
  handleCancelButton: () => dispatch({
    type: TYPES.DEFAULT_CLASS_NAMES,
    payload: {

    }
  })
})

const ConnectedImageLayout = connect(maptStateToProps, mapDispatchToProps)(ImageLayout)

export default ConnectedImageLayout;
