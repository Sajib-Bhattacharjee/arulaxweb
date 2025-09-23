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
      "linear-gradient(135deg, #0E0519 0%, #18323F 20%, #0D0518 40%, #2A143D 60%, #150627 80%, #350640 90%, #43074F 100%)",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    overflow: "hidden",
    padding: "80px 0",
  };

  return (
    <section style={ctaStyle} className="text-white cta-section">
      {/* Enhanced Dynamic Background Layers */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background:
            "linear-gradient(45deg, rgba(14, 5, 25, 0.3) 0%, rgba(24, 50, 63, 0.2) 25%, rgba(13, 5, 24, 0.3) 50%, rgba(42, 20, 61, 0.2) 75%, rgba(21, 6, 39, 0.3) 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 12s ease infinite",
          zIndex: -1,
        }}
      />

      {/* Secondary Background Layer */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(53, 6, 64, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(67, 7, 79, 0.1) 0%, transparent 50%)",
          zIndex: -1,
        }}
      />

      {/* Enhanced Floating Elements */}
      <motion.div
        className="position-absolute"
        style={{
          top: "15%",
          right: "8%",
          width: "140px",
          height: "140px",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          borderRadius: "50%",
          zIndex: 0,
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.6, 0.2],
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
          bottom: "20%",
          left: "5%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(67, 7, 79, 0.2) 0%, rgba(53, 6, 64, 0.1) 100%)",
          borderRadius: "50%",
          zIndex: 0,
          backdropFilter: "blur(5px)",
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Additional Floating Shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "60%",
          left: "10%",
          width: "60px",
          height: "60px",
          background: "rgba(42, 20, 61, 0.15)",
          borderRadius: "20px",
          zIndex: 0,
          transform: "rotate(45deg)",
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [45, 225, 45],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="position-absolute"
        style={{
          top: "25%",
          left: "75%",
          width: "80px",
          height: "40px",
          background:
            "linear-gradient(45deg, rgba(21, 6, 39, 0.2), rgba(53, 6, 64, 0.1))",
          borderRadius: "50px",
          zIndex: 0,
        }}
        animate={{
          x: [0, 30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Enhanced Scattered Stars */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="position-absolute"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            color: "rgba(255, 255, 255, 0.6)",
            zIndex: 0,
            filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))",
          }}
          animate={{
            scale: [0.3, 1.2, 0.3],
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 180, 360],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <FaStar size={8 + Math.random() * 12} />
        </motion.div>
      ))}

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="position-absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "4px",
            height: "4px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "50%",
            zIndex: 0,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}

      <Container style={{ position: "relative", zIndex: 1, padding: "40px 0" }}>
        <Row className="text-center">
          <Col lg={10} className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ padding: "20px 0" }}
            >
              {/* Enhanced Quote Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-4"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.3 },
                }}
              >
                <FaQuoteLeft
                  size={50}
                  style={{
                    opacity: 0.7,
                    filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
                    color: "#f8f9fa",
                  }}
                />
              </motion.div>

              <motion.h2
                className="display-4 fw-bold mb-5"
                style={{
                  lineHeight: 1.3,
                  textShadow:
                    "0 4px 20px rgba(0,0,0,0.5), 0 2px 10px rgba(255,255,255,0.1)",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {ctaText}
              </motion.h2>

              <motion.p
                className="lead mb-5"
                style={{
                  fontSize: "1.4rem",
                  lineHeight: 1.7,
                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  maxWidth: "900px",
                  margin: "0 auto",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: "400",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Ready to transform your digital presence? Let's create something
                amazing together. Get your personalized quote today and take the
                first step towards your dream website.
              </motion.p>

              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="d-flex justify-content-center align-items-center gap-5 mb-5 flex-wrap"
                style={{ marginBottom: "3rem" }}
              >
                <motion.div
                  className="d-flex align-items-center"
                  style={{ color: "rgba(255, 255, 255, 0.9)" }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FaStar
                      className="text-warning me-2"
                      size={18}
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(255, 193, 7, 0.5))",
                      }}
                    />
                  </motion.div>
                  <span style={{ fontWeight: "500", fontSize: "1rem" }}>
                    5.0 Rating
                  </span>
                </motion.div>
                <motion.div
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  150+ Happy Clients
                </motion.div>
                <motion.div
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  24h Response
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={ctaButton.variant}
                  size="lg"
                  onClick={ctaButton.onClick}
                  className="px-6 py-4 fw-bold cta-button"
                  style={{
                    fontSize: "1.3rem",
                    borderRadius: "60px",
                    border: "2px solid #1F1160",
                    background:
                      "linear-gradient(135deg, #1F1160 0%, #2A1A70 100%)",
                    backdropFilter: "blur(15px)",
                    boxShadow:
                      "0 12px 40px rgba(31, 17, 96, 0.4), 0 4px 20px rgba(0,0,0,0.2)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    minWidth: "280px",
                    minHeight: "44px",
                    touchAction: "manipulation",
                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                    color: "#ffffff",
                    fontWeight: "600",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "600",
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ display: "inline-block" }}
                    >
                      <FaRocket className="me-3" size={20} />
                    </motion.div>
                    {ctaButton.text}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ display: "inline-block" }}
                    >
                      <FaArrowRight className="ms-3" size={18} />
                    </motion.div>
                  </span>

                  {/* Enhanced Button Effects */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transition: "left 1s ease",
                      zIndex: 1,
                    }}
                    className="button-glow"
                  />

                  {/* Pulse Effect */}
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "0",
                      height: "0",
                      background: "rgba(255,255,255,0.15)",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "all 0.6s ease",
                      zIndex: 0,
                    }}
                    className="button-pulse"
                  />
                </Button>
              </motion.div>

              {/* Enhanced Secondary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-5"
                style={{ marginTop: "2.5rem" }}
              >
                <motion.p
                  className="small mb-0"
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "1rem",
                    fontWeight: "400",
                    letterSpacing: "0.5px",
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  🔒 No commitment required • Free consultation • Quick response
                </motion.p>
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
        
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(0) translateZ(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(3) translateZ(0); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-8px) translateZ(0); }
        }
        
        .cta-section .cta-button:hover {
          background: linear-gradient(135deg, #2A1A70 0%, #3D2580 100%) !important;
          border-color: #2A1A70 !important;
          box-shadow: 0 16px 50px rgba(31, 17, 96, 0.6), 0 8px 30px rgba(0,0,0,0.3) !important;
          transform: translateY(-5px);
          color: #ffffff !important;
        }
        
        .cta-section .cta-button:hover .button-glow {
          left: 100%;
        }
        
        .cta-section .cta-button:hover .button-pulse {
          width: 80px;
          height: 80px;
          animation: pulse 0.6s ease-out;
        }
        
        .cta-section .cta-button:focus {
          outline: 3px solid rgba(31, 17, 96, 0.8);
          outline-offset: 3px;
          color: #ffffff !important;
        }
        
        .cta-section .cta-button:focus-visible {
          outline: 3px solid rgba(31, 17, 96, 1);
          outline-offset: 3px;
          color: #ffffff !important;
        }
        
        .text-white-75 {
          color: rgba(255, 255, 255, 0.85) !important;
        }
        
        /* Enhanced Mobile Responsiveness */
        @media (max-width: 768px) {
          .cta-section {
            min-height: 500px !important;
            padding: 60px 0 !important;
          }
          
          .cta-section .display-4 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          
          .cta-section .lead {
            font-size: 1.1rem !important;
            line-height: 1.6 !important;
          }
          
          .cta-section .cta-button {
            font-size: 1.1rem !important;
            padding: 1rem 2.5rem !important;
            min-width: 250px !important;
          }
          
          .cta-section .d-flex.gap-5 {
            gap: 2rem !important;
          }
          
          /* Hide some floating elements on mobile for performance */
          .cta-section .position-absolute:nth-child(6),
          .cta-section .position-absolute:nth-child(7) {
            display: none;
          }
        }
        
        @media (max-width: 576px) {
          .cta-section {
            min-height: 450px !important;
            padding: 40px 0 !important;
          }
          
          .cta-section .display-4 {
            font-size: 2rem !important;
            margin-bottom: 1.5rem !important;
          }
          
          .cta-section .lead {
            font-size: 1rem !important;
            margin-bottom: 2rem !important;
          }
          
          .cta-section .cta-button {
            font-size: 1rem !important;
            padding: 0.875rem 2rem !important;
            min-width: 220px !important;
          }
          
          .cta-section .d-flex.gap-5 {
            flex-direction: column !important;
            gap: 1rem !important;
            text-align: center !important;
          }
        }
        
        @media (max-width: 480px) {
          .cta-section .display-4 {
            font-size: 1.75rem !important;
          }
          
          .cta-section .cta-button {
            min-width: 200px !important;
            padding: 0.75rem 1.5rem !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .cta-section .cta-button:hover {
            transform: none;
          }
          
          .cta-section .cta-button:active {
            transform: scale(0.98);
          }
          
          /* Ensure minimum touch target size */
          .cta-section .cta-button {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .cta-section * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .cta-section .position-absolute {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
