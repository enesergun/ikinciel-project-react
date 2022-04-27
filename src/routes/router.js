import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Index from '../pages/Index'
import Register from '../pages/Register'
import SignIn from "../pages/SignIn";
import Account from "../pages/Account";


function Router() {


  return (
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<SignIn />} />
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="account" element={<Account />} />

    </Routes>
  )
}

export default Router;