import React from 'react';
import styles from './Constructor.module.css'
import { ConstructorProps } from '../../types/types';
import { dataPage } from '../../assets/data';

const Constructor: React.FC<ConstructorProps> = ({ step, setStep }) => {

  const handleForwardClick = () => {
    setStep((prev) => prev + 1)
  }

  const handleBackClick = () => {
    setStep((prev) => prev - 1)
  }

  return (
    <>
      {
        dataPage.map((d) => {
          if (d.page === step) {
            return (
              <section className={styles.container} key={d.page}>
                <div className={styles.caption}>
                  <h2 className={styles.title}>{d.title}</h2>
                  <p className={styles.paragraph}>{d.caption}</p>
                </div>
                {d.component}
                <div className={styles.buttons}>
                  <button className={styles.button__back} onClick={handleBackClick} style={step === 1 ? { visibility: 'hidden' } : {}}>Go back</button>
                  <button className={styles.button__next} onClick={handleForwardClick}>Next step</button>
                </div>

              </section>
            )
          }
        })
      }
    </>
  )
}

export default Constructor;