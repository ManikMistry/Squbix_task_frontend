import Footer from "../../components/Footer/Footer";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import Product from "../../components/Product/Product";

function HomePage() {
  return (
    <>
      <div className="top-16 relative">
        <MainCarousel />
      </div>

      <div className=" relative top-28">
        <Product />
      </div>
      <div>{/* <Footer/> */}</div>
    </>
  );
}

export default HomePage;
