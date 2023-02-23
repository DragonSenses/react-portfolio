import React from 'react'
import styles from './aboutme.module.css'

export default function Aboutme() {
  return (
    <section id='about-me' className={styles.aboutMe}>
      <div className={styles.wrapper}>
        <div className={styles.headerText}>
          <div className={styles.line}></div>
          <h1 className={styles.text}>About Me</h1>
          <div className={styles.line}></div>
        </div>
      </div>
    </section>
  )
}
