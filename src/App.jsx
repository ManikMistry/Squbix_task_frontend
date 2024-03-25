import { Provider } from "react-redux";
import store from "./context/store.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import CustomerRoutes from "./routers/CustomerRoutes.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
