const wishList = localStorage.getItem("wishList")
  ? JSON.parse(localStorage.getItem("wishList"))
  : [];
const initialState = { wishList };
export function wishListReducer(state = initialState, action) {
  switch (action.type) {
    case "actionWishList":
      const index = state.wishList.findIndex((ele) => {
        console.log("ele",ele)
        return ele === action.payload;
      });
      return {
        ...initialState,
        wishList: index !==-1 ? state.wishList.filter((ele,ind) =>{
          return ind !== index;
        }) :
        [...state.wishList,action.payload]
      };
    default:
      return state;
  }
}
