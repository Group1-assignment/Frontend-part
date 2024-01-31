import React, { useState } from 'react'
import styles from './left.module.css'
import { FaSearch } from 'react-icons/fa';


//
export default function SearchBar({ setResults})  {
    const [input, setInput] = useState("")
    const fetchData = (value) => (
        fetch("https://jasonplaceholder.tyoicode.com/users")
        .then((response) => response.jason()) //
        .then((jason) => 
        {const results = json.filter((user) => {
            return ( //bör engetligen filtreras i backend. test version nu bara 
                value &&
                 user && 
                 user.name &&
                 user.name.toLowerCase().includes(value)

            )
        });
        setResults(results)
        }))

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return (
        <div className={styles.inputWrapper} >
            <FaSearch />
            <input placeholder='Type to search' value={input}
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
