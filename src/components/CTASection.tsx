import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRocket, FaArrowRight, FaStar, FaQuoteLeft } from "react-icons/fa";

interface CTAButton {
  text: string;
  variant: "primary" | "outline-light" | "light";
  onClick: () => void;
}

interface CTASectionProps {
  ctaText: string;
  ctaButton: CTAButton;
}

const CTASection: React.FC<CTASectionProps> = ({ ctaText, ctaButton }) => {
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
    <section style={ctaStyle} className="text-white cta-section">
      {/* Dynamic Background Layers */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background:
            "linear-gradient(45deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 50%, rgba(240, 147, 251, 0.1) 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 8s ease infinite",
          zIndex: -1,
        }}
      />

      {/* Floating Elements */}
      <motion.div
        className="position-absolute"
        style={{
          top: "15%",
          right: "8%",
          width: "120px",
          height: "120px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "50%",
          zIndex: 0,
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="position-absolute"
        style={{
          bottom: "20%",
          left: "5%",
          width: "80px",
          height: "80px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          zIndex: 0,
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, 15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Scattered Stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="position-absolute"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            color: "rgba(255, 255, 255, 0.4)",
            zIndex: 0,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <FaStar size={12 + Math.random() * 8} />
        </motion.div>
      ))}

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Row className="text-center">
          <Col lg={10} className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <FaQuoteLeft size={40} style={{ opacity: 0.6 }} />
              </motion.div>

              <motion.h2
                className="display-4 fw-bold mb-4"
                style={{
                  lineHeight: 1.2,
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {ctaText}
              </motion.h2>

              <motion.p
                className="lead mb-5"
                style={{
                  fontSize: "1.3rem",
                  lineHeight: 1.6,
                  textShadow: "0 1px 5px rgba(0,0,0,0.2)",
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to transform your digital presence? Let's create something
                amazing together. Get your personalized quote today and take the
                first step towards your dream website.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="d-flex justify-content-center align-items-center gap-4 mb-5 flex-wrap"
              >
                <div className="d-flex align-items-center text-white-75">
                  <FaStar className="text-warning me-1" />
                  <small>5.0 Rating</small>
                </div>
                <div className="text-white-75">
                  <small>• 150+ Happy Clients</small>
                </div>
                <div className="text-white-75">
                  <small>• 24h Response</small>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant={ctaButton.variant}
                  size="lg"
                  onClick={ctaButton.onClick}
                  className="px-5 py-3 fw-bold cta-button"
                  style={{
                    fontSize: "1.2rem",
                    borderRadius: "50px",
                    border: "2px solid rgba(255,255,255,0.3)",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 8px 32px rgba(255,255,255,0.1)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      zIndex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaRocket className="me-2" />
                    {ctaButton.text}
                    <FaArrowRight className="ms-2" />
                  </span>
                  {/* Button glow effect */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transition: "left 0.8s ease",
                      zIndex: 0,
                    }}
                    className="button-glow"
                  />
                </Button>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="mt-4"
              >
                <p className="small text-white-75 mb-0">
                  🔒 No commitment required • Free consultation • Quick response
                </p>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .cta-section .cta-button:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: rgba(255,255,255,0.5) !important;
          box-shadow: 0 12px 40px rgba(255,255,255,0.2) !important;
          transform: translateY(-3px);
        }
        
        .cta-section .cta-button:hover .button-glow {
          left: 100%;
        }
        
        .cta-section .cta-button:focus {
          outline: 2px solid rgba(255,255,255,0.5);
          outline-offset: 2px;
        }
        
        .text-white-75 {
          color: rgba(255, 255, 255, 0.85) !important;
        }
        
        @media (max-width: 768px) {
          .cta-section .display-4 {
            font-size: 2.5rem !important;
          }
          
          .cta-section .lead {
            font-size: 1.1rem !important;
          }
          
          .cta-section .cta-button {
            font-size: 1rem !important;
            padding: 0.75rem 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .cta-section .display-4 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
