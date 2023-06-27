import React from 'react';
import { useAppDispatch } from '../../hooks/useDispatch'
import { stepBack } from '../../redux/slices/stepsSlice';
import styles from './ButtonsGroup.module.css'
import { ButtonsGroupProps } from '../../types/types';
import { useAppSelector } from '../../hooks/useSelector';

const ButtonsGroup: React.FC<ButtonsGroupProps> = ({handleForwardClick}) => {

  const dispatch = useAppDispatch();
  const {step} = useAppSelector((store) => store.steps)

  const handleBackClick = () => {
    dispatch(stepBack())
  }

  return (
    <div className={styles.buttons}>
        <button
          className={`${styles.button__back} ${step === 1 ? styles.button__hidden : ''} `}
          onClick={handleBackClick}
        >
          Go back
        </button>
        <button
          className={styles.button__next}
          onClick={handleForwardClick}
        >
          Next step
        </button>
      </div>
  )
}

export default ButtonsGroup;