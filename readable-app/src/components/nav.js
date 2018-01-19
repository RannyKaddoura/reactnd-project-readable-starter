import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchCategories } from '../actions/categories';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  /**
   * fetch categories
   */
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    const currentCategory = this.props.match.params.category;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            All
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto">
              {categories.map(category => {
                return (
                  <li
                    key={category.path}
                    className={
                      'nav-item ' +
                      (currentCategory === category.name ? 'active' : '')
                    }
                  >
                    <Link to={`/${category.path}`} className="nav-link">
                      {category.name} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to={'/new'} className="btn btn-secondary">
              New Post
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });
const mapDispatchToProps = { fetchCategories: doFetchCategories };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
