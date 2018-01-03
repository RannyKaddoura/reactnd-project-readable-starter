import React from 'react';
import PostList from './PostList';
import Nav from './Nav';

export default function DefaultPage() {
  return (
    <div>
      <Nav />
      <PostList />
    </div>
  );
}
