import React from 'react'
import List from './List'

function PostList({posts, title}) {
  return (
    <div className='PostList'>
      <h1 style={{color: 'red'}}>
        {title}
      </h1>
      { posts.map((post, index) =>
        <List number = {index + 1} post = {post}/>
      )}
    </div>
  )
}

export default PostList