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



        </div>
      </div>
    </section>
  )
}
