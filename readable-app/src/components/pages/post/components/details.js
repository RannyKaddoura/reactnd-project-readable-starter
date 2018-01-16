import React from 'react';
import moment from 'moment';
import CommentForm from './comment-form';
import Comment from './comment';
import { Link } from 'react-router-dom';

export default function PostDetails(props) {
  const { post, comments, votePost, deletePost } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 blog-main">
          <div className="blog-post">
            <div className="jumbotron p-3">
              <div className="post-body bg-light p-2">
                <h2>{post.title}</h2>
                <p className="blog-post-meta text-muted">
                  <strong>{post.author}</strong>
                  {' posted on '}
                  {moment.unix(post.timestamp).format('D MMM YYYY h:ma')}
                </p>
                <hr className="my-4" />
                <div>
                  {post.body}
                </div>
              </div>
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
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fa fa-user" /> {post.author}
              </li>
              <li className="list-group-item">
                <i className="fa fa-tag" /> {post.category}
              </li>
              <li className="list-group-item">
                <i className="fa fa-calendar" />{' '}
                {moment.unix(post.timestamp).format('D MMM YYYY h:ma ')}
              </li>
              <li className="list-group-item">
                <span>
                  <i
                    className={
                      'fa ' +
                      (post.voteScore < 0
                        ? 'fa-thumbs-o-down'
                        : 'fa-thumbs-o-up')
                    }
                    aria-hidden="true"
                  />
                  <span> {post.voteScore}</span>
                </span>
                <span className="float-right">
                  <button className="btn btn-success btn-xs mr-1" onClick={() => votePost({option: 'upVote'})}>
                    <i className="fa fa-thumbs-o-up" />
                  </button>
                  <button className="btn btn-warning btn-xs" onClick={() => votePost({option: 'downVote'})}>
                    <i className="fa fa-thumbs-o-down" />
                  </button>
                </span>
                <span className="clearfix" />
              </li>
            </ul>

            <div className="float-right my-2">
              <Link
                to={`/${post.category}/${post.id}/edit`}
                className="btn btn-info mr-1"
              >
                <i className="fa fa-pencil-square-o" aria-hidden="true" /> Edit
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => deletePost()}
              >
                <i className="fa fa-times" aria-hidden="true" /> Delete
              </button>
            </div>
            <div className="clearfix" />
          </div>
        </aside>
      </div>
    </div>
  );
}
