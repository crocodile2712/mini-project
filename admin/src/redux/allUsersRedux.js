import { createSlice } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    loading: false,
    message: "",
    users: null,
  },
  reducers: {
    getUsersStart: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.message = "";
      state.users = action.payload;
    },
    getUsersFailure: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.message = "";
      state.users[state.users.findIndex((ele) => ele._id === action.payload._id)]= action.payload
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
  },
});
export const { getUsersStart, getUsersSuccess, getUsersFailure,updateUserFailure,updateUserStart,updateUserSuccess } =
  allUsersSlice.actions;
export default allUsersSlice.reducer;
