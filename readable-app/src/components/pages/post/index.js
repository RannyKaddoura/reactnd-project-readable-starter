import React from 'react';
import Nav from '../../nav';
import PostDetails from './details';

class Post extends React.Component{

  render(){
    return (
      <div>
        <Nav />
        <PostDetails/>
      </div>
    )
  }

}

export default Post;
