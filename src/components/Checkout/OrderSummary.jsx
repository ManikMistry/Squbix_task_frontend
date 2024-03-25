import AddressCard from './AddressCard'
import { Button, Divider } from '@mui/material'
import Cart from '../Cart/Cart'

function OrderSummary() {
  return (
    <div className=' relative top-20 p-10'>
        <div className='p-5 shadow-lg rounded-md border'>
            <AddressCard/>
        </div>
        <div className="lg:grid grid-cols-3 relative mt-10">
        <div className="col-span-2">
        <Cart/>
        </div>
        <div>
          <div className=" px-5 sticky top-20 h-[100vh] mt-5 lg:mt-0">
            <div className="border p-6 rounded-md shadow-md">
              <p className=" uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <Divider />
              <div className="space-y-3 font-semibold mb-10">
                <div className=" flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹2099</span>
                </div>
                <div className=" flex justify-between pt-3">
                  <span>Discount</span>
                  <span className="text-green-600">-₹499</span>
                </div>
                <div className=" flex justify-between pt-3">
                  <span>Delivery charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <Divider />
                <div className=" flex justify-between pt-3 font-bold ">
                  <span>Total amount</span>
                  <span className="text-green-600 font-bold">₹1599</span>
                </div>
              </div>
            <Button
              color="secondary"
              variant="contained"
              className=" w-full"
              sx={{ px: "2.5rem", py: ".7rem", mt: "1rem" }}
            >
              Checkout
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary