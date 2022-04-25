import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from '../pages/Index'
import Register from '../pages/Register'
import SignIn from "../pages/SignIn";

function Router() {


  return (
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<SignIn />} />
    </Routes>
  )
}

export default Router;