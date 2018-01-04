import React from 'react';
import PostList from '../../posts';
import Nav from '../../nav';

export default function HomePage(props) {
  return (
    <div>
      <Nav />
      <PostList />
    </div>
  );
}
