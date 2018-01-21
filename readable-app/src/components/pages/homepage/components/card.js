import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { post } = props;
  return (
    <div
      key={post.id}
      className="col-sm-6 col-md-4"
      style={{ marginBottom: '1rem' }}
    >
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>

          <small className="text-muted">
            <div className="timestamp">
              <i className="fa fa-calendar" aria-hidden="true" />
              {moment.unix(post.timestamp).format('D MMM YYYY h:ma')}
            </div>
            <div className="author">
              <i className="fa fa-user-circle-o" aria-hidden="true" />{' '}
              {post.author}
            </div>
          </small>

          <hr className="my-2" />

          <p className="card-text">{post.body}</p>

          <hr className="my-2" />
          <div className="card-controls">
            <Link
              to={`/${post.category}/${post.id}`}
              className="btn btn-info btn-sm float-right"
            >
              Read more
            </Link>
          </div>
          <div className="clearfix" />
          <hr className="my-2" />

          <small className="footer text-muted">
            <div className="votes float-right">
              <i
                className={
                  'fa ' +
                  (post.voteScore < 0 ? 'fa-thumbs-o-down' : 'fa-thumbs-o-up')
                }
                aria-hidden="true"
              />{' '}
              {post.voteScore}
            </div>
            <div className="category">
              <i className="fa fa-tag" aria-hidden="true" /> {post.category}
            </div>
          </small>
        </div>
      </div>
    </div>
  );
}
