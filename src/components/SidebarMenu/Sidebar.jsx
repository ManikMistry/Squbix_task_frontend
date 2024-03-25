import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.cartItems); // Access cartItems from state.cart

  const handleCheckOut = () => {
    navigate('/deliveryAddressForm');
  };
  
  const basketCount = cartItems.length;
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.selling_price?.replace(/[^\d.]/g, ''));
    console.log("Price:", price); // Debugging
    return isNaN(price) ? total : total + price;
  }, 0);
  
  console.log("Subtotal:", subtotal); // Debugging

  return (
    <>
      {/* CART ITEM */}
      <div className="h-[47rem] relative border-b px-6">
        <p className=' font-bold p-2'>My Basket <span className='font-light'>{"(" + basketCount + ")"}</span></p>
        <Cart />
      </div>
      {/* SUB TOTAL SECTION */}
      <div className=" h-[7rem] flex justify-between items-center px-6">
        <div className=" space-y-4">
          <p className=" text-sm">subtotal Amount:</p>
          <p className="font-bold text-xl">₹{subtotal.toFixed(2)}</p> {/* Ensure subtotal is a number */}
        </div>
        <div>
          <button onClick={handleCheckOut} className=" p-4 bg-black text-white font-bold rounded">
            CHECK OUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
