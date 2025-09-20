import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHandshake,
  FaRocket,
  FaStar,
  FaHeart,
  FaUsers,
} from "react-icons/fa";

interface AboutCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onPortfolioClick?: () => void;
}

const AboutCTA: React.FC<AboutCTAProps> = ({
  title = "Work with Experts",
  description = "Ready to transform your digital presence? Let's collaborate and bring your vision to life with our expert team.",
  buttonText = "Contact Now",
  onButtonClick = () => console.log("Contact Now button clicked"),
  onPortfolioClick = () => console.log("View Portfolio clicked"),
}) => {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const ctaStyle = {
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
    minHeight: "500px",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    overflow: "hidden",
  };

  return (
    <section style={ctaStyle} className="text-white about-cta-section">
      {/* Dynamic Background Animation */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background:
            "linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 50%, rgba(240, 147, 251, 0.1) 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 15s ease infinite",
          zIndex: 0,
        }}
      />

      {/* Animated Background Shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          zIndex: 1,
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="position-absolute"
        style={{
          bottom: "15%",
          right: "8%",
          width: "120px",
          height: "120px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          zIndex: 1,
        }}
        animate={{
          y: [0, 25, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Floating Icons */}
      <motion.div
        className="position-absolute"
        style={{
          top: "20%",
          right: "20%",
          zIndex: 1,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaStar size={24} style={{ opacity: 0.6 }} />
      </motion.div>

      <motion.div
        className="position-absolute"
        style={{
          bottom: "30%",
          left: "15%",
          zIndex: 1,
        }}
        animate={{
          y: [0, 15, 0],
          rotate: [360, 0, 360],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <FaHeart size={20} style={{ opacity: 0.5 }} />
      </motion.div>

      <motion.div
        className="position-absolute"
        style={{
          top: "60%",
          left: "10%",
          zIndex: 1,
        }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <FaRocket size={18} style={{ opacity: 0.4 }} />
      </motion.div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaHandshake size={64} />
              </motion.div>

              <motion.h2
                className="display-4 fw-bold mb-4"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {title}
              </motion.h2>

              <motion.p
                className="lead mb-5"
                style={{
                  fontSize: "1.3rem",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                className="mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Row className="justify-content-center">
                  <Col md={3} className="mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <FaStar className="text-warning me-2" size={16} />
                      <small>5.0 Rating</small>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <FaUsers className="text-info me-2" size={16} />
                      <small>Happy Clients</small>
                    </div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <div className="d-flex align-items-center justify-content-center">
                      <FaRocket className="text-success me-2" size={16} />
                      <small>24h Response</small>
                    </div>
                  </Col>
                </Row>
              </motion.div>

              <motion.div
                className="d-flex justify-content-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredButton(0)}
                  onHoverEnd={() => setHoveredButton(null)}
                >
                  <Button
                    variant="light"
                    size="lg"
                    onClick={onButtonClick}
                    className="px-5 py-3 d-flex align-items-center gap-2 fw-bold"
                    style={{
                      fontSize: "1.1rem",
                      background:
                        hoveredButton === 0
                          ? "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)"
                          : "white",
                      border: "none",
                      borderRadius: "50px",
                      boxShadow:
                        hoveredButton === 0
                          ? "0 15px 35px rgba(0,0,0,0.2)"
                          : "0 8px 25px rgba(0,0,0,0.15)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FaRocket size={16} />
                    {buttonText}
                    <FaArrowRight size={16} />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredButton(1)}
                  onHoverEnd={() => setHoveredButton(null)}
                >
                  <Button
                    variant="outline-light"
                    size="lg"
                    onClick={onPortfolioClick}
                    className="px-5 py-3 fw-bold"
                    style={{
                      fontSize: "1.1rem",
                      border: "2px solid rgba(255,255,255,0.8)",
                      borderRadius: "50px",
                      background:
                        hoveredButton === 1
                          ? "rgba(255,255,255,0.1)"
                          : "transparent",
                      backdropFilter:
                        hoveredButton === 1 ? "blur(10px)" : "none",
                      boxShadow:
                        hoveredButton === 1
                          ? "0 15px 35px rgba(255,255,255,0.2)"
                          : "0 8px 25px rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Our Portfolio
                  </Button>
                </motion.div>
              </motion.div>

              {/* Secondary CTA Message */}
              <motion.p
                className="mt-4 mb-0"
                style={{
                  fontSize: "0.9rem",
                  opacity: 0.8,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                Ready to get started? Let's build something amazing together! 🚀
              </motion.p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Background decoration */}
      <div
        className="position-absolute"
        style={{
          top: "15%",
          right: "10%",
          width: "150px",
          height: "150px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        className="position-absolute"
        style={{
          bottom: "20%",
          left: "8%",
          width: "100px",
          height: "100px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />
      <div
        className="position-absolute"
        style={{
          top: "60%",
          right: "20%",
          width: "80px",
          height: "80px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          animation: "float 10s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .about-cta-section {
          position: relative;
        }
        
        .about-cta-section .btn {
          transition: all 0.3s ease;
          will-change: transform, box-shadow;
        }
        
        .about-cta-section .btn:hover {
          transform: translateY(-2px);
        }
        
        .about-cta-section .btn:active {
          transform: translateY(0);
        }
        
        /* Focus states for accessibility */
        .about-cta-section .btn:focus {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .about-cta-section .btn {
            margin-bottom: 1rem;
            width: 100%;
          }
          
          .display-4 {
            font-size: 2rem;
          }
          
          .about-cta-section .position-absolute {
            display: none;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .about-cta-section .motion-div {
            animation: none;
          }
          
          .about-cta-section .btn {
            transition: none;
          }
          
          .about-cta-section .btn:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutCTA;
