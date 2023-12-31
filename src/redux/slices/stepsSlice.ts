import { createSlice } from "@reduxjs/toolkit";

interface InitialStateValues {
  step: number
}

const initialState: InitialStateValues = {
  step: 1
}

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    stepForward: (state) => {
      state.step = state.step + 1;
    },
    stepBack: (state) => {
      state.step = state.step - 1;
    },
    beginFromStart: (state) => {
      state.step = 1;
    }
  }
})

export const { stepForward, stepBack, beginFromStart } = stepsSlice.actions;

export default stepsSlice.reducer;