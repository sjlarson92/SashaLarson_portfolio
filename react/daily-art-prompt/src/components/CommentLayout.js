import React from 'react';

import Comment from './Comment.js'

const CommentLayout = ({ comment }) =>
    <div>
        <Comment
            comment={comment.text}
        />
        <button onClick={() => console.log('delete button clicked')}>
            Delete
        </button>
    </div>

export default CommentLayout    