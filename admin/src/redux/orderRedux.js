import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    message: "",
    orders: null
  },
  reducers: {
    ordersStart: (state) => {
      state.loading = true;
    },
    ordersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    ordersFailure: (state, action) => {
      state.message = action.payload;
      state.loading = false; 
    },
  },
});
export const {ordersFailure,ordersStart,ordersSuccess} = orderSlice.actions
export default orderSlice.reducer;
