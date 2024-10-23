import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Count {
  value: number;
  incrementBy: number;
}

const initialState: Count = {
  value: 4,
  incrementBy: 1,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    incrementCount(state) {
      state.value += state.incrementBy;
    },
    resetCount(state) {
      state.value = 0;
      state.incrementBy = 1;
    },
    decrementCount(state) {
      state.value === 0
        ? (state.value = 0)
        : (state.value -= state.incrementBy);
    },
    incrementByAmount(state, action: PayloadAction<Count>) {
      state.value += action.payload.value;
      state.incrementBy = action.payload.value;
    },
  },
});

export const { incrementCount, resetCount, decrementCount, incrementByAmount } =
  countSlice.actions;
export default countSlice.reducer;
