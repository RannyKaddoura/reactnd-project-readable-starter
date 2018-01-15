import React from 'react';
import Nav from '../../nav';
import PostForm from './components/post-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doFetchPost, doCreatePost, doUpdatePost } from '../../../actions/post'

class EditPost extends React.Component {

  componentDidMount(){
    const postId = this.props.match.params.post;
    if(postId){
      this.props.dispatch(doFetchPost(postId));
    }
  }

  handleSubmit = (post) => {
    if(post.id){
      this.props.dispatch(doUpdatePost(post));
    }else{
      this.props.dispatch(doCreatePost({...post}));
    }

    this.props.history.push(`/${post.category}/${post.id}`);
  }

  render() {
    const {post} = this.props;
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <PostForm post={post} onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({post});
export default withRouter(connect(mapStateToProps)(EditPost));
