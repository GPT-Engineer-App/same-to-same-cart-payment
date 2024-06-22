import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CartPaymentPage from "./pages/CartPaymentPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/cart-payment" element={<CartPaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
