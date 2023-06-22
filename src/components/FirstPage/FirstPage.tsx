import React from "react";
import styles from './FirstPage.module.css'

const FirstPage: React.FC = () => {
  return (
      <form className={styles.form}>
        <div>
          <h2 className={styles.title}>Personal info</h2>
          <p className={styles.paragraph}>Please provide your name, email address and phone number.</p>
        </div>
        <div>
          <label className={styles.label}>Name</label>
          <input className={styles.input}></input>
          <label className={styles.label}>Email Address</label>
          <input className={styles.input}></input>
          <label className={styles.label}>Phone Number</label>
          <input className={styles.input}></input>
        </div>
        <button type='submit' className={styles.button}>Next step</button>
      </form>

  )
}

export default FirstPage;