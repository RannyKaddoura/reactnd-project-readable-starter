import React from 'react';
import Posts from './components/posts';
import Nav from '../../nav';

export default function HomePage(props) {
  return (
    <div>
      <Nav />
      <Posts />
    </div>
  );
}
