import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import Index from '../pages/Index/Index'
import Register from '../pages/Register/Register'
import SignIn from "../pages/SignIn/SignIn";
import Account from "../pages/Account/Account";
import ProductDetail from "../pages/ProductDetail/ProductDetail";


function Router() {


  return (
    <Routes>      
      <Route path="/index" element={<Index />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<SignIn />} />
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="account" element={<Account />} />
      <Route path="productdetail/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default Router;