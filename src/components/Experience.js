import React from 'react'
import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience() {
  return (
    <section id='experience'>
      <div className={styles.wrapper}>

        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>

        <div className={styles.sectionContent}>
          <ListEntry title={"Workplace"} date={"2017 - 2022"}>
            <li>List Item</li>
            <li>List Item</li>
          </ListEntry>
          <ListEntry title={"Workplace"} date={"2017 - 2022"}>
            <li>List Item</li>
          </ListEntry>
          <ListEntry title={"Workplace"} date={"2017 - 2022"}>
            <li>List Item</li>
          </ListEntry>
        </div>
        
      </div>
    </section>
  )
}
