import React from 'react';
import styles from './Constructor.module.css'
import { ConstructorProps } from '../../types/types';
import { dataPage } from '../../assets/data';
import { useAppSelector } from '../../hooks/useSelector';

const Constructor: React.FC<ConstructorProps> = () => {

  const { step } = useAppSelector((store) => store.steps)

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
              </section>
            )
          }
        })
      }
    </>
  )
}

export default Constructor;