import { SUCCESS_ICON } from '../../utils/constants';
import styles from './Checkout.module.css';


const Checkout = () => {
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
      <button className={styles.button}>Back to start</button>
    </div>
  )
}

export default Checkout;