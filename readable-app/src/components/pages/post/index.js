import React from 'react';
import Nav from '../../nav';
import PostDetails from './components/details';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doFetchPost } from '../../../actions/post';
import { doVotePost } from '../../../actions/post';
import { doFetchComments } from '../../../actions/comments';

class Post extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.post;
    this.props.doFetchPost(postId);
    this.props.doFetchComments(postId);
  }

  votePost(option){
    this.props.doVotePost(this.props.post, option);
  }

  render() {
    const {post, comments} = this.props;
    return (
      <div>
        <Nav />
        <PostDetails post={post} comments={comments} vote={(option) => this.votePost(option)} />
      </div>
    );
  }
}

const mapStateToProps = ({ post, comments }) => ({ post, comments });
const mapDispatchToProps = {doFetchPost, doFetchComments, doVotePost};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
