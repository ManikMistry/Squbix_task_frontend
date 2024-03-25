export const updateAddress = (address) => ({
    type: 'UPDATE_ADDRESS',
    payload: address
  });

  export const addToCart=(product)=>({
    type:'ADD_TO_CART',
    payload:product
  })