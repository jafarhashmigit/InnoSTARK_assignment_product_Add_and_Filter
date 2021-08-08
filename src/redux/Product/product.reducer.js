import { ADD_PRODUCT } from "./product.types";

const INITIAL_STATE = {
  data: [
    {
      id: 0,
      name: "Product one",
      description: "This is description one",
      price: 100,
      inventoryDate: "2021-08-11",
    },
    {
      id: 1,
      name: "Product two",
      description: "This is description two",
      price: 200,
      inventoryDate: "2021-08-11",
    },
    {
      id: 2,
      name: "Product three",
      description: "This is description three",
      price: 300,
      inventoryDate: "2021-08-11",
    },
  ],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
