import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { formValues, planValue } from "../../types/types";

const initialState = {
  form: {
    name: '',
    email: '',
    telephone: ''
  },
  plan: {
    name: '',
    price: 0,
    yearly: false
  },
  addOns: []
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveForm: (state, action: PayloadAction<formValues>) => {
      state.form.name = action.payload.name;
      state.form.email = action.payload.email;
      state.form.telephone = action.payload.phone;
    },
    savePlan: (state, action: PayloadAction<planValue>) => {
      state.plan.name = action.payload.name;
      state.plan.price = action.payload.price;
      state.plan.yearly = action.payload.yearly
    }
  }
})

export const { saveForm, savePlan } = formSlice.actions;

export default formSlice.reducer;