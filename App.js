import {React,} from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Shipping from "./components/Shipping";
import ConfirmOrder from "./components/ConfirmOrder";
import PaymentSuccess from "./components/PaymentSuccess";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmorder.scss";
import "./styles/paymentsuccess.scss";


function App() {

  
  
  return (
    <Router>
    <Header />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/shipping" element={<Shipping/>} />
      <Route path="/confrimorder" element={<ConfirmOrder/>} />
      <Route path="/paymentSuccess" element={<PaymentSuccess/>} />
      
    </Routes>
  </Router>
  );
}

export default App;
