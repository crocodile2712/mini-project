import { paymentService } from "../../services/payment";

export function actionPayment(data) {
  return async (dispatch) => {
    dispatch({ type: "LOADING_PAYMENT" });
    try {
      const res = await paymentService(data);
      return dispatch({ type: "PAYMENT_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({
        type: "PAYMENT_ERR",
        payload: err,
      });
    }
  };
}
export function emptyPayment() {
  return {
    type: "EMPTY_PAYMENT",
  };
}
