import { combineReducers } from "redux";
import productReducer from "./Product/product.reducer";

const rootReducer = combineReducers({
  product: productReducer,
});
export default rootReducer;
