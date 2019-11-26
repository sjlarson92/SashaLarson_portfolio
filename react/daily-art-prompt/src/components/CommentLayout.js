import React from 'react';

import Comment from './Comment.js'

const CommentLayout = ({ comment, handleDeleteButton, editingClassName, handleEditButton, notEditingClassName }) => {

    return (
        <div>
            <Comment
                comment={comment.text}
            />
            <input
                defaultValue={comment.text}
                className={editingClassName}
            />
            <button name='deleteButton' onClick={handleDeleteButton}>
                Delete
            </button>
            <button
                name='submitButton'
                className={editingClassName}>
                Submit
            </button>
            <button
                name='editButton'
                className={notEditingClassName}
                onClick={handleEditButton}>
                Edit
            </button>
        </div >
    )
}




export default CommentLayout    