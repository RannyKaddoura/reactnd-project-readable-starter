import React from 'react';
import Nav from '../../nav';
import PostForm from './components/post-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { doFetchPost } from '../../../actions/post'

class EditPost extends React.Component {

  componentDidMount(){
    const postId = this.props.match.params.post;
    if(postId){
      this.props.dispatch(doFetchPost(postId));
    }
  }

  render() {
    const {post} = this.props;
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <PostForm post={post} onSubmit={values => {console.log(values)}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({post});
export default withRouter(connect(mapStateToProps)(EditPost));
