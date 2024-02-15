import React, { useState } from 'react'
import styles from '../header.module.css'



export default function Modal({ setModal }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
   
   

  const loginRequest = async () => {
    const apiUrl = 'https://localhost:7168/User/login'

  }
  return (
    <>

      <div className={styles.overlay} onClick={() => setModal("")}>
        <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
          <h2>Sign In</h2>
          <p> username  </p>
          <input type="Username" />

          <p> password  </p>
          <input type="password" />

          <button onClick={() => setModal("")} >Close</button>
          <button>Sign In</button>
        </div>
      </div>
    </>
  )
}
