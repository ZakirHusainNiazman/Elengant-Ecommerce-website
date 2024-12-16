import {createSlice } from "@reduxjs/toolkit";
import currentDate from "../util/currentDate";
import generateUniqueCode from "../util/generateUniqueCode";
import { formatter } from "../dummy-products";


const initialState = []
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, action) {
            state.push({
              orderCode: generateUniqueCode(),
              products: [...action.payload.items],
              total: formatter(action.payload.total),
              paymentMethod: action.payload.paymentMethod,
              status: "pending",
              date: currentDate(),
            });
        }

    }
})

export const orderActions = orderSlice.actions;

export default orderSlice.reducer;