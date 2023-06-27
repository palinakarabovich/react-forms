import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addOnsValue, formValues, planValue } from "../../types/types";
import { calculateYearlyPrice } from "../../utils/calculateYearlyPrice";

interface InitialStateValues {
  form: formValues,
  plan: planValue,
  addOns: Array<addOnsValue>,
  sum: number
}

const initialState: InitialStateValues = {
  form: {
    name: '',
    email: '',
    phone: ''
  },
  plan: {
    name: '',
    price: 0,
    yearly: false
  },
  addOns: [],
  sum: 0
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveForm: (state, action: PayloadAction<formValues>) => {
      state.form.name = action.payload.name;
      state.form.email = action.payload.email;
      state.form.phone = action.payload.phone;
    },
    savePlan: (state, action: PayloadAction<planValue>) => {
      state.plan.name = action.payload.name;
      state.plan.yearly = action.payload.yearly
      if (action.payload.yearly) {
        state.sum = calculateYearlyPrice(action.payload.price)
        state.plan.price = calculateYearlyPrice(action.payload.price)
      } else {
        state.sum = action.payload.price;
        state.plan.price = action.payload.price;
      }
    },
    saveAddons: (state, action: PayloadAction<Array<addOnsValue>>) => {
      if (action.payload.length !== 0) {
        if (state.plan.yearly) {
          state.sum = state.sum + action.payload.reduce((acc, cur) => acc + calculateYearlyPrice(cur.price), 0);
          const yearlyAddOns = action.payload.map((a) => {
            const price = calculateYearlyPrice(a.price);
            return { ...a, price }
          })
          state.addOns = [...yearlyAddOns];
        } else {
          state.sum = state.sum + action.payload.reduce((acc, cur) => acc + cur.price, 0);
          state.addOns = [...action.payload];
        }
      }
    },
    resetAddons: (state) => {
      state.addOns = [];
      state.sum = state.plan.price;
    },
    resetForm: () => initialState
  }
})

export const { saveForm, savePlan, saveAddons, resetAddons, resetForm } = formSlice.actions;

export default formSlice.reducer;