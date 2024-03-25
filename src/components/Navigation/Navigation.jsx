import React, { useState } from "react";
import { Avatar } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../SidebarMenu/Sidebar";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cartItems=useSelector(state=>state.cart.cartItems)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="flex justify-between items-center bg-white p-2 text-black border-b w-full fixed top-0 z-50">
        <div className="flex items-center space-x-4 pl-6">
          {/* Logo */}
          <Link to='/' className="text-xl font-bold cursor-pointer">MyShop</Link>
          {/* Navigation Links */}
          <ul className="flex space-x-5">
            <li>
              <p className="cursor-pointer">Women</p>
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
            className="cursor-pointer"
            sx={{ width: 35, height: 35 }}
          />
          {/* Cart Icon */}
          <div className="relative cursor-pointer" onClick={toggleSidebar}>
            <p className="bg-red-400 text-white rounded-xl flex justify-center relative top-0 left-2 z-10">
              {cartItems.length}
            </p>
            <div className="relative bottom-3">
              <ShoppingCartSharpIcon />
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-50"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.1,
              }}
              className="absolute top-0 right-0 bg-white w-[40rem] h-full shadow-lg"
            >
              <div className="h-16 border-b">
                <button
                  onClick={toggleSidebar}
                  className="px-4 py-4"
                >
                  <CloseIcon/>
                </button>
              </div>
              {/* Sidebar content */}
              <div>
                <Sidebar />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
