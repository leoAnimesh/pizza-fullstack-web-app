import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
