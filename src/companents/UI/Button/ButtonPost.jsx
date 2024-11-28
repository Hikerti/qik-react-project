import React from 'react'
import classBtn from "./Button.module.css"

function ButtonPost({children}) {
  return (
    <button className={classBtn.myBtn}>
        {children}
    </button>
  )
}

export default ButtonPost