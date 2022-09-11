import { combineReducers } from "redux";
import { wishListReducer } from "./cart/reducer/wishListReducer";
import { cartReducer } from "./cart/reducer/cartReducer";
import { authReducer } from "./auth/reducer";
import { productsReducer } from "./products/productReducer";
import { registerReducer } from "./register/registerReducer";
import { paymentReducer } from "./payment/reducer";
const rootReducer = combineReducers({
    cart: cartReducer,
    wish: wishListReducer,
    auth: authReducer,
    prod: productsReducer,
    reg: registerReducer,
    pay: paymentReducer
})
export default rootReducer 