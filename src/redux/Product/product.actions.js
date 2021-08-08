import { ADD_PRODUCT } from "./product.types";

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload: payload,
  };
};
