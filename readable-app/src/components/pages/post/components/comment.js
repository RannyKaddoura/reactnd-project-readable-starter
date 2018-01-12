import React, { Component } from 'react';
import moment from 'moment';
import CommentForm from './comment-form';
import { connect } from 'react-redux';
import { doVoteComment } from '../../../../actions/comments';

class Comment extends Component {
  state = {
    edit: false
  };

  toggleEdit = () => {
    this.setState(state => ({ edit: !state.edit }));
  };

  voteComment(option) {
    this.props.dispatch(doVoteComment(this.props.comment, option));
  }

  render() {
    const { comment } = this.props;
    return (
      <div>
        <strong>{comment.author}</strong>
        <span> </span>
        <i className="text-muted">
          {moment.unix(comment.timestamp).format('MMM Do YYYY h:mm:ss a')}
        </i>
        <span> </span>
        {comment.voteScore}
        <span> </span>
        <i
          className={
            'fa ' +
            (comment.voteScore < 0 ? 'fa-thumbs-o-down' : 'fa-thumbs-o-up')
          }
          aria-hidden="true"
        />
        <div>{comment.body}</div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a className="btn" onClick={() => this.toggleEdit()}>
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
              onClick={() => this.voteComment({ option: 'upVote' })}
            >
              <i className="fa fa-thumbs-o-up" aria-hidden="true" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn"
              onClick={() => this.voteComment({ option: 'downVote' })}
            >
              <i className="fa fa-thumbs-o-down" aria-hidden="true" />
            </a>
          </li>
        </ul>

        {this.state.edit && (
          <CommentForm comment={comment} toggleEdit={this.toggleEdit} />
        )}
      </div>
    );
  }
}

export default connect()(Comment);
