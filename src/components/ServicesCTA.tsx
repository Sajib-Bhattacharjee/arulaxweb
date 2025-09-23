import React, { useState, useRef } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  FaQuoteLeft,
  FaArrowRight,
  FaEnvelope,
  FaCalendarAlt,
  FaRocket,
  FaCheckCircle,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

interface ServicesCTAProps {
  title?: string;
  description?: string;
  onRequestQuote?: () => void;
  onScheduleCall?: () => void;
  onContactUs?: () => void;
}

const ServicesCTA: React.FC<ServicesCTAProps> = ({
  title = "Ready to Get Started?",
  description = "Transform your business with our expert web development services. Get a personalized quote tailored to your specific needs and budget.",
  onRequestQuote = () => console.log("Request Quote button clicked"),
  onScheduleCall = () => console.log("Schedule Call button clicked"),
  onContactUs = () => console.log("Contact Us button clicked"),
}) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const ctaStyle = {
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    overflow: "hidden",
  };

  const benefits = [
    { icon: <FaRocket />, text: "Fast Delivery", color: "#ff6b6b" },
    { icon: <FaUsers />, text: "Expert Team", color: "#4ecdc4" },
    { icon: <FaShieldAlt />, text: "Secure & Reliable", color: "#45b7d1" },
    { icon: <FaLightbulb />, text: "Innovative Solutions", color: "#f9ca24" },
  ];

  return (
    <section style={ctaStyle} className="text-white" ref={sectionRef}>
      {/* Enhanced Background Decorations */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          right: "5%",
          width: "150px",
          height: "150px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          zIndex: 1,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute"
        style={{
          bottom: "15%",
          left: "8%",
          width: "100px",
          height: "100px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          zIndex: 1,
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute"
        style={{
          top: "60%",
          right: "20%",
          width: "80px",
          height: "80px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          zIndex: 1,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FaQuoteLeft size={48} className="mb-4 opacity-75" />
              </motion.div>

              <motion.h2
                className="display-4 fw-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {title}
              </motion.h2>

              <motion.p
                className="lead mb-4"
                style={{ fontSize: "1.2rem" }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {description}
              </motion.p>

              {/* Enhanced Benefits Grid */}
              <motion.div
                className="row g-3 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {benefits.map((benefit, index) => (
                  <Col md={6} key={index}>
                    <motion.div
                      className="d-flex align-items-center p-3 rounded-3"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                      }}
                      whileHover={{
                        scale: 1.05,
                        background: "rgba(255, 255, 255, 0.2)",
                        transition: { duration: 0.3 },
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <motion.div
                        className="me-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: benefit.color,
                          borderRadius: "50%",
                          color: "white",
                        }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <span className="fw-semibold">{benefit.text}</span>
                    </motion.div>
                  </Col>
                ))}
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="border-0 shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Card.Body className="p-5 text-center">
                    <motion.h3
                      className="fw-bold text-primary mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      Get Your Free Quote Today
                    </motion.h3>

                    <motion.p
                      className="text-muted mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Choose how you'd like to connect with our team and get
                      started on your project.
                    </motion.p>

                    <div className="d-grid gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onHoverStart={() => setHoveredButton("quote")}
                        onHoverEnd={() => setHoveredButton(null)}
                      >
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={onRequestQuote}
                          className="d-flex align-items-center justify-content-center gap-2"
                          style={{
                            padding: "12px 24px",
                            background:
                              hoveredButton === "quote"
                                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            border: "none",
                            borderRadius: "25px",
                            boxShadow:
                              hoveredButton === "quote"
                                ? "0 8px 25px rgba(102, 126, 234, 0.4)"
                                : "0 4px 15px rgba(102, 126, 234, 0.3)",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <FaQuoteLeft size={20} />
                          Request Detailed Quote
                          <FaArrowRight size={16} />
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onHoverStart={() => setHoveredButton("call")}
                        onHoverEnd={() => setHoveredButton(null)}
                      >
                        <Button
                          variant="outline-primary"
                          size="lg"
                          onClick={onScheduleCall}
                          className="d-flex align-items-center justify-content-center gap-2"
                          style={{
                            padding: "12px 24px",
                            borderRadius: "25px",
                            border: "2px solid #667eea",
                            color: "black",
                            background:
                              hoveredButton === "call"
                                ? "#705DBB"
                                : "transparent",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <FaCalendarAlt size={20} />
                          Schedule Free Consultation
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onHoverStart={() => setHoveredButton("contact")}
                        onHoverEnd={() => setHoveredButton(null)}
                      >
                        <Button
                          variant="outline-secondary"
                          size="lg"
                          onClick={onContactUs}
                          className="d-flex align-items-center justify-content-center gap-2"
                          style={{
                            padding: "12px 24px",
                            borderRadius: "25px",
                            border: "2px solid #6c757d",
                            color: "#6c757d",
                            background:
                              hoveredButton === "contact"
                                ? "#C479DB"
                                : "transparent",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <FaEnvelope size={20} />
                          Contact Us Directly
                        </Button>
                      </motion.div>
                    </div>

                    <motion.div
                      className="mt-4 pt-4 border-top"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <small className="text-muted">
                        <strong>Why choose AruLax Web?</strong>
                        <br />
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-2">
                          <span className="d-flex align-items-center">
                            <FaCheckCircle className="text-success me-1" />
                            150+ Templates
                          </span>
                          <span className="d-flex align-items-center">
                            <FaCheckCircle className="text-success me-1" />
                            Expert Team
                          </span>
                          <span className="d-flex align-items-center">
                            <FaCheckCircle className="text-success me-1" />
                            Fast Delivery
                          </span>
                          <span className="d-flex align-items-center">
                            <FaCheckCircle className="text-success me-1" />
                            Ongoing Support
                          </span>
                        </div>
                      </small>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .btn:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        
        .btn:focus {
          outline: 2px solid rgba(255,255,255,0.5);
          outline-offset: 2px;
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 480px) {
          .btn {
            transform: none !important;
            min-height: 44px !important;
            font-size: 0.9rem !important;
            padding: 10px 16px !important;
            touch-action: manipulation;
          }
          
          .btn:hover {
            transform: none !important;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
          }
          
          .display-4 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          
          .lead {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }
          
          .card-body {
            padding: 1.5rem !important;
          }
          
          .d-grid {
            gap: 12px !important;
          }
        }
        
        @media (min-width: 481px) and (max-width: 768px) {
          .btn {
            transform: none !important;
            min-height: 44px !important;
            font-size: 0.95rem !important;
            touch-action: manipulation;
          }
          
          .btn:hover {
            transform: none !important;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
          }
          
          .display-4 {
            font-size: 2.5rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .btn {
            transform: none !important;
            touch-action: manipulation;
          }
          
          .btn:hover {
            transform: none !important;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
          }
        }
        
        /* Touch-friendly button adjustments */
        @media (max-width: 768px) {
          .btn {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesCTA;
