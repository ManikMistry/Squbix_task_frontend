import { Avatar } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
function Navigation() {
  return (
    <>
      <div className="w-full bg-blue-400 h-8 text-white flex justify-center items-center">
        <p className=" text-md">Get free delivery on orders over ₹999</p>
      </div>
      <nav className="flex justify-between items-center bg-white p-4 text-black">
        <div className="flex items-center space-x-4 pl-6">
          {/* Logo */}
          <p className="text-xl font-bold cursor-pointer">MyShop</p>
          {/* Navigation Links */}
          <ul className="flex space-x-5">
            <li>
              <p className=" cursor-pointer">Women</p>
            </li>
            <li>
              <p className="cursor-pointer">Men</p>
            </li>
            <li>
              <p className="cursor-pointer">Blog</p>
            </li>
            <li>
              <p className="cursor-pointer">About Us</p>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-8 px-10">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className=" cursor-pointer"
            sx={{ width: 35, height: 35 }}
          />
          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <p className=" bg-red-400 text-white rounded-xl flex justify-center relative top-0 left-2 z-10">
              2
            </p>
            <div className=" relative bottom-3">
              <ShoppingCartSharpIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
