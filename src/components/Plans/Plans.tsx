import styles from './Plans.module.css'
import React from "react";
import { dataPlan } from '../../assets/data';
import { useAppDispatch } from '../../hooks/useDispatch';
import { stepForward } from '../../redux/slices/stepsSlice';
import { savePlan } from '../../redux/slices/formSlice';
import { planValue } from '../../types/types';
import ButtonsGroup from '../ButtonsGroup/ButtonsGroup';

const Plans: React.FC = () => {

  const [yearly, setYearly] = React.useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = React.useState<number>(1);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    setYearly(!yearly);
  };

  const handlePlanClick = (index: number) => {
    setSelectedPlan(index);
  }

  const submitPlan = () => {
    const result: planValue = {
      name: dataPlan[selectedPlan].name,
      price: dataPlan[selectedPlan].price,
      yearly
    }
    dispatch(savePlan(result));
    dispatch(stepForward())
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          dataPlan.map((d, index) => (
            <li
              className={`${styles.section} ${selectedPlan === index ? styles.section__selected : ''}`}
              key={d.name}
              onClick={() => handlePlanClick(index)}
            >
              <img
                className={styles.icon}
                src={d.icon}
                alt={d.name}
              />
              <p className={styles.plan}>{d.name}</p>
              <p className={styles.price}>${d.price}/mo</p>
            </li>
          ))
        }
      </ul>
      <div className={styles.choice}>
        <label
          className={styles.label}
          htmlFor='checkbox-input'
          onClick={handleToggle}
        >
          Monthly
        </label>
        <div className={styles.slider}>
          <input
            id='checkbox-input'
            type="checkbox"
            className={styles.checkbox}
            checked={yearly}
            onChange={handleToggle}
          />
          <div
            className={styles.track}
            onClick={handleToggle}>
            <div className={styles.thumb}
            />
          </div>
        </div>
        <label
          className={styles.label}
          htmlFor='checkbox-input'
          onClick={handleToggle}
        >
          Yearly
        </label>
      </div>
        <ButtonsGroup
        handleForwardClick={submitPlan}
        />
    </div>
  )
}

export default Plans;