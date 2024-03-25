// ProductCard.js
import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../context/action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import './ProdcutCard.css'

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer relative">
      <div className="h-[20rem]">
        <Link to={`/productDetails/${product.id}`}>
          <img
            className="h-full w-full object-cover object-left-top"
            src={product.image}
            alt="img"
          />
        </Link>
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.selling_price}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">{product.disscount}</p>
        </div>
      </div>
      <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-sm p-1" onClick={handleAddToCart}>
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default ProductCard;