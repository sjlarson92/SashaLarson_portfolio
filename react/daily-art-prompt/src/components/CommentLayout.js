import React from 'react';

import Comment from './Comment.js'

const CommentLayout = ({
    comment,
    onDelete,
    onCancel,
    onEdit,
    onSubmit
}) => {

    return (
        <div>
            <Comment
                comment={comment.text}
            />
            <div name='nonEditingDiv' className={comment.editing ? 'hidden' : ''}>
                <button
                    name='deleteButton'
                    onClick={onDelete}>
                    Delete
                </button>
                <button
                    name='editButton'
                    onClick={onEdit}>
                    Edit
                </button>
            </div>
            <div name='editingDiv' className={comment.editing ? '' : 'hidden'}>
                <input
                    name='editInputBox'
                    defaultValue={comment.text}
                    onKeyDown={onSubmit}
                />
                <button
                    name='cancelButton'
                    onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </div >
    )
}




export default CommentLayout    