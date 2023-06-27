import React from "react";
import styles from './Form.module.css'
import { useAppDispatch } from "../../hooks/useDispatch";
import { saveForm } from "../../redux/slices/formSlice";
import { stepForward } from "../../redux/slices/stepsSlice";
import { formValues } from "../../types/types";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import { useForm, SubmitHandler } from "react-hook-form"
import { convertErrorMessageToString } from "../../utils/convertErrorMessageToString";
import { useAppSelector } from "../../hooks/useSelector";

const Form: React.FC = () => {

  const {form} = useAppSelector((store) => store.form)

  const dispatch = useAppDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formValues>({
    mode: 'onChange',
    defaultValues: form
  })

  const onSubmit: SubmitHandler<formValues> = (data) => {
    dispatch(saveForm(data))
    dispatch(stepForward());
  }

  return (
    <section className={styles.wrapper}>
      <form className={styles.form}>
        <label className={styles.label}>Name</label>
        <input
          className={`${styles.input} ${errors.name && styles.input__error}`}
          {...register('name', {
            required: 'This field is required',
            minLength: {
              value: 2,
              message: 'Your name should have at least two symbols'
            }
          })}
          placeholder="Your name"
        />
        <p className={styles.error}>{errors.name && convertErrorMessageToString(errors.name.message)}</p>
        <label className={styles.label}>Email Address</label>
        <input
          className={`${styles.input} ${errors.name && styles.input__error}`}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: 'Incorrect format for email'
            },
          })}
          placeholder="your-email@gmail.com"
        />
        <p className={styles.error}>{errors.email && convertErrorMessageToString(errors.email.message)}</p>
        <label className={styles.label}>Phone Number</label>
        <input
          className={`${styles.input} ${errors.name && styles.input__error}`}
          {...register('phone', {
            required: 'This field is required',
            pattern: {
              value: /^\+\d+$/,
              message: 'Use only numbers'
            }
          })}
          placeholder="+123456789"
        />
        <p className={styles.error}>{errors.phone && convertErrorMessageToString(errors.phone.message)}</p>
      </form>
      <ButtonsGroup
        handleForwardClick={handleSubmit(onSubmit)}
      />
    </section>
  )
}

export default Form;