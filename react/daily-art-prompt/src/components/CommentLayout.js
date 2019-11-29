import React from 'react';

import Comment from './Comment.js'

const CommentLayout = ({
    comment,
    onDelete,
    onCancel,
    onEdit,
    onSubmit
}) =>
    (
        <div>
            <Comment
                comment={comment.text}
            />
            {!comment.editing
                ? (
                    <div name='nonEditingDiv'>
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
                )
                : (
                    <div name='editingDiv'>
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
                )}
        </div >
    )

export default CommentLayout    