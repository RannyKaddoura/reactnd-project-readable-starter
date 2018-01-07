import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory, fetchPosts } from '../actions/posts';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

class PostList extends React.Component {
  /**
   * fetch Posts
   */
  componentDidMount() {
    this.props.fetchPosts();
  }

  /**
   * check if category has changed and fetch for category or all
   */
  componentDidUpdate(prevProps) {
    const currentCategory = this.props.match.params.category;
    const prevCategory = prevProps.match.params.category;

    if (prevCategory !== currentCategory) {
      if (currentCategory === undefined) {
        this.props.fetchPosts();
      } else {
        this.props.fetchPostsByCategory(this.props.match.params.category);
      }
    }
  }

  render() {
    const { posts } = this.props;
    const category = this.props.match.params.category;

    return (
      <div className="container">
        <h1 className="display-4">
          Posts <span className="lead">{ category === undefined ? 'all' : category }</span>
        </h1>
        <hr className="my-4" />

        <div className="row card-deck">
          {posts.map(post => {
            return (
              <div
                key={post.id}
                className="col-sm-6 col-md-4"
                style={{ marginBottom: '1rem' }}
              >
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>

                    <small className="text-muted">
                      <div className="timestamp">
                        <i class="fa fa-calendar" aria-hidden="true" />{' '}
                        {moment
                          .unix(post.timestamp)
                          .format('MMM Do YYYY, h:mm:ss a')}
                      </div>
                      <div className="author">
                        <i class="fa fa-user-circle-o" aria-hidden="true" /> {post.author}
                      </div>
                    </small>

                    <hr className="my-2" />

                    <p className="card-text">{post.body}</p>

                    <hr className="my-2" />
                    <div className="card-controls">
                      <a href="#" className="btn btn-info btn-sm float-right">
                        Read more
                      </a>
                    </div>
                    <div className="clearfix" />
                    <hr className="my-2" />

                    <small className="footer text-muted">
                      <div className="votes float-right">
                        <i class={"fa "  + (post.voteScore < 0 ? 'fa-thumbs-o-down' : 'fa-thumbs-o-up') }  aria-hidden="true"></i> { post.voteScore }
                      </div>
                      <div className="category">
                        <i class="fa fa-tag" aria-hidden="true"></i> { post.category }
                      </div>
                    </small>

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
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostList)
);
