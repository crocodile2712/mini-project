import { publicRequest,userRequest } from "../httpRequest/axios";
import { getUsersFailure, getUsersStart, getUsersSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "./allUsersRedux";
import { ordersFailure, ordersStart, ordersSuccess } from "./orderRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

// LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};
// GET PRODUCT
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure(err));
  }
};
// DELETE PRODUCT
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure(err));
  }
};

// ADD PRODUCT
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };
// UPDATE PRODUCT
export const updateProduct = async (product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${product._id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
// GET ALL USERS
export const getALlUsers =async (dispatch)=>{
  dispatch(getUsersStart());
  try{
    const res = await userRequest.get('users');
    dispatch(getUsersSuccess(res.data));
  }
  catch(err){
    dispatch(getUsersFailure(err));
  }
}
// UPDATE USER
export const updateUserInfo =async (dispatch,data)=>{
  dispatch(updateUserStart());
  try{
    const res = await userRequest.put(`users/${data._id}`,data);
    dispatch(updateUserSuccess(res.data));
  }
  catch(err){
    dispatch(updateUserFailure(err));
  }
}
// GET ORDER
export const getOrder =async (dispatch)=>{
  dispatch(ordersStart());
  try{
    const res = await userRequest.get(`orders`);
    dispatch(ordersSuccess(res.data));
  }
  catch(err){
    dispatch(ordersFailure(err));
  }
}