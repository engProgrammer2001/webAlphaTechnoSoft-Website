import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import Error from "./pages/error/Error";
import MainHeader from "./MainHeader";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import Testomonial from "./pages/Tesomonial/Testomonial";
import EveryViralBlogData from "./pages/Blog/EveryViralBlogData";
import DegitalMarketing from "./pages/services/DegitalMarketing";
import WebDevelopment from "./pages/services/WebDevelopment";
import GraphicDesign from "./pages/services/GraphicDesign";
import WebDesign from "./pages/services/WebDesign";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import SocialMediaManagement from "./pages/services/SocialMediaManagement";
import EcommerceWebsiteDesign from "./pages/services/EcommerceWebsiteDesign";
import SomethingNew from "./pages/services/SomethingNew";
import TermandCondition from "./pages/Term&Condition/Term&Condition";
import Privacyandsecurity from "./pages/Privacy/Privacyandsecurity";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<DegitalMarketing/>} />
            <Route path="/webdevelopment" element={<WebDevelopment/>} />
            <Route path="/graphicdesign" element={<GraphicDesign/>} />
            <Route path="/webdesign" element={<WebDesign/>} />
            <Route path="/mobileappdevelopment" element={<MobileAppDevelopment/>} />
            <Route path="/socialmediamanagment" element={<SocialMediaManagement/>} />
            <Route path="/ecommercewebsitedesign" element={<EcommerceWebsiteDesign/>} />
            <Route path="/somethingnew" element={<SomethingNew/>} />
            <Route path="/termcondition" element={<TermandCondition/>} />
            <Route path="/privacyandsecurity" element={<Privacyandsecurity/>} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/blog/:id" element={<EveryViralBlogData/>}/>
            <Route path="/project" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/testomonial" element={<Testomonial/>} />
            <Route path="*" element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
