import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRocket, FaUsers, FaLightbulb, FaHeart } from "react-icons/fa";

interface AboutMiniProps {
  aboutIntro: string;
  aboutCTA: {
    text: string;
    onClick: () => void;
  };
}

const AboutMini: React.FC<AboutMiniProps> = ({ aboutIntro, aboutCTA }) => {
  const features = [
    {
      icon: <FaRocket size={24} />,
      title: "Innovation",
      color: "#1e3c72",
    },
    {
      icon: <FaUsers size={24} />,
      title: "Collaboration",
      color: "#2a5298",
    },
    {
      icon: <FaLightbulb size={24} />,
      title: "Creativity",
      color: "#00b09b",
    },
    {
      icon: <FaHeart size={24} />,
      title: "Passion",
      color: "#96c93d",
    },
  ];

  return (
    <section
      className="py-5 about-mini-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Dynamic Background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background:
            "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",
          zIndex: -2,
        }}
      />

      {/* Animated Background Elements */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          right: "5%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(30, 60, 114, 0.05), rgba(42, 82, 152, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
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
          left: "8%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(0, 176, 155, 0.05), rgba(150, 201, 61, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
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
                    "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #00b09b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                About AruLax Web
              </motion.h2>

              <motion.p
                className="lead mb-5"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.7,
                  color: "#6c757d",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {aboutIntro}
              </motion.p>

              {/* Feature Icons */}
              <Row className="justify-content-center mb-5">
                {features.map((feature, index) => (
                  <Col xs={6} md={3} key={index} className="mb-3">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      className="text-center"
                    >
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-2"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}25)`,
                          color: feature.color,
                          border: `2px solid ${feature.color}20`,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {feature.icon}
                      </div>
                      <h6
                        className="fw-bold mb-0"
                        style={{ color: feature.color }}
                      >
                        {feature.title}
                      </h6>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={aboutCTA.onClick}
                  className="px-5 py-3 fw-bold"
                  style={{
                    fontSize: "1.1rem",
                    background:
                      "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                    border: "none",
                    borderRadius: "50px",
                    boxShadow: "0 8px 25px rgba(30, 60, 114, 0.3)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.boxShadow =
                      "0 12px 35px rgba(30, 60, 114, 0.4)";
                    target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.boxShadow =
                      "0 8px 25px rgba(30, 60, 114, 0.3)";
                    target.style.transform = "translateY(0px)";
                  }}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>
                    {aboutCTA.text}
                  </span>
                  {/* Button shine effect */}
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transition: "left 0.6s ease",
                      zIndex: 0,
                    }}
                    className="button-shine"
                  />
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .about-mini-section .btn:hover .button-shine {
          left: 100%;
        }
        
        .about-mini-section .btn:focus {
          outline: 2px solid #1e3c72;
          outline-offset: 2px;
        }
        
        @media (max-width: 768px) {
          .about-mini-section .display-5 {
            font-size: 2rem !important;
          }
          
          .about-mini-section .lead {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMini;
