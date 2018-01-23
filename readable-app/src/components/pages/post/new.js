import React from 'react';
import { connect } from 'react-redux';
import Nav from '../../nav';
import PostForm from './components/post-form';
import { doCreatePost, doClearPost } from '../../../actions/post';
import { withRouter } from 'react-router-dom';

class CreatePost extends React.Component {
  componentDidMount() {
    this.props.doClearPost();
  }

  handleSubmit(post) {
    this.props.doCreatePost(post).then(post => {
      this.props.history.push(`/${post.category}/${post.id}`);
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <PostForm post={{}} onSubmit={post => this.handleSubmit(post)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(null, { doCreatePost, doClearPost })(CreatePost)
);
