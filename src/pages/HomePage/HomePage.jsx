import Footer from "../../components/Footer/Footer";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import Product from "../../components/Product/Product";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

function HomePage() {
  return (
    <>
      <div className="top-16 relative">
        <MainCarousel />
      </div>

      <div className="">
        <Product />
        {/* <ProductDetails/> */}
      </div>
      <div><Footer/></div>
    </>
  );
}

export default HomePage;
