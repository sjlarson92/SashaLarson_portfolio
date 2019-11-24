import React from 'react';

import Comment from './Comment.js'

const CommentLayout = ({ comment, onClick }) =>
    <div>
        <Comment
            comment={comment.text}
        />
        <button onClick={onClick}>
            Delete
        </button>
    </div >

export default CommentLayout    