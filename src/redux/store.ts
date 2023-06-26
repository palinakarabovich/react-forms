import { configureStore } from '@reduxjs/toolkit'
import formSlice from './slices/formSlice';
import stepsSlice from './slices/stepsSlice';

const store = configureStore({
  reducer: {
    form: formSlice,
    steps: stepsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;