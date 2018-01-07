import React from 'react';
import moment from 'moment';
import CommentForm from './comment-form';

export default function PostDetails(props) {
  const { post, comments } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 blog-main">
          <div className="blog-post">
            <h2>{post.title}</h2>
            <p className="blog-post-meta">
              {moment.unix(post.timestamp).format('MMM Do YYYY h:mm:ss a')} by
              Mark
            </p>
            <div>{post.body}</div>

            <hr className="my-3" />

            {comments.length > 0 && (
              <div className="comments">
                <h4>Comments</h4>
                {comments.map(comment => (
                  <div key={comment.id}>{comment.body}</div>
                ))}
              </div>
            )}

            <CommentForm post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}
