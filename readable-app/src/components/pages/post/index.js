import React from 'react';
import Nav from '../../nav';
import PostDetails from './components/details';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doFetchPost } from '../../../actions/post';
import { doFetchComments } from '../../../actions/comments';

class Post extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.post;
    this.props.dispatch(doFetchPost(postId));
    this.props.dispatch(doFetchComments(postId));
  }

  render() {
    const {post, comments} = this.props;
    return (
      <div>
        <Nav />
        <PostDetails post={post} comments={comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ post, comments }) => ({ post, comments });

export default withRouter(connect(mapStateToProps)(Post));
