import React from 'react'

import { Link } from 'react-router-dom'

import  { Redirect } from 'react-router-dom'

const ViewPost = props =>
  <div>
    {
      props.post
      ? <>
        <div>{props.post.id}</div>
        <div>{props.post.content}</div>
      </>
      : <Redirect to = '/'/>
    }
<Link to = '/'>back</Link>
  </div>

export default ViewPost