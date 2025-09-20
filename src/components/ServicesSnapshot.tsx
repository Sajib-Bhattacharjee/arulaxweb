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
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="h-100"
              >
                <Card
                  className="h-100 border-0 service-card"
                  style={{
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    background:
                      hoveredIndex === index ? service.gradient : "white",
                    boxShadow:
                      hoveredIndex === index
                        ? `0 20px 40px ${service.color}20`
                        : "0 4px 20px rgba(0,0,0,0.08)",
                    transform:
                      hoveredIndex === index
                        ? "translateY(-15px)"
                        : "translateY(0)",
                  }}
                >
                  {/* Gradient Header */}
                  <div
                    className="p-4 text-center"
                    style={{
                      background:
                        hoveredIndex === index
                          ? "rgba(255,255,255,0.1)"
                          : service.gradient,
                      borderRadius: "0.5rem 0.5rem 0 0",
                      backdropFilter:
                        hoveredIndex === index ? "blur(10px)" : "none",
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        rotate: hoveredIndex === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      style={{
                        color: hoveredIndex === index ? "white" : "white",
                        filter: `drop-shadow(0 4px 8px ${service.color}30)`,
                      }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>

                  <Card.Body className="p-4 text-center">
                    <Card.Title
                      className="h5 mb-3 fw-bold"
                      style={{
                        color: hoveredIndex === index ? "white" : service.color,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {service.title}
                    </Card.Title>
                    <Card.Text
                      className="mb-4"
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
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
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
                                : service.color,
                            fontSize: "0.85rem",
                          }}
                        >
                          <FaCheckCircle className="me-2" size={12} />
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Button
                        variant="light"
                        size="sm"
                        className="fw-bold"
                        style={{
                          borderRadius: "25px",
                          border: "2px solid rgba(255,255,255,0.3)",
                          background: "rgba(255,255,255,0.2)",
                          color: "white",
                          backdropFilter: "blur(10px)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        Learn More <FaArrowRight className="ms-1" size={12} />
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
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
        .services-section .service-card:hover {
          box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
        }
        
        .services-section .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4) !important;
        }
        
        @media (max-width: 768px) {
          .services-section .service-card {
            margin-bottom: 2rem;
          }
          
          .services-section .display-5 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSnapshot;
