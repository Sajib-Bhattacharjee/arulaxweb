import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../components/Hero-improved";
import AboutMini from "../components/AboutMini";
import ServicesSnapshot from "../components/ServicesSnapshot";
import PortfolioPreview from "../components/PortfolioPreview-improved";
import TeamMini from "../components/TeamMini";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Enhanced CTA handlers with proper navigation
  const heroCTAs = [
    {
      text: "Get a Quote",
      variant: "primary" as const,
      onClick: () => navigate("/quote"),
    },
    {
      text: "View Our Work",
      variant: "outline-light" as const,
      onClick: () => navigate("/portfolio"),
    },
  ];

  const aboutCTA = {
    text: "Learn More About Us",
    onClick: () => navigate("/about"),
  };

  const ctaButton = {
    text: "Get Your Free Quote",
    variant: "light" as const,
    onClick: () => navigate("/quote"),
  };

  return (
    <HelmetProvider>
      <div className="home-page" style={{ width: "100%" }}>
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>
            AruLax Web - Professional Web Development & Google Sheets
            Integration
          </title>
          <meta
            name="description"
            content="Transform your business with professional web development services. Specializing in responsive design, Google Sheets integration, and custom web solutions. Get your free quote today!"
          />
          <meta
            name="keywords"
            content="web development, Google Sheets integration, responsive design, custom websites, React development, SEO optimization, e-commerce solutions"
          />
          <meta name="author" content="AruLax Web" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="AruLax Web - Professional Web Development Services"
          />
          <meta
            property="og:description"
            content="Transform your business with professional web development services. Specializing in responsive design, Google Sheets integration, and custom web solutions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arulaxweb.com" />
          <meta
            property="og:image"
            content="https://arulaxweb.com/images/og-image.jpg"
          />
          <meta property="og:site_name" content="AruLax Web" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="AruLax Web - Professional Web Development"
          />
          <meta
            name="twitter:description"
            content="Transform your business with professional web development services and Google Sheets integration."
          />
          <meta
            name="twitter:image"
            content="https://arulaxweb.com/images/twitter-card.jpg"
          />

          {/* Additional SEO Tags */}
          <link rel="canonical" href="https://arulaxweb.com" />
          <meta name="theme-color" content="#1e3c72" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AruLax Web",
              url: "https://arulaxweb.com",
              logo: "/public/logo.png",
              description:
                "Professional web development services specializing in Google Sheets integration and custom web solutions",
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
                  "Web development services including responsive design, Google Sheets integration, and custom solutions",
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
            background: "#1e3c72",
            color: "white",
            padding: "8px",
            textDecoration: "none",
            borderRadius: "4px",
            zIndex: 9999,
          }}
        >
          Skip to main content
        </a>

        <main id="main-content">
          {/* Enhanced Hero Section */}
          <Hero
            heroSlogan="Your Vision, Our Code — Crafting Complete Web |Solutions"
            heroImage="https://picsum.photos/600/400?random=20"
            heroVideo="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video - replace with actual website overview video
            heroCTAs={heroCTAs}
          />

          {/* About Mini Section */}
          <AboutMini
            aboutIntro="We are a passionate team of web developers and designers dedicated to bringing your digital vision to life. With cutting-edge technologies and creative solutions, we craft websites that not only look stunning but deliver exceptional user experiences and drive real business results."
            aboutCTA={aboutCTA}
          />

          {/* Services Snapshot */}
          <ServicesSnapshot servicesList={[]} />

          {/* Enhanced Portfolio Preview */}
          <PortfolioPreview portfolioProjects={[]} />

          {/* Team Mini Section */}
          <TeamMini teamMembers={[]} />

          {/* Testimonials */}
          <Testimonials testimonialsList={[]} />

          {/* Enhanced CTA Section */}
          <CTASection
            ctaText="Let's Build Your Website Together"
            ctaButton={ctaButton}
          />
        </main>

        {/* Enhanced Dynamic Background Effects */}
        <style>{`
          .home-page {
            position: relative;
            overflow-x: hidden;
          }
          
          /* Dynamic color transitions */
          .home-page::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              45deg,
              rgba(30, 60, 114, 0.02) 0%,
              rgba(42, 82, 152, 0.02) 25%,
              rgba(0, 176, 155, 0.02) 50%,
              rgba(150, 201, 61, 0.02) 75%,
              rgba(30, 60, 114, 0.02) 100%
            );
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            pointer-events: none;
            z-index: -1;
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          /* Floating particles effect */
          .home-page::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(circle at 20% 80%, rgba(30, 60, 114, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 176, 155, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(150, 201, 61, 0.1) 0%, transparent 50%);
            animation: particleFloat 20s ease-in-out infinite;
            pointer-events: none;
            z-index: -1;
          }
          
          @keyframes particleFloat {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
              opacity: 0.3;
            }
            50% { 
              transform: translateY(-20px) rotate(180deg);
              opacity: 0.6;
            }
          }
          
          /* Enhanced section transitions */
          .home-page > main > * {
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
          .home-page img {
            will-change: transform;
          }
          
          .home-page .btn {
            will-change: transform, box-shadow;
          }
          
          /* Responsive enhancements */
          @media (max-width: 768px) {
            .home-page::before,
            .home-page::after {
              animation-duration: 10s;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .home-page::before,
            .home-page::after {
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

export default Home;
