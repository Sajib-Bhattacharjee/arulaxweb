import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  FaPalette,
  FaMobile,
  FaDatabase,
  FaShoppingCart,
  FaSearch,
  FaCheckCircle,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
}

interface ServiceCardsProps {
  services?: Service[];
  onServiceClick?: (serviceId: string) => void;
  highlightService?: string | null;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({
  services,
  onServiceClick,
  // highlightService,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const defaultServices: Service[] = [
    {
      id: "web-design",
      title: "Web Design",
      subtitle: "Custom, Modern, Responsive",
      description:
        "Beautiful, user-centric designs that capture your brand essence and engage your audience across all devices.",
      icon: <FaPalette size={40} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: [
        "Custom UI/UX Design",
        "Brand Integration",
        "Mobile-First Approach",
        "User Experience Optimization",
      ],
    },
    {
      id: "responsive-development",
      title: "Responsive Development",
      subtitle: "Mobile-First, Cross-Browser",
      description:
        "Modern web development that ensures your site looks perfect and functions flawlessly on every device and browser.",
      icon: <FaMobile size={40} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: [
        "Mobile-First Development",
        "Cross-Browser Compatibility",
        "Progressive Web Apps",
        "Performance Optimization",
      ],
    },
    {
      id: "google-sheets-integration",
      title: "Dynamic Google Sheets Updates",
      subtitle: "Real-Time Data Management",
      description:
        "Seamlessly integrate Google Sheets for instant content updates. Perfect for schools, businesses, and dynamic websites.",
      icon: <FaDatabase size={40} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: [
        "Real-Time Data Sync",
        "Easy Content Management",
        "Automated Updates",
        "No Technical Knowledge Required",
      ],
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      subtitle: "WooCommerce, Shopify Integration",
      description:
        "Complete online store solutions with secure payment processing, inventory management, and seamless user experience.",
      icon: <FaShoppingCart size={40} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: [
        "WooCommerce & Shopify Setup",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing Systems",
      ],
    },
    {
      id: "seo-performance",
      title: "SEO & Performance Optimization",
      subtitle: "Google-Friendly & Fast Loading",
      description:
        "Boost your search rankings and user experience with comprehensive SEO optimization and lightning-fast performance.",
      icon: <FaSearch size={40} />,
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      features: [
        "Technical SEO Optimization",
        "Page Speed Optimization",
        "Google Analytics Setup",
        "Search Console Integration",
      ],
    },
    {
      id: "custom-development",
      title: "Custom Development",
      subtitle: "Tailored Business Solutions",
      description:
        "Bespoke web applications and custom features built specifically for your unique business requirements and goals.",
      icon: <FaRocket size={40} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: [
        "Custom Web Applications",
        "API Development",
        "Database Design",
        "Third-party Integrations",
      ],
    },
  ];

  const servicesList = services || defaultServices;

  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    }
    // Scroll to detailed section
    const element = document.getElementById(`service-detail-${serviceId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-5 services-section"
      style={{ position: "relative", overflow: "hidden" }}
      ref={sectionRef}
    >
      {/* Dynamic Background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background:
            "linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
          zIndex: -2,
        }}
      />

      {/* Floating background shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          left: "5%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute"
        style={{
          bottom: "15%",
          right: "10%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="position-relative">
        <Row className="text-center mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="display-4 fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Comprehensive web solutions designed to grow your business
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        {/* Service Stats */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={4} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-3 rounded-3 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(5px)",
              }}
            >
              <h4 className="fw-bold text-primary mb-0">6+</h4>
              <small className="text-muted">Core Services</small>
            </motion.div>
          </Col>
          <Col md={4} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-3 rounded-3 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(5px)",
              }}
            >
              <h4 className="fw-bold text-success mb-0">24/7</h4>
              <small className="text-muted">Support Available</small>
            </motion.div>
          </Col>
          <Col md={4} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-3 rounded-3 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(5px)",
              }}
            >
              <h4 className="fw-bold text-info mb-0">100%</h4>
              <small className="text-muted">Custom Solutions</small>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {servicesList.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="h-100"
              >
                <div
                  style={{
                    padding: "3px",
                    background: service.gradient,
                    borderRadius: "15px",
                  }}
                >
                  <Card
                    id={`service-${service.id}`}
                    className="h-100 border-0 shadow-lg overflow-hidden position-relative service-card"
                    style={{
                      cursor: "pointer",
                      transition:
                        "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      background:
                        hoveredIndex === index ? service.gradient : "white",
                      boxShadow:
                        hoveredIndex === index
                          ? `0 20px 40px ${
                              service.gradient.includes("#667eea")
                                ? "#667eea20"
                                : "#f093fb20"
                            }`
                          : "0 10px 30px rgba(0,0,0,0.1)",
                      borderRadius: "12px",
                    }}
                    onClick={() => handleServiceClick(service.id)}
                  >
                    <Card.Body
                      className="p-4 text-center position-relative"
                      style={{ zIndex: 2 }}
                    >
                      {/* Icon Container */}
                      <motion.div
                        className="icon-container mb-4 mx-auto d-flex align-items-center justify-content-center"
                        style={{
                          width: "100px",
                          height: "100px",
                          background:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.2)"
                              : service.gradient,
                          borderRadius: "50%",
                          color: "white",
                          transition: "all 0.4s ease",
                          backdropFilter:
                            hoveredIndex === index ? "blur(10px)" : "none",
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon}
                      </motion.div>

                      <Card.Title
                        className="h4 fw-bold mb-2 service-title"
                        style={{
                          color: hoveredIndex === index ? "white" : "#333",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {service.title}
                      </Card.Title>

                      <Card.Subtitle
                        className="fw-semibold mb-3 service-subtitle"
                        style={{
                          color:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.9)"
                              : "#667eea",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {service.subtitle}
                      </Card.Subtitle>

                      <Card.Text
                        className="mb-4 service-description"
                        style={{
                          color:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.9)"
                              : "#6c757d",
                          transition: "color 0.3s ease",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Card.Text>

                      {/* Features List */}
                      <motion.div
                        className="features-list mb-4"
                        initial="hidden"
                        animate={hoveredIndex === index ? "visible" : "hidden"}
                        variants={{
                          visible: { opacity: 1, height: "auto" },
                          hidden: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: hoveredIndex === index ? 1 : 0,
                              x: hoveredIndex === index ? 0 : -20,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: featureIndex * 0.1,
                            }}
                            className="d-flex align-items-center justify-content-center mb-2"
                            style={{
                              color:
                                hoveredIndex === index
                                  ? "rgba(255,255,255,0.9)"
                                  : "#6c757d",
                              fontSize: "0.85rem",
                            }}
                          >
                            <FaCheckCircle className="me-2" /> {feature}
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Learn More Button on Hover */}
                      <motion.button
                        className="btn btn-sm mt-3 learn-more-btn"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 10,
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          color: "white",
                          backdropFilter: "blur(10px)",
                          transition: "all 0.3s ease",
                          border: "none",
                          borderRadius: "20px",
                          padding: "8px 16px",
                        }}
                      >
                        Learn More <FaArrowRight className="ms-2" />
                      </motion.button>
                    </Card.Body>
                  </Card>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Bottom CTA */}
        <Row className="justify-content-center text-center mt-5">
          <Col md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-muted mb-4">
                Need a custom solution? We're here to help bring your vision to
                life.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="px-5 py-3 fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    borderRadius: "50px",
                    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore All Services <FaArrowRight className="ms-2" />
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        /* Uniform card dimensions */
        .service-card {
          min-height: 500px !important;
          height: 500px !important;
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
        }
        
        /* Card body flexbox layout */
        .service-card .card-body {
          flex: 1 !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          padding: 1.5rem !important;
          height: 100% !important;
        }
        
        /* Fixed elements */
        .service-card .icon-container {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
          flex-shrink: 0;
          width: 100px !important;
          height: 100px !important;
        }
        
        .service-card .service-title {
          flex-shrink: 0;
          margin-bottom: 0.5rem !important;
          font-size: 1.25rem !important;
          line-height: 1.3 !important;
        }
        
        .service-card .service-subtitle {
          flex-shrink: 0;
          margin-bottom: 1rem !important;
          font-size: 0.95rem !important;
          line-height: 1.2 !important;
        }
        
        /* Flexible description area */
        .service-card .service-description {
          flex: 1 !important;
          margin-bottom: 1rem !important;
          font-size: 0.95rem !important;
          line-height: 1.6 !important;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
        
        .service-card .features-list {
          flex-shrink: 0;
          margin-bottom: 1rem !important;
          max-height: 120px;
          overflow: hidden;
        }
        
        .service-card .learn-more-btn {
          flex-shrink: 0;
          margin-top: auto !important;
        }
        
        /* Hover effects */
        .service-card:hover .icon-container {
          box-shadow: 0 0 30px rgba(255,255,255,0.3);
        }
        
        .service-card:hover .card-body {
          text-align: left !important;
        }
        
        .service-card:hover .service-title,
        .service-card:hover .service-subtitle,
        .service-card:hover .service-description,
        .service-card:hover .features-list {
          text-align: left !important;
        }
        
        .service-card .learn-more-btn:hover {
          background: rgba(255,255,255,0.3) !important;
          box-shadow: 0 0 15px rgba(255,255,255,0.5);
        }
        
        .service-card .learn-more-btn:focus {
          outline: 2px solid white;
          outline-offset: 2px;
        }
        
        /* Responsive breakpoints */
        @media (max-width: 1200px) {
          .service-card {
            min-height: 430px !important;
            height: 430px !important;
          }
        }
        
        @media (max-width: 992px) {
          .service-card {
            min-height: 400px !important;
            height: 400px !important;
          }
          
          .service-card .card-body {
            padding: 1.25rem !important;
          }
          
          .service-card .icon-container {
            width: 90px !important;
            height: 90px !important;
          }
          
          .service-card .service-title {
            font-size: 1.2rem !important;
          }
          
          .service-card .service-description {
            -webkit-line-clamp: 3;
          }
        }
        
        @media (max-width: 768px) {
          .service-card {
            min-height: 380px !important;
            height: 380px !important;
            transform: translateY(0) !important;
          }
          
          .service-card:hover {
            transform: translateY(-10px) !important;
          }
          
          .service-card .card-body {
            padding: 1rem !important;
          }
          
          .service-card .icon-container {
            width: 80px !important;
            height: 80px !important;
          }
          
          .service-card .service-title {
            font-size: 1.1rem !important;
          }
          
          .service-card .service-subtitle {
            font-size: 0.9rem !important;
          }
          
          .service-card .service-description {
            font-size: 0.85rem !important;
            -webkit-line-clamp: 3;
          }
          
          .service-card .features-list {
            max-height: 100px;
          }
        }
        
        @media (max-width: 576px) {
          .service-card {
            min-height: 350px !important;
            height: 350px !important;
          }
          
          .service-card .card-body {
            padding: 0.875rem !important;
          }
          
          .service-card .icon-container {
            width: 70px !important;
            height: 70px !important;
          }
          
          .service-card .service-title {
            font-size: 1rem !important;
          }
          
          .service-card .service-subtitle {
            font-size: 0.85rem !important;
          }
          
          .service-card .service-description {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
            -webkit-line-clamp: 3;
          }
          
          .service-card .features-list {
            margin-bottom: 0.75rem !important;
            max-height: 80px;
          }
        }
        
        @media (max-width: 480px) {
          .service-card {
            min-height: 320px !important;
            height: 320px !important;
          }
          
          .service-card .card-body {
            padding: 0.75rem !important;
          }
          
          .service-card .icon-container {
            width: 60px !important;
            height: 60px !important;
          }
          
          .service-card .service-title {
            font-size: 0.95rem !important;
          }
          
          .service-card .service-subtitle {
            font-size: 0.8rem !important;
          }
          
          .service-card .service-description {
            font-size: 0.75rem !important;
            line-height: 1.3 !important;
            -webkit-line-clamp: 2;
          }
          
          .service-card .features-list {
            margin-bottom: 0.5rem !important;
            max-height: 60px;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .service-card:hover {
            transform: none !important;
          }
          
          .service-card:active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .service-card {
            transition: none !important;
          }
          
          .service-card:hover {
            transform: none !important;
          }
        }
        
        /* Ensure consistent card spacing */
        .service-card-wrapper {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
};

export default ServiceCards;
