import React from 'react';
import styles from './Sidebar.module.css'
import { SidebarProps } from '../../types/types';
import { dataSteps } from '../../assets/data';

const Sidebar: React.FC<SidebarProps> = ({ step }) => {

  return (
    <ul className={styles.sidebar}>
      {
        dataSteps.map((s) => (
          <li className={styles.step}>
            <div className={`${styles.circle} ${step === s.step ? styles.circle__current : step > s.step ? styles.circle__viewed : ''}`}>
              <span className={styles.number}>{s.step}</span>
            </div>
            <div className={styles.step__description}>
              <p className={styles.step__counter}>step {s.step}</p>
              <p className={`${styles.step__text} ${
                step > s.step ? styles.step__textViewed : ''
              }`}>
                {s.text}
              </p>
            </div>
          </li>
        ))
      }
    </ul >
  )
}

export default Sidebar;