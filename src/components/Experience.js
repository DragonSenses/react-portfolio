import React from 'react'
import styles from './experience.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id='experience'>
      <div className={styles.wrapper}>
        
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>

        <div className={styles.sectionContent}></div>
        
      </div>
    </section>
  )
}
