import React from 'react';

import Comment from './Comment.js'

const CommentLayout = ({
    comment,
    handleDeleteButton,
    handleCancelButton,
    handleEditButton,
    handleSubmit
}) => {

    return (
        <div>
            <Comment
                comment={comment.text}
            />
            <div name='nonEditingDiv' className={comment.editing ? 'hidden' : ''}>
                <button
                    name='deleteButton'
                    onClick={handleDeleteButton}>
                    Delete
                </button>
                <button
                    name='editButton'
                    onClick={handleEditButton}>
                    Edit
                </button>
            </div>
            <div name='editingDiv' className={comment.editing ? '' : 'hidden'}>
                <input
                    name='editInputBox'
                    defaultValue={comment.text}
                    onKeyDown={handleSubmit}
                />
                <button
                    name='cancelButton'
                    onClick={handleCancelButton}>
                    Cancel
                </button>
            </div>
        </div >
    )
}




export default CommentLayout    