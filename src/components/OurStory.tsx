import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaCode,
  FaUsers,
  FaRocket,
  FaHeart,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const OurStory: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const timelineItems = [
    {
      year: "2025",
      title: "Founded AruLax Web",
      description: "Started with a vision to create exceptional web solutions",
      icon: <FaCalendarAlt size={24} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#667eea",
      features: ["Vision-Driven", "Innovation-First", "Client-Focused"],
    },
    {
      year: "150+",
      title: "Templates Created",
      description: "Built a comprehensive library of modern web templates",
      icon: <FaCode size={24} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#4facfe",
      features: ["Modern Design", "Responsive Layout", "SEO Optimized"],
    },
    {
      year: "3",
      title: "Core Team Members",
      description: "Assembled a dedicated team of web development experts",
      icon: <FaUsers size={24} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "#f093fb",
      features: ["Expert Skills", "Collaborative", "Passionate"],
    },
  ];

  return (
    <section
      className="py-5 our-story-section"
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

      {/* Animated Background Shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          right: "5%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -20, 0],
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
          left: "8%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 242, 254, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 15, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
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
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Story
              </motion.h2>

              {/* Story Stats */}
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
                    <h4 className="fw-bold text-primary mb-0">Innovation</h4>
                    <small className="text-muted">Driven by Excellence</small>
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
                    <FaHeart className="text-danger mb-2" size={24} />
                    <h4 className="fw-bold text-danger mb-0">Passion</h4>
                    <small className="text-muted">For Great Design</small>
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
                    <FaStar className="text-warning mb-2" size={24} />
                    <h4 className="fw-bold text-warning mb-0">Quality</h4>
                    <small className="text-muted">Above All Else</small>
                  </motion.div>
                </Col>
              </Row>

              <motion.p
                className="lead text-muted mb-5"
                style={{ fontSize: "1.2rem" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                The journey that led us to become your trusted web development
                partner
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="p-5 rounded-4 shadow-lg position-relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 50%, rgba(240, 147, 251, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="position-absolute"
                  style={{
                    top: "-50px",
                    right: "-50px",
                    width: "100px",
                    height: "100px",
                    background:
                      "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
                    borderRadius: "50%",
                    zIndex: -1,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="position-absolute"
                  style={{
                    bottom: "-30px",
                    left: "-30px",
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))",
                    borderRadius: "50%",
                    zIndex: -1,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.p
                  className="lead mb-4"
                  style={{
                    lineHeight: "1.8",
                    fontSize: "1.3rem",
                    fontWeight: "500",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <strong
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    AruLax Web
                  </strong>{" "}
                  was born from a simple yet powerful belief: every business
                  deserves a stunning, functional website that truly represents
                  their brand and drives results.
                </motion.p>

                <motion.p
                  className="mb-4"
                  style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  We noticed too many businesses struggling with outdated
                  websites, complex development processes, and solutions that
                  didn't match their vision. That's when we decided to bridge
                  this gap by combining cutting-edge technology with
                  personalized service.
                </motion.p>

                <motion.p
                  className="mb-4"
                  style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Today, we're not just a web development agency – we're your
                  digital transformation partners, committed to turning your
                  ideas into powerful online experiences that engage customers
                  and grow your business.
                </motion.p>

                {/* Call to Action */}
                <motion.div
                  className="text-center mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    className="btn btn-primary btn-lg px-4 py-2 d-flex align-items-center gap-2 mx-auto"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      borderRadius: "25px",
                      boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 12px 35px rgba(102, 126, 234, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More About Us
                    <FaArrowRight size={16} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Timeline */}
        <Row>
          <Col>
            <motion.h3
              className="text-center mb-5 fw-bold"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "2.5rem",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Journey So Far
            </motion.h3>
          </Col>
        </Row>

        <Row>
          {timelineItems.map((item, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center h-100"
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div
                  className="timeline-item h-100 p-4 rounded-4 position-relative overflow-hidden"
                  style={{
                    background:
                      hoveredIndex === index ? item.gradient : "white",
                    boxShadow:
                      hoveredIndex === index
                        ? `0 25px 50px ${item.color}20`
                        : "0 8px 30px rgba(0,0,0,0.08)",
                    border: `2px solid ${
                      hoveredIndex === index
                        ? "rgba(255,255,255,0.3)"
                        : "transparent"
                    }`,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                >
                  {/* Background Pattern */}
                  <div
                    className="position-absolute"
                    style={{
                      top: "-20px",
                      right: "-20px",
                      width: "60px",
                      height: "60px",
                      background:
                        hoveredIndex === index
                          ? "rgba(255,255,255,0.1)"
                          : `${item.color}10`,
                      borderRadius: "50%",
                      zIndex: -1,
                    }}
                  />

                  <motion.div
                    className="timeline-icon mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background:
                        hoveredIndex === index
                          ? "rgba(255,255,255,0.2)"
                          : item.gradient,
                      borderRadius: "50%",
                      backdropFilter:
                        hoveredIndex === index ? "blur(10px)" : "none",
                      border:
                        hoveredIndex === index
                          ? "2px solid rgba(255,255,255,0.3)"
                          : "3px solid transparent",
                      transition: "all 0.3s ease",
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    <div
                      style={{
                        color: hoveredIndex === index ? "white" : "white",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.icon}
                    </div>
                  </motion.div>

                  <motion.h4
                    className="fw-bold mb-2"
                    style={{
                      color: hoveredIndex === index ? "white" : item.color,
                      fontSize: "2rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.year}
                  </motion.h4>

                  <motion.h5
                    className="fw-bold mb-3"
                    style={{
                      color: hoveredIndex === index ? "white" : "#2c3e50",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.title}
                  </motion.h5>

                  <motion.p
                    className="mb-3"
                    style={{
                      color:
                        hoveredIndex === index
                          ? "rgba(255,255,255,0.9)"
                          : "#6c757d",
                      transition: "color 0.3s ease",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.description}
                  </motion.p>

                  {/* Features Reveal on Hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-3"
                  >
                    {item.features.map((feature, featureIndex) => (
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
                          opacity: hoveredIndex === index ? 1 : 0,
                          scale: hoveredIndex === index ? 1 : 0.8,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1,
                        }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Enhanced Styles */}
      <style>{`
        .our-story-section {
          position: relative;
        }
        
        .timeline-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow;
        }
        
        .timeline-item:hover {
          transform: translateY(-15px) scale(1.02);
        }
        
        .timeline-icon {
          transition: all 0.3s ease;
          will-change: transform, background;
        }
        
        .timeline-icon:hover {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Enhanced button hover effects */
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }
        
        .btn:active {
          transform: translateY(0);
        }
        
        /* Focus states for accessibility */
        .btn:focus,
        .timeline-item:focus {
          outline: 2px solid #667eea;
          outline-offset: 2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .timeline-item {
            margin-bottom: 2rem;
          }
          
          .timeline-icon {
            width: 60px !important;
            height: 60px !important;
          }
          
          .display-4 {
            font-size: 2rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .timeline-item,
          .timeline-icon,
          .btn {
            transition: none;
          }
          
          .timeline-item:hover {
            transform: none;
          }
          
          .timeline-icon:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default OurStory;
