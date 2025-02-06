// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import Error from "./pages/error/Error";
import MainHeader from "./MainHeader";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
import Privacyandsecurity from "./pages/Privacy/Privacyandsecurity";
import WebsiteDesignPackages from "./pages/packages/WebsiteDesignPackages";
import SocialMediaPackages from "./pages/packages/SocialMediaPackages";
import SeoPackages from "./pages/packages/SeoPackages";
import SmoPackages from "./pages/packages/SmoPackages";
import SoftwareDevelopment from "./pages/packages/SoftwareDevelopment";
import LocaSeoPackages from "./pages/packages/LocaSeoPackages";
import SubmitReview from "./pages/SubmitReview/SubmitReview";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup.jsx";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import AdminRoute from "./AdminRoute/AdminRoute.js";
import AdminPanel from "./Admin/AdminPanel.jsx";
import RoleBasedRedirect from "./RoleBasedRedirect/RoleBasedRedirect.jsx";
import TermandCondition from "./pages/Term&Condition/Term&Condition.jsx";
import SeoServices from "./pages/services/SeoServices.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Role-based Redirection Logic */}
        <RoleBasedRedirect />

        {/* Main App Routes */}
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/services" element={<DegitalMarketing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/webdevelopment" element={<WebDevelopment />} />
            <Route path="/graphicdesign" element={<GraphicDesign />} />
            <Route path="/webdesign" element={<WebDesign />} />
            <Route path="/mobileappdevelopment" element={<MobileAppDevelopment />} />
            <Route path="/socialmediamanagment" element={<SocialMediaManagement />} />
            <Route path="/ecommercewebsitedesign" element={<EcommerceWebsiteDesign />} />
            <Route path="/seo-services" element={<SeoServices />} />
            <Route path="/somethingnew" element={<SomethingNew />} />
            <Route path="/websitepackage" element={<WebsiteDesignPackages />} />
            <Route path="/socialmediapackage" element={<SocialMediaPackages />} />
            <Route path="/seopackage" element={<SeoPackages />} />
            <Route path="/smopackage" element={<SmoPackages />} />
            <Route path="/localsmopackage" element={<LocaSeoPackages />} />
            <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
            <Route path="/termcondition" element={<TermandCondition />} />
            <Route path="/privacyandsecurity" element={<Privacyandsecurity />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<EveryViralBlogData />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testomonial" element={<Testomonial />} />
            <Route path="/review" element={<SubmitReview />} />
            {/* Admin Route */}
            <Route path="/admin" element={<AdminRoute element={AdminPanel} />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
