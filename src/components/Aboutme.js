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
        <div className={styles.sectionContent}>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              I am strongly committed to the philosophy of 
              life-long learning & stoicism.
            </p>
          </div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              I am a full stack developer with an ardent passion for all things
                Web Development, JavaScript and React.
            </p>
          </div>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              I take pride in writing clean and reusable code.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  )
}
