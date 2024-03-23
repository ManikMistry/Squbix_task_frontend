import DeleteIcon from '@mui/icons-material/Delete';
function Cart() {
  let arr=[1,1,1,1]
  return (
    <>
      {arr.map((item) => (
        <div className=" border h-24 mt-4 flex justify-between">
          <div className=" flex flex-col p-4 space-y-1">
            <button className=" border w-6 font-bold">+</button>
            <button className=" border w-6 font-bold">-</button>
          </div>
          <div className=" border p-1 m-1 object-center">
            <img
              src="https://rukminim1.flixcart.com/image/612/612/ku4ezrk0/ethnic-set/v/d/2/xs-om-1164-shobhit-original-imag7bf847vzkfeh.jpeg?q=70"
              alt=""
              className=" h-20"
            />
          </div>
          <div className=" border h-[5.4rem] mt-1 px-6 space-y-5">
            <p className=" text-sm pt-2">
              Women Kurta, Pant And Dupatta Set Pure Cotton
            </p>
            <p className=" text-lg font-bold">₹499</p>
          </div>
          <div>
            <button className=" mt-8 px-4">
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Cart;
