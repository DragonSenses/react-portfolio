import React from 'react'

export default function ImgOverlay(props) {
  const { imgSrc, title, description, githubLink, projectLink, children } = props;
  return (
    <div className={styles.imgDisplay}>
      <img className={styles.img} src={imgSrc} alt="project of ecommerce site" />
      <div className={styles.overlay}>
        <h2 className={styles.overlayHeader}>{title.toUpperCase()}</h2>
        <p className={styles.paragraph}>Paragraph describing project.
          {children}
        </p>
        <div className={styles.links}>
          <a className={styles.button} href={githubLink}>
            <i className={`fa-brands fa-github ${styles.icon}`}></i>
          </a>
          <a className={styles.button} href={projectLink}>Link to Project &#8594;</a>
        </div>
      </div>
    </div>
  )
}
