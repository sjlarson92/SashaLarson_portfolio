import React from 'react';

import Comment from './Comment.js'

const CommentLayout = ({ comment, onClick }) =>
    <div>
        <Comment
            comment={comment.text}
        />
        <button name='deleteButton' onClick={onClick}>
            Delete
        </button>
        <button name='editButton'>
            Edit
        </button>
    </div >

export default CommentLayout    