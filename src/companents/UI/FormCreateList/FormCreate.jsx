import React, { useRef, useState } from 'react'
import style from './FormCreate.module.css'
import InputPost from '../Inputs/InputPost'
import ButtonPost from '../Button/ButtonPost'

function FormCreate(props) {
    const [title, setTitle] = useState('')
    const bodyInput = useRef()

    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title)
        console.log(bodyInput.current.value)
    }

  return (
    <form 
        className={style.FormCreateContainer}
        onSubmit={addNewPost}
    >
        <InputPost
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Введите название поста"
        />
        <InputPost 
            ref={bodyInput}
            type="text" 
            placeholder="Введите содержимое поста"
        />
        <ButtonPost type='submit'>Создать пост</ButtonPost>
    </form>
  )
}

export default FormCreate