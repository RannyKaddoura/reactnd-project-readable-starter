import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory, fetchPosts } from '../actions/posts';
import {withRouter} from 'react-router-dom';

class PostList extends React.Component {
  /**
   * fetch Posts
   */
  componentDidMount() {
    this.props.fetchPosts();
  }

  /**
   * check if category has changes
   */
  componentDidUpdate (prevProps) {

    const category = this.props.match.params.category;

    if (prevProps.match.params.category !== category)
    {
      console.log(category, category === undefined)
      if  (category === undefined){
        this.props.fetchPosts();
      }else{
        this.props.fetchPostsByCategory(this.props.match.params.category);
      }
    }
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="container">

        <h1 className="display-4">Posts <span className="lead">All</span></h1>
        <hr className="my-4" />

        <div className="row">
          {posts.map(post => {
            return (
              <div  key={post.id} className="col-sm-6 col-md-4" style={{marginBottom: '1rem'}}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src="http://via.placeholder.com/350x150"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text">
                      {post.body}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });
const mapDispatchToProps = { fetchPostsByCategory, fetchPosts };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));
