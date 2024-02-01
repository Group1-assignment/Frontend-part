import React from 'react'
import styles from '.././left.module.css'

export default function SearchResults({result}) {
  return (
    <div className={styles.searchResults}>
      {result.name}
    </div>
  )
}
