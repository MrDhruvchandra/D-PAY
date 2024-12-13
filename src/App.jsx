import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
 import GetBalance from "./pages/GetBalance";

 import QuickActions from './pages/QuickActions';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks'

import Homepage from './pages/Homepage'

 import Header from './components/Header';
import Hero from './components/Hero';
// import Features from './components/Features';
// import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
  
// import Home from './pages/Home';
 import Careers from './pages/Careers';
import Press from './pages/Press';
import Blog from './pages/Blog';
import HelpCenter from      './pages/HelpCenter'            
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ContactUs from './pages/ContactUs';
import ComingSoon from './pages/Comingsoon';
import AboutUs from "./pages/AboutUs";
import UserProfile from "./pages/UserProfile";
 
function App() {
  return (
    <>
       <BrowserRouter>
       <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route> 
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/coming-soon" element={<ComingSoon />} />

           <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/balance" element={<GetBalance />} />
          <Route path="/user-profile" element={<UserProfile />} />


          <Route path="/quickaction" element={<QuickActions/>} />
          <Route path="/features" element={<Features />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          </Route>
         <Route >
          <Route path="/admin" element ={<Homepage/>} />
         </Route>
        </Routes>
      </main>
      <Footer />
    </div>
       
        
        
      </BrowserRouter>
    </>
  )
}

export default App
