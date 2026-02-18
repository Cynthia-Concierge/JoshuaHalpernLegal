import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import LLCFormation from "./pages/services/LLCFormation";
import EstatePlanning from "./pages/services/EstatePlanning";
import ContractDrafting from "./pages/services/ContractDrafting";
import BrandProtection from "./pages/services/BrandProtection";
import RealEstateLLC from "./pages/services/RealEstateLLC";
import WebsiteCompliance from "./pages/services/WebsiteCompliance";
import LawyerOnCall from "./pages/services/LawyerOnCall";
import Formation from "./pages/Formation";
import FormationIntake from "./pages/FormationIntake";
import FormationThankYou from "./pages/FormationThankYou";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import PaymentPolicy from "./pages/PaymentPolicy";

const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/askmeanything" || location.pathname === "/thank-you" || location.pathname === "/formation/intake" || location.pathname === "/formation/thank-you";

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/askmeanything" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/llc-formation" element={<LLCFormation />} />
        <Route path="/services/estate-planning" element={<EstatePlanning />} />
        <Route path="/services/contract-drafting" element={<ContractDrafting />} />
        <Route path="/services/brand-protection" element={<BrandProtection />} />
        <Route path="/services/real-estate-llc" element={<RealEstateLLC />} />
        <Route path="/services/website-compliance" element={<WebsiteCompliance />} />
        <Route path="/services/lawyer-on-call" element={<LawyerOnCall />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/formation/intake" element={<FormationIntake />} />
        <Route path="/formation/thank-you" element={<FormationThankYou />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
