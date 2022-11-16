import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from '../components/productDetails';
import Profile from '../components/profile';
import Home from './home'

const Main = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/productDetails' element={<ProductDetails />} /> 
          <Route path='/profile' element={<Profile />} /> 
        </Routes>
    </Router>
  )
}

export default Main