import React from 'react';
import moment from 'moment';
import CommentForm from './comment-form';
import Comment from './comment';

export default function PostDetails(props) {
  const { post, comments } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 blog-main">
          <div className="blog-post">
            <div className="jumbotron">
              <h2>{post.title}</h2>
              <p className="blog-post-meta">
                <strong>{post.author}</strong>{' posted on '}
                {moment.unix(post.timestamp).format('MMM Do YYYY h:mm:ss a')}
                <i
                  className={
                    'fa ' +
                    (post.voteScore < 0 ? 'fa-thumbs-o-down' : 'fa-thumbs-o-up')
                  }
                  aria-hidden="true"
                />
              </p>
              <hr className="my-4" />
              <p className="blockquote">{post.body}</p>
            </div>

            <hr className="my-3" />

            {comments.length > 0 && (
              <div className="comments">
                <h4>Comments</h4>
                {comments.map(comment => (
                  <div key={comment.id}>
                    <Comment comment={comment} />
                    <hr className="my-1" />
                  </div>
                ))}
              </div>
            )}

            <CommentForm />
          </div>
        </div>
        <aside className="col-sm-3 ml-sm-auto blog-sidebar">
          <div className="sidebar-module sidebar-module-inset">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="btn">
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn">
                  <i className="fa fa-times" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn"
                >
                  <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn"
                >
                  <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
