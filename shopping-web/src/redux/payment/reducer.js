const initialState = {
    payment: null,
    loading: false,
    message: "",
  };
  
  export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOADING_PAYMENT":
        return { ...state, loading: true };
      case "PAYMENT_SUCCESS":
        return { ...state, payment: action.payload };
      case "PAYMENT_ERR":
        return { ...state, message: action.payload };
      case "EMPTY_PAYMENT":
        return { ...state, payment: null };
      default:
        return state;
    }
  };