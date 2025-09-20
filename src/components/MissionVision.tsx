import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaRocket,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const MissionVision: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const missionData = {
    mission: {
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea",
      features: ["Client-Centric", "Quality-Focused", "Innovation-Driven"],
    },
    vision: {
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe",
      features: ["Global Reach", "Trusted Partner", "Future-Ready"],
    },
    values: {
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f093fb",
      features: ["Excellence", "Integrity", "Collaboration"],
    },
  };

  return (
    <section
      className="py-5 mission-vision-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",
      }}
    >
      {/* Dynamic Background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(79, 172, 254, 0.03) 50%, rgba(240, 147, 251, 0.03) 100%)",
          zIndex: -2,
        }}
      />

      {/* Animated Background Shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "15%",
          left: "10%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="position-absolute"
        style={{
          bottom: "20%",
          right: "15%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(79, 172, 254, 0.08), rgba(0, 242, 254, 0.08))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="display-4 fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4facfe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Mission & Vision
              </motion.h2>

              {/* Mission Vision Stats */}
              <Row className="justify-content-center mb-4">
                <Col md={3} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <FaRocket className="text-primary mb-2" size={24} />
                    <h5 className="fw-bold text-primary mb-0">Mission</h5>
                    <small className="text-muted">Our Purpose</small>
                  </motion.div>
                </Col>
                <Col md={3} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <FaStar className="text-info mb-2" size={24} />
                    <h5 className="fw-bold text-info mb-0">Vision</h5>
                    <small className="text-muted">Our Aspiration</small>
                  </motion.div>
                </Col>
                <Col md={3} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <FaHeart className="text-danger mb-2" size={24} />
                    <h5 className="fw-bold text-danger mb-0">Values</h5>
                    <small className="text-muted">Our Principles</small>
                  </motion.div>
                </Col>
              </Row>

              <motion.p
                className="lead text-muted"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Our purpose and aspirations that drive everything we do
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
              {/* Mission */}
              <Col lg={6} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-100"
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredCard(0)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card
                    className="h-100 border-0 position-relative overflow-hidden"
                    style={{
                      background:
                        hoveredCard === 0
                          ? missionData.mission.gradient
                          : "white",
                      boxShadow:
                        hoveredCard === 0
                          ? `0 25px 50px ${missionData.mission.color}20`
                          : "0 8px 30px rgba(0,0,0,0.08)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                    }}
                  >
                    {/* Background Pattern */}
                    <div
                      className="position-absolute"
                      style={{
                        top: "-30px",
                        right: "-30px",
                        width: "100px",
                        height: "100px",
                        background:
                          hoveredCard === 0
                            ? "rgba(255,255,255,0.1)"
                            : `${missionData.mission.color}10`,
                        borderRadius: "50%",
                        zIndex: -1,
                      }}
                    />

                    <Card.Body className="p-4 text-center">
                      <div className="mb-4">
                        <motion.div
                          className="mx-auto d-flex align-items-center justify-content-center"
                          style={{
                            width: "80px",
                            height: "80px",
                            background:
                              hoveredCard === 0
                                ? "rgba(255,255,255,0.2)"
                                : missionData.mission.gradient,
                            borderRadius: "50%",
                            backdropFilter:
                              hoveredCard === 0 ? "blur(10px)" : "none",
                            border:
                              hoveredCard === 0
                                ? "2px solid rgba(255,255,255,0.3)"
                                : "none",
                            transition: "all 0.3s ease",
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                          }}
                        >
                          <FaBullseye
                            style={{
                              color: hoveredCard === 0 ? "white" : "white",
                              transition: "color 0.3s ease",
                            }}
                            size={32}
                          />
                        </motion.div>
                      </div>

                      <motion.h3
                        className="fw-bold mb-4"
                        style={{
                          color:
                            hoveredCard === 0
                              ? "white"
                              : missionData.mission.color,
                          transition: "color 0.3s ease",
                        }}
                      >
                        Our Mission
                      </motion.h3>

                      <motion.p
                        className="lead mb-4"
                        style={{
                          lineHeight: "1.7",
                          color:
                            hoveredCard === 0
                              ? "rgba(255,255,255,0.9)"
                              : "#6c757d",
                          transition: "color 0.3s ease",
                        }}
                      >
                        Turning client visions into scalable, beautiful web
                        solutions that drive real business growth and create
                        exceptional user experiences.
                      </motion.p>

                      {/* Features Reveal on Hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredCard === 0 ? 1 : 0,
                          height: hoveredCard === 0 ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="mt-3"
                      >
                        {missionData.mission.features.map(
                          (feature, featureIndex) => (
                            <motion.span
                              key={featureIndex}
                              className="badge me-2 mb-2"
                              style={{
                                background: "rgba(255,255,255,0.2)",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.3)",
                                backdropFilter: "blur(10px)",
                                fontSize: "0.75rem",
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                opacity: hoveredCard === 0 ? 1 : 0,
                                scale: hoveredCard === 0 ? 1 : 0.8,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: featureIndex * 0.1,
                              }}
                            >
                              <FaCheckCircle className="me-1" size={10} />
                              {feature}
                            </motion.span>
                          )
                        )}
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>

              {/* Vision */}
              <Col lg={6} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-100"
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  onHoverStart={() => setHoveredCard(1)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card
                    className="h-100 border-0 position-relative overflow-hidden"
                    style={{
                      background:
                        hoveredCard === 1
                          ? missionData.vision.gradient
                          : "white",
                      boxShadow:
                        hoveredCard === 1
                          ? `0 25px 50px ${missionData.vision.color}20`
                          : "0 8px 30px rgba(0,0,0,0.08)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                    }}
                  >
                    {/* Background Pattern */}
                    <div
                      className="position-absolute"
                      style={{
                        top: "-30px",
                        left: "-30px",
                        width: "100px",
                        height: "100px",
                        background:
                          hoveredCard === 1
                            ? "rgba(255,255,255,0.1)"
                            : `${missionData.vision.color}10`,
                        borderRadius: "50%",
                        zIndex: -1,
                      }}
                    />

                    <Card.Body className="p-4 text-center">
                      <div className="mb-4">
                        <motion.div
                          className="mx-auto d-flex align-items-center justify-content-center"
                          style={{
                            width: "80px",
                            height: "80px",
                            background:
                              hoveredCard === 1
                                ? "rgba(255,255,255,0.2)"
                                : missionData.vision.gradient,
                            borderRadius: "50%",
                            backdropFilter:
                              hoveredCard === 1 ? "blur(10px)" : "none",
                            border:
                              hoveredCard === 1
                                ? "2px solid rgba(255,255,255,0.3)"
                                : "none",
                            transition: "all 0.3s ease",
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: -5,
                          }}
                        >
                          <FaEye
                            style={{
                              color: hoveredCard === 1 ? "white" : "white",
                              transition: "color 0.3s ease",
                            }}
                            size={32}
                          />
                        </motion.div>
                      </div>

                      <motion.h3
                        className="fw-bold mb-4"
                        style={{
                          color:
                            hoveredCard === 1
                              ? "white"
                              : missionData.vision.color,
                          transition: "color 0.3s ease",
                        }}
                      >
                        Our Vision
                      </motion.h3>

                      <motion.p
                        className="lead mb-4"
                        style={{
                          lineHeight: "1.7",
                          color:
                            hoveredCard === 1
                              ? "rgba(255,255,255,0.9)"
                              : "#6c757d",
                          transition: "color 0.3s ease",
                        }}
                      >
                        Becoming a trusted global web development agency that
                        empowers businesses worldwide to succeed in the digital
                        landscape.
                      </motion.p>

                      {/* Features Reveal on Hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredCard === 1 ? 1 : 0,
                          height: hoveredCard === 1 ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="mt-3"
                      >
                        {missionData.vision.features.map(
                          (feature, featureIndex) => (
                            <motion.span
                              key={featureIndex}
                              className="badge me-2 mb-2"
                              style={{
                                background: "rgba(255,255,255,0.2)",
                                color: "white",
                                border: "1px solid rgba(255,255,255,0.3)",
                                backdropFilter: "blur(10px)",
                                fontSize: "0.75rem",
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                opacity: hoveredCard === 1 ? 1 : 0,
                                scale: hoveredCard === 1 ? 1 : 0.8,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: featureIndex * 0.1,
                              }}
                            >
                              <FaCheckCircle className="me-1" size={10} />
                              {feature}
                            </motion.span>
                          )
                        )}
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Enhanced Values Section */}
        <Row className="mt-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
              whileHover={{
                y: -10,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredCard(2)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card
                className="border-0 position-relative overflow-hidden"
                style={{
                  background:
                    hoveredCard === 2 ? missionData.values.gradient : "white",
                  boxShadow:
                    hoveredCard === 2
                      ? `0 25px 50px ${missionData.values.color}20`
                      : "0 8px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                }}
              >
                {/* Background Pattern */}
                <div
                  className="position-absolute"
                  style={{
                    top: "-40px",
                    left: "-40px",
                    width: "120px",
                    height: "120px",
                    background:
                      hoveredCard === 2
                        ? "rgba(255,255,255,0.1)"
                        : `${missionData.values.color}10`,
                    borderRadius: "50%",
                    zIndex: -1,
                  }}
                />

                <div
                  className="position-absolute"
                  style={{
                    bottom: "-30px",
                    right: "-30px",
                    width: "80px",
                    height: "80px",
                    background:
                      hoveredCard === 2
                        ? "rgba(255,255,255,0.08)"
                        : `${missionData.values.color}08`,
                    borderRadius: "50%",
                    zIndex: -1,
                  }}
                />

                <Card.Body className="p-5">
                  <div className="mb-4">
                    <motion.div
                      className="mx-auto d-flex align-items-center justify-content-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        background:
                          hoveredCard === 2
                            ? "rgba(255,255,255,0.2)"
                            : missionData.values.gradient,
                        borderRadius: "50%",
                        backdropFilter:
                          hoveredCard === 2 ? "blur(10px)" : "none",
                        border:
                          hoveredCard === 2
                            ? "2px solid rgba(255,255,255,0.3)"
                            : "none",
                        transition: "all 0.3s ease",
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                      }}
                    >
                      <FaHeart
                        style={{
                          color: hoveredCard === 2 ? "white" : "white",
                          transition: "color 0.3s ease",
                        }}
                        size={32}
                      />
                    </motion.div>
                  </div>

                  <motion.h3
                    className="fw-bold mb-4"
                    style={{
                      color:
                        hoveredCard === 2 ? "white" : missionData.values.color,
                      transition: "color 0.3s ease",
                    }}
                  >
                    Our Values
                  </motion.h3>

                  <Row>
                    <Col md={4} className="mb-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <h5
                          className="fw-bold mb-3"
                          style={{
                            color: hoveredCard === 2 ? "white" : "#2c3e50",
                            transition: "color 0.3s ease",
                          }}
                        >
                          <FaCheckCircle className="me-2" size={16} />
                          Quality First
                        </h5>
                        <p
                          className="mb-0"
                          style={{
                            color:
                              hoveredCard === 2
                                ? "rgba(255,255,255,0.9)"
                                : "#6c757d",
                            transition: "color 0.3s ease",
                            lineHeight: "1.6",
                          }}
                        >
                          We never compromise on quality and always deliver
                          excellence.
                        </p>
                      </motion.div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        viewport={{ once: true }}
                      >
                        <h5
                          className="fw-bold mb-3"
                          style={{
                            color: hoveredCard === 2 ? "white" : "#2c3e50",
                            transition: "color 0.3s ease",
                          }}
                        >
                          <FaHeart className="me-2" size={16} />
                          Client-Centric
                        </h5>
                        <p
                          className="mb-0"
                          style={{
                            color:
                              hoveredCard === 2
                                ? "rgba(255,255,255,0.9)"
                                : "#6c757d",
                            transition: "color 0.3s ease",
                            lineHeight: "1.6",
                          }}
                        >
                          Your success is our success. We put clients at the
                          heart of everything.
                        </p>
                      </motion.div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        viewport={{ once: true }}
                      >
                        <h5
                          className="fw-bold mb-3"
                          style={{
                            color: hoveredCard === 2 ? "white" : "#2c3e50",
                            transition: "color 0.3s ease",
                          }}
                        >
                          <FaRocket className="me-2" size={16} />
                          Innovation
                        </h5>
                        <p
                          className="mb-0"
                          style={{
                            color:
                              hoveredCard === 2
                                ? "rgba(255,255,255,0.9)"
                                : "#6c757d",
                            transition: "color 0.3s ease",
                            lineHeight: "1.6",
                          }}
                        >
                          We embrace new technologies and creative solutions for
                          better results.
                        </p>
                      </motion.div>
                    </Col>
                  </Row>

                  {/* Features Reveal on Hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredCard === 2 ? 1 : 0,
                      height: hoveredCard === 2 ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-center"
                  >
                    {missionData.values.features.map(
                      (feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          className="badge me-2 mb-2"
                          style={{
                            background: "rgba(255,255,255,0.2)",
                            color: "white",
                            border: "1px solid rgba(255,255,255,0.3)",
                            backdropFilter: "blur(10px)",
                            fontSize: "0.8rem",
                            padding: "6px 12px",
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: hoveredCard === 2 ? 1 : 0,
                            scale: hoveredCard === 2 ? 1 : 0.8,
                          }}
                          transition={{
                            duration: 0.3,
                            delay: featureIndex * 0.1,
                          }}
                        >
                          <FaStar className="me-1" size={10} />
                          {feature}
                        </motion.span>
                      )
                    )}
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Enhanced Styles */}
      <style>{`
        .mission-vision-section {
          position: relative;
        }
        
        .mission-vision-section .card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, background;
        }
        
        .mission-vision-section .card:hover {
          transform: translateY(-15px) scale(1.02);
        }
        
        .mission-vision-section .motion-div {
          transition: all 0.3s ease;
          will-change: transform, background;
        }
        
        .mission-vision-section .motion-div:hover {
          transform: scale(1.1);
        }
        
        /* Enhanced hover effects */
        .mission-vision-section .badge {
          transition: all 0.3s ease;
          will-change: transform, opacity;
        }
        
        /* Focus states for accessibility */
        .mission-vision-section .card:focus {
          outline: 2px solid #667eea;
          outline-offset: 2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .mission-vision-section .card {
            margin-bottom: 2rem;
          }
          
          .mission-vision-section .motion-div {
            width: 60px !important;
            height: 60px !important;
          }
          
          .display-4 {
            font-size: 2rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .mission-vision-section .card,
          .mission-vision-section .motion-div,
          .mission-vision-section .badge {
            transition: none;
          }
          
          .mission-vision-section .card:hover {
            transform: none;
          }
          
          .mission-vision-section .motion-div:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVision;
