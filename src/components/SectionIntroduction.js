import React from 'react'
import styles from './sectionintroduction.module.css'

export default function SectionIntroduction(props) {
  const { children } = props;
  return (
    <div className={styles.headerText}>
      <div className={styles.line}></div>
      <h1 className={styles.text}>{children}</h1>
      <div className={styles.line}></div>
    </div>
  )
}
