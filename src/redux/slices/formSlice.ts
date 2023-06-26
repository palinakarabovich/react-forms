import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    name: '',
    email: '',
    telephone: ''
  },
  plan: {
    name: '',
    price: 0
  },
  addOns: []
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm: (action, payload) => {
      
    }
  }
})

export const {  } = formSlice.actions;

export default formSlice.reducer;