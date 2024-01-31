import React from 'react'
import styles from './left.module.css'
import  SearchResults  from './SearchResults'



export default function SerchResultsList({ results }) {
    return (
        <div className={styles.resultList} >
            {results.map((result, id) => {
                return <SearchResults result={result} key={id} />
})}
        </div>
    )
}
