import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import img1 from '../assets/img1.jpg'
import ImgOverlay from './ImgOverlay'


export default function Projects() {
  return (
    <section id='projects'>
      <div className={styles.wrapper}>
        <SectionIntroduction>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>

          <ImgOverlay
            imgSrc={img1}
            description={"first project is an ecommerce site"}
            title={"PROJECT 1"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>Stripe.js</strong> and <strong>Commerce.js</strong>
          </ImgOverlay>


        </div>
      </div>
    </section>
  )
}
