const userJSON = localStorage.getItem("user")
const userLocal = userJSON ? JSON.parse(userJSON) : null
const initialState = {
  authUser: userLocal,
  token: userLocal?.accessToken,
  isLogging: false,
  loading: false,
  message:""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_LOGIN":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      localStorage.setItem('user',JSON.stringify(action.payload))
      localStorage.setItem('token',action.payload.accessToken)
      return {
        ...state,
        loading: false,
        authUser: action.payload,
        token: action.payload.accessToken,
        isLogging: true,
      };
    case "LOGIN_ERR":
      return {
        ...state,
        loading: false,
        message: action.payload
      };
    case "LOGOUT":
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      return {
        ...initialState,authUser:null
      }
    default:
      return state;
  }
};
