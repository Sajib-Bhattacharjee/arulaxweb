import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ServiceCards from "../components/ServiceCards";
import ServiceDetails from "../components/ServiceDetails";
import ServicesCTA from "../components/ServicesCTA";

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    console.log(`Service clicked: ${serviceId}`);
    // Additional logic for service selection can be added here
  };

  const handleRequestQuote = () => {
    navigate("/quote");
  };

  const handleScheduleCall = () => {
    navigate("/contact");
  };

  const handleContactUs = () => {
    navigate("/contact");
  };

  return (
    <HelmetProvider>
      <div className="services-page" style={{ width: "100%" }}>
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>
            Professional Web Development Services | AruLax Web - Custom
            Solutions
          </title>
          <meta
            name="description"
            content="Transform your business with our comprehensive web development services. Custom web design, responsive development, Google Sheets integration, e-commerce solutions, and SEO optimization. Get your free quote today!"
          />
          <meta
            name="keywords"
            content="web development services, custom web design, responsive development, Google Sheets integration, e-commerce solutions, SEO optimization, web development company, professional websites"
          />
          <meta name="author" content="AruLax Web" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="Professional Web Development Services | AruLax Web"
          />
          <meta
            property="og:description"
            content="Transform your business with our comprehensive web development services. Custom web design, responsive development, Google Sheets integration, and e-commerce solutions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arulaxweb.com/services" />
          <meta
            property="og:image"
            content="https://arulaxweb.com/images/services-og-image.jpg"
          />
          <meta property="og:site_name" content="AruLax Web" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Professional Web Development Services | AruLax Web"
          />
          <meta
            name="twitter:description"
            content="Transform your business with our comprehensive web development services including custom design, responsive development, and Google Sheets integration."
          />
          <meta
            name="twitter:image"
            content="https://arulaxweb.com/images/services-twitter-card.jpg"
          />

          {/* Additional SEO Tags */}
          <link rel="canonical" href="https://arulaxweb.com/services" />
          <meta name="theme-color" content="#667eea" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Web Development Services",
              provider: {
                "@type": "Organization",
                name: "AruLax Web",
                url: "https://arulaxweb.com",
                logo: "https://arulaxweb.com/images/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-555-123-4567",
                  contactType: "customer service",
                  email: "hello@arulaxweb.com",
                },
              },
              description:
                "Professional web development services including custom web design, responsive development, Google Sheets integration, e-commerce solutions, and SEO optimization.",
              serviceType: "Web Development",
              areaServed: "Global",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Design",
                      description:
                        "Custom, modern, responsive web design services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Responsive Development",
                      description:
                        "Mobile-first, cross-browser web development",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Sheets Integration",
                      description:
                        "Real-time data management and dynamic content updates",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "E-commerce Solutions",
                      description:
                        "Complete online store solutions with payment processing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SEO & Performance Optimization",
                      description:
                        "Search engine optimization and performance enhancement",
                    },
                  },
                ],
              },
            })}
          </script>
        </Helmet>

        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#main-content"
          className="skip-link visually-hidden-focusable"
          style={{
            position: "absolute",
            top: "-40px",
            left: "6px",
            background: "#667eea",
            color: "white",
            padding: "8px",
            textDecoration: "none",
            borderRadius: "4px",
            zIndex: 9999,
          }}
        >
          Skip to main content
        </a>

        <main id="main-content" role="main">
          {/* Service Cards Section */}
          <ServiceCards onServiceClick={handleServiceClick} />

          {/* Detailed Service Explanations */}
          <ServiceDetails />

          {/* Enhanced CTA Section */}
          <ServicesCTA
            title="Ready to Get Started?"
            description="Transform your business with our expert web development services. Get a personalized quote tailored to your specific needs and budget."
            onRequestQuote={handleRequestQuote}
            onScheduleCall={handleScheduleCall}
            onContactUs={handleContactUs}
          />
        </main>

        {/* Enhanced Dynamic Background Effects */}
        <style>{`
          .services-page {
            position: relative;
            overflow-x: hidden;
          }
          
          /* Dynamic color transitions */
          .services-page::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              45deg,
              rgba(102, 126, 234, 0.02) 0%,
              rgba(118, 75, 162, 0.02) 25%,
              rgba(240, 147, 251, 0.02) 50%,
              rgba(79, 172, 254, 0.02) 75%,
              rgba(102, 126, 234, 0.02) 100%
            );
            background-size: 400% 400%;
            animation: gradientShift 20s ease infinite;
            pointer-events: none;
            z-index: -1;
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          /* Floating particles effect */
          .services-page::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(79, 172, 254, 0.08) 0%, transparent 50%);
            animation: particleFloat 25s ease-in-out infinite;
            pointer-events: none;
            z-index: -1;
          }
          
          @keyframes particleFloat {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-30px) rotate(180deg);
              opacity: 0.6;
            }
          }
          
          /* Enhanced section transitions */
          .services-page > main > * {
            position: relative;
          }
          
          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }
          
          /* Skip link enhancement */
          .skip-link:focus {
            top: 6px;
            outline: 2px solid #fff;
            outline-offset: 2px;
          }
          
          /* Performance optimizations */
          .services-page img {
            will-change: transform;
          }
          
          .services-page .btn {
            will-change: transform, box-shadow;
          }
          
          /* Responsive enhancements */
          @media (max-width: 768px) {
            .services-page::before,
            .services-page::after {
              animation-duration: 15s;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .services-page::before,
            .services-page::after {
              animation: none;
            }
            
            html {
              scroll-behavior: auto;
            }
          }
        `}</style>
      </div>
    </HelmetProvider>
  );
};

export default Services;
