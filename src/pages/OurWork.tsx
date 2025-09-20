import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HowWeWork from "../components/HowWeWork";
import TestimonialsReviews from "../components/TestimonialsReviews";
import Pricing from "../components/Pricing";

const OurWork: React.FC = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate("/quote");
  };

  const handleGetStarted = (packageName: string) => {
    console.log(`Get Started clicked for ${packageName} package`);
    navigate("/quote", { state: { selectedPackage: packageName } });
  };

  const handleCustomQuote = () => {
    navigate("/quote", { state: { customQuote: true } });
  };

  const handleJoinClients = () => {
    navigate("/quote");
  };

  return (
    <HelmetProvider>
      <div className="our-work-page" style={{ width: "100%" }}>
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>
            Our Work Process, Testimonials & Pricing | AruLax Web - Web
            Development Services
          </title>
          <meta
            name="description"
            content="Discover our proven web development process, read client testimonials, and explore our transparent pricing packages. From consultation to launch, we deliver exceptional results for your business."
          />
          <meta
            name="keywords"
            content="web development process, client testimonials, pricing packages, web development workflow, project timeline, development stages, client reviews, web development pricing"
          />
          <meta name="author" content="AruLax Web" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="Our Work Process, Testimonials & Pricing | AruLax Web"
          />
          <meta
            property="og:description"
            content="Discover our proven web development process, read client testimonials, and explore our transparent pricing packages for your next project."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arulaxweb.com/our-work" />
          <meta
            property="og:image"
            content="https://arulaxweb.com/images/our-work-og-image.jpg"
          />
          <meta property="og:site_name" content="AruLax Web" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Our Work Process, Testimonials & Pricing | AruLax Web"
          />
          <meta
            name="twitter:description"
            content="Discover our proven web development process, client testimonials, and transparent pricing packages."
          />
          <meta
            name="twitter:image"
            content="https://arulaxweb.com/images/our-work-twitter-card.jpg"
          />

          {/* Additional SEO Tags */}
          <link rel="canonical" href="https://arulaxweb.com/our-work" />
          <meta name="theme-color" content="#4facfe" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Work - Process, Testimonials & Pricing",
              url: "https://arulaxweb.com/our-work",
              description:
                "Discover our proven web development process, read client testimonials, and explore our transparent pricing packages",
              mainEntity: {
                "@type": "Organization",
                name: "AruLax Web",
                url: "https://arulaxweb.com",
                logo: "https://arulaxweb.com/images/logo.png",
                description:
                  "Professional web development agency with proven process and client satisfaction",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Global",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-555-123-4567",
                  contactType: "customer service",
                  email: "hello@arulaxweb.com",
                },
                sameAs: [
                  "https://linkedin.com/company/arulaxweb",
                  "https://youtube.com/@arulaxweb",
                  "https://github.com/arulaxweb",
                ],
                offers: {
                  "@type": "Offer",
                  description:
                    "Web development services with transparent pricing and proven process",
                  category: "Web Development Services",
                },
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
            background: "#4facfe",
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
          {/* How We Work / Process Section */}
          <HowWeWork onStartProject={handleStartProject} />

          {/* Testimonials / Reviews Section */}
          <TestimonialsReviews onJoinClients={handleJoinClients} />

          {/* Pricing Section */}
          <Pricing
            onGetStarted={handleGetStarted}
            onCustomQuote={handleCustomQuote}
            onStartProject={handleStartProject}
          />
        </main>

        {/* Enhanced Dynamic Background Effects */}
        <style>{`
          .our-work-page {
            position: relative;
            overflow-x: hidden;
          }
          
          /* Dynamic color transitions */
          .our-work-page::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              45deg,
              rgba(79, 172, 254, 0.02) 0%,
              rgba(0, 242, 254, 0.02) 25%,
              rgba(250, 112, 154, 0.02) 50%,
              rgba(254, 225, 64, 0.02) 75%,
              rgba(79, 172, 254, 0.02) 100%
            );
            background-size: 400% 400%;
            animation: gradientShift 25s ease infinite;
            pointer-events: none;
            z-index: -1;
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          /* Floating particles effect */
          .our-work-page::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(circle at 15% 85%, rgba(79, 172, 254, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 85% 15%, rgba(250, 112, 154, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(254, 225, 64, 0.08) 0%, transparent 50%);
            animation: particleFloat 30s ease-in-out infinite;
            pointer-events: none;
            z-index: -1;
          }
          
          @keyframes particleFloat {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-40px) rotate(180deg);
              opacity: 0.7;
            }
          }
          
          /* Enhanced section transitions */
          .our-work-page > main > * {
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
          .our-work-page img {
            will-change: transform;
          }
          
          .our-work-page .btn {
            will-change: transform, box-shadow;
          }
          
          /* Responsive enhancements */
          @media (max-width: 768px) {
            .our-work-page::before,
            .our-work-page::after {
              animation-duration: 20s;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .our-work-page::before,
            .our-work-page::after {
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

export default OurWork;
