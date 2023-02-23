import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>Header Name</h1>
      <div className={styles.navItems}>
        <i className={`fa-solid fa-dragon ${styles.icons}`}></i>
        <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
        <i class={`fa-solid fa-list-check ${styles.icons}`}></i>
        <i className={`fa-solid fa-book-open ${styles.icons}`}></i>
      </div>
    </header>
  )
}
