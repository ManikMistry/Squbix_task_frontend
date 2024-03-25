import Navigation from "../components/Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../components/Footer/Footer";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import DeliveryAddressForm from "../components/Checkout/DeliveryAddressForm";
import OrderSummary from "../components/Checkout/OrderSummary";
import { Route, Routes } from "react-router-dom";
OrderSummary;

function CustomerRoutes() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/deliveryAddressForm" element={<DeliveryAddressForm/>}></Route>
        <Route path="/productDetails" element={<ProductDetails/>}></Route>
        {/* <Route path="/productDetails/deliveryAddressForm" element={<DeliveryAddressForm/>}></Route> */}
        <Route path="/orderSummary" element={<OrderSummary/>}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default CustomerRoutes;
