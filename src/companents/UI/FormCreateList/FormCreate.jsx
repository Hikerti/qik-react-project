import React, { useRef, useState } from 'react'
import style from './FormCreate.module.css'
import InputPost from '../Inputs/InputPost'
import ButtonPost from '../Button/ButtonPost'

function FormCreate({ setPosts, posts }) {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post}]);
        setPost({title: '', body: ''})
    };

  return (
    <form 
        className={style.FormCreateContainer}
        onSubmit={addNewPost}
    >
        <InputPost
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})}
            type="text"
            placeholder="Введите название поста"
        />
        <InputPost 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="Введите содержимое поста"
        />
        <ButtonPost type='submit'>Создать пост</ButtonPost>
    </form>
  )
}

export default FormCreate