import React from 'react';
import PostList from './PostList';
import Nav from './Nav';

export default function DefaultPage(props) {
  return (
    <div>
      <Nav categories={props.categories} />
      <PostList />
    </div>
  );
}
