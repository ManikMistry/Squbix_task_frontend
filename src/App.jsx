import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import ProdcutDetails from './components/ProductDetails/ProductDetails'
import Footer from "./components/Footer/Footer";
import DeliveryAddressForm from "./components/Checkout/DeliveryAddressForm";
import OrderSummary from "./components/Checkout/OrderSummary";
import Checkout from "./components/Checkout/Checkout";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <div className=" block">
        {/* <Navigation/> */}
        {/* <HomePage/> */}
        {/* <ProdcutDetails/> */}
        {/* <DeliveryAddressForm/> */}
        {/* <Checkout/> */}
        {/* <OrderSummary/> */}
        {/* <Footer/> */}
        <Menu/>
      </div>
    </>
  );
}

export default App;
