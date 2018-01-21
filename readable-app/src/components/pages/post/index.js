import React from 'react';
import Nav from '../../nav';
import PostDetails from './components/details';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doFetchPost, doVotePost, doDeletePost } from '../../../actions/post';
import { doFetchComments } from '../../../actions/comments';
import NotFound from './components/notfound';

class Post extends React.Component {
  componentDidMount() {
    const postId = this.props.match.params.post;
    this.props.doFetchPost(postId);
    this.props.doFetchComments(postId);
  }

  votePost(option) {
    this.props.doVotePost(this.props.post, option);
  }

  deletePost() {
    this.props.doDeletePost(this.props.post).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post, comments } = this.props;
    console.log(post)
    return (
      <div>
        <Nav />
        {post.id && post ?
          (<PostDetails
            post={post}
            comments={comments}
            votePost={option => this.votePost(option)}
            deletePost={() => this.deletePost()}
          />)
         :
          (<NotFound/>)
        }
      </div>
    );
  }
}

const mapStateToProps = ({ post, comments }) => ({ post, comments });
const mapDispatchToProps = {
  doFetchPost,
  doFetchComments,
  doVotePost,
  doDeletePost
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
