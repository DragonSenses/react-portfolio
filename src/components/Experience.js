import React from 'react'
import styles from './experience.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id='experience'>
      <div className={styles.wrapper}>

        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>

        <ul className={styles.sectionContent}>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
        
      </div>
    </section>
  )
}
