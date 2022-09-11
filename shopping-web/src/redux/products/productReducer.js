const initialState = {
  products: [],
  loading: false,
  message: "",
  product: { color: [], size: [] },
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      return { ...state, loading: true };
    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
      };
    case "FETCH_PRODUCTS_ERR":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case "LOADING_PRODUCT":
      return { ...state, loading: true };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        product: action.payload,
      };
    case "FETCH_PRODUCT_ERR":
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
