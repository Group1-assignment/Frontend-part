import React, { useState, useEffect } from 'react'
import styles from '.././left.module.css'
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';


//
export default function SearchBar({ setResults }) {
    const [input, setInput] = useState("")

    fetch('/api/weatherforecast')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } console.log(response)
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(`%c ${error}`, 'color: orange;');
      })
    
    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json()) //
            .then((json) => {
                const results = json.filter((user) => {

                    return ( //bör engetligen filtreras i backend. test version nu bara 
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)

                    )
                })
                setResults(results)
            })
    }

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
