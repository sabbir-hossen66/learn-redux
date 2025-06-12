import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type CounterState = {
  count: number;  // Define the shape of the state  
}

const initialState:CounterState = { count: 0 };
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count=state.count + 1;
    },
    decrement:(state) => {  
      state.count=state.count - 1;
    },   
    incrementByValue:(state, action:PayloadAction<number>) => {  
      state.count=state.count + action.payload; // action.payload will be the value passed when dispatching this action
    },   
   
 }
})

export const { increment, decrement,incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;