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
import CitySelection from './Components/CitySelection'

import About from './Components/About'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import DecorationPage from './Decoration/DecorationPage'
import WeddingEventDecoration from './Decoration/Wedding&EventDecor'
import SpecializedDecoration from './Decoration/SpecializedDecoration'
import Visitourshop from './Decoration/Visitourshop'
import Blog from './Decoration/Blog'
import BookNow from './Components/BookNow'

import Gallery from './Components/Gallery'
import ShopMore from './Components/ShopMore'
import TermsAndConditions from './Components/TermsAndConditions'
import PrivacyPolicy from './Components/PrivacyPolicy'
import Disclaimer from './Components/Disclaimer'
import ShippingPolicy from './Components/ShippingPolicy'
import CancellationPolicy from './Components/CancellationPolicy'
import ScrollToTop from './Components/ScrollToTop'
import Flowers from './Pages/Flowers'
import BouquetDesign from './Pages/BouquetDesigns'
import VarmalaStudio from './Pages/VarmalaStudio'
import TableDecor from './Pages/TableDecor'
import EntranceDecor from './Pages/EntranceDecor'
import MandapSetup from './Pages/MandapSetup'
import CarDecoration from './Pages/CarDecoration'
import SacredFlowers from './Pages/SacredFlowers'
import BirthdayDecoration from './Pages/BirthdayDecoration'
import PhotoBooth from './Pages/PhotoBooth'
import RoseBouquets from './Flower Category/RoseBouquets'
import CarnationBasket from './Flower Category/CarnationBasket'
import CarnationBouquets from './Flower Category/CarnationBouquets'
import FlowersWithCake from './Flower Category/FlowersWithCake'
import FlowersWithChocolate from './Flower Category/FlowersWithChocolate'
import FlowersWithGifts from './Flower Category/FlowersWithGifts'
import FlowersWithTeddy from './Flower Category/FlowersWithTeddy'
import GerberaBouquets from './Flower Category/GerberaBouquets'
import HeartShapeFlowerBox from './Flower Category/HeartShapeFlowerBox'
import JasmineFlowers from './Flower Category/JasmineFlowers'
import LooseMixedFlowers from './Flower Category/LooseMixedFlowers'
import LilyBouquets from './Flower Category/LilyBouquets'
import LuxuryFlowerBox from './Flower Category/LuxuryFlowerBox'
import MarigoldFlowers from './Flower Category/MarigoldFlowers'
import MixedFlowerBasket from './Flower Category/MixedFlowerBasket'
import MixedFlowerBouquets from './Flower Category/MixedFlowerBouquets'
import MixedFlowerBox from './Flower Category/MixedFlowerBox'
import OrchidBasket from './Flower Category/OrchidBasket'
import OrchidBouquets from './Flower Category/OrchidBouquets'
import RoseBasket from './Flower Category/RoseBasket'
import RoseFlowerBox from './Flower Category/RoseFlowerBox'
import RoseGarlands from './Flower Category/RoseGarlands'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <ScrollToTop />
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
      <Route path='/select-city' element={<CitySelection/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/faqs' element={<FAQ/>}/>
      <Route path='/decoration' element={<DecorationPage/>}/>
      <Route path='/wedding-event-decor' element={<WeddingEventDecoration/>}/>
      <Route path='/specialized-decoration' element={<SpecializedDecoration/>}/>
      <Route path='/visit-our-shop' element={<Visitourshop/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/book-now' element={<BookNow/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/shop-more' element={<ShopMore/>}/>
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/shipping-policy" element={<ShippingPolicy/>} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/flowers" element={<Flowers />} />
      <Route path="/flower-category/all-bouquets" element={<BouquetDesign />} />
     <Route 
  path="/flower-decoration/varmala-studio" 
  element={<VarmalaStudio />} 
/>

      <Route path="/flower-decoration/table-decoration" element={<TableDecor />} />
      <Route path="/flower-decoration/photo-booth" element={<PhotoBooth />} />
      <Route path="flower-decoration/entrance-decor" element={<EntranceDecor />} />
      <Route path="/flower-decoration/mandap-decoration" element={<MandapSetup />} />
      <Route path="/flower-decoration/wedding-car-decoration" element={<CarDecoration />} />
      <Route path="/flower-decoration/sacred-flowers" element={<SacredFlowers />} />
      <Route path="/flower-decoration/birthday-decoration" element={<BirthdayDecoration />} />

      
      <Route path="/flower-category/rose-bouquets" element={<RoseBouquets/>} />
      <Route path="/flower-category/carnation-basket" element={<CarnationBasket/>} />
      <Route path="/flower-category/carnation-bouquets" element={<CarnationBouquets/>} />
      <Route path="/flower-category/flowers-with-cake" element={<FlowersWithCake/>} />
      <Route path="/flower-category/flowers-with-chocolate" element={<FlowersWithChocolate/>} />
      <Route path="/flower-category/flowers-with-gifts" element={<FlowersWithGifts/>} />
      <Route path="/flower-category/gerbera-bouquets" element={<GerberaBouquets/>} />
      <Route path="/flower-category/loose-mixed-flowers" element={<LooseMixedFlowers/>} />
      <Route path="/flower-category/lily-bouquets" element={<LilyBouquets/>} />
      <Route path="/flower-category/luxury-flower-box" element={<LuxuryFlowerBox/>} />
      <Route path="/flower-category/marigold-flowers" element={<MarigoldFlowers/>} />
      <Route path="/flower-category/mixed-flower-basket" element={<MixedFlowerBasket/>} />
      <Route path="/flower-category/mixed-flower-bouquets" element={<MixedFlowerBouquets/>} />
      <Route path="/flower-category/mixed-flower-box" element={<MixedFlowerBox/>} />
      <Route path="/flower-category/orchid-basket" element={<OrchidBasket/>} />
      <Route path="/flower-category/orchid-bouquets" element={<OrchidBouquets/>} />
      <Route path="/flower-category/rose-basket" element={<RoseBasket/>} />
      <Route path="/flower-category/rose-flower-box" element={<RoseFlowerBox/>} />
      <Route path="/flower-category/rose-garlands" element={<RoseGarlands/>} />
      <Route path="/flower-category/orchid-basket" element={<OrchidBasket/>} />
      <Route path="/flower-category/orchid-basket" element={<OrchidBasket/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
