import React from 'react'
import FishPic from '../../assets/fish.jpeg'
import styles from './post.module.css'

export default function Post() {
  return (
    <div className={styles.card}>
        <img className={styles.image} src={FishPic} alt="Fish" />
        <h2 className={styles.title}>stuff</h2>
        <p className={styles.text}>Posts and stuff and fish lorem </p>
    </div>
  )
}
