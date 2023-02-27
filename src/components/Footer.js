import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <a href="https://github.com/DragonSenses" className={styles.icon} target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://google.com/" className={styles.icon} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a href="https://google.com/" className={styles.icon} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-address-card"></i>
      </a>
    </footer>
  )
}
