import React, {useState} from 'react'
const [modal, setModal] = useState(false)

export default function modal() {
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
}}
