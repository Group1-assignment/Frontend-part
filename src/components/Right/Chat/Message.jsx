import React from 'react'
import Styles from '../right.module.css'


 const Message = ({text, sender}) =>{
  return (
    <div>
      <div className={Styles.Sender}>{sender} </div>: <div className={Styles.text}>{text}</div>
    </div>
  )
}
export default Message