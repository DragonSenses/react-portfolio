import React from 'react'
import styles from './projects.module.css'
import SectionIntroduction from './SectionIntroduction'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
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

          <ImgOverlay
            imgSrc={img2}
            description={"second project"}
            title={"PROJECT 2"}
            projectLink={"https://google.com"}
            githubLink={"https://google.com"}>
            Paragraph describing project.
            Built with: <strong>Stripe.js</strong> and <strong>Commerce.js</strong>
          </ImgOverlay>

          <ImgOverlay
            imgSrc={img3}
            description={"third project is an ecommerce site"}
            title={"PROJECT 3"}
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
