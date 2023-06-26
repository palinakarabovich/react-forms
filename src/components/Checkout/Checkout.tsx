import React from 'react';
import { SUCCESS_ICON } from '../../utils/constants';
import styles from './Checkout.module.css';
import { CheckoutProps } from '../../types/types';


const Checkout: React.FC<CheckoutProps> = ({ setStep }) => {

  const handleResetClick = () => {
    setStep((pr) => pr = 1)
  }
  return (
    <div className={styles.checkout}>
      <div className={styles.icon}>
        {SUCCESS_ICON}
      </div>
      <h2 className={styles.title}>
        Thank you!
      </h2>
      <p className={styles.text}>
        Thanks for confirming your subscription!
        We hope you have Fun using our platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
      <button className={styles.button} onClick={handleResetClick}>Back to start</button>
    </div>
  )
}

export default Checkout;