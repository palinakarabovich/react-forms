import React from 'react';
import FirstPage from '../FirstPage/FirstPage';
import styles from './Constructor.module.css'
import SecondPage from '../SecondPage/SecondPage';

const Constructor: React.FC = () => {
  return(
    <section className={styles.container}>
    <div className={styles.caption}>
      <h2 className={styles.title}>Personal info</h2>
      <p className={styles.paragraph}>Please provide your name, email address and phone number.</p>
    </div>
    <SecondPage />
    <button className={styles.button}>Next step</button>
  </section>
  )
}

export default Constructor;