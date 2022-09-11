const initialState = {
  register: null,
  loading: false,
  message: "",
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_REGISTER":
      return { ...state, loading: true };
    case "REGISTER_SUCCESS":
      return { ...state, register: action.payload };
    case "REGISTER_ERR":
      return { ...state, message: action.payload };
    case "EMPTY_REG":
      return { ...state, register: null };
    default:
      return state;
  }
};
