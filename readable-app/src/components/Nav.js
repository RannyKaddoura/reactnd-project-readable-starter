import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categories';

class Nav extends Component {

  /**
   * fetch categories
   */
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            All
          </a>
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
              {this.props.categories.map(category => {
                return (
                  <li key={category.path} className="nav-item active">
                    <a className="nav-link" href="#">
                      {category.name} <span className="sr-only">(current)</span>
                    </a>
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
