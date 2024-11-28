import React from 'react'
import List from './List'

function PostList({posts, title}) {
  return (
    <div className='PostList'>
      <h1 style={{color: 'red'}}>
        {title}
      </h1>
      { posts.map(post =>
        <List post = {post}/>
      )}
    </div>
  )
}

export default PostList