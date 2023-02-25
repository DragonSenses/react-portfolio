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
            <img src={picture} alt="" />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
