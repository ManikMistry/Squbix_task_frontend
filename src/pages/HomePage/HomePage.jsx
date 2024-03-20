import Footer from "../../components/Footer/Footer";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import Product from "../../components/Product/Product";

function HomePage() {
  return (
    <>
      <div>
        <MainCarousel />
      </div>
      <div>
      <Product/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;
