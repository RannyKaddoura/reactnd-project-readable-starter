import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../../../actions/posts';
import Card from './card';

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

  sortPosts() {
    this.props.doSortPosts(this.props.posts, this.sortSelect.value);
  }

  doFetchCategories = () => {
    const { category } = this.props.match.params;
    this.sortSelect.value = ''; //if removed, filters are sticky over catgeories
    if (category !== undefined) {
      this.props.fetchPostsByCategory(category).then(() => {
        this.sortPosts();
      });
    } else {
      this.props.fetchPosts().then(() => {
        this.sortPosts();
      });
    }
  };

  render() {
    const { posts } = this.props;
    const category = this.props.match.params.category;

    return (
      <div className="container">
        <h1 className="display-4" style={{ display: 'inline-block' }}>
          Posts{' '}
          <span className="lead">
            {category === undefined ? 'all' : category}
          </span>
        </h1>
        <div className="float-right">
          <select
            className="form-control"
            defaultValue=""
            ref={input => {
              this.sortSelect = input;
            }}
            name="sort"
            onChange={e => this.sortPosts()}
          >
            <option value="" disabled="disabled">
              Filter...
            </option>
            <option value="-timestamp">Date: From Newest to Oldest</option>
            <option value="timestamp">Date: From Oldest to Newest</option>
            <option value="voteScore">Votes: From Low to High</option>
            <option value="-voteScore">Votes: From High to Low</option>
          </select>
        </div>

        <hr className="my-4" />

        <div className="row card-deck">
          {posts.map(post => <Card key={post.id} post={post} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });
export default withRouter(connect(mapStateToProps, actions)(Posts));
