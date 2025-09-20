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
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      projectType: "Educational Platform",
      result: "300% increase in engagement",
      duration: "3 months",
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
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      projectType: "Business Website",
      result: "250% more inquiries",
      duration: "2 months",
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
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      projectType: "E-commerce Store",
      result: "40% higher conversions",
      duration: "4 months",
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
      >
        <FaStar
          className={index < rating ? "text-warning" : "text-muted"}
          size={18}
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
                  <Card
                    className="border-0 testimonial-card"
                    style={{
                      background: testimonials[currentIndex].gradient,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                      borderRadius: "20px",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Body className="p-5 text-white position-relative">
                      {/* Background Pattern */}
                      <div
                        className="position-absolute top-0 end-0 p-4"
                        style={{
                          opacity: 0.1,
                          fontSize: "8rem",
                          lineHeight: 1,
                        }}
                      >
                        <FaQuoteLeft />
                      </div>

                      {/* Project Type Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-4"
                      >
                        <span
                          className="badge"
                          style={{
                            background: "rgba(255,255,255,0.2)",
                            color: "white",
                            padding: "8px 16px",
                            borderRadius: "20px",
                            fontSize: "0.8rem",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                          }}
                        >
                          <FaAward className="me-2" size={12} />
                          {testimonials[currentIndex].projectType}
                        </span>
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
                                }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}
                            <div>
                              <h5 className="mb-1 fw-bold">
                                {testimonials[currentIndex].name}
                              </h5>
                              <p
                                className="mb-0"
                                style={{ opacity: 0.9, fontSize: "0.9rem" }}
                              >
                                {testimonials[currentIndex].role}
                              </p>
                              <p
                                className="mb-0"
                                style={{ opacity: 0.7, fontSize: "0.8rem" }}
                              >
                                {testimonials[currentIndex].company}
                              </p>
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
                                <FaThumbsUp className="me-2" size={14} />
                                <small>
                                  {testimonials[currentIndex].result}
                                </small>
                              </div>
                              <div
                                className="d-flex align-items-center"
                                style={{ opacity: 0.7 }}
                              >
                                <FaHeart className="me-2" size={12} />
                                <small>
                                  Completed in{" "}
                                  {testimonials[currentIndex].duration}
                                </small>
                              </div>
                            </div>
                          </motion.div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
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
                }}
                onClick={prevTestimonial}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronLeft className="text-primary" />
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
                }}
                onClick={nextTestimonial}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaChevronRight className="text-primary" />
              </motion.button>
            </div>

            {/* Enhanced Controls */}
            <div className="text-center mt-4">
              {/* Dots Indicator */}
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
                    }}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <motion.button
                className="btn btn-outline-primary btn-sm"
                onClick={toggleAutoPlay}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderRadius: "20px",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                }}
              >
                {isAutoPlaying ? (
                  <FaPause className="me-1" />
                ) : (
                  <FaPlay className="me-1" />
                )}
                {isAutoPlaying ? "Pause" : "Play"}
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .testimonials-section .testimonial-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .testimonials-section .btn:focus {
          outline: 2px solid rgba(102, 126, 234, 0.5);
          outline-offset: 2px;
        }
        
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
        }
        
        @media (max-width: 576px) {
          .testimonials-section blockquote p {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
