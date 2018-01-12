import React from 'react';
import Nav from '../../nav';
import PostDetails from './components/details';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../../../actions/post';
import { doFetchComments } from '../../../actions/comments';

class Post extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.post;
    this.props.dispatch(fetchPost(postId));
    this.props.dispatch(doFetchComments(postId));
  }

  render() {
    return (
      <div>
        <Nav />
        <PostDetails post={this.props.post} comments={this.props.comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ post, comments }) => ({ post, comments });

export default withRouter(connect(mapStateToProps)(Post));
