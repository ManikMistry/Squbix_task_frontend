import ProductCard from "./ProductCard.jsx";
import { womens_kurta } from "../../data/womens_kurta.js";
import SortIcon from "@mui/icons-material/Sort";

export default function Product({products}) {
  return (
    <>
      <div className=" h-16 border w-full px-4 flex justify-between items-center">
        <h3 className=" font-bold text-2xl text-gray-800">Recomended</h3>
      </div>
      <div className="h-full flex">
        <div className="w-1/5 h-full">
          <div className="h-16 w-full relative border-b flex justify-between items-center px-4 ml-3">
            <p className="text-md font-bold">Filter</p>
            <div className="cursor-pointer">
              <SortIcon />
            </div>
          </div>
          {/* FILTER PRODUCTS */}
          <div className="p-4 h-full">
            <div className="mb-4">
              <p className="font-semibold mb-2">Price</p>
              <div>
                <input type="radio" id="price-all" name="price" value="all"/>
                <label htmlFor="price-all">All</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="price-low-to-high"
                  name="price"
                  value="low-to-high"
                />
                <label htmlFor="price-low-to-high">Price Low to High</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="price-high-to-low"
                  name="price"
                  value="high-to-low"
                />
                <label htmlFor="price-high-to-low">Price High to Low</label>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-semibold mb-2">Discount</p>
              <div>
                <input
                  type="checkbox"
                  id="discount-10-20"
                  name="discount"
                  value="10-20"
                />
                <label htmlFor="discount-10-20">10% - 20%</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="discount-20-40"
                  name="discount"
                  value="20-40"
                />
                <label htmlFor="discount-20-40">20% - 40%</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="discount-40-60"
                  name="discount"
                  value="40-60"
                />
                <label htmlFor="discount-40-60">40% - 60%</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="discount-60-80"
                  name="discount"
                  value="60-80"
                />
                <label htmlFor="discount-60-80">60% - 80%</label>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Size</p>
              <div>
                <input type="radio" id="size-s" name="size" value="s" />
                <label htmlFor="size-s">S</label>
              </div>
              <div>
                <input type="radio" id="size-m" name="size" value="m" />
                <label htmlFor="size-m">M</label>
              </div>
              <div>
                <input type="radio" id="size-l" name="size" value="l" />
                <label htmlFor="size-l">L</label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 h-full bg-gray-500">
          <div className="flex flex-wrap justify-center bg-white py-5">
            {womens_kurta.map((item,index) => (
              <ProductCard key={index} product={item}/>
            ))}
          </div>
          {/* Content for the second div */}
        </div>
      </div>
    </>
  );
}