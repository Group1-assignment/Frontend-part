import React from 'react'
import { SidebarData } from './SidebarData'
import styles from '../left.module.css'




export default function Sidebar() {
    
    return (
        <div className={styles.Sidebar}>
            <ul className={styles.SidebarList}>
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className={styles.row} onClick={() => {window.location.pathname = val.link}}>

                            <div className={styles.icon}>
                                {val.icon}
                            </div>

                             <div className={styles.title}>
                                {val.titel}
                            </div>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}
