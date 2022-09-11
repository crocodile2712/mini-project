import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    message: "",
    currentUser: {isAdmin:false}
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.message = action.payload;
      state.loading = false; 
    },
    actionLogout:(state) =>{
      state.currentUser = {isAdmin:false}
    }
  },
});
export const {loginStart, loginSuccess,loginFailure, actionLogout} = userSlice.actions
export default userSlice.reducer;
