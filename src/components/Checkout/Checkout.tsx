import React from 'react';
import { SUCCESS_ICON } from '../../utils/constants';
import styles from './Checkout.module.css';
import { CheckoutProps } from '../../types/types';
import { useAppDispatch } from '../../hooks/useDispatch';
import { beginFromStart } from '../../redux/slices/stepsSlice';
import { useAppSelector } from '../../hooks/useSelector';
import { resetForm } from '../../redux/slices/formSlice';


const Checkout: React.FC<CheckoutProps> = () => {

  const dispatch = useAppDispatch();
  const {email} = useAppSelector((store) => store.form.form)

  const handleResetClick = () => {
    dispatch(beginFromStart());
    dispatch(resetForm())
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
        We will send the confirmation to {email}
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
      <button className={styles.button} onClick={handleResetClick}>Back to start</button>
    </div>
  )
}

export default Checkout;