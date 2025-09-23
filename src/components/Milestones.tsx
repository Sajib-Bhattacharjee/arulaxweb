import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  FaCode,
  FaChartLine,
  FaSmile,
  FaCoffee,
  FaRocket,
  FaTrophy,
  FaHeart,
} from "react-icons/fa";

interface Milestone {
  icon: React.ReactNode;
  count: number;
  label: string;
  suffix?: string;
  color: string;
  gradient: string;
  borderGradient: string;
  features?: string[];
}

interface MilestonesProps {
  milestones?: Milestone[];
}

const Milestones: React.FC<MilestonesProps> = ({ milestones }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const defaultMilestones: Milestone[] = [
    {
      icon: <FaCode size={40} />,
      count: 150,
      label: "Templates Made",
      suffix: "+",
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
      borderGradient: "linear-gradient(135deg, #4CAF50, #45a049, #4CAF50)",
      features: ["Modern Design", "Responsive", "SEO Ready"],
    },
    {
      icon: <FaChartLine size={40} />,
      count: 87,
      label: "Projects Completed",
      suffix: "+",
      color: "#2196F3",
      gradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
      borderGradient: "linear-gradient(135deg, #2196F3, #1976D2, #2196F3)",
      features: ["Custom Solutions", "On-Time Delivery", "Quality Assured"],
    },
    {
      icon: <FaSmile size={40} />,
      count: 95,
      label: "Happy Clients",
      suffix: "+",
      color: "#FF9800",
      gradient: "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)",
      borderGradient: "linear-gradient(135deg, #FF9800, #F57C00, #FF9800)",
      features: [
        "100% Satisfaction",
        "Ongoing Support",
        "Long-term Partnership",
      ],
    },
    {
      icon: <FaCoffee size={40} />,
      count: 2847,
      label: "Cups of Coffee",
      suffix: "+",
      color: "#795548",
      gradient: "linear-gradient(135deg, #795548 0%, #5D4037 100%)",
      borderGradient: "linear-gradient(135deg, #795548, #5D4037, #795548)",
      features: ["Late Nights", "Early Mornings", "Fuel for Innovation"],
    },
  ];

  const stats = milestones || defaultMilestones;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="py-5 milestones-section"
      ref={ref}
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
            "linear-gradient(135deg, rgba(76, 175, 80, 0.03) 0%, rgba(33, 150, 243, 0.03) 50%, rgba(255, 152, 0, 0.03) 100%)",
          zIndex: -2,
        }}
      />

      {/* Animated Background Shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "20%",
          right: "10%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(76, 175, 80, 0.08), rgba(69, 160, 73, 0.08))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -30, 0],
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
          bottom: "25%",
          left: "15%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(33, 150, 243, 0.08), rgba(25, 118, 210, 0.08))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 25, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
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
                    "linear-gradient(135deg, #4CAF50 0%, #2196F3 50%, #FF9800 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Milestones & Achievements
              </motion.h2>

              {/* Achievement Stats */}
              <Row className="justify-content-center mb-4">
                <Col md={3} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <FaTrophy className="text-warning mb-2" size={24} />
                    <h5 className="fw-bold text-warning mb-0">Excellence</h5>
                    <small className="text-muted">Award-Winning</small>
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
                    <FaRocket className="text-success mb-2" size={24} />
                    <h5 className="fw-bold text-success mb-0">Growth</h5>
                    <small className="text-muted">Rapid Expansion</small>
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
                    <h5 className="fw-bold text-danger mb-0">Passion</h5>
                    <small className="text-muted">Driven by Love</small>
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
                Numbers that showcase our journey and commitment to excellence
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {stats.map((stat, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
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
                {/* Gradient Border Container */}
                <div
                  className="position-relative"
                  style={{
                    padding: "3px",
                    background: stat.borderGradient,
                    borderRadius: "15px",
                  }}
                >
                  <div
                    className="p-4 rounded-4 shadow-lg h-100 d-flex flex-column justify-content-center position-relative overflow-hidden"
                    style={{
                      minHeight: "280px",
                      background:
                        hoveredIndex === index ? stat.gradient : "white",
                      boxShadow:
                        hoveredIndex === index
                          ? `0 25px 50px ${stat.color}20`
                          : "0 8px 30px rgba(0,0,0,0.08)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      borderRadius: "12px",
                    }}
                  >
                    {/* Background Pattern */}
                    <div
                      className="position-absolute"
                      style={{
                        top: "-20px",
                        right: "-20px",
                        width: "80px",
                        height: "80px",
                        background:
                          hoveredIndex === index
                            ? "rgba(255,255,255,0.1)"
                            : `${stat.color}10`,
                        borderRadius: "50%",
                        zIndex: -1,
                      }}
                    />

                    <motion.div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        background:
                          hoveredIndex === index
                            ? "rgba(255,255,255,0.2)"
                            : stat.gradient,
                        borderRadius: "50%",
                        backdropFilter:
                          hoveredIndex === index ? "blur(10px)" : "none",
                        border:
                          hoveredIndex === index
                            ? "2px solid rgba(255,255,255,0.3)"
                            : "none",
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
                        {stat.icon}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <AnimatedCounter
                        target={stat.count}
                        suffix={stat.suffix}
                        isInView={isInView}
                        delay={index * 200}
                        color={hoveredIndex === index ? "white" : stat.color}
                      />
                    </motion.div>

                    <motion.p
                      className="fw-bold mb-3 mt-2"
                      style={{
                        fontSize: "1.1rem",
                        color: hoveredIndex === index ? "white" : "#6c757d",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {stat.label}
                    </motion.p>

                    {/* Features Reveal on Hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-2"
                    >
                      {stat.features &&
                        stat.features.map((feature, featureIndex) => (
                          <motion.span
                            key={featureIndex}
                            className="badge me-1 mb-1"
                            style={{
                              background: "rgba(255,255,255,0.2)",
                              color: "white",
                              border: "1px solid rgba(255,255,255,0.3)",
                              backdropFilter: "blur(10px)",
                              fontSize: "0.7rem",
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
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Enhanced Additional Info */}
        <Row className="mt-5">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}
            >
              <div
                className="p-5 rounded-4 shadow-lg position-relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(33, 150, 243, 0.05) 50%, rgba(255, 152, 0, 0.05) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="position-absolute"
                  style={{
                    top: "-30px",
                    left: "-30px",
                    width: "80px",
                    height: "80px",
                    background:
                      "linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(69, 160, 73, 0.1))",
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
                    bottom: "-20px",
                    right: "-20px",
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(25, 118, 210, 0.1))",
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

                <motion.h4
                  className="fw-bold mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #4CAF50 0%, #2196F3 50%, #FF9800 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: "1.8rem",
                  }}
                >
                  Growing Every Day
                </motion.h4>

                <motion.p
                  className="text-muted mb-0"
                  style={{
                    lineHeight: "1.6",
                    fontSize: "1.1rem",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  These numbers represent more than just statistics – they
                  represent relationships built, problems solved, and dreams
                  realized. Every project we complete adds to our experience and
                  helps us serve you better.
                </motion.p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Enhanced Styles */}
      <style>{`
        .milestones-section {
          position: relative;
        }
        
        .milestones-section .motion-div {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, background;
        }
        
        .milestones-section .motion-div:hover {
          transform: translateY(-15px) scale(1.02);
        }
        
        .milestones-section .motion-div > div {
          transition: all 0.3s ease;
          will-change: transform, background;
        }
        
        .milestones-section .motion-div > div:hover {
          transform: scale(1.1);
        }
        
        /* Enhanced hover effects */
        .milestones-section .badge {
          transition: all 0.3s ease;
          will-change: transform, opacity;
        }
        
        /* Focus states for accessibility */
        .milestones-section .motion-div:focus {
          outline: 2px solid #4CAF50;
          outline-offset: 2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .milestones-section .motion-div {
            margin-bottom: 2rem;
          }
          
          .milestones-section .motion-div > div {
            width: 60px !important;
            height: 60px !important;
          }
          
          .display-4 {
            font-size: 2rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .milestones-section .motion-div,
          .milestones-section .motion-div > div,
          .milestones-section .badge {
            transition: none;
          }
          
          .milestones-section .motion-div:hover {
            transform: none;
          }
          
          .milestones-section .motion-div > div:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

// Animated Counter Component
interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  isInView: boolean;
  delay: number;
  color: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = "",
  isInView,
  delay,
  color,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 steps for smooth animation
        const stepValue = target / steps;
        let currentStep = 0;

        const counter = setInterval(() => {
          currentStep++;
          const currentCount = Math.min(
            Math.round(stepValue * currentStep),
            target
          );
          setCount(currentCount);

          if (currentStep >= steps) {
            clearInterval(counter);
            setCount(target);
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, target, delay]);

  return (
    <h2
      className="fw-bold mb-0"
      style={{
        fontSize: "2.5rem",
        color: color,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
};

export default Milestones;
