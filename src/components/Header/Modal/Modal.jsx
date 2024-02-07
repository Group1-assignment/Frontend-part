import React, { useState } from "react"
import styles from "./modal.module.css"


export default function Modal() {

    const [modal, setModal] = useState(false)
    
    const toggleModal = () => {
        setModal(!modal)
  return (
  <>
  <button onklick= {toggleModal} className={styles.btn-modal}>Sign In</button>
  <div className={styles.overlay} onklick={toggleModal}>
    <div>
        <h2>Sign In</h2>
        <p> username  </p>
        <p> password  </p>
        <p> third  </p>
        <button onclick= {toggleModal} className={styles.btn-close}>Close</button>
    </div>
  </div>
  </>
  )
}
}