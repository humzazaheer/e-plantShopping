// import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/e-plantShopping" element={<LandingPage />} />
        <Route path="/e-plantShopping/productlist" element={<ProductList />} />
        <Route path="/e-plantShopping/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
};

export default App;
