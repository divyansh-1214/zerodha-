// import HomePage from './home/HomePage'
import './App.css'
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom'
import HomePage from "./home/HomePage";
import Signup from "./signup/Signup";
import AboutPage from "./about/AboutPage";
import ProductPage from "./product/ProductPage";
import PricingPage from "./pricing/PricingPage";
import SupportPage from "./support/SupportPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {

  return (
    <>
      <Router>
      <Navbar />
       <Routes>
       <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
       </Routes>
     <Footer />
     </Router>
    </>
  )
}

export default App
