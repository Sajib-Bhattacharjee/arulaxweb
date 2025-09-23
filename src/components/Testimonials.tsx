import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaPlay,
  FaPause,
  FaHeart,
  FaThumbsUp,
  FaAward,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  gradient: string;
  projectType: string;
  result: string;
  duration: string;
  verified?: boolean;
  verifiedDate?: string;
  companySize?: string;
  industry?: string;
}

interface TestimonialsProps {
  testimonialsList: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsList }) => {
  const defaultTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Jennifer Martinez",
      company: "EduTech Solutions",
      role: "CEO",
      content:
        "AruLax Web transformed our educational platform beyond our expectations. Their attention to detail and innovative solutions helped us increase student engagement by 300%. Absolutely phenomenal work!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=13",
      gradient:
        "linear-gradient(135deg, #0F0620 0%, #1B0D5B 50%, #111E2E 100%)",
      projectType: "Educational Platform",
      result: "300% increase in engagement",
      duration: "3 months",
      verified: true,
      verifiedDate: "2024-01-15",
      companySize: "50-200 employees",
      industry: "Education Technology",
    },
    {
      id: "2",
      name: "David Thompson",
      company: "Thompson & Associates",
      role: "Managing Director",
      content:
        "Working with AruLax Web was a game-changer for our business. They delivered a stunning website that not only looks amazing but also drives real results. Our online inquiries increased by 250%.",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=14",
      gradient:
        "linear-gradient(135deg, #512F1A 0%, #124A4C 50%, #1B0E5E 100%)",
      projectType: "Business Website",
      result: "250% more inquiries",
      duration: "2 months",
      verified: true,
      verifiedDate: "2024-02-10",
      companySize: "10-50 employees",
      industry: "Legal Services",
    },
    {
      id: "3",
      name: "Lisa Wang",
      company: "Fashion Forward",
      role: "Founder",
      content:
        "The e-commerce solution they built for us is incredible. The user experience is seamless, and our conversion rates have never been better. Their team understood our vision perfectly.",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=15",
      gradient:
        "linear-gradient(135deg, #520D5A 0%, #0D0518 50%, #500C58 100%)",
      projectType: "E-commerce Store",
      result: "40% higher conversions",
      duration: "4 months",
      verified: true,
      verifiedDate: "2024-03-05",
      companySize: "20-100 employees",
      industry: "Fashion & Retail",
    },
    {
      id: "4",
      name: "Michael Rodriguez",
      company: "Tech Innovations Inc",
      role: "CTO",
      content:
        "AruLax Web delivered an exceptional web application that exceeded all our technical requirements. Their expertise in modern frameworks and performance optimization is outstanding.",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=16",
      gradient:
        "linear-gradient(135deg, #1D0D5F 0%, #1B0D5D 50%, #442719 100%)",
      projectType: "Web Application",
      result: "60% faster load times",
      duration: "5 months",
      verified: true,
      verifiedDate: "2024-01-28",
      companySize: "100-500 employees",
      industry: "Technology",
    },
    {
      id: "5",
      name: "Sarah Johnson",
      company: "Creative Studios",
      role: "Creative Director",
      content:
        "The website AruLax Web created for us perfectly captures our brand identity. The design is stunning, and the functionality is flawless. Highly recommended!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=17",
      gradient:
        "linear-gradient(135deg, #154D56 0%, #570E60 50%, #52301B 100%)",
      projectType: "Brand Website",
      result: "85% brand recognition",
      duration: "2.5 months",
      verified: true,
      verifiedDate: "2024-02-20",
      companySize: "5-20 employees",
      industry: "Creative & Design",
    },
    {
      id: "6",
      name: "Robert Chen",
      company: "HealthTech Solutions",
      role: "Founder",
      content:
        "AruLax Web built us a comprehensive healthcare platform that handles complex data seamlessly. Their attention to security and user experience is remarkable.",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=18",
      gradient:
        "linear-gradient(135deg, #124C4E 0%, #321C18 50%, #130836 100%)",
      projectType: "Healthcare Platform",
      result: "95% user satisfaction",
      duration: "6 months",
      verified: true,
      verifiedDate: "2024-03-12",
      companySize: "200-1000 employees",
      industry: "Healthcare Technology",
    },
  ];

  const testimonials =
    testimonialsList.length > 0 ? testimonialsList : defaultTestimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        style={{ display: "inline-block" }}
        whileHover={{
          scale: 1.2,
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.3 },
        }}
      >
        <FaStar
          className={index < rating ? "text-warning" : "text-muted"}
          size={18}
          style={{
            filter:
              index < rating
                ? "drop-shadow(0 0 8px rgba(255, 193, 7, 0.5))"
                : "none",
            transition: "all 0.3s ease",
          }}
        />
      </motion.div>
    ));
  };

  return (
    <section
      className="py-5 testimonials-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Dynamic Background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background:
            "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 30%, #ffffff 70%, #f8f9fa 100%)",
          zIndex: -2,
        }}
      />

      {/* Floating Background Elements */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          right: "10%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="position-absolute"
        style={{
          bottom: "15%",
          left: "5%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(250, 112, 154, 0.05), rgba(254, 225, 64, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
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
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="display-5 fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #fa709a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                What Our Clients Say
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Don't just take our word for it - hear from our satisfied
                clients
              </motion.p>

              {/* Testimonial Stats */}
              <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">5.0</h4>
                    <small className="text-muted">Average Rating</small>
                  </motion.div>
                </Col>
                <Col md={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">150+</h4>
                    <small className="text-muted">Happy Clients</small>
                  </motion.div>
                </Col>
                <Col md={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">100%</h4>
                    <small className="text-muted">Satisfaction Rate</small>
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="position-relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 35px 70px rgba(0,0,0,0.2)",
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: "relative" }}
                  >
                    {/* Animated Gradient Border */}
                    <div
                      className="position-absolute w-100 h-100"
                      style={{
                        top: 0,
                        left: 0,
                        borderRadius: "20px",
                        padding: "3px",
                        background:
                          "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #667eea)",
                        backgroundSize: "400% 400%",
                        animation: "gradientShift 3s ease infinite",
                        zIndex: 1,
                      }}
                    />

                    <Card
                      className="border-0 testimonial-card position-relative"
                      style={{
                        background: testimonials[currentIndex].gradient,
                        boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                        borderRadius: "20px",
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <Card.Body className="p-5 text-white position-relative">
                        {/* Enhanced Background Pattern with Animation */}
                        <motion.div
                          className="position-absolute top-0 end-0 p-4"
                          style={{
                            opacity: 0.1,
                            fontSize: "8rem",
                            lineHeight: 1,
                          }}
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <FaQuoteLeft />
                        </motion.div>

                        {/* Subtle Overlay Effect */}
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background:
                              "linear-gradient(45deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
                            pointerEvents: "none",
                            borderRadius: "20px",
                          }}
                        />

                        {/* Enhanced Project Type Badge with Verified Status */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="mb-4 d-flex align-items-center gap-3"
                        >
                          <motion.span
                            className="badge"
                            style={{
                              background: "rgba(255,255,255,0.2)",
                              color: "white",
                              padding: "8px 16px",
                              borderRadius: "20px",
                              fontSize: "0.8rem",
                              backdropFilter: "blur(10px)",
                              border: "1px solid rgba(255,255,255,0.3)",
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                            whileHover={{
                              background: "rgba(255,255,255,0.3)",
                              scale: 1.05,
                              boxShadow: "0 4px 15px rgba(255,255,255,0.2)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                              style={{ display: "inline-block" }}
                            >
                              <FaAward className="me-2" size={12} />
                            </motion.div>
                            {testimonials[currentIndex].projectType}
                          </motion.span>

                          {/* Verified Badge */}
                          {testimonials[currentIndex].verified && (
                            <motion.span
                              className="badge d-flex align-items-center"
                              style={{
                                background:
                                  "linear-gradient(135deg, #00C851 0%, #00A041 100%)",
                                color: "white",
                                padding: "6px 12px",
                                borderRadius: "15px",
                                fontSize: "0.75rem",
                                fontWeight: "600",
                                boxShadow: "0 2px 8px rgba(0, 200, 81, 0.3)",
                                border: "1px solid rgba(255,255,255,0.2)",
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                              whileHover={{
                                scale: 1.1,
                                boxShadow: "0 4px 12px rgba(0, 200, 81, 0.4)",
                              }}
                            >
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                style={{ display: "inline-block" }}
                              >
                                <FaCheckCircle className="me-1" size={10} />
                              </motion.div>
                              Verified
                            </motion.span>
                          )}
                        </motion.div>

                        {/* Quote */}
                        <motion.blockquote
                          className="mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <FaQuoteLeft
                            className="mb-3"
                            size={30}
                            style={{ opacity: 0.7 }}
                          />
                          <p
                            className="mb-0"
                            style={{
                              fontSize: "1.3rem",
                              lineHeight: "1.7",
                              fontWeight: "300",
                            }}
                          >
                            "{testimonials[currentIndex].content}"
                          </p>
                        </motion.blockquote>

                        {/* Rating */}
                        <motion.div
                          className="mb-4 d-flex justify-content-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {renderStars(testimonials[currentIndex].rating)}
                        </motion.div>

                        {/* Client Info */}
                        <Row className="align-items-center">
                          <Col md={6}>
                            <motion.div
                              className="d-flex align-items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.5 }}
                            >
                              {testimonials[currentIndex].avatar && (
                                <motion.img
                                  src={testimonials[currentIndex].avatar}
                                  alt={testimonials[currentIndex].name}
                                  className="rounded-circle me-3"
                                  style={{
                                    width: "70px",
                                    height: "70px",
                                    objectFit: "cover",
                                    border: "3px solid rgba(255,255,255,0.3)",
                                    filter: "brightness(1.1)",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                  }}
                                  whileHover={{
                                    scale: 1.15,
                                    border: "3px solid rgba(255,255,255,0.6)",
                                    boxShadow:
                                      "0 8px 25px rgba(255,255,255,0.3)",
                                    filter: "brightness(1.3)",
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                  transition={{ duration: 0.3 }}
                                />
                              )}
                              <div>
                                <div className="d-flex align-items-center mb-1">
                                  <h5 className="mb-0 fw-bold me-2">
                                    {testimonials[currentIndex].name}
                                  </h5>
                                  {testimonials[currentIndex].verified && (
                                    <motion.div
                                      animate={{ scale: [1, 1.1, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                      }}
                                      style={{ display: "inline-block" }}
                                    >
                                      <FaShieldAlt
                                        size={16}
                                        style={{
                                          color: "#00C851",
                                          filter:
                                            "drop-shadow(0 0 4px rgba(0, 200, 81, 0.5))",
                                        }}
                                      />
                                    </motion.div>
                                  )}
                                </div>
                                <p
                                  className="mb-1"
                                  style={{
                                    opacity: 0.9,
                                    fontSize: "0.9rem",
                                    fontWeight: "500",
                                  }}
                                >
                                  {testimonials[currentIndex].role}
                                </p>
                                <p
                                  className="mb-1"
                                  style={{ opacity: 0.8, fontSize: "0.85rem" }}
                                >
                                  {testimonials[currentIndex].company}
                                </p>
                                {testimonials[currentIndex].industry && (
                                  <p
                                    className="mb-0"
                                    style={{
                                      opacity: 0.6,
                                      fontSize: "0.75rem",
                                    }}
                                  >
                                    {testimonials[currentIndex].industry}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          </Col>
                          <Col md={6} className="text-md-end mt-3 mt-md-0">
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 }}
                            >
                              <div className="d-flex flex-column align-items-md-end">
                                <div
                                  className="d-flex align-items-center mb-2"
                                  style={{ opacity: 0.9 }}
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                    }}
                                  >
                                    <FaThumbsUp className="me-2" size={14} />
                                  </motion.div>
                                  <small className="fw-medium">
                                    {testimonials[currentIndex].result}
                                  </small>
                                </div>
                                <div
                                  className="d-flex align-items-center mb-2"
                                  style={{ opacity: 0.7 }}
                                >
                                  <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{
                                      duration: 2.5,
                                      repeat: Infinity,
                                    }}
                                  >
                                    <FaHeart className="me-2" size={12} />
                                  </motion.div>
                                  <small>
                                    Completed in{" "}
                                    {testimonials[currentIndex].duration}
                                  </small>
                                </div>
                                {testimonials[currentIndex].companySize && (
                                  <div
                                    className="d-flex align-items-center"
                                    style={{ opacity: 0.6 }}
                                  >
                                    <FaAward className="me-2" size={10} />
                                    <small style={{ fontSize: "0.7rem" }}>
                                      {testimonials[currentIndex].companySize}
                                    </small>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Navigation Buttons */}
              <motion.button
                className="position-absolute top-50 start-0 translate-middle-y btn btn-light rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "-30px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  border: "none",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.9)",
                  transition: "all 0.3s ease",
                }}
                onClick={prevTestimonial}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                  background: "rgba(255,255,255,1)",
                  rotate: -5,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ x: [0, -2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaChevronLeft className="text-primary" size={18} />
                </motion.div>
              </motion.button>

              <motion.button
                className="position-absolute top-50 end-0 translate-middle-y btn btn-light rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                  marginRight: "-30px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  border: "none",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.9)",
                  transition: "all 0.3s ease",
                }}
                onClick={nextTestimonial}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
                  background: "rgba(255,255,255,1)",
                  rotate: 5,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ x: [0, 2, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaChevronRight className="text-primary" size={18} />
                </motion.div>
              </motion.button>
            </div>

            {/* Enhanced Controls */}
            <div className="text-center mt-4">
              {/* Enhanced Dots Indicator */}
              <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className="btn p-0 rounded-circle"
                    style={{
                      width: "16px",
                      height: "16px",
                      background:
                        index === currentIndex
                          ? testimonials[currentIndex].gradient
                          : "rgba(0,0,0,0.2)",
                      border: "none",
                      transition: "all 0.3s ease",
                      boxShadow:
                        index === currentIndex
                          ? "0 4px 15px rgba(0,0,0,0.3)"
                          : "none",
                    }}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{
                      scale: 1.5,
                      boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                      background:
                        index === currentIndex
                          ? testimonials[currentIndex].gradient
                          : "rgba(0,0,0,0.4)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    animate={{
                      scale: index === currentIndex ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      scale: { duration: 0.3 },
                      repeat: index === currentIndex ? Infinity : 0,
                      ease: "easeInOut",
                      duration: 2,
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Enhanced Auto-play Toggle */}
              <motion.button
                className="btn btn-outline-primary btn-sm"
                onClick={toggleAutoPlay}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
                  background: "rgba(102, 126, 234, 0.1)",
                }}
                whileTap={{ scale: 0.9 }}
                style={{
                  borderRadius: "20px",
                  padding: "8px 16px",
                  fontSize: "0.8rem",
                  transition: "all 0.3s ease",
                  border: "2px solid #667eea",
                  fontWeight: "500",
                }}
              >
                <motion.div
                  animate={isAutoPlaying ? { rotate: [0, 360] } : { rotate: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ display: "inline-block" }}
                >
                  {isAutoPlaying ? (
                    <FaPause className="me-2" />
                  ) : (
                    <FaPlay className="me-2" />
                  )}
                </motion.div>
                {isAutoPlaying ? "Pause" : "Play"}
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .testimonials-section .testimonial-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          backface-visibility: hidden;
          position: relative;
        }
        
        .testimonials-section .testimonial-card:hover {
          transform: translateY(-8px) rotateX(3deg);
          box-shadow: 0 40px 80px rgba(0,0,0,0.25) !important;
        }
        
        .testimonials-section .testimonial-card:hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
          animation: shimmer 1.5s ease-in-out;
          border-radius: 20px;
          pointer-events: none;
          z-index: 3;
        }
        
        .testimonials-section .btn:focus {
          outline: 2px solid rgba(102, 126, 234, 0.5);
          outline-offset: 2px;
        }
        
        .testimonials-section .btn:focus-visible {
          outline: 3px solid rgba(102, 126, 234, 0.7);
          outline-offset: 3px;
        }
        
        /* Enhanced gradient animations */
        .testimonials-section .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          border-radius: 20px;
          z-index: 1;
        }
        
        .testimonials-section .testimonial-card:hover::before {
          transform: translateX(100%);
        }
        
        /* Enhanced Verified Badge Styles */
        .testimonials-section .badge {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .testimonials-section .badge:hover {
          transform: translateY(-2px);
        }
        
        /* Mobile responsive enhancements */
        @media (max-width: 768px) {
          .testimonials-section .display-5 {
            font-size: 2rem !important;
          }
          
          .testimonials-section .position-absolute.start-0,
          .testimonials-section .position-absolute.end-0 {
            position: relative !important;
            margin: 20px auto !important;
            display: block;
          }
          
          .testimonials-section .btn.rounded-circle {
            width: 50px !important;
            height: 50px !important;
          }
          
          .testimonials-section .testimonial-card {
            margin: 0 10px;
          }
          
          .testimonials-section .testimonial-card:hover {
            transform: translateY(-3px);
          }
          
          /* Mobile badge adjustments */
          .testimonials-section .d-flex.gap-3 {
            flex-wrap: wrap;
            gap: 8px !important;
          }
          
          .testimonials-section .badge {
            font-size: 0.7rem !important;
            padding: 6px 10px !important;
          }
        }
        
        @media (max-width: 576px) {
          .testimonials-section blockquote p {
            font-size: 1.1rem !important;
            line-height: 1.6 !important;
          }
          
          .testimonials-section .btn.rounded-circle {
            width: 45px !important;
            height: 45px !important;
          }
          
          .testimonials-section .testimonial-card .position-absolute {
            font-size: 6rem !important;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .testimonials-section .testimonial-card:hover {
            transform: none;
          }
          
          .testimonials-section .btn:hover {
            transform: scale(1.05);
          }
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .testimonials-section * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
