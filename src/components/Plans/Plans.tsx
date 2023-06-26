import styles from './Plans.module.css'
import React from "react";
import { dataPlan } from '../../assets/data';

const SecondPage: React.FC = () => {

  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          dataPlan.map((d) => (
            <li className={styles.section}>
              <img className={styles.icon} src={d.icon} alt={d.name}/>
              <p className={styles.plan}>{d.name}</p>
              <p className={styles.price}>{d.price}</p>
            </li>
          ))
        }
      </ul>
      <div className={styles.choice}>
        <label className={styles.label} htmlFor='checkbox-input' onClick={handleToggle}>Monthly</label>
        <div className={styles.slider}>
          <input
            id='checkbox-input'
            type="checkbox"
            className={styles.checkbox}
            checked={isChecked}
          />
          <div className={styles.track} onClick={handleToggle}>
            <div className={styles.thumb} />
          </div>
        </div>
        <label className={styles.label} htmlFor='checkbox-input' onClick={handleToggle}>Yearly</label>
      </div>
    </div>
  )
}

export default SecondPage;