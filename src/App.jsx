import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Components/LandingPage'
import Pageheader from './Components/Pageheader'
import Footer from './Components/Footer'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import Profile from './Components/Profile'
import LoginStepper from './Auth/LoginStepper'
import VendorForm from './Vendor/VendorForm'
import VendorDashboard from './Vendor/VendorDashboard'
import Admin from './Admin/Admin'
import AdminProfile from './Admin/AdminProfile'
import VendorProfile from './Vendor/VendorProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Pageheader/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/product-details' element={<ProductDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<LoginStepper/>}/>
      <Route path='/vendor-form' element={<VendorForm/>}/>
      <Route path='/vendor-dashboard' element={<VendorDashboard/>}/>
      <Route path='/admin-dashboard' element={<Admin/>}/>
      <Route path='/admin-profile' element={<AdminProfile/>}/>
      <Route path='/vendor-profile' element={<VendorProfile/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
