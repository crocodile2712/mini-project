import { loginService } from "../../services/auth";

export function actionLogin(data) {
  return async (dispatch) => {
    dispatch({ type: "LOADING_LOGIN" });
    try {
      const res = await loginService(data);
      return dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({
        type: "LOGIN_ERR",
        payload: err,
      });
    }
  };
}
export function actionLogout() {
  return{
    type:"LOGOUT"
  }
}

