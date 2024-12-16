import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleAddItem(state, action) {
      const product = { ...action.payload }; // Destructure product
      const itemIndex = state.items.findIndex((item) => item.id === product.id);

      if (itemIndex !== -1) {
        // Item exists, remove it
        state.items.splice(itemIndex, 1);
      } else {
        // Item doesn't exist, add it
        state.items.push(product);
      }

      // Log current state (copy to avoid Proxy issues)
      console.log("Updated wishlist:", state.items);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
