import React from 'react'
import styles from './footer.module.css'

export default function Footer(props) {
  const { dark } = props;

  return (
    <footer className={(dark ? styles.footerWrapperDark : styles.footerWrapper)}>
      <a href="https://github.com/DragonSenses" 
         className={(dark ? styles.iconDark : styles.icon)} 
         target="_blank" rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a href="https://google.com/" 
         className={(dark ? styles.iconDark : styles.icon)} 
         target="_blank" rel="noreferrer"
      >
        <i className="fa-solid fa-envelope"></i>
      </a>

      <a href="https://google.com/" 
         className={(dark ? styles.iconDark : styles.icon)} 
         target="_blank" rel="noreferrer"
      >
        <i className="fa-solid fa-address-card"></i>
      </a>
    </footer>
  )
}
