import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <i className={`fa-brands fa-github ${styles.icon}`}></i>
      <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
      <i className={`fa-solid fa-address-card ${styles.icon}`}></i>
    </footer>
  )
}
