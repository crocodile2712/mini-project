const cartList = localStorage.getItem("cartList")
  ? JSON.parse(localStorage.getItem("cartList"))
  : [];
const initialState = { cartList ,loading: false, message:"" };
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    // case "LOADING_DATA":
    //   return {...state,loading: true}
    // case "LOAD_DATA_ERR":
    //   return {...state, loading:false, message: action.payload}
    // case "FETCH_CART":
    //   return {...state, loading:false, cartList: action.payload}

    case "emptyCart":
      return { ...state, cartList: [] };

    case "increaseCartItem":
      return {
        ...state,
        cartList: state.cartList.map((ele, index) => {
          return index === action.payload
            ? { ...ele, quantity: ele.quantity + 1 }
            : ele;
        }),
      };

    case "decreaseCartItem":
      return {
        ...state,
        cartList: state.cartList[action.payload].quantity === 1 ?
        state.cartList.filter((ele,index) => {
          return index !== action.payload
        }) :
        state.cartList.map((ele, index) => {
          return index === action.payload
            ? { ...ele, quantity: ele.quantity - 1 }
            : ele;
        }),
      };
    case "addCart":
      const a = state.cartList.findIndex((ele) => {
        return (ele.color === action.payload.color && ele.size === action.payload.size);
      });
      console.log("a",a)
      if (a !== -1) {
        return {
          ...state,
          cartList: state.cartList.map((ele, index) => {
            return ele._id === action.payload._id
              ? { ...ele, quantity: ele.quantity + action.payload.quantity }
              : ele;
          }),
        };
      }else {
        return {
          ...state,
          cartList: [...state.cartList,action.payload]
        }
      }

    default:
      return state;
  }
}
