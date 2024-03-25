// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../context/action';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div>
      {cartItems.map((item, index) => (
        <div className="border h-24 mt-4 flex justify-between" key={index}>
          <div className="flex flex-col p-4 space-y-1">
            <button className="border w-6 font-bold">+</button>
            <button className="border w-6 font-bold">-</button>
          </div>
          <div className="border p-1 m-1 object-center">
            <img
              src={item.image}
              alt=""
              className=" h-20"
            />
          </div>
          <div className="border h-[5.4rem] mt-1 px-6 space-y-5">
            <p className=" text-sm pt-2">{item.title}</p>
            <p className=" text-lg font-bold">{item.selling_price}</p>
          </div>
          <div>
            <button className=" mt-8 px-4" onClick={() => handleRemoveFromCart(index)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
