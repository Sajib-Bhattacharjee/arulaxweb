import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import OurStory from "../components/OurStory";
import MissionVision from "../components/MissionVision";
import OurTeam from "../components/OurTeam";
import Milestones from "../components/Milestones";
import AboutCTA from "../components/AboutCTA";

const About: React.FC = () => {
  const navigate = useNavigate();

  // Enhanced CTA handler with proper navigation
  const handleContactClick = () => {
    navigate("/contact");
  };

  const handlePortfolioClick = () => {
    navigate("/portfolio");
  };

  return (
    <HelmetProvider>
      <div className="about-page" style={{ width: "100%" }}>
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>
            About AruLax Web - Our Story, Team & Mission | Professional Web
            Development
          </title>
          <meta
            name="description"
            content="Learn about AruLax Web's journey, mission, and expert team. Discover how we're transforming businesses with cutting-edge web development solutions and Google Sheets integration."
          />
          <meta
            name="keywords"
            content="about arulax web, web development team, company story, mission vision, professional developers, web agency team, responsive design experts"
          />
          <meta name="author" content="AruLax Web" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="About AruLax Web - Our Story, Team & Mission"
          />
          <meta
            property="og:description"
            content="Learn about AruLax Web's journey, mission, and expert team. Discover how we're transforming businesses with cutting-edge web development solutions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arulaxweb.com/about" />
          <meta
            property="og:image"
            content="https://arulaxweb.com/images/about-og-image.jpg"
          />
          <meta property="og:site_name" content="AruLax Web" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="About AruLax Web - Our Story & Expert Team"
          />
          <meta
            name="twitter:description"
            content="Learn about AruLax Web's journey, mission, and expert team transforming businesses with web development solutions."
          />
          <meta
            name="twitter:image"
            content="https://arulaxweb.com/images/about-twitter-card.jpg"
          />

          {/* Additional SEO Tags */}
          <link rel="canonical" href="https://arulaxweb.com/about" />
          <meta name="theme-color" content="#1e3c72" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About AruLax Web",
              url: "https://arulaxweb.com/about",
              description:
                "Learn about AruLax Web's journey, mission, and expert team in web development",
              mainEntity: {
                "@type": "Organization",
                name: "AruLax Web",
                url: "https://arulaxweb.com",
                logo: "https://arulaxweb.com/images/logo.png",
                description:
                  "Professional web development agency specializing in responsive design and Google Sheets integration",
                foundingDate: "2025",
                numberOfEmployees: "3",
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

        <main id="main-content" role="main">
          {/* Our Story Section */}
          <OurStory />

          {/* Mission & Vision Section */}
          <MissionVision />

          {/* Our Team Section */}
          <OurTeam showJoinCTA={true} />

          {/* Milestones Section */}
          <Milestones />

          {/* Enhanced CTA Section */}
          <AboutCTA
            title="Work with Experts"
            description="Ready to transform your digital presence? Let's collaborate and bring your vision to life with our expert team."
            buttonText="Contact Now"
            onButtonClick={handleContactClick}
            onPortfolioClick={handlePortfolioClick}
          />
        </main>

        {/* Enhanced Dynamic Background Effects */}
        <style>{`
          .about-page {
            position: relative;
            overflow-x: hidden;
          }
          
          /* Dynamic color transitions */
          .about-page::before {
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
          .about-page::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(circle at 25% 75%, rgba(30, 60, 114, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(0, 176, 155, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(150, 201, 61, 0.08) 0%, transparent 50%);
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
          .about-page > main > * {
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
          .about-page img {
            will-change: transform;
          }
          
          .about-page .btn {
            will-change: transform, box-shadow;
          }
          
          /* Responsive enhancements */
          @media (max-width: 768px) {
            .about-page::before,
            .about-page::after {
              animation-duration: 15s;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            .about-page::before,
            .about-page::after {
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

export default About;
