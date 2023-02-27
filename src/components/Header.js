import React from 'react'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>Header Name</h1>
      <nav className={styles.navItems}>
        <a href='#about-me' className={styles.anchor}>
          <i className={`fa-solid fa-dragon ${styles.icons}`}></i>
        </a>

        <a href='#skills' className={styles.anchor}>
          <i className={`fa-solid fa-list-check ${styles.icons}`}></i>
        </a>

        <a href='#projects' className={styles.anchor}>
          <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
        </a>

        <a href='#experience' className={styles.anchor}>
          <i className={`fa-solid fa-book-open ${styles.icons}`}></i>
        </a>

      </nav>
    </header>
  )
}
