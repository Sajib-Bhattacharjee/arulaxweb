import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import {
  FaCode,
  FaMobile,
  FaDatabase,
  FaSearch,
  FaShoppingCart,
  FaPalette,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  color: string;
}

interface ServicesSnapshotProps {
  servicesList: Service[];
}

const ServicesSnapshot: React.FC<ServicesSnapshotProps> = ({
  servicesList,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const defaultServices: Service[] = [
    {
      title: "Web Design",
      description:
        "Beautiful, modern designs that capture your brand essence and engage your audience.",
      icon: <FaPalette size={40} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea",
      features: ["Custom UI/UX", "Brand Identity", "Responsive Design"],
    },
    {
      title: "Responsive Development",
      description:
        "Mobile-first development ensuring your site looks perfect on every device.",
      icon: <FaMobile size={40} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f093fb",
      features: ["Mobile-First", "Cross-Browser", "Performance Optimized"],
    },
    {
      title: "Dynamic Google Sheet Updates",
      description:
        "Real-time data integration with Google Sheets for seamless content management.",
      icon: <FaDatabase size={40} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe",
      features: ["Real-time Sync", "Easy Management", "Live Updates"],
    },
    {
      title: "SEO & Performance",
      description:
        "Optimized for search engines and lightning-fast loading speeds.",
      icon: <FaSearch size={40} />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      color: "#43e97b",
      features: ["SEO Optimized", "Fast Loading", "Analytics Ready"],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Complete online store solutions with secure payment processing.",
      icon: <FaShoppingCart size={40} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      color: "#fa709a",
      features: ["Payment Gateway", "Inventory System", "Order Management"],
    },
    {
      title: "Custom Development",
      description:
        "Tailored solutions built specifically for your unique business needs.",
      icon: <FaCode size={40} />,
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
      color: "#a18cd1",
      features: [
        "Tailored Solutions",
        "Scalable Architecture",
        "API Integration",
      ],
    },
  ];

  const services = servicesList.length > 0 ? servicesList : defaultServices;

  return (
    <section
      className="py-5 services-section"
      style={{ position: "relative", overflow: "hidden" }}
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

      {/* Floating Background Elements */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          right: "5%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.03), rgba(118, 75, 162, 0.03))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="display-5 fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Services
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Comprehensive web solutions tailored to your business needs
              </motion.p>

              {/* Service Stats */}
              <Row className="justify-content-center">
                <Col md={3} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">6+</h4>
                    <small className="text-muted">Core Services</small>
                  </motion.div>
                </Col>
                <Col md={3} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">24/7</h4>
                    <small className="text-muted">Support Available</small>
                  </motion.div>
                </Col>
                <Col md={3} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">100%</h4>
                    <small className="text-muted">Custom Solutions</small>
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="h-100"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Running Circular Border */}
                <motion.div
                  className="position-relative"
                  style={{
                    padding: "3px",
                    background: service.gradient,
                    borderRadius: "20px",
                    zIndex: 1,
                  }}
                  animate={{
                    background: [
                      service.gradient,
                      `linear-gradient(135deg, ${service.color}20, ${service.color}60, ${service.color}20)`,
                      service.gradient,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Animated Border Ring */}
                  <motion.div
                    className="position-absolute"
                    style={{
                      top: "-2px",
                      left: "-2px",
                      right: "-2px",
                      bottom: "-2px",
                      background: `conic-gradient(from 0deg, transparent, ${service.color}, transparent, ${service.color}60, transparent)`,
                      borderRadius: "22px",
                      zIndex: -1,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <Card
                    className="h-100 border-0 service-card"
                    style={{
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      background:
                        hoveredIndex === index
                          ? service.gradient
                          : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                      borderRadius: "17px",
                      boxShadow:
                        hoveredIndex === index
                          ? `0 25px 60px ${service.color}30, 0 10px 30px ${service.color}20, inset 0 1px 0 rgba(255,255,255,0.2)`
                          : "0 8px 30px rgba(0,0,0,0.08), 0 2px 10px rgba(0,0,0,0.04)",
                      transform:
                        hoveredIndex === index
                          ? "translateY(-20px) rotateX(5deg)"
                          : "translateY(0) rotateX(0)",
                      backdropFilter:
                        hoveredIndex === index ? "blur(20px)" : "blur(0px)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Floating Particles Background */}
                    {[...Array(6)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="position-absolute"
                        style={{
                          width: "4px",
                          height: "4px",
                          background:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.6)"
                              : "transparent",
                          borderRadius: "50%",
                          top: `${20 + particleIndex * 15}%`,
                          left: `${10 + particleIndex * 15}%`,
                          zIndex: 0,
                        }}
                        animate={{
                          y: hoveredIndex === index ? [0, -30, 0] : [0, 0, 0],
                          opacity:
                            hoveredIndex === index ? [0.3, 1, 0.3] : [0, 0, 0],
                          scale:
                            hoveredIndex === index
                              ? [0.5, 1.5, 0.5]
                              : [0, 0, 0],
                        }}
                        transition={{
                          duration: 2 + particleIndex * 0.3,
                          repeat: Infinity,
                          delay: particleIndex * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Shimmer Effect */}
                    <motion.div
                      className="position-absolute"
                      style={{
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        zIndex: 1,
                      }}
                      animate={{
                        left:
                          hoveredIndex === index
                            ? ["100%", "100%"]
                            : ["100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />

                    {/* Enhanced Gradient Header */}
                    <motion.div
                      className="p-4 text-center position-relative"
                      style={{
                        background:
                          hoveredIndex === index
                            ? "rgba(255,255,255,0.15)"
                            : service.gradient,
                        borderRadius: "17px 17px 0 0",
                        backdropFilter:
                          hoveredIndex === index ? "blur(15px)" : "none",
                        borderBottom:
                          hoveredIndex === index
                            ? "1px solid rgba(255,255,255,0.2)"
                            : "none",
                      }}
                    >
                      {/* Header Glow Effect */}
                      <motion.div
                        className="position-absolute"
                        style={{
                          top: "50%",
                          left: "50%",
                          width: "80px",
                          height: "80px",
                          background: `radial-gradient(circle, ${service.color}20, transparent)`,
                          borderRadius: "50%",
                          transform: "translate(-50%, -50%)",
                          zIndex: 0,
                        }}
                        animate={{
                          scale:
                            hoveredIndex === index ? [1, 1.5, 1] : [1, 1, 1],
                          opacity:
                            hoveredIndex === index
                              ? [0.3, 0.8, 0.3]
                              : [0.2, 0.2, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <motion.div
                        className="position-relative"
                        style={{
                          zIndex: 1,
                          color: "white",
                          filter: `drop-shadow(0 6px 12px ${service.color}40)`,
                          textShadow: `0 0 20px ${service.color}60`,
                        }}
                        animate={{
                          scale: hoveredIndex === index ? 1.3 : 1,
                          rotate: hoveredIndex === index ? 360 : 0,
                          y: hoveredIndex === index ? [-5, 5, -5] : [0, 0, 0],
                        }}
                        transition={{
                          duration: hoveredIndex === index ? 0.8 : 0.6,
                          ease: "easeOut",
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>

                    <Card.Body
                      className="p-4 text-center position-relative"
                      style={{
                        zIndex: 1,
                        background:
                          hoveredIndex === index
                            ? "rgba(0,0,0,0.1)"
                            : "transparent",
                        borderRadius: "0 0 17px 17px",
                      }}
                    >
                      <Card.Title
                        className="h5 mb-3 fw-bold position-relative"
                        style={{
                          color:
                            hoveredIndex === index ? "white" : service.color,
                          transition: "all 0.4s ease",
                          textShadow:
                            hoveredIndex === index
                              ? `0 2px 8px ${service.color}60`
                              : "none",
                        }}
                      >
                        <motion.span
                          animate={{
                            backgroundPosition:
                              hoveredIndex === index
                                ? ["0% 50%", "100% 50%", "0% 50%"]
                                : ["0% 50%", "0% 50%", "0% 50%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            background:
                              hoveredIndex === index
                                ? `linear-gradient(90deg, white, ${service.color}80, white)`
                                : "none",
                            WebkitBackgroundClip:
                              hoveredIndex === index ? "text" : "initial",
                            WebkitTextFillColor:
                              hoveredIndex === index
                                ? "transparent"
                                : "initial",
                            backgroundClip:
                              hoveredIndex === index ? "text" : "initial",
                          }}
                        >
                          {service.title}
                        </motion.span>
                      </Card.Title>

                      <Card.Text
                        className="mb-4"
                        style={{
                          color:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.95)"
                              : "#5a6c7d",
                          transition: "all 0.4s ease",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          textShadow:
                            hoveredIndex === index
                              ? "0 1px 3px rgba(0,0,0,0.3)"
                              : "none",
                        }}
                      >
                        {service.description}
                      </Card.Text>

                      {/* Enhanced Features List */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          height: hoveredIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mb-4"
                      >
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -30, scale: 0.8 }}
                            animate={{
                              opacity: hoveredIndex === index ? 1 : 0,
                              x: hoveredIndex === index ? 0 : -30,
                              scale: hoveredIndex === index ? 1 : 0.8,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: featureIndex * 0.1,
                              ease: "easeOut",
                            }}
                            className="d-flex align-items-center justify-content-center mb-2"
                            style={{
                              color:
                                hoveredIndex === index
                                  ? "rgba(255,255,255,0.95)"
                                  : service.color,
                              fontSize: "0.85rem",
                              fontWeight: "500",
                              textShadow:
                                hoveredIndex === index
                                  ? "0 1px 2px rgba(0,0,0,0.2)"
                                  : "none",
                            }}
                          >
                            <motion.div
                              animate={{
                                scale:
                                  hoveredIndex === index
                                    ? [1, 1.2, 1]
                                    : [1, 1, 1],
                                rotate:
                                  hoveredIndex === index ? [0, 360] : [0, 0],
                              }}
                              transition={{
                                duration: 0.6,
                                delay: featureIndex * 0.1,
                              }}
                              className="me-2"
                              style={{
                                color:
                                  hoveredIndex === index
                                    ? "white"
                                    : service.color,
                                filter:
                                  hoveredIndex === index
                                    ? `drop-shadow(0 2px 4px ${service.color}40)`
                                    : "none",
                              }}
                            >
                              <FaCheckCircle size={14} />
                            </motion.div>
                            {feature}
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Enhanced CTA Button */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          scale: hoveredIndex === index ? 1 : 0.8,
                          y: hoveredIndex === index ? 0 : 20,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="light"
                            size="sm"
                            className="fw-bold position-relative"
                            onClick={() => {
                              // Map service titles to correct IDs used in ServiceCards
                              const serviceIdMap: { [key: string]: string } = {
                                "Web Design": "web-design",
                                "Responsive Development":
                                  "responsive-development",
                                "Dynamic Google Sheet Updates":
                                  "google-sheets-integration",
                                "SEO & Performance": "seo-performance",
                                "E-commerce Solutions": "ecommerce-solutions",
                                "Custom Development": "custom-development",
                              };

                              const serviceId =
                                serviceIdMap[service.title] ||
                                service.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-");
                              navigate(`/services?highlight=${serviceId}`);
                            }}
                            style={{
                              borderRadius: "25px",
                              border: "2px solid rgba(255,255,255,0.4)",
                              background: "rgba(255,255,255,0.25)",
                              color: "white",
                              backdropFilter: "blur(15px)",
                              transition: "all 0.3s ease",
                              boxShadow: `0 4px 15px ${service.color}30`,
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                              overflow: "hidden",
                              cursor: "pointer",
                            }}
                          >
                            {/* Button Shine Effect */}
                            <motion.div
                              className="position-absolute"
                              style={{
                                top: 0,
                                left: "-100%",
                                width: "100%",
                                height: "100%",
                                background:
                                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                              }}
                              animate={{
                                left: ["100%", "100%"],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 1,
                              }}
                            />
                            <span
                              className="position-relative"
                              style={{ zIndex: 1 }}
                            >
                              Learn More{" "}
                              <FaArrowRight className="ms-1" size={12} />
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Bottom CTA */}
        <Row className="mt-5">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
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
                  onClick={() => navigate("/services")}
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
                    minHeight: "44px",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                  }}
                >
                  <FaArrowRight className="me-2" />
                  Explore All Services
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .services-section .service-card {
          position: relative;
          overflow: hidden;
        }
        
        .services-section .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          z-index: 1;
        }
        
        .services-section .service-card:hover::before {
          transform: translateX(100%);
        }
        
        .services-section .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5) !important;
        }
        
        /* Advanced Card Hover Effects */
        .services-section .service-card:hover {
          animation: cardFloat 3s ease-in-out infinite;
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        /* Enhanced Mobile Responsiveness */
        @media (max-width: 1200px) {
          .services-section .service-card {
            margin-bottom: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .services-section .service-card {
            margin-bottom: 2rem;
          }
          
          .services-section .display-5 {
            font-size: 2.2rem !important;
          }
          
          .services-section .lead {
            font-size: 1.1rem !important;
          }
          
          .services-section .service-card .card-body {
            padding: 1.5rem !important;
          }
          
          .services-section .service-card .h5 {
            font-size: 1.2rem !important;
          }
          
          .services-section .service-card .card-text {
            font-size: 0.9rem !important;
          }
          
          .services-section .btn-sm {
            padding: 0.5rem 1rem !important;
            font-size: 0.85rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .services-section .service-card {
            margin-bottom: 2.5rem;
          }
          
          .services-section .display-5 {
            font-size: 1.8rem !important;
          }
          
          .services-section .lead {
            font-size: 1rem !important;
          }
          
          .services-section .service-card .card-body {
            padding: 1.25rem !important;
          }
          
          .services-section .service-card .h5 {
            font-size: 1.1rem !important;
          }
          
          .services-section .service-card .card-text {
            font-size: 0.85rem !important;
            line-height: 1.5 !important;
          }
          
          .services-section .service-card .feature-item {
            font-size: 0.8rem !important;
          }
          
          .services-section .btn-sm {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.8rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .services-section .service-card {
            margin-bottom: 3rem;
          }
          
          .services-section .display-5 {
            font-size: 1.6rem !important;
          }
          
          .services-section .lead {
            font-size: 0.95rem !important;
          }
          
          .services-section .service-card .card-body {
            padding: 1rem !important;
          }
          
          .services-section .service-card .h5 {
            font-size: 1rem !important;
          }
          
          .services-section .service-card .card-text {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
          
          .services-section .service-card .feature-item {
            font-size: 0.75rem !important;
          }
          
          .services-section .btn-sm {
            padding: 0.35rem 0.7rem !important;
            font-size: 0.75rem !important;
          }
        }
        
        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .services-section .service-card:hover {
            animation: none;
          }
          
          .services-section .service-card:hover::before {
            transform: translateX(0);
          }
          
          .services-section .service-card:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
          
          /* Touch-friendly buttons */
          .services-section .btn {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          
          .services-section .btn:active {
            transform: scale(0.95) !important;
            transition: transform 0.1s ease;
          }
        }
        
        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .services-section .service-card:hover {
            animation: none;
          }
          
          .services-section .service-card::before {
            transition: none;
          }
          
          .services-section .service-card:hover::before {
            transform: translateX(0);
          }
        }
        
        /* High Contrast Support */
        @media (prefers-contrast: high) {
          .services-section .service-card {
            border: 2px solid currentColor;
          }
          
          .services-section .service-card .card-text {
            color: currentColor !important;
          }
        }
        
        /* Print Styles */
        @media print {
          .services-section .service-card {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
            background: white !important;
          }
          
          .services-section .service-card::before {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSnapshot;
