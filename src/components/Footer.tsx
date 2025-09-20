import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaStar,
  FaArrowUp,
  FaComments,
  FaWhatsapp,
  FaShieldAlt,
  FaFileAlt,
  FaCookie,
  FaAward,
  FaQuoteLeft,
  FaImages,
} from "react-icons/fa";

interface FooterProps {
  onNewsletterSubscribe?: (email: string) => void;
  onBackToTop?: () => void;
}

const Footer: React.FC<FooterProps> = ({
  onNewsletterSubscribe,
  onBackToTop,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Navigation links
  const navigationLinks = [
    { name: "Home", path: "/", icon: <FaHome size={16} /> },
    { name: "About", path: "/about", icon: <FaUser size={16} /> },
    { name: "Services", path: "/services", icon: <FaCog size={16} /> },
    { name: "Our Work", path: "/our-work", icon: <FaBriefcase size={16} /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaImages size={16} /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope size={16} /> },
    { name: "Get Quote", path: "/quote", icon: <FaQuoteLeft size={16} /> },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://youtube.com/@arulaxweb",
      icon: <FaYoutube size={24} />,
      color: "#FF0000",
      followers: "1.2K",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/arulaxweb",
      icon: <FaLinkedin size={24} />,
      color: "#0077B5",
      followers: "500+",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/arulaxweb",
      icon: <FaInstagram size={24} />,
      color: "#E4405F",
      followers: "800+",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/arulaxweb",
      icon: <FaFacebook size={24} />,
      color: "#1877F2",
      followers: "600+",
    },
  ];

  // Popular pages/services
  const popularPages = [
    { name: "Web Design", path: "/services", type: "service" },
    { name: "Google Sheets Integration", path: "/services", type: "service" },
    { name: "E-commerce Solutions", path: "/services", type: "service" },
    { name: "How We Work", path: "/our-work", type: "process" },
    { name: "Client Testimonials", path: "/our-work", type: "testimonials" },
  ];

  // Awards and certifications
  const awards = [
    { name: "Fiverr Top Rated", icon: <FaStar />, color: "#1DBF73" },
    { name: "Google Certified", icon: <FaAward />, color: "#4285F4" },
    { name: "5-Star Service", icon: <FaStar />, color: "#FFD700" },
  ];

  // Dynamic testimonials
  const testimonials = [
    {
      text: "AruLax Web transformed our business with their amazing website!",
      author: "Sarah Johnson",
      company: "TechStart Solutions",
    },
    {
      text: "Professional service and outstanding results. Highly recommended!",
      author: "Michael Chen",
      company: "Riverside Elementary",
    },
  ];

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onNewsletterSubscribe) {
      onNewsletterSubscribe(email);
    }
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  // Handle back to top
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onBackToTop) onBackToTop();
  };

  // Show/hide back to top button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const footerStyle = {
    background:
      "linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #00b09b 75%, #96c93d 100%)",
    position: "relative" as const,
    overflow: "hidden",
  };

  return (
    <>
      <footer style={footerStyle} className="text-white">
        {/* Animated background elements */}
        <div
          className="position-absolute"
          style={{
            top: "10%",
            right: "5%",
            width: "100px",
            height: "100px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "20%",
            left: "10%",
            width: "150px",
            height: "150px",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />

        <Container className="py-5">
          <Row>
            {/* Brand & About Section */}
            <Col lg={3} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <h3 className="fw-bold mb-3">AruLax Web</h3>
                  <p className="mb-3" style={{ lineHeight: "1.6" }}>
                    "Turning visions into world-class web solutions."
                  </p>
                  <p className="small opacity-90">
                    We specialize in creating stunning, functional websites with
                    Google Sheets integration for easy content management.
                  </p>
                </div>

                {/* Awards */}
                <div>
                  <h6 className="fw-bold mb-2">Awards & Certifications</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {awards.map((award, index) => (
                      <motion.div
                        key={index}
                        className="d-flex align-items-center bg-white bg-opacity-10 rounded px-2 py-1"
                        whileHover={{ scale: 1.05 }}
                        style={{ cursor: "pointer" }}
                      >
                        <span style={{ color: award.color }} className="me-1">
                          {award.icon}
                        </span>
                        <small>{award.name}</small>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>

            {/* Quick Navigation */}
            <Col lg={2} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h5 className="fw-bold mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  {navigationLinks.map((link, index) => (
                    <li key={index} className="mb-2">
                      <motion.div whileHover={{ x: 5 }}>
                        <NavLink
                          to={link.path}
                          className="text-white text-decoration-none d-flex align-items-center opacity-75 hover-opacity-100"
                          style={{ transition: "all 0.3s ease" }}
                        >
                          {link.icon}
                          <span className="ms-2">{link.name}</span>
                        </NavLink>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Popular Pages */}
            <Col lg={2} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h5 className="fw-bold mb-3">Popular</h5>
                <ul className="list-unstyled">
                  {popularPages.map((page, index) => (
                    <li key={index} className="mb-2">
                      <motion.div whileHover={{ x: 5 }}>
                        <NavLink
                          to={page.path}
                          className="text-white text-decoration-none opacity-75 hover-opacity-100 small"
                          style={{ transition: "all 0.3s ease" }}
                        >
                          {page.name}
                        </NavLink>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Contact Information */}
            <Col lg={2} md={6} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h5 className="fw-bold mb-3">Contact</h5>
                <div className="mb-3">
                  <motion.a
                    href="mailto:hello@arulaxweb.com"
                    className="text-white text-decoration-none d-flex align-items-center mb-2 opacity-75 hover-opacity-100"
                    whileHover={{ x: 5 }}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <FaEnvelope size={14} />
                    <span className="ms-2 small">hello@arulaxweb.com</span>
                  </motion.a>
                  <motion.a
                    href="tel:+15551234567"
                    className="text-white text-decoration-none d-flex align-items-center mb-2 opacity-75 hover-opacity-100"
                    whileHover={{ x: 5 }}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <FaPhone size={14} />
                    <span className="ms-2 small">+1 (555) 123-4567</span>
                  </motion.a>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-decoration-none d-flex align-items-center mb-2 opacity-75 hover-opacity-100"
                    whileHover={{ x: 5 }}
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <FaMapMarkerAlt size={14} />
                    <span className="ms-2 small">Global Remote Team</span>
                  </motion.a>
                </div>

                {/* Live Chat */}
                <motion.div
                  className="d-flex gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="https://wa.me/15551234567"
                    className="btn btn-success btn-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp size={16} />
                  </motion.a>
                  <motion.button
                    className="btn btn-primary btn-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaComments size={16} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </Col>

            {/* Newsletter & Social */}
            <Col lg={3} md={12} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Newsletter */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Get Free Web Tips!</h5>
                  <p className="small opacity-90 mb-3">
                    Subscribe to our newsletter for the latest web development
                    tips and exclusive offers.
                  </p>
                  <Form onSubmit={handleNewsletterSubmit}>
                    <div className="d-flex gap-2 mb-2">
                      <Form.Control
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        size="sm"
                        className="bg-white bg-opacity-20 border-0 text-white placeholder-white-50"
                      />
                      <Button
                        type="submit"
                        variant="light"
                        size="sm"
                        className="px-3"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </Form>
                  <AnimatePresence>
                    {subscribed && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="alert alert-success alert-sm mt-2 p-2"
                      >
                        <small>✓ Successfully subscribed!</small>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Social Media */}
                <div>
                  <h6 className="fw-bold mb-3">Follow Us</h6>
                  <div className="d-flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        whileHover={{
                          scale: 1.2,
                          color: social.color,
                        }}
                        whileTap={{ scale: 0.9 }}
                        style={{ transition: "all 0.3s ease" }}
                        title={`${social.name} (${social.followers} followers)`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Dynamic Testimonials */}
          <Row className="mt-4 pt-4 border-top border-white border-opacity-20">
            <Col>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <FaQuoteLeft className="me-3 opacity-50" size={24} />
                    <div>
                      <p className="mb-1 opacity-90">
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      <small className="opacity-75">
                        - {testimonials[currentTestimonial].author},{" "}
                        {testimonials[currentTestimonial].company}
                      </small>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </Col>
          </Row>

          {/* Legal & Copyright */}
          <Row className="mt-4 pt-4 border-top border-white border-opacity-20">
            <Col md={6} className="mb-3">
              <div className="d-flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <NavLink
                    to="/privacy-policy"
                    className="text-white text-decoration-none opacity-75 hover-opacity-100 small d-flex align-items-center"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <FaShieldAlt size={12} className="me-1" />
                    Privacy Policy
                  </NavLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <NavLink
                    to="/terms-conditions"
                    className="text-white text-decoration-none opacity-75 hover-opacity-100 small d-flex align-items-center"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <FaFileAlt size={12} className="me-1" />
                    Terms & Conditions
                  </NavLink>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <NavLink
                    to="/cookie-policy"
                    className="text-white text-decoration-none opacity-75 hover-opacity-100 small d-flex align-items-center"
                    style={{ transition: "all 0.3s ease" }}
                  >
                    <FaCookie size={12} className="me-1" />
                    Cookie Policy
                  </NavLink>
                </motion.div>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="text-md-end">
                <small className="opacity-75">
                  © 2025 AruLax Web. All rights reserved.
                </small>
                <br />
                <small className="opacity-50">
                  Turning visions into world-class web solutions.
                </small>
              </div>
            </Col>
          </Row>
        </Container>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          .hover-opacity-100:hover {
            opacity: 1 !important;
          }
          
          .placeholder-white-50::placeholder {
            color: rgba(255, 255, 255, 0.5) !important;
          }
        `}</style>
      </footer>

      {/* Enhanced Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={handleBackToTop}
            className="btn btn-primary position-fixed rounded-circle shadow-lg back-to-top-btn"
            style={{
              bottom: "30px",
              left: "30px",
              width: "50px",
              height: "50px",
              zIndex: 1000,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              transition: "all 0.3s ease",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            title="Back to top"
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        /* Enhanced Back to Top Button Styles */
        .back-to-top-btn {
          transition: all 0.3s ease !important;
          touch-action: manipulation;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        
        .back-to-top-btn:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%) !important;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4) !important;
        }
        
        .back-to-top-btn:active {
          transform: scale(0.95) !important;
        }
        
        .back-to-top-btn:focus {
          outline: 2px solid rgba(255, 255, 255, 0.8);
          outline-offset: 2px;
        }
        
        /* Mobile-specific back to top button improvements */
        @media (max-width: 480px) {
          .back-to-top-btn {
            bottom: 20px !important;
            left: 20px !important;
            width: 45px !important;
            height: 45px !important;
          }
          
          .back-to-top-btn svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
        
        @media (min-width: 481px) and (max-width: 768px) {
          .back-to-top-btn {
            bottom: 25px !important;
            left: 25px !important;
            width: 48px !important;
            height: 48px !important;
          }
          
          .back-to-top-btn svg {
            width: 19px !important;
            height: 19px !important;
          }
        }
        
        /* Landscape mobile adjustments */
        @media (max-width: 768px) and (orientation: landscape) {
          .back-to-top-btn {
            bottom: 15px !important;
            left: 15px !important;
          }
        }
        
        /* Ensure button doesn't interfere with QuickChat */
        @media (max-width: 768px) {
          .back-to-top-btn {
            z-index: 999 !important; /* Lower than QuickChat */
          }
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          .back-to-top-btn {
            transition: none !important;
          }
          
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
