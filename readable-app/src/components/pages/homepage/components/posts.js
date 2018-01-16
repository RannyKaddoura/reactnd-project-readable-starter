import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPostsByCategory, fetchPosts, doSortPosts } from '../../../../actions/posts';
import moment from 'moment';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  /**
   * fetch Posts
   */
  componentDidMount() {
    this.doFetchCategories();
  }

  /**
   * check if category has changed and fetch for category or all
   */
  componentDidUpdate(prevProps) {
    const currentCategory = this.props.match.params.category;
    const prevCategory = prevProps.match.params.category;

    if (prevCategory !== currentCategory) {
      this.doFetchCategories();
    }
  }

  sortPosts(sortBy){
    this.props.doSortPosts(this.props.posts, sortBy);
  }

  doFetchCategories = () => {
    const { category } = this.props.match.params;

    if (category !== undefined) {
      this.props.fetchPostsByCategory(category);
    } else {
      this.props.fetchPosts();
    }
  }

  render() {
    const { posts } = this.props;
    const category = this.props.match.params.category;

    return (
      <div className="container">
        <h1 className="display-4">
          Posts{' '}
          <span className="lead">
            {category === undefined ? 'all' : category}
          </span>
        </h1>
        <div className="float-right" style={{marginTop: -25}}>
          <select name="sort" onChange={(e) => this.sortPosts(e.target.value)}>
            <option value="">Please select...</option>
            <option value="timestamp">Date</option>
            <option value="voteScore">Votes</option>
          </select>
        </div>
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
                        <i className="fa fa-calendar" aria-hidden="true" />
                        {moment
                          .unix(post.timestamp)
                          .format('D MMM YYYY h:ma')}
                      </div>
                      <div className="author">
                        <i className="fa fa-user-circle-o" aria-hidden="true" />{' '}
                        {post.author}
                      </div>
                    </small>

                    <hr className="my-2" />

                    <p className="card-text">{post.body}</p>

                    <hr className="my-2" />
                    <div className="card-controls">
                      <Link
                        to={`/${post.category}/${post.id}`}
                        className="btn btn-info btn-sm float-right"
                      >
                        Read more
                      </Link>
                    </div>
                    <div className="clearfix" />
                    <hr className="my-2" />

                    <small className="footer text-muted">
                      <div className="votes float-right">
                        <i
                          className={
                            'fa ' +
                            (post.voteScore < 0
                              ? 'fa-thumbs-o-down'
                              : 'fa-thumbs-o-up')
                          }
                          aria-hidden="true"
                        />{' '}
                        {post.voteScore}
                      </div>
                      <div className="category">
                        <i className="fa fa-tag" aria-hidden="true" />{' '}
                        {post.category}
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
const mapDispatchToProps = { fetchPostsByCategory, fetchPosts, doSortPosts };
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Posts)
);
