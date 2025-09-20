import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaClock, FaRocket, FaCheckCircle, FaArrowRight } from "react-icons/fa";

interface ContactCTAProps {
  title?: string;
  description?: string;
  responseTime?: string;
  onSendInquiry?: () => void;
  onScheduleCall?: () => void;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Send Your Inquiry",
  description = "Ready to start your project? Send us your inquiry and get a detailed response within 24 hours with a personalized proposal.",
  responseTime = "24 hours",
  onSendInquiry = () => {
    // Scroll to contact form
    const element = document.querySelector(".contact-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Send Inquiry button clicked");
    }
  },
  onScheduleCall = () => console.log("Schedule Call button clicked"),
}) => {
  const ctaStyle = {
    background:
      "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 25%, #EC4899 50%, #A855F7 75%, #06B6D4 100%)",
    backgroundSize: "400% 400%",
    minHeight: "500px",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    overflow: "hidden",
    animation: "gradientShift 8s ease infinite",
  };

  const guarantees = [
    {
      icon: <FaClock size={24} />,
      title: "24-Hour Response",
      description: "Get a detailed response within 24 hours",
    },
    {
      icon: <FaRocket size={24} />,
      title: "Fast Project Start",
      description: "Begin your project within 1-2 weeks",
    },
    {
      icon: <FaCheckCircle size={24} />,
      title: "Quality Guarantee",
      description: "100% satisfaction or money back",
    },
  ];

  return (
    <section style={ctaStyle} className="text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="display-4 fw-bold mb-4">{title}</h2>
              <p className="lead mb-4" style={{ fontSize: "1.2rem" }}>
                {description}
              </p>

              {/* Guarantees */}
              <div className="mb-4">
                {guarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    className="d-flex align-items-center mb-3 guarantee-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="me-3 d-flex align-items-center justify-content-center guarantee-icon"
                      style={{
                        width: "55px",
                        height: "55px",
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))",
                        borderRadius: "50%",
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        backdropFilter: "blur(10px)",
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        background:
                          "linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.25))",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {guarantee.icon}
                    </motion.div>
                    <div>
                      <h6 className="fw-bold mb-1 guarantee-title">
                        {guarantee.title}
                      </h6>
                      <small className="opacity-90 guarantee-desc">
                        {guarantee.description}
                      </small>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="light"
                    size="lg"
                    onClick={onSendInquiry}
                    className="px-5 py-3 d-flex align-items-center gap-2 cta-primary-btn"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      borderRadius: "12px",
                      border: "none",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <span className="position-relative z-1">{title}</span>
                    <FaArrowRight size={16} className="position-relative z-1" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    variant="outline-light"
                    size="lg"
                    onClick={onScheduleCall}
                    className="px-5 py-3 cta-secondary-btn"
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      borderRadius: "12px",
                      borderWidth: "2px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <span className="position-relative z-1">
                      Schedule a Call
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Enhanced Response Time Visual */}
              <motion.div
                className="mx-auto mb-4 d-flex align-items-center justify-content-center position-relative response-time-circle"
                style={{
                  width: "220px",
                  height: "220px",
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
                  borderRadius: "50%",
                  border: "3px solid rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(15px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-center"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaClock
                      size={52}
                      className="mb-3"
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                      }}
                    />
                  </motion.div>
                  <div className="fw-bold h3 mb-0 response-time-text">
                    {responseTime}
                  </div>
                  <small className="opacity-90">Response Time</small>
                </motion.div>

                {/* Enhanced Animated circles */}
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100 border border-2 rounded-circle"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100 border border-2 rounded-circle"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.4)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                />
                <motion.div
                  className="position-absolute top-0 start-0 w-100 h-100 border border-2 rounded-circle"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.6,
                  }}
                />
              </motion.div>

              <motion.h4
                className="fw-bold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Why Choose AruLax Web?
              </motion.h4>
              <div className="row text-center">
                {[
                  { number: "150+", label: "Templates", delay: 0.5 },
                  { number: "95+", label: "Happy Clients", delay: 0.6 },
                  { number: "3", label: "Expert Team", delay: 0.7 },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="col-4"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: stat.delay }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <motion.div
                      className="fw-bold h2 mb-1 stat-number"
                      style={{
                        background: "linear-gradient(135deg, #ffffff, #f0f0f0)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: stat.delay,
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <motion.small
                      className="stat-label"
                      whileHover={{ opacity: 0.8 }}
                    >
                      {stat.label}
                    </motion.small>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Enhanced Background decorations */}
      <motion.div
        className="position-absolute"
        style={{
          top: "15%",
          right: "10%",
          width: "140px",
          height: "140px",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
          borderRadius: "50%",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="position-absolute"
        style={{
          bottom: "20%",
          left: "8%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03))",
          borderRadius: "50%",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
          rotate: [0, -90, -180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="position-absolute"
        style={{
          top: "60%",
          right: "25%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04))",
          borderRadius: "50%",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      <style>{`
        /* Dynamic Gradient Background Animation */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Enhanced Button Styles */
        .cta-primary-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cta-primary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }
        
        .cta-primary-btn:hover::before {
          left: 100%;
        }
        
        .cta-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
        
        .cta-secondary-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .cta-secondary-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }
        
        .cta-secondary-btn:hover::before {
          left: 100%;
        }
        
        .cta-secondary-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }
        
        /* Enhanced Guarantee Items */
        .guarantee-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .guarantee-item:hover {
          transform: translateX(5px);
        }
        
        .guarantee-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .guarantee-icon:hover {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.25)) !important;
        }
        
        .guarantee-title {
          transition: all 0.3s ease;
        }
        
        .guarantee-item:hover .guarantee-title {
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .guarantee-desc {
          transition: all 0.3s ease;
        }
        
        .guarantee-item:hover .guarantee-desc {
          opacity: 1 !important;
        }
        
        /* Enhanced Response Time Circle */
        .response-time-circle {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .response-time-circle:hover {
          transform: scale(1.05) rotate(5deg);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3) !important;
        }
        
        .response-time-text {
          transition: all 0.3s ease;
        }
        
        .response-time-circle:hover .response-time-text {
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        
        /* Enhanced Statistics */
        .stat-number {
          transition: all 0.3s ease;
        }
        
        .stat-label {
          transition: all 0.3s ease;
        }
        
        /* Responsive Enhancements */
        @media (max-width: 768px) {
          .cta-primary-btn,
          .cta-secondary-btn {
            font-size: 1rem !important;
            padding: 12px 24px !important;
          }
          
          .guarantee-icon {
            width: 45px !important;
            height: 45px !important;
          }
          
          .response-time-circle {
            width: 180px !important;
            height: 180px !important;
          }
        }
        
        @media (max-width: 576px) {
          .cta-primary-btn,
          .cta-secondary-btn {
            font-size: 0.9rem !important;
            padding: 10px 20px !important;
          }
          
          .guarantee-icon {
            width: 40px !important;
            height: 40px !important;
          }
          
          .response-time-circle {
            width: 160px !important;
            height: 160px !important;
          }
        }
        
        /* Accessibility Enhancements */
        @media (prefers-reduced-motion: reduce) {
          .cta-primary-btn,
          .cta-secondary-btn,
          .guarantee-item,
          .guarantee-icon,
          .response-time-circle,
          .stat-number {
            transition: none !important;
            animation: none !important;
          }
        }
        
        /* High Contrast Mode Support */
        @media (prefers-contrast: high) {
          .cta-primary-btn,
          .cta-secondary-btn {
            border: 2px solid currentColor;
          }
          
          .guarantee-icon {
            border-width: 3px !important;
          }
        }
        
        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .guarantee-icon {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactCTA;
