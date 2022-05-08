import React from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../pages/AddProduct/AddProduct";
import NotFound from '../pages/NotFound/NotFound'
import Index from '../pages/Index/Index'
import Register from '../pages/Register/Register'
import SignIn from "../pages/SignIn/SignIn";
import Account from "../pages/Account/Account";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import GetOffers from "../components/OffersTab/GetOffers";
import GiveOffers from "../components/OffersTab/GiveOffers";


function Router() {


  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<Index />} />      
      <Route path="/index" element={<Index />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<SignIn />} />
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="account" element={<Account />}>
        <Route index element={<GetOffers />} />
        <Route path="getoffers" element={<GetOffers />} />
        <Route path="giveoffers" element={<GiveOffers />} />
      </Route>
      <Route path="productdetail/:id" element={<ProductDetail />} />
      
    </Routes>
  )
}

export default Router;