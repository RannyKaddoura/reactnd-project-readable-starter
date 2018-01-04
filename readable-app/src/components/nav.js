import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Nav extends Component {
  /**
   * fetch categories
   */
  componentDidMount() {
    this.props.fetchCategories();
  }

  /**
   * check if category has changes
   */
  componentDidUpdate (prevProps) {
    console.log(prevProps);
  }

  render() {
    const { categories } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to='/' className="navbar-brand">
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
                  <li key={category.path} className={"nav-item " + (this.props.match.category === category.path ? 'active' : '')}>
                    <Link to={category.path} className="nav-link">
                      {category.name} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });
const mapDispatchToProps = { fetchCategories };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
