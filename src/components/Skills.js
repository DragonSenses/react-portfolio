import React from 'react'
import styles from './skills.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Skills() {
  return (
    <section id='skills'>
      <SectionIntroduction dark={true}>SKILLS</SectionIntroduction>

      <div className={styles.sectionContent}>

      </div>
    </section>
  )
}
