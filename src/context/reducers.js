// reducers.js

const addressInitialState = {
  firstName: "",
  lastName: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  mobile: "",
};

const cartInitialState = {
  cartItems: [],
};

export const addressReducer = (state = addressInitialState, action) => {
  switch (action.type) {
    case "UPDATE_ADDRESS":
      return {
        ...state,
        ...action.payload,
      };
    case "CLEAR_ADDRESS":
      return addressInitialState;
    default:
      return state;
  }
};

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};
