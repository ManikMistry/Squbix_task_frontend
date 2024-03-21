import { useState } from 'react';
import './ProdcutCard.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="productCard w-[15rem] m-3 transition-all cursor-pointer relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="h-[20rem]">
          <img
            className="h-full w-full object-cover object-left-top"
            src={product.image}
            alt="img"
          />
        </div>
        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60">{product.brand}</p>
            <p>{product.title}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">{product.selling_price}</p>
            <p className="line-through opacity-50">{product.price}</p>
            <p className="text-green-600 font-semibold">{product.discount}</p>
          </div>
        </div>
        {isHovered && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-sm p-1">
            <ShoppingCartIcon/>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductCard;
