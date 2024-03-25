export const updateAddress = (address) => ({
  type: "UPDATE_ADDRESS",
  payload: address,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

export const removeFromCart = (index) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: index,
  };
};

export const clearAddress=()=>({
  type:"CLEAR_ADDRESS"
})