import React from 'react';
import styles from './App.module.css';
import FirstPage from '../FirstPage/FirstPage';

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.page}>
        <ul className={styles.sidebar}>
          <li className={styles.step}>
            <div className={styles.circle}>
              <span className={styles.number}>1</span>
            </div>
            <div className={styles.step__description}>
              <p className={styles.step__counter}>step 1</p>
              <p className={styles.step__text}>
                Your info
              </p>
            </div>
          </li>
          <li className={styles.step}>
            <div className={styles.circle}>
              <span className={styles.number}>2</span>
            </div>
            <div className={styles.step__description}>
              <p className={styles.step__counter}>step 2</p>
              <p className={styles.step__text}>
                Select plan
              </p>
            </div>
          </li>
          <li className={styles.step}>
            <div className={styles.circle}>
              <span className={styles.number}>3</span>
            </div>
            <div className={styles.step__description}>
              <p className={styles.step__counter}>step 3</p>
              <p className={styles.step__text}>
                Add-ons
              </p>
            </div>
          </li>
          <li className={styles.step}>
            <div className={styles.circle}>
              <span className={styles.number}>4</span>
            </div>
            <div className={styles.step__description}>
              <p className={styles.step__counter}>step 4</p>
              <p className={styles.step__text}>
                Summary
              </p>
            </div>
          </li>
        </ul>
        <FirstPage />
      </section>
    </div>
  );
}

export default App;
