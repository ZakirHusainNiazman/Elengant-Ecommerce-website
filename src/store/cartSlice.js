import { calculatePrice } from "../dummy-products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  subTotal: 0,
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = { ...action.payload };
          const existItem = state.items.find((item) => item.id === newItem.id)
          if (existItem) {
              existItem.quantity += 1;
            state.total += newItem.price;
            console.log(state.total);
            
          } else {
              state.items.push(newItem);
              state.total += newItem.price;
              state.subTotal += newItem.price;
          }
    },

    incrementItemQuanity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);

      item.quantity += 1;
      state.total += item.price;
    },
    decrementItemQuanity(state, action) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.total -= item.price;
        state.subTotal -= item.price;
        state = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.total -= item.price;
        item.quantity -= 1;
      }
    },
      removeItem(state, action) {
        
      const item = state.items.find((item) => item.id === action.payload.id);
      state.subTotal -= item.price;
      state.total -= item.quantity * item.price;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    addShippingFee(state,action) {
      state.total += action.payload;
      }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
