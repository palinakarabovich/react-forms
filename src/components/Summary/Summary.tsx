import React from 'react';
import styles from './Summary.module.css'

const Summary: React.FC = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.subscription}>
        <p className={styles.rate}>Arcade (Monthly)</p>
        <p className={styles.rate}>$9/mo</p>
      </div>
      <ul className={styles.options}>
        <li className={styles.option}>
          <p className={styles.text}>Online service</p>
          <p className={styles.price}>+$1/mo</p>
        </li>
        <li className={styles.option}>
          <p className={styles.text}>Larger storage</p>
          <p className={styles.price}>+$2/mo</p>
        </li>
      </ul>
      <div className={styles.total}>
        <p className={styles.text}>Total (per month)</p>
        <p className={styles.sum}>$12/mo</p>
      </div>
    </div>
  )
}

export default Summary;