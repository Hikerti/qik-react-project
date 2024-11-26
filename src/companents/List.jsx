import React from 'react'

function List(props) {
  return (
    <div className='container__lists'>
      <div className="container__list">
        <p>{props.post.id}. {props.post.title}</p>
        <p>{props.post.body}</p>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default List
