import React from 'react';

export default function PostList() {
  return (
    <div className="container">
      <div className="row">
        <div className="card" style={{ width: '20rem' }}>
          <img
            className="card-img-top"
            src="http://via.placeholder.com/350x150"
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
