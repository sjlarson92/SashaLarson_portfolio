import React from 'react';
import { connect } from 'react-redux'
import Image from './Image.js'
import CommentLayout from './CommentLayout'
import * as TYPES from '../store/actions'

export const ImageLayout = ({ onDoubleClick, image, onKeyDown, deleteComment, editingClassName, notEditingClassName, handleEditButton }) =>

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
              handleEditButton={() => handleEditButton(image.id, comment.id)}
              editingClassName={editingClassName}
              notEditingClassName={notEditingClassName}
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
  editingClassName: state.classNames.editingClassName,
  notEditingClassName: state.classNames.notEditingClassName
})

export const mapDispatchToProps = (dispatch) => ({
  deleteComment: (imageId, commentId) => dispatch({
    type: TYPES.DELETE_COMMENT,
    payload: {
      imageId,
      commentId
    }
  }),
  handleEditButton: (imageId, commentId) => dispatch({
    type: TYPES.UPDATE_CLASS_NAMES,
    payload: {
      imageId,
      commentId
    }
  })
})

const ConnectedImageLayout = connect(maptStateToProps, mapDispatchToProps)(ImageLayout)

export default ConnectedImageLayout;
