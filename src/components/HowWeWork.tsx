import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  FaComments,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

interface WorkStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  details: string[];
}

interface HowWeWorkProps {
  onStartProject?: () => void;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({
  onStartProject = () => console.log("Start Your Project Today clicked"),
}) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const workSteps: WorkStep[] = [
    {
      id: 1,
      title: "Consultation",
      subtitle: "Understand Requirements",
      description:
        "We start by deeply understanding your business goals, target audience, and specific requirements through detailed consultation.",
      icon: <FaComments size={40} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      details: [
        "Initial project discussion",
        "Requirements gathering",
        "Timeline and budget planning",
        "Goal setting and expectations",
      ],
    },
    {
      id: 2,
      title: "Design",
      subtitle: "Wireframes & Mockups",
      description:
        "Our design team creates wireframes and detailed mockups that align with your brand identity and user experience goals.",
      icon: <FaPencilRuler size={40} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      details: [
        "Wireframe creation",
        "UI/UX design mockups",
        "Brand integration",
        "Client feedback and revisions",
      ],
    },
    {
      id: 3,
      title: "Development",
      subtitle: "Build & Customize Templates",
      description:
        "We build and customize templates using modern technologies, ensuring responsive design and optimal performance.",
      icon: <FaCode size={40} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      details: [
        "Template customization",
        "Responsive development",
        "Feature implementation",
        "Google Sheets integration",
      ],
    },
    {
      id: 4,
      title: "Testing & Launch",
      subtitle: "QA + Deployment",
      description:
        "Comprehensive testing across devices and browsers, followed by smooth deployment to your hosting platform.",
      icon: <FaRocket size={40} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      details: [
        "Cross-browser testing",
        "Mobile responsiveness check",
        "Performance optimization",
        "Live deployment",
      ],
    },
    {
      id: 5,
      title: "Support & Updates",
      subtitle: "Ongoing Google Sheet Live Updates",
      description:
        "Continuous support with real-time Google Sheets integration for easy content updates without technical knowledge.",
      icon: <FaHeadset size={40} />,
      gradient: "linear-gradient(135deg, #0F0620 0%, #1B0D5B 100%)",
      details: [
        "Google Sheets setup",
        "Real-time data sync",
        "Ongoing technical support",
        "Regular maintenance",
      ],
    },
  ];

  return (
    <section
      className="py-5 how-we-work-section"
      style={{ position: "relative", overflow: "hidden" }}
      ref={sectionRef}
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

      {/* Floating background shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          left: "5%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute"
        style={{
          bottom: "15%",
          right: "10%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 242, 254, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="position-relative">
        <Row className="text-center mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
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
              >
                How We Work
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our proven 5-step process ensures your project is delivered on
                time, within budget, and exceeds expectations
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        {/* Process Stats */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={3} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-3 rounded-3 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(5px)",
              }}
            >
              <FaClock className="text-primary mb-2" size={24} />
              <h4 className="fw-bold text-primary mb-0">5 Steps</h4>
              <small className="text-muted">Proven Process</small>
            </motion.div>
          </Col>
          <Col md={3} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-3 rounded-3 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(5px)",
              }}
            >
              <FaUsers className="text-success mb-2" size={24} />
              <h4 className="fw-bold text-success mb-0">3 Experts</h4>
              <small className="text-muted">Dedicated Team</small>
            </motion.div>
          </Col>
          <Col md={3} className="mb-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-3 rounded-3 shadow-sm"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(5px)",
              }}
            >
              <FaLightbulb className="text-warning mb-2" size={24} />
              <h4 className="fw-bold text-warning mb-0">100%</h4>
              <small className="text-muted">Custom Solutions</small>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Step Cards */}
        <Row className="mb-5">
          {workSteps.map((step, index) => (
            <Col lg={12} className="mb-4" key={step.id}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredStep(step.id)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className="border-0 shadow-lg overflow-hidden h-100 step-card"
                    style={{
                      minHeight: "200px",
                      transition:
                        "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      boxShadow:
                        hoveredStep === step.id
                          ? `0 25px 50px ${
                              step.gradient.includes("#667eea")
                                ? "#667eea20"
                                : "#4facfe20"
                            }`
                          : "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Row className="g-0 h-100">
                      {/* Enhanced Step Number & Icon */}
                      <Col
                        md={3}
                        className="d-flex align-items-center justify-content-center position-relative"
                        style={{
                          background: step.gradient,
                          overflow: "hidden",
                        }}
                      >
                        {/* Animated background pattern */}
                        <motion.div
                          className="position-absolute"
                          style={{
                            top: "-50%",
                            right: "-50%",
                            width: "200%",
                            height: "200%",
                            background:
                              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                            zIndex: 1,
                          }}
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <div
                          className="text-center text-white p-4 position-relative"
                          style={{ zIndex: 2 }}
                        >
                          <motion.div
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "80px",
                              height: "80px",
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                              borderRadius: "50%",
                              backdropFilter: "blur(10px)",
                              border: "2px solid rgba(255, 255, 255, 0.3)",
                            }}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {step.icon}
                          </motion.div>
                          <motion.div
                            className="fw-bold h2 mb-0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.3,
                            }}
                          >
                            Step {step.id}
                          </motion.div>
                        </div>
                      </Col>

                      {/* Enhanced Content */}
                      <Col md={9}>
                        <Card.Body className="p-4 h-100 d-flex flex-column">
                          <div>
                            <motion.h3
                              className="fw-bold text-primary mb-2"
                              initial={{ opacity: 0, y: 20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 20 }
                              }
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1 + 0.4,
                              }}
                            >
                              {step.title}
                            </motion.h3>
                            <motion.h5
                              className="text-muted mb-3"
                              initial={{ opacity: 0, y: 20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 20 }
                              }
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1 + 0.5,
                              }}
                            >
                              {step.subtitle}
                            </motion.h5>
                            <motion.p
                              className="mb-4"
                              style={{ lineHeight: "1.6" }}
                              initial={{ opacity: 0, y: 20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: 20 }
                              }
                              transition={{
                                duration: 0.5,
                                delay: index * 0.1 + 0.6,
                              }}
                            >
                              {step.description}
                            </motion.p>
                          </div>

                          <motion.div
                            className="mt-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.7,
                            }}
                          >
                            <h6 className="fw-bold mb-2">What we deliver:</h6>
                            <Row>
                              {step.details.map((detail, detailIndex) => (
                                <Col md={6} key={detailIndex} className="mb-2">
                                  <motion.div
                                    className="d-flex align-items-center"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={
                                      isInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -20 }
                                    }
                                    transition={{
                                      duration: 0.4,
                                      delay:
                                        index * 0.1 + 0.8 + detailIndex * 0.1,
                                    }}
                                  >
                                    <motion.div
                                      className="me-2 d-flex align-items-center justify-content-center"
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        background: step.gradient,
                                        borderRadius: "50%",
                                        color: "white",
                                        fontSize: "10px",
                                      }}
                                      whileHover={{ scale: 1.2, rotate: 360 }}
                                      transition={{ duration: 0.6 }}
                                    >
                                      <FaCheckCircle />
                                    </motion.div>
                                    <small className="text-muted">
                                      {detail}
                                    </small>
                                  </motion.div>
                                </Col>
                              ))}
                            </Row>
                          </motion.div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Enhanced Visual Timeline */}
        <Row className="mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h3
                className="text-center fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4facfe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Project Timeline
              </motion.h3>
              <div className="position-relative">
                {/* Enhanced Timeline Line */}
                <motion.div
                  className="position-absolute top-50 start-0 w-100"
                  style={{
                    height: "6px",
                    background:
                      "linear-gradient(90deg, #667eea 0%, #f093fb 25%, #4facfe 50%, #fa709a 75%, #a8edea 100%)",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    borderRadius: "3px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />

                <Row className="position-relative" style={{ zIndex: 2 }}>
                  {workSteps.map((step, index) => (
                    <Col key={step.id} className="text-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.15, y: -5 }}
                      >
                        <motion.div
                          className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: "70px",
                            height: "70px",
                            background: step.gradient,
                            borderRadius: "50%",
                            color: "white",
                            border: "4px solid white",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                            cursor: "pointer",
                          }}
                          whileHover={{
                            boxShadow: `0 12px 35px ${
                              step.gradient.includes("#667eea")
                                ? "#667eea40"
                                : "#4facfe40"
                            }`,
                          }}
                        >
                          <span className="fw-bold fs-5">{step.id}</span>
                        </motion.div>
                        <motion.h6
                          className="fw-bold text-primary mb-1"
                          whileHover={{ color: "#4facfe" }}
                        >
                          {step.title}
                        </motion.h6>
                        <small className="text-muted">{step.subtitle}</small>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced CTA Section */}
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="border-0 text-white text-center cta-card"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #4facfe 100%)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="position-absolute"
                    style={{
                      top: "-50%",
                      right: "-50%",
                      width: "200%",
                      height: "200%",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      zIndex: 1,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <Card.Body
                    className="p-5 position-relative"
                    style={{ zIndex: 2 }}
                  >
                    <motion.h3
                      className="fw-bold mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      Ready to Get Started?
                    </motion.h3>
                    <motion.p
                      className="lead mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      Let's discuss your project and create something amazing
                      together. Our team is ready to bring your vision to life.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="light"
                          size="lg"
                          onClick={onStartProject}
                          className="px-5 py-3 d-flex align-items-center justify-content-center gap-2 mx-auto"
                          style={{
                            fontSize: "1.1rem",
                            maxWidth: "300px",
                            borderRadius: "25px",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                          }}
                        >
                          Start Your Project Today
                          <FaArrowRight size={16} />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .step-card {
          will-change: transform, box-shadow;
        }
        
        .step-card:hover {
          transform: translateY(-10px) !important;
        }
        
        .cta-card {
          will-change: transform, box-shadow;
        }
        
        .cta-card:hover {
          transform: translateY(-5px) !important;
        }
        
        @media (max-width: 768px) {
          .step-card {
            transform: translateY(0) !important;
          }
          .step-card:hover {
            transform: translateY(-5px) !important;
          }
          .cta-card {
            transform: translateY(0) !important;
          }
          .cta-card:hover {
            transform: translateY(-3px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWork;
