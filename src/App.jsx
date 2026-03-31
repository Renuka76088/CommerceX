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
import DecorationBookingForm from './Components/DecorationBookingForm'
import { CartProvider } from './Context/CartContext'

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
import MarigoldGarlands from './Flower Category/MarigoldGarlands'
import RosePetals from './Flower Category/RosePetals'
import JasmineGarlands from './Flower Category/JasmineGarlands'
import WeddingGarlands from './Flower Category/WeddingGarlands'
import RedRoseBouquet12 from './FlowerProducts/Rose Bouquets/12RedRoseBouquet'
import RedRoseBouquet25 from './FlowerProducts/Rose Bouquets/25RedRoseBouquet'
import RedRoseBouquet100 from './FlowerProducts/Rose Bouquets/100RedRoseBouquet'
import RedRoseBouquet50 from './FlowerProducts/Rose Bouquets/50RedRoseBouquet'
import MixedFlowerBouquet from './FlowerProducts/Rose Bouquets/Mixed Flower Bouquet/MixedFlowerBouquet'
import PremiumMixedBouquet from './FlowerProducts/Rose Bouquets/Mixed Flower Bouquet/PremiumMixedBouquet'
import SeasonalFlowerBouquet from './FlowerProducts/Rose Bouquets/Mixed Flower Bouquet/SeasonalFlowerBouquet'
import WhiteLilyBouquet from './FlowerProducts/Rose Bouquets/LilyBouquets/WhiteLilyBouquet'
import PinkLilyBouquet from './FlowerProducts/Rose Bouquets/LilyBouquets/PinkLilyBouquet'
import MixedLilyBouquet from './FlowerProducts/Rose Bouquets/LilyBouquets/MixedLilyBouquet'
import RedRoseBox from './FlowerProducts/Rose Bouquets/Flower Boxes/RedRoseBox'
import PremiumFlowerBasket from './FlowerProducts/Rose Bouquets/Flower Baskets/PremiumFlowerBasket'
import HaldiDecoration from './FlowerDecoration/WeddingDecoration/HaldiDecoration'
import MehndiDecoration from './FlowerDecoration/WeddingDecoration/MehndiDecoration'
import WeddingStageDecoration from './FlowerDecoration/WeddingDecoration/WeddingStageDecoration'
import AnniversaryDecoration from './FlowerDecoration/WeddingDecoration/Event Decoration/AnniversaryDecoration'
import BabyShowerDecoration from './FlowerDecoration/WeddingDecoration/Event Decoration/BabyShowerDecoration'
import ProposalDecoration from './FlowerDecoration/WeddingDecoration/Event Decoration/ProposalDecoration'
import RibbonFlowerCarDecoration from './FlowerDecoration/WeddingDecoration/Car Decoration/RibbonFlowerCarDecoration'
import RoseCarDecoration from './FlowerDecoration/WeddingDecoration/Car Decoration/RoseCarDecoration'
import BrideCarDecoration from './FlowerDecoration/WeddingDecoration/Car Decoration/BrideCarDecoration'
import Flowerproducts from './Components/Flowerproducts'
import Flowersproducts from './Components/FlowersProducts'
import FlowerBaskets from './Flower Category/FlowerBaskets'
import FlowerCombos from './Flower Category/FlowerCombos'
import FlowerBoxes from './Flower Category/FlowerBoxes'
import FlowerBouquets from './Flower Category/FlowerBouquets'
import LooseFlowers from './Flower Category/LooseFlowers'
import FlowerGarlands from './Flower Category/FlowerGarlands'
import MixedBouquet from './Pages/MixedBouquet'
import Flowerbaskets from './Pages/Flowerbaskets'
import WeddingDecoration from './Pages/WeddingDecoration'
import EventDecoration from './Pages/EventDecoration'
import CarDecorations from './Pages/CarDecorations'
import RoseBox from './FlowerProducts/Rose Bouquets/LilyBouquets/RoseBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartProvider>
    <BrowserRouter>
     <ScrollToTop />
    <Pageheader/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/flower-category' element={<LandingPage/>}/>
      <Route path='/flower-products' element={<LandingPage/>}/>
      <Route path='/flower-decoration' element={<LandingPage/>}/>
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
      <Route path='/decoration-booking' element={<DecorationBookingForm/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/shop-more' element={<ShopMore/>}/>
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/shipping-policy" element={<ShippingPolicy/>} />
      <Route path="/cancellation-policy" element={<CancellationPolicy />} />
      <Route path="/flowers" element={<Flowers />} />
      <Route path="/flower-category/flower-bouquets/all-bouquets" element={<BouquetDesign />} />
    
      <Route path="/rose-bouquets" element={<RoseBouquets />} />
     <Route 
  path="flower-decoration/wedding-decoration/varmala-studio" 
  element={<VarmalaStudio />} 
/>

      <Route path="/flower-decoration/wedding-decoration/table-decoration" element={<TableDecor />} />
      <Route path="/flower-decoration/event-decoration/photo-booth" element={<PhotoBooth />} />
      <Route path="/flower-decoration/event-decoration/entrance-decor" element={<EntranceDecor />} />
      <Route path="flower-decoration/wedding-decoration/mandap-decoration" element={<MandapSetup />} />
      <Route path="flower-decoration/car-decoration/wedding-car-decoration" element={<CarDecoration />} />
      <Route path="/flower-decoration/event-decoration/sacred-flowers" element={<SacredFlowers />} />
      <Route path="/flower-decoration/event-decoration/birthday-decoration" element={<BirthdayDecoration />} />


{/* Flower Category */}
      
      <Route path="/flower-category/flower-bouquets/rose-bouquets" element={<RoseBouquets/>} />
      <Route path="/flower-category/flower-baskets/carnation-basket" element={<CarnationBasket/>} />
      <Route path="/flower-category/flower-bouquets/carnation-bouquets" element={<CarnationBouquets/>} />
      <Route path="/flower-category/flower-combos/flowers-with-cake" element={<FlowersWithCake/>} />
      <Route path="/flower-category/flower-combos/flowers-with-chocolate" element={<FlowersWithChocolate/>} />
      <Route path="/flower-category/flower-combos/flowers-with-gifts" element={<FlowersWithGifts/>} />
      <Route path="/flower-category/flower-bouquets/gerbera-bouquets" element={<GerberaBouquets/>} />
      <Route path="/flower-category/loose-flowers/loose-mixed-flowers" element={<LooseMixedFlowers/>} />
      <Route path="/flower-category/flower-bouquets/lily-bouquets" element={<LilyBouquets/>} />
      <Route path="/flower-category/flower-boxes/luxury-flower-box" element={<LuxuryFlowerBox/>} />
      <Route path="/flower-category/loose-flowers/marigold-flowers" element={<MarigoldFlowers/>} />
      <Route path="flower-category/flower-baskets/mixed-flower-basket" element={<MixedFlowerBasket/>} />
      <Route path="/flower-category/flower-bouquets/mixed-flower-bouquets" element={<MixedFlowerBouquets/>} />
      <Route path="/flower-category/flower-boxes/mixed-flower-box" element={<MixedFlowerBox/>} />
      <Route path="/flower-category/flower-baskets/orchid-basket" element={<OrchidBasket/>} />
      <Route path="/flower-category/flower-bouquets/orchid-bouquets" element={<OrchidBouquets/>} />
      <Route path="/flower-category/flower-baskets/rose-basket" element={<RoseBasket/>} />
      <Route path="/flower-category/flower-boxes/rose-flower-box" element={<RoseFlowerBox/>} />
      <Route path="/flower-category/flower-garlands/rose-garlands" element={<RoseGarlands/>} />
      <Route path="/flower-category/flower-garlands/marigold-garlands" element={<MarigoldGarlands/>} />
      <Route path="/flower-category/flower-combos/flowers-with-teddy" element={<FlowersWithTeddy/>} />
      <Route path="/flower-category/loose-flowers/rose-petals" element={<RosePetals/>} />
      <Route path="/flower-category/loose-flowers/jasmine-flowers" element={<JasmineFlowers/>} />
      <Route path="/flower-category/flower-garlands/jasmine-garlands" element={<JasmineGarlands/>} />
      <Route path="/flower-category/flower-garlands/wedding-garlands" element={<WeddingGarlands/>} />
      <Route path="/flower-category/flower-baskets" element={<FlowerBaskets/>} />
      <Route path="/flower-category/flower-combos" element={<FlowerCombos/>} />
      <Route path="/flower-category/flower-boxes" element={<FlowerBoxes/>} />
      <Route path="/flower-category/flower-bouquets" element={< FlowerBouquets/>} />
      <Route path="/flower-category/loose-flowers" element={<LooseFlowers/>} />
      <Route path="/flower-category/flower-garlands" element={<FlowerGarlands/>} />

{/* RoseBouqet */}

         <Route path="/rose-bouquets/12-red-rose-bouquet" element={<RedRoseBouquet12/>} />
         <Route path="/rose-bouquets/25-red-rose-bouquet" element={<RedRoseBouquet25/>} />
         <Route path="/rose-bouquets/50-red-rose-bouquet" element={<RedRoseBouquet50/>} />
         <Route path="/rose-bouquets/100-red-rose-bouquet" element={<RedRoseBouquet100/>} />
         <Route path="/flower-products/mixed-bouquets/seasonal-flower-bouquet" element={<SeasonalFlowerBouquet/>} />
         <Route path="/flower-products/mixed-bouquets/premium-mixed-bouquet" element={<PremiumMixedBouquet/>} />
         <Route path="/flower-products/mixed-bouquets/mixed-flower-bouquet" element={<MixedFlowerBouquet/>} />
         <Route path="/flower-products/lily-bouquets/white-lily-bouquet" element={<WhiteLilyBouquet/>} />
         <Route path="/flower-products/lily-bouquets/pink-lily-bouquet" element={<PinkLilyBouquet/>} />
         <Route path="/flower-products/lily-bouquets/mixed-lily-bouquet" element={<MixedLilyBouquet/>} />
         <Route path="/flower-products/flower-boxes/luxury-flower-box" element={<LuxuryFlowerBox/>} />
         <Route path="/flower-products/flower-boxes/heart-shape-flower-box" element={<HeartShapeFlowerBox/>} />
         <Route path="flower-category/flower-boxes/heart-shape-flower-box" element={<HeartShapeFlowerBox/>} />
         <Route path="/flower-products/flower-baskets/mixed-flower-basket" element={<MixedFlowerBasket/>} />

         <Route path="/flower-products/flower-baskets/premium-flower-basket" element={<PremiumFlowerBasket/>} />
         <Route path="/flower-products/flower-baskets/rose-basket" element={<RoseBasket/>} />
         <Route path="/flower-products/flower-boxes/red-rose-box" element={<RoseBox/>} />
         <Route path="/flower-products/mixed-bouquets" element={<MixedBouquet/>} />
         <Route path="/flower-products/lily-bouquets" element={<LilyBouquets/>} />
         <Route path="/flower-products/flower-boxes" element={<FlowerBoxes/>} />
         <Route path="/flower-products/flower-baskets" element={<FlowerBaskets/>} />
         <Route path="/flower-decoration/wedding-decoration" element={<WeddingDecoration/>} />
         <Route path="/flower-decoration/event-decoration" element={<EventDecoration/>} />
         <Route path="/flower-decoration/car-decoration" element={<CarDecorations/>} />

         {/* FlowerDecoration */}

             <Route path="/flower-decoration/wedding-decoration/haldi-decoration" element={<HaldiDecoration/>} />
             <Route path="/flower-decoration/wedding-decoration/mehndi-decoration" element={<MehndiDecoration/>} />
             <Route path="/flower-decoration/wedding-decoration/wedding-stage-decoration" element={<WeddingStageDecoration/>} />
             <Route path="/flower-decoration/event-decoration/anniversary-decoration" element={<AnniversaryDecoration/>} />
             <Route path="/flower-decoration/event-decoration/baby-shower-decoration" element={<BabyShowerDecoration/>} />
             <Route path="flower-decoration/event-decoration/proposal-decoration" element={<ProposalDecoration/>} />
             <Route path="/flower-decoration/car-decoration/ribbon-flower-car-decoration" element={<RibbonFlowerCarDecoration/>} />
             <Route path="flower-decoration/car-decoration/rose-car-decoration" element={<RoseCarDecoration/>} />
             <Route path="flower-decoration/car-decoration/bride-car-decoration" element={<BrideCarDecoration/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartProvider>
    
    </>
  )
}

export default App
