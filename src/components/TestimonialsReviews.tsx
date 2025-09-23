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
  FaPlay,
  FaPause,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaMicrosoft,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

interface ClientReview {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  avatar: string;
  gradient: string;
  textColor: string;
}

interface Platform {
  name: string;
  logo: string;
  url: string;
  description: string;
  gradient: string;
  textColor: string;
  icon: React.ReactNode;
  defaultBg: string;
  hoverTextColor: string;
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
      gradient: "linear-gradient(135deg, #0F0620 0%, #1B0D5B 100%)",
      textColor: "#ffffff",
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
      gradient: "linear-gradient(135deg, #111E2E 0%, #512F1A 100%)",
      textColor: "#ffffff",
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
      gradient: "linear-gradient(135deg, #124A4C 0%, #1B0E5E 100%)",
      textColor: "#ffffff",
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
      gradient: "linear-gradient(135deg, #520D5A 0%, #0D0518 100%)",
      textColor: "#ffffff",
    },
    {
      id: "5",
      name: "Lisa Anderson",
      role: "CEO",
      company: "Innovation Labs",
      testimonial:
        "Working with AruLax Web was a game-changer for our business. Their expertise in web development and Google Sheets integration transformed our workflow completely. The team is professional, responsive, and delivers exceptional results every time!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=5",
      gradient: "linear-gradient(135deg, #500C58 0%, #1D0D5F 100%)",
      textColor: "#ffffff",
    },
    {
      id: "6",
      name: "James Wilson",
      role: "Operations Manager",
      company: "Global Tech Corp",
      testimonial:
        "AruLax Web's attention to detail and technical expertise is unmatched. They built us a comprehensive web solution that streamlined our operations and improved our customer engagement significantly. Highly recommend their services!",
      rating: 5,
      avatar: "https://picsum.photos/100/100?random=6",
      gradient: "linear-gradient(135deg, #1B0D5D 0%, #442719 100%)",
      textColor: "#ffffff",
    },
  ];

  const defaultPlatforms: Platform[] = [
    {
      name: "Fiverr",
      logo: "https://picsum.photos/120/60?random=5",
      url: "https://fiverr.com",
      description: "Top-rated web development services",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      textColor: "#333333",
      icon: <SiFiverr size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
    },
    {
      name: "YouTube",
      logo: "https://picsum.photos/120/60?random=6",
      url: "https://youtube.com",
      description: "Web development tutorials and showcases",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      textColor: "#ffffff",
      icon: <FaYoutube size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
    },
    {
      name: "GitHub",
      logo: "https://picsum.photos/120/60?random=7",
      url: "https://github.com",
      description: "Open source projects and contributions",
      gradient: "linear-gradient(135deg, #4834d4 0%, #686de0 100%)",
      textColor: "#ffffff",
      icon: <FaGithub size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
    },
    {
      name: "LinkedIn",
      logo: "https://picsum.photos/120/60?random=8",
      url: "https://linkedin.com",
      description: "Professional network and testimonials",
      gradient: "linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)",
      textColor: "#ffffff",
      icon: <FaLinkedinIn size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
    },
    {
      name: "Facebook",
      logo: "https://picsum.photos/120/60?random=9",
      url: "https://facebook.com",
      description: "Connect with us on social media",
      gradient: "linear-gradient(135deg, #f8b500 0%, #fce38a 100%)",
      textColor: "#333333",
      icon: <FaFacebookF size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
    },
    {
      name: "Twitter",
      logo: "https://picsum.photos/120/60?random=10",
      url: "https://twitter.com",
      description: "Follow us for updates and news",
      gradient: "linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)",
      textColor: "#ffffff",
      icon: <FaTwitter size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
    },
    {
      name: "WhatsApp",
      logo: "https://picsum.photos/120/60?random=11",
      url: "https://wa.me/yournumber",
      description: "Chat with us directly",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      textColor: "#ffffff",
      icon: <FaWhatsapp size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
    },
    {
      name: "Microsoft Teams",
      logo: "https://picsum.photos/120/60?random=12",
      url: "https://teams.microsoft.com",
      description: "Schedule meetings with us",
      gradient: "linear-gradient(135deg, #8360c3 0%, #2ebf91 100%)",
      textColor: "#ffffff",
      icon: <FaMicrosoft size={32} />,
      defaultBg: "rgba(248, 249, 250, 0.9)",
      hoverTextColor: "#ffffff",
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
                    <div
                      style={{
                        padding: "3px",
                        background: clientReviews[currentIndex].gradient,
                        borderRadius: "20px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Animated gradient border */}
                      <motion.div
                        className="position-absolute"
                        style={{
                          top: "-2px",
                          left: "-2px",
                          right: "-2px",
                          bottom: "-2px",
                          background: `conic-gradient(from 0deg, ${clientReviews[
                            currentIndex
                          ].gradient
                            .split(",")[0]
                            .replace("linear-gradient(135deg, ", "")
                            .trim()}, ${clientReviews[currentIndex].gradient
                            .split(",")[1]
                            .replace(" 100%)", "")
                            .trim()}, ${clientReviews[currentIndex].gradient
                            .split(",")[0]
                            .replace("linear-gradient(135deg, ", "")
                            .trim()})`,
                          borderRadius: "20px",
                          zIndex: -1,
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <Card
                        className="border-0 shadow-lg testimonial-card"
                        style={{
                          background:
                            hoveredCard === currentIndex
                              ? clientReviews[currentIndex].gradient
                              : "rgba(255, 255, 255, 0.95)",
                          backdropFilter: "blur(20px)",
                          position: "relative",
                          overflow: "hidden",
                          border: "none",
                          boxShadow:
                            hoveredCard === currentIndex
                              ? "0 30px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                              : "0 15px 35px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                          transition:
                            "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          borderRadius: "17px",
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
                                ? "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 70%)"
                                : "radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%)",
                            zIndex: 1,
                          }}
                          animate={{
                            rotate: [0, 360],
                            scale:
                              hoveredCard === currentIndex
                                ? [1, 1.2, 1]
                                : [1, 1, 1],
                          }}
                          transition={{
                            duration: hoveredCard === currentIndex ? 12 : 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Floating particles effect */}
                        {hoveredCard === currentIndex && (
                          <>
                            {[...Array(8)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="position-absolute"
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  background: "rgba(255, 255, 255, 0.6)",
                                  borderRadius: "50%",
                                  zIndex: 2,
                                }}
                                animate={{
                                  y: [0, -30, 0],
                                  x: [0, Math.random() * 60 - 30, 0],
                                  opacity: [0, 1, 0],
                                  scale: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 3,
                                  delay: i * 0.3,
                                  repeat: Infinity,
                                }}
                              />
                            ))}
                          </>
                        )}

                        {/* Shimmer effect */}
                        <motion.div
                          className="position-absolute"
                          style={{
                            top: 0,
                            left: "-100%",
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                            zIndex: 3,
                          }}
                          animate={{
                            left:
                              hoveredCard === currentIndex
                                ? ["100%", "100%"]
                                : ["100%", "100%"],
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3,
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
                              whileHover={{
                                scale: 1.3,
                                rotate: [0, -15, 15, 0],
                                transition: { duration: 0.6 },
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <FaQuoteLeft
                                className="mb-3"
                                size={45}
                                style={{
                                  color:
                                    hoveredCard === currentIndex
                                      ? "rgba(255, 255, 255, 0.9)"
                                      : "#4facfe",
                                  filter:
                                    hoveredCard === currentIndex
                                      ? "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                                      : "drop-shadow(0 2px 4px rgba(79, 172, 254, 0.3))",
                                  transition: "all 0.5s ease",
                                }}
                              />
                            </motion.div>
                            <motion.div
                              className="mb-3 d-flex justify-content-center gap-1"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              {Array.from({ length: 5 }, (_, index) => (
                                <motion.div
                                  key={index}
                                  whileHover={{
                                    scale: 1.3,
                                    rotate: [0, -10, 10, 0],
                                    transition: { duration: 0.4 },
                                  }}
                                  animate={{
                                    scale:
                                      index < clientReviews[currentIndex].rating
                                        ? [1, 1.1, 1]
                                        : 1,
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                  }}
                                >
                                  <FaStar
                                    size={18}
                                    style={{
                                      color:
                                        index <
                                        clientReviews[currentIndex].rating
                                          ? hoveredCard === currentIndex
                                            ? "#ffd700"
                                            : "#ffc107"
                                          : hoveredCard === currentIndex
                                          ? "rgba(255, 255, 255, 0.3)"
                                          : "#e9ecef",
                                      filter:
                                        hoveredCard === currentIndex
                                          ? "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                                          : "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                                      transition: "all 0.3s ease",
                                    }}
                                  />
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>

                          <motion.blockquote
                            className="text-center mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <p
                              className="lead mb-0"
                              style={{
                                fontSize: "1.15rem",
                                lineHeight: "1.8",
                                color:
                                  hoveredCard === currentIndex
                                    ? clientReviews[currentIndex].textColor
                                    : "#495057",
                                textShadow:
                                  hoveredCard === currentIndex
                                    ? "0 2px 8px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)"
                                    : "0 1px 2px rgba(0,0,0,0.1)",
                                fontWeight:
                                  hoveredCard === currentIndex ? "500" : "400",
                                letterSpacing: "0.3px",
                              }}
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
                                width: "85px",
                                height: "85px",
                                objectFit: "cover",
                                border:
                                  hoveredCard === currentIndex
                                    ? "4px solid rgba(255, 255, 255, 0.8)"
                                    : "3px solid #4facfe",
                                boxShadow:
                                  hoveredCard === currentIndex
                                    ? "0 12px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                                    : "0 8px 25px rgba(79, 172, 254, 0.3)",
                                filter:
                                  hoveredCard === currentIndex
                                    ? "brightness(1.1) contrast(1.1)"
                                    : "none",
                              }}
                              whileHover={{
                                scale: 1.15,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 },
                              }}
                              transition={{ duration: 0.3 }}
                            />
                            <div className="text-start">
                              <motion.h5
                                className="fw-bold mb-1"
                                style={{
                                  color:
                                    hoveredCard === currentIndex
                                      ? clientReviews[currentIndex].textColor
                                      : "#212529",
                                  textShadow:
                                    hoveredCard === currentIndex
                                      ? "0 2px 6px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)"
                                      : "0 1px 2px rgba(0,0,0,0.1)",
                                  fontSize: "1.2rem",
                                  letterSpacing: "0.5px",
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  y: -2,
                                  transition: { duration: 0.3 },
                                }}
                              >
                                {clientReviews[currentIndex].name}
                              </motion.h5>
                              <motion.p
                                className="fw-semibold mb-0"
                                style={{
                                  color:
                                    hoveredCard === currentIndex
                                      ? clientReviews[currentIndex].textColor
                                      : "#4facfe",
                                  textShadow:
                                    hoveredCard === currentIndex
                                      ? "0 2px 4px rgba(0,0,0,0.3)"
                                      : "0 1px 2px rgba(79, 172, 254, 0.3)",
                                  fontSize: "1rem",
                                  letterSpacing: "0.3px",
                                }}
                                whileHover={{
                                  scale: 1.05,
                                  y: -1,
                                  transition: { duration: 0.3 },
                                }}
                              >
                                {clientReviews[currentIndex].role}
                              </motion.p>
                              <motion.small
                                style={{
                                  color:
                                    hoveredCard === currentIndex
                                      ? "rgba(255,255,255,0.9)"
                                      : "#6c757d",
                                  textShadow:
                                    hoveredCard === currentIndex
                                      ? "0 1px 3px rgba(0,0,0,0.4)"
                                      : "none",
                                  fontSize: "0.9rem",
                                  letterSpacing: "0.2px",
                                }}
                                whileHover={{
                                  scale: 1.03,
                                  y: -1,
                                  transition: { duration: 0.3 },
                                }}
                              >
                                {clientReviews[currentIndex].company}
                              </motion.small>
                            </div>
                          </motion.div>
                        </Card.Body>
                      </Card>
                    </div>
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
              <h3 className="text-center fw-bold mb-4 text-dark">
                Find Us On These Platforms
              </h3>
              <Row className="justify-content-center">
                {platformList.map((platform, index) => (
                  <Col lg={3} md={4} sm={6} className="mb-4" key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="text-center"
                    >
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none d-block"
                      >
                        <Card
                          className="border-0 shadow-sm h-100 platform-card"
                          style={{
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={() => setHoveredPlatform(index)}
                          onMouseLeave={() => setHoveredPlatform(null)}
                        >
                          <Card.Body className="p-4 d-flex flex-column align-items-center justify-content-center">
                            <div
                              className="mb-3"
                              style={{
                                color:
                                  hoveredPlatform === index
                                    ? "#4facfe"
                                    : "#6c757d",
                                fontSize: "2rem",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {platform.icon}
                            </div>
                            <h6
                              className="fw-bold mb-2 text-dark"
                              style={{
                                fontSize: "1.1rem",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {platform.name}
                            </h6>
                            <small
                              className="text-muted text-center"
                              style={{
                                fontSize: "0.85rem",
                                lineHeight: "1.4",
                              }}
                            >
                              {platform.description}
                            </small>
                          </Card.Body>
                        </Card>
                      </a>
                    </motion.div>
                  </Col>
                ))}
              </Row>
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
                <div
                  style={{
                    padding: "3px",
                    background:
                      "linear-gradient(135deg, #154D56 0%, #570E60 100%)",
                    borderRadius: "20px",
                  }}
                >
                  <Card
                    className="border-0 shadow-lg text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, #154D56 0%, #570E60 100%)",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "17px",
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
                              <div className="fw-bold h2 mb-1">
                                {stat.value}
                              </div>
                              <small>{stat.label}</small>
                            </motion.div>
                          </Col>
                        ))}
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
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
                <div
                  style={{
                    padding: "3px",
                    background:
                      "linear-gradient(135deg, #52301B 0%, #124C4E 100%)",
                    borderRadius: "20px",
                  }}
                >
                  <Card
                    className="border-0 text-white text-center cta-card"
                    style={{
                      background:
                        "linear-gradient(135deg, #52301B 0%, #124C4E 100%)",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "17px",
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
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: 1.1 }}
                      >
                        Join Our Happy Clients
                      </motion.h3>
                      <motion.p
                        className="lead mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        Ready to experience the same level of service and
                        results? Let's create something amazing together and add
                        your testimonial to our growing list of success stories.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
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
                </div>
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

        /* Simple platform card styling */
        .platform-card {
          transition: all 0.3s ease;
        }

        .platform-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }

        /* Premium glow effect */
        @keyframes premiumGlow {
          0%, 100% { 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1), 
                       0 0 0 0 rgba(79, 172, 254, 0);
          }
          50% { 
            box-shadow: 0 20px 40px rgba(0,0,0,0.15), 
                       0 0 0 10px rgba(79, 172, 254, 0.1);
          }
        }

        .platform-card:hover {
          animation: premiumGlow 2s ease-in-out infinite;
        }

        /* Optimized shimmer animation */
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateZ(0); }
          100% { transform: translateX(100%) translateZ(0); }
        }

        .shimmer-effect {
          animation: shimmer 0.6s ease-out;
        }

        /* Optimized floating animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-8px) translateZ(0); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
          .testimonial-card {
            margin: 0 1rem;
          }
          
          /* Platform cards responsive */
          .platform-card {
            margin-bottom: 1rem;
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
            min-height: 44px !important;
            touch-action: manipulation;
          }
          
          /* Dots indicator */
          .btn-sm.rounded-circle {
            width: 14px !important;
            height: 14px !important;
            margin-right: 0.5rem !important;
            min-height: 44px !important;
            touch-action: manipulation;
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
          
          /* Platform cards mobile */
          .platform-card {
            margin-bottom: 1.5rem;
          }
          
          .platform-card .card-body {
            padding: 1.5rem !important;
          }
          
          /* Statistics and CTA sections */
          .cta-card .p-5 {
            padding: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .testimonial-card .p-5 {
            padding: 1.5rem !important;
          }
          
          .d-flex.gap-3 .btn {
            width: 35px !important;
            height: 35px !important;
            min-height: 44px !important;
            touch-action: manipulation;
          }
          
          .btn-sm.rounded-circle {
            width: 12px !important;
            height: 12px !important;
            min-height: 44px !important;
            touch-action: manipulation;
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
          
          /* Platform cards small mobile */
          .platform-card .card-body {
            padding: 1.25rem !important;
          }
          
          .platform-card h6 {
            font-size: 1rem !important;
          }
          
          .platform-card small {
            font-size: 0.8rem !important;
          }
          
          /* Statistics and CTA sections small mobile */
          .cta-card .p-5 {
            padding: 1.5rem !important;
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
          
          .platform-card:hover {
            transform: none !important;
          }
          
          /* Touch-friendly active states */
          .testimonial-card:active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease;
          }
          
          .platform-card:active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease;
          }
          
          .btn:active {
            transform: scale(0.95) !important;
            transition: transform 0.1s ease;
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .d-flex.gap-3 .btn,
          .btn-sm.rounded-circle {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          
          .platform-card {
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          
          .testimonial-card {
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .testimonial-card,
          .platform-card,
          .cta-card,
          .shimmer-effect,
          .float-animation,
          .premiumGlow {
            animation: none !important;
            transition: none !important;
          }
          
          .testimonial-card:hover,
          .platform-card:hover,
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
