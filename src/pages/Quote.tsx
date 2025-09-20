import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Quote from "../components/Quote";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  message: string;
  files: FileList | null;
  honeypot: string; // Anti-spam field
}

const QuotePage: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    console.log("Quote form submitted:", data);
    // Handle form submission logic here
  };

  return (
    <HelmetProvider>
      <div className="quote-page" style={{ width: "100%" }}>
        <Helmet>
          <title>
            Get a Quote - Professional Web Development Services | AruLax Web
          </title>
          <meta
            name="description"
            content="Get a detailed quote for your web development project. Professional pricing, transparent costs, and personalized proposals within 24 hours."
          />
          <meta
            name="keywords"
            content="web development quote, project pricing, web design quote, custom website quote, professional web development cost"
          />
          <meta name="author" content="AruLax Web" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Get a Quote - Professional Web Development Services"
          />
          <meta
            property="og:description"
            content="Get a detailed quote for your web development project. Professional pricing, transparent costs, and personalized proposals."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arulaxweb.com/quote" />
          <meta
            property="og:image"
            content="https://arulaxweb.com/images/quote-og-image.jpg"
          />
          <meta property="og:site_name" content="AruLax Web" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Get a Quote - Professional Web Development"
          />
          <meta
            name="twitter:description"
            content="Get a detailed quote for your web development project. Professional pricing and transparent costs."
          />
          <meta
            name="twitter:image"
            content="https://arulaxweb.com/images/quote-twitter-card.jpg"
          />
          <link rel="canonical" href="https://arulaxweb.com/quote" />
          <meta name="theme-color" content="#667eea" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Get a Quote - AruLax Web",
              url: "https://arulaxweb.com/quote",
              description:
                "Get a detailed quote for your web development project. Professional pricing, transparent costs, and personalized proposals.",
              mainEntity: {
                "@type": "Organization",
                name: "AruLax Web",
                url: "https://arulaxweb.com",
                logo: "https://arulaxweb.com/images/logo.png",
                description:
                  "Professional web development agency providing custom websites, e-commerce solutions, and digital services",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "Global",
                  addressLocality: "Remote Team",
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-555-123-4567",
                    contactType: "customer service",
                    email: "hello@arulaxweb.com",
                    availableLanguage: "English",
                  },
                ],
                sameAs: [
                  "https://linkedin.com/company/arulaxweb",
                  "https://twitter.com/arulaxweb",
                  "https://github.com/arulaxweb",
                  "https://instagram.com/arulaxweb",
                ],
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://arulaxweb.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Get a Quote",
                    item: "https://arulaxweb.com/quote",
                  },
                ],
              },
            })}
          </script>
        </Helmet>

        {/* Skip Link for Accessibility */}
        <a
          href="#quote-form"
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
            zIndex: 10000,
            fontSize: "14px",
            fontWeight: "600",
          }}
          onFocus={(e) => {
            e.target.style.top = "6px";
          }}
          onBlur={(e) => {
            e.target.style.top = "-40px";
          }}
        >
          Skip to quote form
        </a>

        <div id="quote-form" className="quote-form-section">
          <Quote onSubmit={handleFormSubmit} />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default QuotePage;
