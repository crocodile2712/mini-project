import { publicRequest } from "../../httpResquest/axios";

export function actionFetchProducts(data) {
  return async (dispatch) => {
    dispatch({ type: "LOADING_PRODUCTS" });
    try {
      if (data) {
        const res = await publicRequest.get(`products?category=${data}`);
        return dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: res.data });
      } else {
        const res = await publicRequest.get("products");
        return dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: res.data });
      }
    } catch (err) {
      dispatch({
        type: "FETCH_PRODUCTS_ERR",
        payload: err,
      });
    }
  };
}

export function actionFetchSingleProduct(data){
  return async (dispatch) => {
    dispatch({ type: "LOADING_PRODUCT" });
    try {
      const res = await publicRequest.get(`products/find/${data}`);
      return dispatch({ type: "FETCH_PRODUCT_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({
        type: "FETCH_PRODUCTS_ERR",
        payload: err,
      });
    }
  }
}