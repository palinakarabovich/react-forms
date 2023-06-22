import styles from './SecondPage.module.css'
import React from "react";
import arcadeIcon from '../../img/icon-arcade.svg'
import advancedIcon from '../../img/icon-advanced.svg'
import proIcon from '../../img/icon-pro.svg'

const SecondPage: React.FC = () => {

  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.section}>
          <img className={styles.icon} src={arcadeIcon} />
          <p className={styles.plan}>Arcade</p>
          <p className={styles.price}>$9/mo</p>
        </li>
        <li className={styles.section}>
          <img className={styles.icon} src={advancedIcon} />
          <p className={styles.plan}>Advanced</p>
          <p className={styles.price}>$12/mo</p>
        </li>
        <li className={styles.section}>
          <img className={styles.icon} src={proIcon} />
          <p className={styles.plan}>Pro</p>
          <p className={styles.price}>$15/mo</p>
        </li>
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