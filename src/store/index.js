
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";





const store = configureStore({
    reducer: { order: orderReducer ,cart:cartReducer,wishlist:wishlistReducer}
});


export default store;