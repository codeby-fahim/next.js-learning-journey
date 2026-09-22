import React from 'react';
import Post from '../Components/Post';

const PostsPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return (
    <div>
      <h2>Post Page: {posts.length}</h2>
      <div className='grid grid-cols-3 gap-4'>
        {
        posts.map(post=>{
          return <Post post={post} key={post.id}></Post>
        })
      }
      </div>
    </div>
  );
};

export default PostsPage;