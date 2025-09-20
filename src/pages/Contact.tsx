import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import LocationMap from "../components/LocationMap";
import ContactInfo from "../components/ContactInfo";
import ContactCTA from "../components/ContactCTA";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    console.log("Form submitted with data:", data);
    // Here you would typically send the data to your backend API
    // Example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // });
  };

  const handleSendInquiry = () => {
    // Scroll to contact form
    const element = document.querySelector(".contact-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScheduleCall = () => {
    console.log("Schedule Call button clicked");
    // This would typically open a calendar booking widget like Calendly
    // window.open('https://calendly.com/arulaxweb', '_blank');
  };

  return (
    <HelmetProvider>
      <div className="contact-page" style={{ width: "100%" }}>
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>
            Contact Us - Get Your Web Development Quote | AruLax Web
          </title>
          <meta
            name="description"
            content="Contact AruLax Web for professional web development services. Get a free quote within 24 hours. Multiple contact methods available including email, phone, WhatsApp, and Skype."
          />
          <meta
            name="keywords"
            content="contact web developer, web development quote, contact form, project inquiry, web design consultation, get quote"
          />
          <meta name="author" content="AruLax Web" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="Contact AruLax Web - Professional Web Development Services"
          />
          <meta
            property="og:description"
            content="Get in touch with our expert team for your web development needs. Free consultation and detailed proposals within 24 hours."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://arulaxweb.com/contact" />
          <meta
            property="og:image"
            content="https://arulaxweb.com/images/contact-og-image.jpg"
          />
          <meta property="og:site_name" content="AruLax Web" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Contact AruLax Web - Professional Web Development"
          />
          <meta
            name="twitter:description"
            content="Get in touch with our expert team for your web development needs. Free consultation and detailed proposals."
          />
          <meta
            name="twitter:image"
            content="https://arulaxweb.com/images/contact-twitter-card.jpg"
          />

          {/* Additional SEO Tags */}
          <link rel="canonical" href="https://arulaxweb.com/contact" />
          <meta name="theme-color" content="#667eea" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact AruLax Web",
              url: "https://arulaxweb.com/contact",
              description:
                "Contact page for AruLax Web professional web development services",
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
                  {
                    "@type": "ContactPoint",
                    telephone: "+1-555-123-4567",
                    contactType: "WhatsApp",
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
            })}
          </script>
        </Helmet>

        {/* Skip Navigation Link for Accessibility */}
        <a
          href="#contact-form"
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
          Skip to contact form
        </a>

        {/* Contact Form Section */}
        <div id="contact-form" className="contact-form-section">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>

        {/* Contact Info & Social Links */}
        <ContactInfo
          email="hello@arulaxweb.com"
          phone="+1 (555) 123-4567"
          whatsapp="+1 (555) 123-4567"
          skype="arulaxweb"
        />

        {/* Location & Map */}
        <LocationMap
          address="Global Remote Team"
          mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e4b2f9b%3A0x9b7a4e5e3c4c5d6e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          timezone="Multiple Timezones"
          workingHours="24/7 Support Available"
        />

        {/* CTA Section */}
        <ContactCTA
          title="Send Your Inquiry"
          description="Ready to start your project? Send us your inquiry and get a detailed response within 24 hours with a personalized proposal."
          responseTime="24 hours"
          onSendInquiry={handleSendInquiry}
          onScheduleCall={handleScheduleCall}
        />
      </div>
    </HelmetProvider>
  );
};

export default Contact;
