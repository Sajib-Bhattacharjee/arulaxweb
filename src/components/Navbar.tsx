import React, { useState, useEffect } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBriefcase,
  FaEnvelope,
  FaSearch,
  FaLinkedin,
  FaYoutube,
  FaTimes,
  FaChartLine,
  FaRocket,
  FaImages,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileMenuOpen]);

  // Services dropdown items
  // const servicesDropdown = [
  //   {
  //     name: "Web Design",
  //     path: "/services",
  //     icon: <FaPalette size={16} />,
  //     description: "Custom, modern, responsive designs",
  //   },
  //   {
  //     name: "E-commerce Solutions",
  //     path: "/services",
  //     icon: <FaShoppingCart size={16} />,
  //     description: "WooCommerce, Shopify integration",
  //   },
  //   {
  //     name: "SEO & Performance",
  //     path: "/services",
  //     icon: <FaChartLine size={16} />,
  //     description: "Google-friendly optimization",
  //   },
  //   {
  //     name: "Google Sheets Integration",
  //     path: "/services",
  //     icon: <FaDatabase size={16} />,
  //     description: "Real-time data updates",
  //   },
  // ];

  // Social media links
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/arulaxweb",
      icon: <FaLinkedin size={18} />,
      color: "#0077B5",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@arulaxweb",
      icon: <FaYoutube size={18} />,
      color: "#FF0000",
    },
  ];

  const handleGetQuote = () => {
    console.log("Get a Quote button clicked");
    navigate("/quote");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Implement search functionality
    setShowSearch(false);
    setSearchQuery("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navbarStyle = {
    background: scrolled
      ? "rgba(255, 255, 255, 0.95)"
      : "linear-gradient(135deg, rgba(30, 60, 114, 0.9) 0%, rgba(42, 82, 152, 0.9) 25%, rgba(0, 176, 155, 0.9) 75%, rgba(150, 201, 61, 0.9) 100%)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    boxShadow: scrolled
      ? "0 4px 20px rgba(0, 0, 0, 0.1)"
      : "0 2px 10px rgba(0, 0, 0, 0.05)",
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Optional Announcement Bar */}
      <div
        className="bg-primary text-white text-center py-2 d-none d-md-block"
        style={{ fontSize: "0.9rem" }}
      >
        🚀 <strong>New:</strong> Get 25% off all web development packages this
        month!
        <Button
          variant="link"
          className="text-white text-decoration-underline p-0 ms-2"
          size="sm"
          onClick={handleGetQuote}
        >
          Claim Offer
        </Button>
      </div>

      <BootstrapNavbar
        expand="lg"
        fixed="top"
        className="custom-navbar"
        style={navbarStyle}
      >
        <Container>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BootstrapNavbar.Brand
              as="button"
              onClick={scrollToTop}
              className={`fw-bold d-flex align-items-center border-0 bg-transparent ${
                scrolled ? "text-primary" : "text-white"
              }`}
              style={{
                fontSize: "1.5rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <motion.div
                className="me-2"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <FaRocket size={24} />
              </motion.div>
              AruLax Web
            </BootstrapNavbar.Brand>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center">
            <Nav className="me-auto">
              {/* Home */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Nav.Link
                  as={NavLink}
                  to="/"
                  className={`nav-link-custom mx-2 d-flex align-items-center ${
                    isActive("/") ? "active" : ""
                  } ${scrolled ? "text-dark" : "text-white"}`}
                >
                  <FaHome size={16} className="me-2" />
                  Home
                </Nav.Link>
              </motion.div>

              {/* About */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  className={`nav-link-custom mx-2 d-flex align-items-center ${
                    isActive("/about") ? "active" : ""
                  } ${scrolled ? "text-dark" : "text-white"}`}
                >
                  <FaUser size={16} className="me-2" />
                  About
                </Nav.Link>
              </motion.div>

              {/* About */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Nav.Link
                  as={NavLink}
                  to="/services"
                  className={`nav-link-custom mx-2 d-flex align-items-center ${
                    isActive("/services") ? "active" : ""
                  } ${scrolled ? "text-dark" : "text-white"}`}
                >
                  <FaUser size={16} className="me-2" />
                  Services
                </Nav.Link>
              </motion.div>

              {/* Services Dropdown */}
              {/* <Dropdown>
                <Dropdown.Toggle
                  as="button"
                  className={`nav-link-custom mx-2 d-flex align-items-center border-0 bg-transparent ${
                    isActive("/services") ? "active" : ""
                  } ${scrolled ? "text-dark" : "text-white"}`}
                  style={{ transition: "all 0.3s ease" }}
                >
                  <FaCog size={16} className="me-2" />
                  Services
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="border-0 shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "12px",
                    marginTop: "10px",
                  }}
                >
                  {servicesDropdown.map((service, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Dropdown.Item
                        as={NavLink}
                        to={service.path}
                        className="d-flex align-items-center p-3"
                      >
                        <div
                          className="me-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            borderRadius: "10px",
                            color: "white",
                          }}
                        >
                          {service.icon}
                        </div>
                        <div>
                          <div className="fw-bold text-dark">
                            {service.name}
                          </div>
                          <small className="text-muted">
                            {service.description}
                          </small>
                        </div>
                      </Dropdown.Item>
                    </motion.div>
                  ))}
                </Dropdown.Menu>
              </Dropdown> */}

              {/* Our Work */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Nav.Link
                  as={NavLink}
                  to="/our-work"
                  className={`nav-link-custom mx-2 d-flex align-items-center ${
                    isActive("/our-work") ? "active" : ""
                  } ${scrolled ? "text-dark" : "text-white"}`}
                >
                  <FaBriefcase size={16} className="me-2" />
                  Our Work
                </Nav.Link>
              </motion.div>

              {/* Portfolio */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Nav.Link
                  as={NavLink}
                  to="/portfolio"
                  className={`nav-link-custom mx-2 d-flex align-items-center ${
                    isActive("/portfolio") ? "active" : ""
                  } ${scrolled ? "text-dark" : "text-white"}`}
                >
                  <FaImages size={16} className="me-2" />
                  Portfolio
                </Nav.Link>
              </motion.div>

              {/* Contact */}
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Nav.Link
                  as={NavLink}
                  to="/contact"
                  className={`nav-link-custom mx-2 d-flex align-items-center ${
                    isActive("/contact") ? "active" : ""
                  } ${scrolled ? "text-dark" : "text-white"}`}
                >
                  <FaEnvelope size={16} className="me-2" />
                  Contact
                </Nav.Link>
              </motion.div>
            </Nav>

            {/* Right Side Icons & CTA */}
            <div className="d-flex align-items-center gap-3">
              {/* Search Icon */}
              {/* <motion.button
                className={`btn btn-link p-0 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
                onClick={() => setShowSearch(!showSearch)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaSearch size={18} />
              </motion.button> */}

              {/* Social Media Icons */}
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${scrolled ? "text-dark" : "text-white"}`}
                  whileHover={{
                    scale: 1.2,
                    color: social.color,
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{ transition: "all 0.3s ease" }}
                >
                  {social.icon}
                </motion.a>
              ))}

              {/* Get Quote CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleGetQuote}
                  className="btn-gradient px-4 py-2 border-0 fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "25px",
                    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <motion.div className="d-lg-none" whileTap={{ scale: 0.95 }}>
            <Button
              className={`mobile-menu-toggle border-0 bg-transparent ${
                scrolled ? "text-dark" : "text-white"
              } ${mobileMenuOpen ? "menu-open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              style={{
                width: "44px",
                height: "44px",
                minWidth: "44px",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                touchAction: "manipulation",
                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                zIndex: 1050,
              }}
            >
              <motion.div
                className="hamburger-icon"
                animate={{
                  rotate: mobileMenuOpen ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "relative",
                  width: "24px",
                  height: "18px",
                }}
              >
                <motion.span
                  className="hamburger-line"
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                    borderRadius: "1px",
                  }}
                />
                <motion.span
                  className="hamburger-line"
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    x: mobileMenuOpen ? 20 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "0",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                    borderRadius: "1px",
                  }}
                />
                <motion.span
                  className="hamburger-line"
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "currentColor",
                    borderRadius: "1px",
                  }}
                />
              </motion.div>
            </Button>
          </motion.div>
        </Container>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-top"
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Container className="py-3">
                <Form onSubmit={handleSearch}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Search services, blog posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="border-0"
                      style={{ borderRadius: "25px 0 0 25px" }}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      className="border-0"
                      style={{ borderRadius: "0 25px 25px 0" }}
                    >
                      <FaSearch />
                    </Button>
                  </InputGroup>
                </Form>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </BootstrapNavbar>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-menu-overlay d-lg-none"
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(4px)",
                zIndex: 1040,
              }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mobile-menu d-lg-none"
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "320px",
                maxWidth: "85vw",
                height: "100vh",
                background:
                  "linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #00b09b 75%, #96c93d 100%)",
                padding: "20px 0",
                overflowY: "auto",
                zIndex: 1041,
                boxShadow: "4px 0 20px rgba(0, 0, 0, 0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Header with Close Button */}
              <div className="d-flex justify-content-between align-items-center px-4 mb-4">
                <div className="text-white">
                  <h4 className="fw-bold mb-1">AruLax Web</h4>
                  <p className="small opacity-75 mb-0">
                    Web Development Solutions
                  </p>
                </div>
                <motion.button
                  className="btn btn-link text-white p-2"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: "44px",
                    height: "44px",
                    minWidth: "44px",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "none",
                    transition: "all 0.3s ease",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    zIndex: 1051,
                  }}
                  aria-label="Close menu"
                >
                  <FaTimes size={20} />
                </motion.button>
              </div>
              <div className="px-4">
                <Nav className="flex-column">
                  {[
                    { name: "Home", path: "/", icon: <FaHome /> },
                    { name: "About", path: "/about", icon: <FaUser /> },
                    { name: "Services", path: "/services", icon: <FaCog /> },
                    {
                      name: "Our Work",
                      path: "/our-work",
                      icon: <FaBriefcase />,
                    },
                    {
                      name: "Portfolio",
                      path: "/portfolio",
                      icon: <FaImages />,
                    },
                    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
                    {
                      name: "Get Quote",
                      path: "/quote",
                      icon: <FaChartLine />,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <motion.div
                        whileHover={{
                          x: 8,
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          borderRadius: "12px",
                          margin: "4px 0",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Nav.Link
                          as={NavLink}
                          to={item.path}
                          className={`mobile-nav-link text-white d-flex align-items-center py-3 px-3 ${
                            isActive(item.path) ? "active-mobile" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            borderRadius: "12px",
                            transition: "all 0.3s ease",
                            position: "relative",
                            textDecoration: "none",
                          }}
                        >
                          <motion.span
                            className="me-3"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="fw-medium">{item.name}</span>
                          {isActive(item.path) && (
                            <motion.div
                              className="position-absolute end-0 top-50 translate-middle-y me-3"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  backgroundColor: "#FFD700",
                                }}
                              />
                            </motion.div>
                          )}
                        </Nav.Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </Nav>

                {/* Enhanced CTA Button */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        handleGetQuote();
                        setMobileMenuOpen(false);
                      }}
                      className="w-100 btn-light fw-bold py-3"
                      style={{
                        borderRadius: "25px",
                        fontSize: "1.1rem",
                        background:
                          "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                        border: "none",
                        boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <FaRocket className="me-2" />
                      Get a Quote
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Enhanced Social Links */}
                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  <p className="text-white-50 small mb-3">Follow Us</p>
                  <div className="d-flex justify-content-center gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                        style={{
                          transition: "all 0.3s ease",
                          width: "44px",
                          height: "44px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.1)",
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          color: social.color,
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                        title={`Follow us on ${social.name}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .custom-navbar {
          z-index: 1030;
          position: relative;
        }
        
        .nav-link-custom {
          position: relative;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          font-weight: 500;
        }
        
        .nav-link-custom:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .nav-link-custom.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white !important;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%) !important;
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4) !important;
          transform: translateY(-2px);
        }
        
        .dropdown-toggle::after {
          display: none;
        }
        
        .mobile-menu-overlay {
          backdrop-filter: blur(5px);
        }
        
        /* Enhanced Mobile Navigation Styles */
        .mobile-menu-toggle {
          touch-action: manipulation;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        
        .mobile-menu-toggle:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        
        .mobile-menu-toggle:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }
        
        .hamburger-icon {
          will-change: transform;
        }
        
        .hamburger-line {
          will-change: transform, opacity;
        }
        
        /* Mobile Menu Styles */
        .mobile-menu {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        
        .mobile-menu::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-menu::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .mobile-menu::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }
        
        .mobile-nav-link {
          touch-action: manipulation;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        
        .mobile-nav-link.active-mobile {
          background: rgba(255, 255, 255, 0.15) !important;
          border-left: 3px solid #FFD700 !important;
        }
        
        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.1) !important;
        }
        
        /* Responsive Mobile Adjustments */
        @media (max-width: 991px) {
          .custom-navbar {
            padding-top: 0;
          }
          
          .mobile-menu {
            width: 320px !important;
            max-width: 85vw;
          }
          
          .mobile-menu-overlay {
            backdrop-filter: blur(4px);
            z-index: 1040 !important;
          }
        }
        
        /* Touch-friendly mobile adjustments */
        @media (max-width: 768px) {
          .custom-navbar {
            padding: 12px 0;
            position: relative;
            z-index: 1030;
          }
          
          .btn {
            min-height: 44px;
            min-width: 44px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          
          .mobile-menu-toggle {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
            z-index: 1050 !important;
          }
          
          .mobile-menu {
            width: 100% !important;
            max-width: 90vw;
            z-index: 1041 !important;
          }
          
          .mobile-nav-link {
            padding: 16px 20px !important;
            font-size: 1.1rem;
            min-height: 56px;
            min-width: 56px;
            display: flex !important;
            align-items: center !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          
          .mobile-menu .btn {
            margin: 20px 20px 0 20px;
            padding: 12px 20px;
            font-size: 1.1rem;
            min-height: 48px;
            min-width: 48px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
        
        /* Small mobile devices */
        @media (max-width: 480px) {
          .custom-navbar {
            padding: 10px 0;
            position: relative;
            z-index: 1030;
          }
          
          .navbar-brand {
            font-size: 1.3rem !important;
          }
          
          .mobile-menu {
            width: 100% !important;
            max-width: 95vw;
            padding: 20px 0;
            z-index: 1041 !important;
          }
          
          .mobile-nav-link {
            padding: 14px 16px !important;
            font-size: 1rem;
            min-height: 52px;
            min-width: 52px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          
          .mobile-menu .btn {
            margin: 16px 16px 0 16px;
            padding: 10px 16px;
            font-size: 1rem;
            min-height: 44px;
            min-width: 44px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          
          .mobile-menu-toggle {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            min-height: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            z-index: 1050 !important;
          }
          
          .hamburger-icon {
            width: 20px !important;
            height: 16px !important;
          }
        }
        
        /* Landscape mobile adjustments */
        @media (max-width: 768px) and (orientation: landscape) {
          .custom-navbar {
            padding: 8px 0;
          }
          
          .mobile-menu {
            height: 100vh;
            overflow-y: auto;
            z-index: 1041 !important;
          }
          
          .mobile-nav-link {
            padding: 12px 20px !important;
            min-height: 48px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          
          .mobile-menu .btn {
            padding: 8px 20px;
            min-height: 40px;
            touch-action: manipulation;
          }
        }
        
        /* Prevent body scroll when menu is open */
        body.mobile-menu-open {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }
        
        /* Enhanced animations */
        @media (prefers-reduced-motion: reduce) {
          .mobile-menu,
          .mobile-nav-link,
          .hamburger-icon,
          .hamburger-line {
            transition: none !important;
            animation: none !important;
          }
          
          .mobile-nav-link:hover {
            transform: none !important;
          }
        }
        
        /* Extra small devices fixes */
        @media (max-width: 360px) {
          .custom-navbar {
            padding: 8px 0;
          }
          
          .navbar-brand {
            font-size: 1.2rem !important;
          }
          
          .mobile-menu {
            width: 100% !important;
            max-width: 98vw;
            padding: 15px 0;
          }
          
          .mobile-nav-link {
            padding: 12px 14px !important;
            font-size: 0.95rem;
            min-height: 48px;
            min-width: 48px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          
          .mobile-menu .btn {
            margin: 12px 14px 0 14px;
            padding: 8px 14px;
            font-size: 0.95rem;
            min-height: 44px;
            min-width: 44px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          
          .mobile-menu-toggle {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            min-height: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            z-index: 1050 !important;
          }
          
          .hamburger-icon {
            width: 18px !important;
            height: 14px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
