import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    message: "",
    products: [],
  },
  reducers: {
    getProductStart: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductFailure: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.loading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state,action) => {
      state.loading = false;
      state.message = action.payload;
    },
    // ADD PRODUCT
    addProductStart: (state) => {
      state.loading = true;
    },
    addProductSuccess: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state,action) => {
      state.loading = false;
      state.message = action.payload;
    },
    // UPDATE PRODUCT
    updateProductStart: (state) => {
      state.loading = true;
      state.message = false;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.products[state.products.findIndex(prod => prod._id === action.payload._id)] = action.payload;
      state.message= ''
    },
    updateProductFailure: (state,action) => {
      state.loading = false;
      state.message = action.payload;
    },
  },
});
export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} = productSlice.actions;
export default productSlice.reducer;
