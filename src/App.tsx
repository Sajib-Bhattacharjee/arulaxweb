import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import { QuickChatProvider } from "./context/QuickChatContext";
import QuickChatEnhanced from "./components/QuickChatEnhanced";
import { initializeAnalytics } from "./services/QuickChatAnalytics";
import { initializeBackend } from "./services/BackendIntegration";
import PWAService from "./services/PWAService";

function App() {
  const handleNewsletterSubscribe = (email: string) => {
    console.log("Newsletter subscription:", email);
    // Here you would typically send the email to your backend API
  };

  const handleBackToTop = () => {
    console.log("Back to top clicked");
  };

  // Initialize services
  React.useEffect(() => {
    // Initialize PWA Service
    const pwaService = PWAService.getInstance();
    pwaService.registerServiceWorker();

    // Initialize Analytics
    initializeAnalytics({
      apiEndpoint: import.meta.env.VITE_ANALYTICS_ENDPOINT,
      userId: undefined, // Will be set when user provides info
      enableHeatmap: true,
      enableAnalytics: true,
    });

    // Initialize Backend Integration
    initializeBackend({
      googleSheets: {
        apiKey: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || "",
        spreadsheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID || "",
        range: "Leads!A:L",
      },
      email: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
      },
      crm: {
        type: "hubspot",
        apiKey: import.meta.env.VITE_HUBSPOT_API_KEY || "",
      },
    });
  }, []);

  return (
    <Router>
      <QuickChatProvider
        config={{
          whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "+1234567890",
          facebookPageId: import.meta.env.VITE_FACEBOOK_PAGE_ID || "arulaxweb",
          enableAI: true,
          enableVoice: true,
          enableMultilingual: true,
          theme: "auto",
          analytics: true,
          apiEndpoint: import.meta.env.VITE_API_ENDPOINT,
          autoOpenDelay: 0, // Disabled - chat only opens when user clicks
        }}
      >
        <div className="app" style={{ width: "100%" }}>
          <Navbar />
          <main style={{ width: "100%", flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </main>
          <Footer
            onNewsletterSubscribe={handleNewsletterSubscribe}
            onBackToTop={handleBackToTop}
          />

          {/* Quick Chat Widget */}
          <QuickChatEnhanced />

          {/* PWA Install Prompt */}
          <PWAInstallPrompt />
        </div>
      </QuickChatProvider>
    </Router>
  );
}

export default App;
