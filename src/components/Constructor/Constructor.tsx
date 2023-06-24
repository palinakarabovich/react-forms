import React from 'react';
import FirstPage from '../FirstPage/FirstPage';
import styles from './Constructor.module.css'
import SecondPage from '../SecondPage/SecondPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import Summary from '../Summary/Summary';
import { ConstructorProps } from '../../types/types';

const Constructor: React.FC<ConstructorProps> = ({ step, setStep }) => {

  const handleForwardClick = () => {
    setStep((prev) => prev + 1)
  }

  const handleBackClick = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <section className={styles.container}>
      <div className={styles.caption}>
        <h2 className={styles.title}>Personal info</h2>
        <p className={styles.paragraph}>Please provide your name, email address and phone number.</p>
      </div>
      {
        step === 1 && <FirstPage />
      }
      {
        step === 2 && <SecondPage />
      }
      {
        step === 3 && <ThirdPage />
      }

      {
        step === 4 && <Summary />
      }
      <div className={styles.buttons}>
        <button className={styles.button__back} onClick={handleBackClick} style={step === 1 ? { visibility: 'hidden' } : {}}>Go back</button>
        <button className={styles.button__next} onClick={handleForwardClick}>Next step</button>
      </div>

    </section>
  )
}

export default Constructor;