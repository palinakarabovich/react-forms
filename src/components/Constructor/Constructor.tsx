import React from 'react';
import FirstPage from '../FirstPage/FirstPage';
import styles from './Constructor.module.css'
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import Summary from '../Summary/Summary';

const Constructor: React.FC = () => {
  return(
    <section className={styles.container}>
    <div className={styles.caption}>
      <h2 className={styles.title}>Personal info</h2>
      <p className={styles.paragraph}>Please provide your name, email address and phone number.</p>
    </div>
    <Summary />
    <div className={styles.buttons}>
    <button className={styles.button__back}>Go back</button>
    <button className={styles.button__next}>Next step</button>
    </div>

  </section>
  )
}

export default Constructor;