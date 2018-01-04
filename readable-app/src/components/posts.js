import React from 'react';
import { fetchPosts } from '../actions/posts';
import { connect } from 'react-redux';

class PostList extends React.Component {
  /**
   * fetch Posts
   */
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="container">

        <h1 class="display-4">Posts <span class="lead">All</span></h1>
        <hr class="my-4" />

        <div className="row">
          {posts.map(post => {
            return (
              <div className="col-sm-6 col-md-4" style={{'margin-bottom': '1rem'}}>
                <div key={post.id} className="card">
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
export default connect(mapStateToProps)(PostList);
