const initialState = {
  addressData: {
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    mobile: "",
    cartItems: [],
  },
};

export const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ADDRESS":
      return {
        ...state,
        addressData: action.payload,
      };
    default:
      return state;
  }
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          addressData: {
            ...state.addressData,
            cartItems: [...state.addressData.cartItems, action.payload],
          },
        };
      default:
        return state;
    }
  };
  
