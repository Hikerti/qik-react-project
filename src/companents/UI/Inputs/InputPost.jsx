import React from 'react'
import classInput from './Input.module.css'

const InputPost = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classInput.myInput} {...props}/>
  )
})

export default InputPost