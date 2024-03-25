import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
const Sidebar = ({ onClose }) => {
  const navigate=useNavigate();
  const handleCheckOut=()=>{
    navigate('/deliveryAddressForm')
  }
  return (
    <>
      {/* CART ITEM */}
        <div className="h-[47rem] relative border-b px-6">
        <p className=' font-bold p-2'>My Basket <span className='font-light'>{"(2)"}</span></p>
        <Cart/>
      </div>
      {/* SUB TOTAL SECTION */}
      <div className=" h-[7rem] flex justify-between items-center px-6">
        <div className=" space-y-4">
          <p className=" text-sm">subtotal Amount:</p>
          <p className="font-bold text-xl">₹464.00</p>
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
