import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import picture from '../assets/picture.png'


export default function Projects() {
  return (
    <section id='projects'>
      <div className={styles.wrapper}>
        <SectionIntroduction>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          <div className={styles.imgDisplay}>
            <img className={styles.img} src={picture} alt="project of ecommerce site" />
            <div className={styles.overlay}>
              <h2>Project</h2>
              <p>Paragraph describing project</p>
              <div>
                <a href="">Live Demo Link</a>
                <a href="">Github Link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
