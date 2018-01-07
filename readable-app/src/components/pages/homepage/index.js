import React from 'react';
import PostList from './components/posts';
import Nav from '../../nav';

export default function HomePage(props) {
  return (
    <div>
      <Nav />
      <PostList />
    </div>
  );
}
