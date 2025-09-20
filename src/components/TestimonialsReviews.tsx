import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaArrowRight,
  FaUsers,
  FaRocket,
  FaHeart,
  FaExternalLinkAlt,
  FaPlay,
  FaPause,
} from "react-icons/fa";

interface ClientReview {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  avatar: string;
}

interface Platform {
  name: string;
  logo: string;
  url: string;
  description: string;
}

interface TestimonialsReviewsProps {
  reviews?: ClientReview[];
  platforms?: Platform[];
  onJoinClients?: () => void;
}

const TestimonialsReviews: React.FC<TestimonialsReviewsProps> = ({
  reviews,
  platforms,
  onJoinClients = () => console.log("Join Our Happy Clients clicked"),
}) => {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const defaultReviews: ClientReview[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Solutions",
      testimonial:
        "AruLax Web exceeded our expectations! They delivered a stunning website with Google Sheets integration that allows our team to update content instantly. The process was smooth, professional, and the results speak for themselves. Our website traffic increased by 300% within the first month!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=1",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "School Principal",
      company: "Riverside Elementary",
      testimonial:
        "The team at AruLax Web created an amazing school website that our staff can easily update through Google Sheets. Parents love the real-time information updates, and we've received countless compliments on the design. Highly recommended for educational institutions!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=2",
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      role: "E-commerce Manager",
      company: "Fashion Forward",
      testimonial:
        "Our online store transformation was incredible! AruLax Web built a beautiful, fast-loading e-commerce site that converted 40% better than our previous site. The Google Sheets integration for inventory management is a game-changer. Professional service from start to finish!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=3",
    },
    {
      id: "4",
      name: "David Thompson",
      role: "Restaurant Owner",
      company: "Bella Vista Restaurant",
      testimonial:
        "AruLax Web created a stunning website for our restaurant with real-time menu updates through Google Sheets. Our online reservations increased by 250%, and customers constantly compliment our professional online presence. Worth every penny!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=4",
    },
  ];

  const defaultPlatforms: Platform[] = [
    {
      name: "Fiverr",
      logo: "https://picsum.photos/120/60?random=5",
      url: "https://fiverr.com",
      description: "Top-rated web development services",
    },
    {
      name: "YouTube",
      logo: "https://picsum.photos/120/60?random=6",
      url: "https://youtube.com",
      description: "Web development tutorials and showcases",
    },
    {
      name: "GitHub",
      logo: "https://picsum.photos/120/60?random=7",
      url: "https://github.com",
      description: "Open source projects and contributions",
    },
    {
      name: "LinkedIn",
      logo: "https://picsum.photos/120/60?random=8",
      url: "https://linkedin.com",
      description: "Professional network and testimonials",
    },
    {
      name: "Facebook",
      logo: "https://picsum.photos/120/60?random=9",
      url: "https://facebook.com",
      description: "Connect with us on social media",
    },
    {
      name: "Twitter",
      logo: "https://picsum.photos/120/60?random=10",
      url: "https://twitter.com",
      description: "Follow us for updates and news",
    },
    {
      name: "WhatsApp",
      logo: "https://picsum.photos/120/60?random=11",
      url: "https://wa.me/yournumber",
      description: "Chat with us directly",
    },
    {
      name: "Microsoft Teams",
      logo: "https://picsum.photos/120/60?random=12",
      url: "https://teams.microsoft.com",
      description: "Schedule meetings with us",
    },
  ];

  const clientReviews = reviews || defaultReviews;
  const platformList = platforms || defaultPlatforms;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, clientReviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % clientReviews.length);
    setIsPlaying(false);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + clientReviews.length) % clientReviews.length
    );
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-warning" : "text-muted"}
        size={16}
      />
    ));
  };

  return (
    <section
      className="py-5 testimonials-section"
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
            "linear-gradient(135deg, rgba(79, 172, 254, 0.05), rgba(0, 242, 254, 0.05))",
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
            "linear-gradient(135deg, rgba(250, 112, 154, 0.05), rgba(254, 225, 64, 0.05))",
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
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #fa709a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Client Reviews & Testimonials
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Don't just take our word for it - hear what our satisfied
                clients have to say about their experience
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Client Review Carousel */}
        <Row className="justify-content-center mb-5">
          <Col lg={10}>
            <motion.div
              className="position-relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onHoverStart={() => setHoveredCard(currentIndex)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card
                      className="border-0 shadow-lg testimonial-card"
                      style={{
                        background:
                          hoveredCard === currentIndex
                            ? "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)"
                            : "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(15px)",
                        position: "relative",
                        overflow: "hidden",
                        border:
                          hoveredCard === currentIndex
                            ? "2px solid rgba(79, 172, 254, 0.3)"
                            : "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow:
                          hoveredCard === currentIndex
                            ? "0 25px 50px rgba(79, 172, 254, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
                            : "0 15px 35px rgba(0, 0, 0, 0.1)",
                        transition:
                          "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                    >
                      {/* Enhanced Animated background pattern */}
                      <motion.div
                        className="position-absolute"
                        style={{
                          top: "-50%",
                          right: "-50%",
                          width: "200%",
                          height: "200%",
                          background:
                            hoveredCard === currentIndex
                              ? "radial-gradient(circle, rgba(79, 172, 254, 0.1) 0%, rgba(250, 112, 154, 0.05) 50%, transparent 70%)"
                              : "radial-gradient(circle, rgba(79, 172, 254, 0.05) 0%, transparent 70%)",
                          zIndex: 1,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale:
                            hoveredCard === currentIndex
                              ? [1, 1.1, 1]
                              : [1, 1, 1],
                        }}
                        transition={{
                          duration: hoveredCard === currentIndex ? 15 : 20,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <Card.Body
                        className="p-5 position-relative"
                        style={{ zIndex: 2 }}
                      >
                        <motion.div
                          className="text-center mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaQuoteLeft
                              className="mb-3"
                              size={40}
                              style={{
                                background:
                                  hoveredCard === currentIndex
                                    ? "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #feca57 100%)"
                                    : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                transition: "all 0.4s ease",
                              }}
                            />
                          </motion.div>
                          <motion.div
                            className="mb-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            {renderStars(clientReviews[currentIndex].rating)}
                          </motion.div>
                        </motion.div>

                        <motion.blockquote
                          className="text-center mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <p
                            className="lead text-muted mb-0"
                            style={{ fontSize: "1.1rem", lineHeight: "1.7" }}
                          >
                            "{clientReviews[currentIndex].testimonial}"
                          </p>
                        </motion.blockquote>

                        <motion.div
                          className="d-flex align-items-center justify-content-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <motion.img
                            src={clientReviews[currentIndex].avatar}
                            alt={clientReviews[currentIndex].name}
                            className="rounded-circle me-3"
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              border: "3px solid #4facfe",
                              boxShadow: "0 8px 25px rgba(79, 172, 254, 0.3)",
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          />
                          <div className="text-start">
                            <h5 className="fw-bold mb-1">
                              {clientReviews[currentIndex].name}
                            </h5>
                            <p
                              className="fw-semibold mb-0"
                              style={{
                                background:
                                  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {clientReviews[currentIndex].role}
                            </p>
                            <small className="text-muted">
                              {clientReviews[currentIndex].company}
                            </small>
                          </div>
                        </motion.div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Enhanced Navigation Controls */}
              <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline-primary"
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(15px)",
                      border: "2px solid #4facfe",
                      boxShadow: "0 8px 25px rgba(79, 172, 254, 0.3)",
                    }}
                    onClick={prevReview}
                  >
                    <FaChevronLeft />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline-primary"
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: isPlaying
                        ? "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 100%)"
                        : "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(15px)",
                      border: isPlaying ? "none" : "2px solid #4facfe",
                      boxShadow: "0 8px 25px rgba(79, 172, 254, 0.3)",
                      color: isPlaying ? "white" : "#4facfe",
                    }}
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="outline-primary"
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.95)",
                      backdropFilter: "blur(15px)",
                      border: "2px solid #4facfe",
                      boxShadow: "0 8px 25px rgba(79, 172, 254, 0.3)",
                    }}
                    onClick={nextReview}
                  >
                    <FaChevronRight />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Dots Indicator */}
            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {clientReviews.map((_, index) => (
                <motion.button
                  key={index}
                  className="btn btn-sm rounded-circle me-2"
                  style={{
                    width: "16px",
                    height: "16px",
                    padding: "0",
                    background:
                      index === currentIndex
                        ? "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #feca57 100%)"
                        : "transparent",
                    border:
                      index === currentIndex ? "none" : "2px solid #4facfe",
                    boxShadow:
                      index === currentIndex
                        ? "0 4px 15px rgba(255, 107, 107, 0.4)"
                        : "none",
                  }}
                  onClick={() => goToReview(index)}
                  aria-label={`Go to review ${index + 1}`}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Platform Logos */}
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
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #fa709a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Find Us On These Platforms
              </motion.h3>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="border-0 shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Card.Body className="p-4">
                    <Row className="align-items-center">
                      {platformList.map((platform, index) => (
                        <Col lg={3} md={6} className="mb-3" key={index}>
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: 0.7 + index * 0.1,
                            }}
                            whileHover={{
                              scale: 1.08,
                              y: -15,
                              transition: { duration: 0.3 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="text-center"
                            onHoverStart={() => setHoveredPlatform(index)}
                            onHoverEnd={() => setHoveredPlatform(null)}
                          >
                            <a
                              href={platform.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none"
                            >
                              <motion.div
                                className="p-4 rounded-4 mb-3 position-relative"
                                style={{
                                  background:
                                    hoveredPlatform === index
                                      ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                                      : "rgba(248, 249, 250, 0.8)",
                                  transition:
                                    "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                  border:
                                    hoveredPlatform === index
                                      ? "3px solid rgba(79, 172, 254, 0.5)"
                                      : "2px solid transparent",
                                  boxShadow:
                                    hoveredPlatform === index
                                      ? "0 15px 35px rgba(79, 172, 254, 0.4)"
                                      : "0 8px 25px rgba(0,0,0,0.1)",
                                  backdropFilter: "blur(10px)",
                                }}
                                whileHover={{
                                  boxShadow:
                                    "0 20px 40px rgba(79, 172, 254, 0.3)",
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
                                    rotate:
                                      hoveredPlatform === index ? [0, 360] : 0,
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                />

                                <motion.img
                                  src={platform.logo}
                                  alt={platform.name}
                                  className="position-relative"
                                  style={{
                                    height: "45px",
                                    objectFit: "contain",
                                    filter:
                                      hoveredPlatform === index
                                        ? "brightness(0) invert(1)"
                                        : "none",
                                    transition: "filter 0.4s ease",
                                    zIndex: 2,
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                />

                                <motion.div
                                  className="position-absolute top-0 end-0"
                                  style={{ margin: "8px", zIndex: 3 }}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{
                                    opacity: hoveredPlatform === index ? 1 : 0,
                                    scale: hoveredPlatform === index ? 1 : 0,
                                  }}
                                  transition={{
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                >
                                  <FaExternalLinkAlt
                                    size={14}
                                    style={{
                                      color:
                                        hoveredPlatform === index
                                          ? "white"
                                          : "transparent",
                                    }}
                                  />
                                </motion.div>
                              </motion.div>

                              <motion.h6
                                className="fw-bold text-dark mb-2"
                                whileHover={{
                                  color: "#4facfe",
                                  scale: 1.05,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {platform.name}
                              </motion.h6>

                              <motion.small
                                className="text-muted"
                                whileHover={{
                                  color: "#666",
                                }}
                              >
                                {platform.description}
                              </motion.small>
                            </a>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Statistics */}
        <Row className="mb-5">
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
                  className="border-0 shadow-lg text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #fa709a 100%)",
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
                    className="p-4 position-relative"
                    style={{ zIndex: 2 }}
                  >
                    <Row className="text-center">
                      {[
                        {
                          icon: FaUsers,
                          value: "95+",
                          label: "Happy Clients",
                          color: "#fff",
                        },
                        {
                          icon: FaStar,
                          value: "4.9★",
                          label: "Average Rating",
                          color: "#fff",
                        },
                        {
                          icon: FaRocket,
                          value: "150+",
                          label: "Projects Completed",
                          color: "#fff",
                        },
                        {
                          icon: FaHeart,
                          value: "100%",
                          label: "Satisfaction Rate",
                          color: "#fff",
                        },
                      ].map((stat, index) => (
                        <Col md={3} className="mb-3" key={index}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                            }
                            transition={{
                              duration: 0.5,
                              delay: 0.9 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.1, y: -5 }}
                          >
                            <motion.div
                              className="mb-2"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <stat.icon size={24} color={stat.color} />
                            </motion.div>
                            <div className="fw-bold h2 mb-1">{stat.value}</div>
                            <small>{stat.label}</small>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced CTA Section */}
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="border-0 text-white text-center cta-card"
                  style={{
                    background:
                      "linear-gradient(135deg, #fa709a 0%, #fee140 50%, #4facfe 100%)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="position-absolute"
                    style={{
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                      zIndex: 1,
                    }}
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 25,
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
                      transition={{ duration: 0.6, delay: 1.1 }}
                    >
                      Join Our Happy Clients
                    </motion.h3>
                    <motion.p
                      className="lead mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      Ready to experience the same level of service and results?
                      Let's create something amazing together and add your
                      testimonial to our growing list of success stories.
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 1.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="light"
                          size="lg"
                          onClick={onJoinClients}
                          className="px-5 py-3 d-flex align-items-center justify-content-center gap-2 mx-auto"
                          style={{
                            fontSize: "1.1rem",
                            maxWidth: "300px",
                            borderRadius: "25px",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                            background: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(10px)",
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          Join Our Happy Clients
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <FaArrowRight size={16} />
                          </motion.div>
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
        .testimonial-card {
          will-change: transform, box-shadow;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .testimonial-card:hover {
          transform: translateY(-15px) !important;
        }
        
        .cta-card {
          will-change: transform, box-shadow;
        }
        
        .cta-card:hover {
          transform: translateY(-5px) !important;
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
          .testimonial-card {
            margin: 0 1rem;
          }
        }
        
        @media (max-width: 992px) {
          .testimonial-card {
            margin: 0 0.5rem;
          }
          
          .testimonial-card:hover {
            transform: translateY(-10px) scale(1.01) !important;
          }
          
          /* Navigation controls */
          .d-flex.gap-3 {
            gap: 1rem !important;
          }
          
          .d-flex.gap-3 .btn {
            width: 45px !important;
            height: 45px !important;
          }
        }
        
        @media (max-width: 768px) {
          .testimonial-card {
            transform: translateY(0) !important;
            margin: 0 !important;
          }
          
          .testimonial-card:hover {
            transform: translateY(-8px) !important;
          }
          
          .cta-card {
            transform: translateY(0) !important;
          }
          
          .cta-card:hover {
            transform: translateY(-3px) !important;
          }
          
          /* Navigation controls */
          .d-flex.gap-3 {
            gap: 0.75rem !important;
          }
          
          .d-flex.gap-3 .btn {
            width: 40px !important;
            height: 40px !important;
          }
          
          /* Dots indicator */
          .btn-sm.rounded-circle {
            width: 14px !important;
            height: 14px !important;
            margin-right: 0.5rem !important;
          }
          
          /* Card body padding */
          .testimonial-card .p-5 {
            padding: 2rem !important;
          }
          
          /* Quote icon size */
          .testimonial-card .mb-3 {
            font-size: 2rem !important;
          }
          
          /* Avatar size */
          .testimonial-card img {
            width: 60px !important;
            height: 60px !important;
          }
        }
        
        @media (max-width: 576px) {
          .testimonial-card .p-5 {
            padding: 1.5rem !important;
          }
          
          .d-flex.gap-3 .btn {
            width: 35px !important;
            height: 35px !important;
          }
          
          .btn-sm.rounded-circle {
            width: 12px !important;
            height: 12px !important;
          }
          
          /* Text sizing */
          .testimonial-card .lead {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }
          
          .testimonial-card h5 {
            font-size: 1.1rem !important;
          }
          
          .testimonial-card .fw-semibold {
            font-size: 0.9rem !important;
          }
        }
        
        /* Improve hover effects for touch devices */
        @media (hover: none) {
          .testimonial-card:hover {
            transform: none !important;
          }
          
          .cta-card:hover {
            transform: none !important;
          }
        }
        
        /* Enhanced glass morphism effect */
        .testimonial-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(79, 172, 254, 0.1), transparent);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .testimonial-card:hover::before {
          opacity: 1;
        }
        
        /* Smooth transitions for all interactive elements */
        .testimonial-card * {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsReviews;
