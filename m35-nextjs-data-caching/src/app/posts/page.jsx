import React from 'react';

//  Data fetching Method
// const postsPromise= async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return res.json();
// }

/**
 * GET:
 * POST:
 * UPDATE: put patch
 * DELETE:
 * 
 */

 const getPosts= async()=>{
  const res  = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
 }


 const getPosts2= async()=>{
  try{
    const res  = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
  } catch{
    throw new Error('Failed to fetch posts');
  }
 }

 const getPosts3= async()=>{
  const res  = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok){
    throw new Error('Failed to fetch posts');
  }
  return res.json();
 }



const PostPage = async() => {
  // const posts = await postsPromise();
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  // const posts = await res.json();

  const posts = await getPosts();

  return (
    <div>
      <h2>Hello POST: {posts.length}</h2>
    </div>
  );
};

export default PostPage;