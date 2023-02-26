import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import picture from '../assets/img1.jpg'


export default function Projects() {
  return (
    <section id='projects'>
      <div className={styles.wrapper}>
        <SectionIntroduction>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          <div className={styles.imgDisplay}>
            <img className={styles.img} src={picture} alt="project of ecommerce site" />
            <div className={styles.overlay}>
              <h2 className={styles.overlayHeader}>PROJECT 1</h2>
              <p className={styles.paragraph}>Paragraph describing project.
              Built with: <strong>Stripe.js</strong> and <strong>Commerce.js</strong></p>
              <div className={styles.links}>
                <a className={styles.button} href="#">
                  <i className={`fa-brands fa-github ${styles.icon}`}></i>
                </a>
                <a className={styles.button} href="#">Link to Project &#8594;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
