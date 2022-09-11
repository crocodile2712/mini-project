import { registerService } from "../../services/register";

export function actionRegister(data) {
    return async (dispatch) => {
      dispatch({ type: "LOADING_REGISTER" });
      try {
        const res = await registerService(data);
        return dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({
          type: "REGISTER_ERR",
          payload: err,
        });
      }
    };
  }
  export function actionEmptyReg() {
    return {
      type:"EMPTY_REG"
    }
  }

  