import React from 'react'
import styles from './aboutme.module.css'

export default function Aboutme() {
  return (
    <section id='about-me' className={styles.aboutMe}>
      <div className={styles.wrapper}>

        <div className={styles.headerText}>
          <div className={styles.line}></div>
          <h1 className={styles.text}>About Me</h1>
          <div className={styles.line}></div>
        </div>

        <div className={styles.sectionContent}>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              I am strongly committed to the philosophy of <strong>life-long learning</strong> & stoicism. 
            </p>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              I am a <strong>Full Stack Developer</strong> with an ardent passion for all things
                Web Development, JavaScript and React.
            </p>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              I take pride in writing clean, maintainable and reusable code.
            </p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.contentHeader}>Self-Motivated</h3>
            <p className={styles.paragraph}>
              Passionate about technologies that have real impact.
              Whether its the latest tech developments, tools or frameworks.
            </p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.contentHeader}>
              Quick Learner
            </h3>
            <p className={styles.paragraph}>
              I am a nerd about computer science. These are things I'd be fantastic
              at learning.
            </p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.contentHeader}>Proactive</h3>
            <p className={styles.paragraph}>
              I love taking the initiative. Give me a difficult problem and 
              I'll figure out how to get it done and execute.
            </p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.contentHeader}>
              Accountable
            </h3>
            <p className={styles.paragraph}>
              I can work in unstructured environments and take ownership even in ambiguous situations.
            </p>
            <p><strong>To be in harmony with an inhospitable environment.</strong></p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.contentHeader}>
              Communicator
            </h3>
            {/* <p className={styles.paragraph}>
              As a stoic, I study rhetoric: the art of conveying ideas well. 
            </p> */}
            <p className={styles.paragraph}>I value effective communication, whether 
              its asking the right questions, feedback, or understanding concepts.
            </p>
          </div>

          <div className={styles.content}>
            <h3 className={styles.contentHeader}>
              Empathetic
            </h3>
            <p className={styles.paragraph}>
              I'll put in the extra effort to seek to understand others.
              Whether its a teammate or the end-user. 
            </p>
          </div>

          {/* <div className={styles.content}>
            <h3 className={styles.contentHeader}>
              End-User Focused
            </h3>
            <p className={styles.paragraph}>
              A key requirement are the soft skills to figure out the best system 
              that would suit a client. To quickly and accurately provide answers
              even if the client can't articulate their requirements properly.
            </p>
          </div> */}

        </div>
        
        {/* <div className={styles.headerText}>
          <div className={styles.line}></div>
          <h1 className={styles.text}>What I offer</h1>
          <div className={styles.line}></div>
        </div>

        <div className={styles.sectionContent}>
          <div className={styles.content}>
            <p className={styles.paragraph}>
              I am a problem solver at my core, coming from my experience studying Computer Engineering. 
              I am comfortable in thinking in terms of probability, patterns, combinations and increasingly 
              cross-displinary ways.
            </p>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              As a stoic, I study rhetoric: the art of conveying our ideas well. 
              As much as I am commited to my own development, I'm a team player that loves to help others improve.
              Effective communication with others and feedback are things I always welcome.
            </p>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Abstraction. 
            </p>
          </div>
        </div> */}

        <div className={styles.icons}>
          <i className="fa-solid fa-dragon"></i>
          <i className="fa-solid fa-dumbbell"></i>
          <i className="fa-solid fa-book-open-reader"></i>
          <i className="fa-solid fa-mug-hot"></i>
        </div>

      </div>
    </section>
  )
}
