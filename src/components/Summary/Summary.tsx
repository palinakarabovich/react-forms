import React from 'react';
import styles from './Summary.module.css'
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';
import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from '../../hooks/useDispatch';
import { stepForward } from '../../redux/slices/stepsSlice';

const Summary: React.FC = () => {

  const { plan, addOns, sum } = useAppSelector((store) => store.form)
  const dispatch = useAppDispatch();

  const checkout = () => {
    dispatch(stepForward())
  }

  return (
    <div className={styles.summary}>
      <div className={styles.info}>
        <div className={styles.subscription}>
          <p className={styles.rate}>{plan.name} ({plan.yearly ? 'Yearly' : 'Montly'})</p>
          <p className={styles.rate}>${plan.price}/{plan.yearly ? 'year' : 'mo'}</p>
        </div>
        <ul className={styles.options}>
          {
            addOns.length > 0 && addOns.map((a) => (
              <li
              className={styles.option}
              key={a.name}
              >
              <p className={styles.text}>{a.name}</p>
              <p className={styles.price}>+${a.price}/{plan.yearly ? 'year' : 'mo'}</p>
            </li>
            ))
          }
        </ul>
        <div className={styles.total}>
          <p className={styles.text}>Total (per {plan.yearly ? 'year' : 'month'})</p>
          <p className={styles.sum}>${sum}/{plan.yearly ? 'year' : 'mo'}</p>
        </div>
      </div>
      <ButtonsGroup handleForwardClick={checkout} />
    </div>
  )
}

export default Summary;