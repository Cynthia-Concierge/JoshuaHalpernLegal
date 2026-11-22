import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import Seo from "./components/Seo";
import A11yEnhancer from "./components/A11yEnhancer";
import { captureAttributionFromUrl } from "./utils/attribution";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AttributionCapture = () => {
  // First-touch attribution: persist UTM/fbclid/gclid to sessionStorage on the
  // very first page load, so a click on a Meta ad → /lawyeroncall → /formation
  // /intake still gets attributed when the form posts.
  useEffect(() => {
    captureAttributionFromUrl();
  }, []);
  return null;
};
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import LawyerOnCall from "./pages/LawyerOnCall";
import RepresentativeMatters from "./pages/RepresentativeMatters";

import Formation from "./pages/Formation";
import FormationIntake from "./pages/FormationIntake";
import FormationThankYou from "./pages/FormationThankYou";
import BookingThankYou from "./pages/BookingThankYou";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import PaymentPolicy from "./pages/PaymentPolicy";
import Accessibility from "./pages/Accessibility";
import RealEstate from "./pages/RealEstate";
import RealEstateThankYou from "./pages/RealEstateThankYou";

const Layout = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/lawyeroncall" || location.pathname === "/lawyeroncall/thank-you" || location.pathname === "/thank-you" || location.pathname === "/formation/intake" || location.pathname === "/formation/thank-you" || location.pathname === "/booking/thank-you" || location.pathname === "/realestate" || location.pathname === "/realestate/thank-you";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Seo />
      <AttributionCapture />
      <A11yEnhancer />
      {!hideNavbar && <Navbar />}
      <div id="main-content" tabIndex={-1} className="outline-none">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lawyeroncall" element={<Index />} />
        <Route path="/lawyeroncall/thank-you" element={<ThankYou />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/llc-formation" element={<Navigate to="/services#business" replace />} />
        <Route path="/services/estate-planning" element={<Navigate to="/services#family" replace />} />
        <Route path="/services/contract-drafting" element={<Navigate to="/services#contracts" replace />} />
        <Route path="/services/brand-protection" element={<Navigate to="/services#brand" replace />} />
        <Route path="/services/real-estate-llc" element={<Navigate to="/services#realestate" replace />} />
        <Route path="/services/website-compliance" element={<Navigate to="/services#online" replace />} />
        <Route path="/outside-general-counsel" element={<LawyerOnCall />} />
        <Route path="/lawyer-on-call" element={<Navigate to="/outside-general-counsel" replace />} />

        <Route path="/representative-matters" element={<RepresentativeMatters />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/formation/intake" element={<FormationIntake />} />
        <Route path="/formation/thank-you" element={<FormationThankYou />} />
        <Route path="/booking/thank-you" element={<BookingThankYou />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/payment-policy" element={<PaymentPolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/realestate/thank-you" element={<RealEstateThankYou />} />
      </Routes>
      </div>
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
