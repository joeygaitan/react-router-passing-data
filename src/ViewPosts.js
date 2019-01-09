import React from 'react'

import { Link } from 'react-router-dom'

const ViewPosts = ({posts, handleClickPost}) =>
  <div>
    {
      posts.map(post => 
        <div key={post.id} onClick={()=> handleClickPost(post.id)}>{post.content.slice(0,100)}...</div>)
    }
    <Link to ='/new'>post</Link>
  </div>


export default ViewPosts