import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaRocket, FaEye, FaPlay } from "react-icons/fa";

interface HeroCTA {
  text: string;
  variant: "primary" | "outline-light";
  onClick: () => void;
}

interface HeroProps {
  heroSlogan: string;
  heroBackground?: string;
  heroImage?: string;
  heroVideo?: string;
  heroCTAs: HeroCTA[];
}

// Character Animation Component
const AnimatedText: React.FC<{ text: string; delay?: number }> = ({
  text,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Generate unique gradient colors for each character
  const generateCharacterColors = (index: number) => {
    const gradientColors = [
      "#1D375C",
      "#21252A",
      "#212529",
      "#0D0518",
      "#140837",
      "#250733",
      "#1E084B",
      "#310741",
      "#1B0D5E",
      "#ffffff",
    ];
    const startColor = gradientColors[index % gradientColors.length];
    const endColor = gradientColors[(index + 1) % gradientColors.length];
    return [startColor, endColor, "#ffffff"];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * 4); // 4ms delay between characters (ultra fast)

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="animated-text">
      {displayedText.split("").map((char, index) => (
        <motion.span
          key={index}
          className="text-char"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            color: generateCharacterColors(index),
          }}
          transition={{
            duration: 0.15,
            delay: index * 0.004,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.2,
            y: -5,
            color: "#FFD700",
            textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
          }}
          style={{
            display: "inline-block",
            marginRight: char === " " ? "0.3em" : "0.05em",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
        >
          {char === "|" ? <br /> : char}
        </motion.span>
      ))}
    </span>
  );
};

const Hero: React.FC<HeroProps> = ({
  heroSlogan,
  heroImage,
  heroVideo,
  heroCTAs,
}) => {
  const heroStyle = {
    background:
      "linear-gradient(135deg, #1D375C 0%, #21252A 12.5%, #212529 25%, #0D0518 37.5%, #140837 50%, #250733 62.5%, #1E084B 75%, #310741 87.5%, #1B0D5E 100%)",
    backgroundSize: "400% 400%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    overflow: "hidden",
    animation: "gradientShift 8s ease infinite",
  };

  return (
    <section
      style={heroStyle}
      className="text-white"
      role="banner"
      aria-label="Hero section"
    >
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col xl={8} lg={7} md={12} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="display-3 fw-bold mb-4 hero-title"
                style={{ lineHeight: 1.2 }}
              >
                <AnimatedText text={heroSlogan} delay={100} />
              </h1>
              <motion.div
                className="hero-description-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <motion.p
                  className="lead mb-4 hero-description enhanced-description"
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: 1.6,
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    textShadow: "0 4px 16px rgba(0,0,0,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span
                    className="description-highlight"
                    animate={{
                      background: [
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <strong>
                      We transform your digital dreams into reality
                    </strong>
                  </motion.span>{" "}
                  <motion.span
                    className="description-accent"
                    whileHover={{
                      scale: 1.05,
                      color: "#FFD700",
                      textShadow: "0 0 15px rgba(255, 215, 0, 0.6)",
                    }}
                  >
                    with cutting-edge
                  </motion.span>{" "}
                  <motion.span
                    className="description-emphasis web-solutions-changing"
                    style={{
                      fontWeight: "bold",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    }}
                    animate={{
                      color: [
                        "#FF006E",
                        "#8338EC",
                        "#3A86FF",
                        "#06FFA5",
                        "#FFBE0B",
                        "#FB5607",
                        "#FF006E",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 15px rgba(255, 215, 0, 0.8)",
                    }}
                  >
                    web solutions
                  </motion.span>{" "}
                  <motion.span
                    className="description-result"
                    whileHover={{
                      scale: 1.03,
                      color: "#4ECDC4",
                      textShadow: "0 0 10px rgba(78, 205, 196, 0.6)",
                    }}
                  >
                    that drive results and exceed expectations.
                  </motion.span>
                </motion.p>
              </motion.div>
              <div
                className="d-flex gap-3 flex-wrap"
                role="group"
                aria-label="Call to action buttons"
              >
                {heroCTAs.map((cta, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant={cta.variant}
                      size="lg"
                      onClick={cta.onClick}
                      className="px-4 py-2 fw-bold"
                      style={{
                        minWidth: "180px",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        boxShadow:
                          cta.variant === "primary"
                            ? "0 4px 15px rgba(30, 60, 114, 0.4)"
                            : "0 2px 10px rgba(255, 255, 255, 0.2)",
                      }}
                      aria-label={`${cta.text} - ${
                        index === 0
                          ? "Contact us to start your project"
                          : "View our portfolio of completed projects"
                      }`}
                    >
                      {index === 0 ? (
                        <FaRocket className="me-2" />
                      ) : (
                        <FaEye className="me-2" />
                      )}
                      {cta.text}
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 d-flex flex-wrap align-items-center gap-4"
              >
                <motion.div
                  className="trust-indicator rating-indicator"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="d-flex align-items-center">
                    <motion.div
                      className="me-2 stars"
                      animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ⭐⭐⭐⭐⭐
                    </motion.div>
                    <motion.small
                      className="trust-text"
                      animate={{
                        color: [
                          "#FFD700",
                          "#FF6B6B",
                          "#4ECDC4",
                          "#45B7D1",
                          "#96CEB4",
                          "#FFD700",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      5.0 Rating
                    </motion.small>
                  </div>
                </motion.div>

                <motion.div
                  className="trust-indicator projects-indicator"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.small
                    className="trust-text"
                    animate={{
                      color: [
                        "#FF6B6B",
                        "#4ECDC4",
                        "#45B7D1",
                        "#96CEB4",
                        "#FFD700",
                        "#FF6B6B",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    • 150+ Projects Completed
                  </motion.small>
                </motion.div>

                <motion.div
                  className="trust-indicator satisfaction-indicator"
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.small
                    className="trust-text"
                    animate={{
                      color: [
                        "#4ECDC4",
                        "#45B7D1",
                        "#96CEB4",
                        "#FFD700",
                        "#FF6B6B",
                        "#4ECDC4",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    • 100% Client Satisfaction
                  </motion.small>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>
          {(heroVideo || heroImage) && (
            <Col xl={4} lg={5} md={12}>
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center hero-media-container"
                style={{ position: "relative" }}
              >
                {heroVideo ? (
                  <div className="video-container">
                    <video
                      src={heroVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="hero-video rounded-3 shadow-lg"
                      style={{
                        width: "100%",
                        maxWidth: "600px",
                        height: "400px",
                        objectFit: "cover",
                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                      }}
                      poster={heroImage}
                    />
                    <div className="video-overlay">
                      <motion.div
                        className="play-indicator"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <FaPlay size={24} />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={heroImage}
                    alt="Professional web development services showcase featuring modern responsive designs and Google Sheets integration"
                    className="img-fluid rounded-3 shadow-lg hero-image"
                    style={{
                      maxHeight: "500px",
                      filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))",
                    }}
                    loading="eager"
                    width="600"
                    height="400"
                  />
                )}
              </motion.div>
            </Col>
          )}
        </Row>
      </Container>

      {/* Enhanced Animated background elements */}
      <motion.div
        className="position-absolute floating-orb-1"
        style={{
          top: "15%",
          right: "8%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(29, 55, 92, 0.3), rgba(33, 37, 42, 0.2))",
          borderRadius: "50%",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      <motion.div
        className="position-absolute floating-orb-2"
        style={{
          bottom: "25%",
          left: "8%",
          width: "180px",
          height: "180px",
          background:
            "linear-gradient(135deg, rgba(13, 5, 24, 0.3), rgba(20, 8, 55, 0.2))",
          borderRadius: "50%",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1],
          rotate: [0, -90, -180],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        aria-hidden="true"
      />
      <motion.div
        className="position-absolute floating-orb-3"
        style={{
          top: "60%",
          right: "20%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(37, 7, 51, 0.3), rgba(30, 8, 75, 0.2))",
          borderRadius: "50%",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1],
          rotate: [0, 120, 240, 360],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        aria-hidden="true"
      />

      {/* Scroll indicator */}
      <motion.div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <div
          className="text-white-50 text-center"
          style={{ fontSize: "0.9rem" }}
        >
          <div className="mb-1">↓</div>
          <small>Scroll to explore</small>
        </div>
      </motion.div>

      <style>{`
        /* Dynamic Gradient Background Animation */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Character Animation Styles */
        .animated-text {
          display: inline-block;
        }
        
        .text-char {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .text-char:hover {
          z-index: 10;
          position: relative;
        }
        
        /* Hero Title Enhancements */
        .hero-title {
          position: relative;
          overflow: hidden;
        }
        
        .hero-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          transform: translateX(-100%);
          animation: titleUnderline 3s ease-in-out infinite;
        }
        
        @keyframes titleUnderline {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        /* Enhanced Hero Description Styles */
        .hero-description-container {
          position: relative;
          overflow: hidden;
        }
        
        .enhanced-description {
          position: relative;
          cursor: pointer;
        }
        
        .description-highlight {
          position: relative;
          padding: 4px 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .description-highlight:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .description-accent {
          position: relative;
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .description-emphasis {
          position: relative;
          background-size: 200% 200%;
          transition: all 0.3s ease;
        }
        
        .description-result {
          position: relative;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        /* Web Solutions Color Changing Effect */
        .web-solutions-changing {
          position: relative;
          z-index: 5;
        }
        
        .web-solutions-changing:hover {
          z-index: 10;
        }
        
        /* Description shine animation */
        .hero-description::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: descriptionShine 4s ease-in-out infinite;
          pointer-events: none;
        }
        
        @keyframes descriptionShine {
          0%, 100% { left: -100%; }
          50% { left: 100%; }
        }
        
        /* Enhanced description hover effects */
        .enhanced-description:hover .description-highlight {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .enhanced-description:hover .description-accent {
          color: #FFD700;
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.6);
        }
        
        .enhanced-description:hover .description-result {
          color: #4ECDC4;
          text-shadow: 0 0 10px rgba(78, 205, 196, 0.6);
        }
        
        /* Video Container Styles */
        .video-container {
          position: relative;
          display: inline-block;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .hero-video {
          transition: all 0.3s ease;
        }
        
        .hero-video:hover {
          transform: scale(1.02);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.1);
        }
        
        .video-overlay {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        
        .play-indicator {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Hero Image Enhancements */
        .hero-image {
          transition: all 0.3s ease;
        }
        
        .hero-image:hover {
          transform: scale(1.02) rotate(1deg);
          filter: drop-shadow(0 25px 50px rgba(0,0,0,0.4)) brightness(1.1);
        }
        
        /* Enhanced Trust Indicators */
        .trust-indicator {
          position: relative;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .trust-indicator:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .trust-text {
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .stars {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        }
        
        /* Enhanced button hover effects */
        .btn-primary:hover {
          background: linear-gradient(135deg, #1D375C 0%, #21252A 100%) !important;
          border-color: #1D375C !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(29, 55, 92, 0.6) !important;
        }
        
        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          border-color: rgba(255, 255, 255, 0.9) !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.4) !important;
        }
        
        /* Button shine effects */
        .btn {
          position: relative;
          overflow: hidden;
        }
        
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }
        
        .btn:hover::before {
          left: 100%;
        }
        
        /* Focus states for accessibility */
        .btn:focus {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }
        
        /* Floating Orbs Enhancements */
        .floating-orb-1,
        .floating-orb-2,
        .floating-orb-3 {
          pointer-events: none;
        }
        
        /* Mobile-first responsive adjustments */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem !important;
            line-height: 1.3 !important;
          }
          
          .enhanced-description {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
          }
          
          .btn-lg {
            min-width: 140px !important;
            font-size: 0.9rem !important;
            padding: 10px 16px !important;
          }
          
          .hero-video,
          .hero-image {
            max-height: 200px !important;
            height: 180px !important;
          }
          
          .trust-indicator {
            padding: 3px 6px;
            font-size: 0.75rem;
          }
          
          .description-highlight {
            padding: 1px 3px;
          }
          
          .description-emphasis {
            font-size: 1rem;
          }
          
          .video-overlay {
            width: 35px;
            height: 35px;
            top: 10px;
            right: 10px;
          }
          
          .play-indicator svg {
            width: 14px;
            height: 14px;
          }
          
          .floating-orb-1,
          .floating-orb-2,
          .floating-orb-3 {
            display: none;
          }
        }
        
        @media (min-width: 481px) and (max-width: 576px) {
          .hero-title {
            font-size: 2rem !important;
          }
          
          .enhanced-description {
            font-size: 1rem !important;
          }
          
          .btn-lg {
            min-width: 150px !important;
            font-size: 0.95rem !important;
          }
          
          .hero-video,
          .hero-image {
            max-height: 250px !important;
            height: 220px !important;
          }
          
          .trust-indicator {
            padding: 4px 8px;
            font-size: 0.8rem;
          }
        }
        
        @media (min-width: 577px) and (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
          
          .btn-lg {
            min-width: 160px !important;
            font-size: 1rem !important;
          }
          
          .hero-video,
          .hero-image {
            max-height: 300px !important;
            height: 250px !important;
          }
          
          .trust-indicator {
            padding: 5px 10px;
            font-size: 0.85rem;
          }
          
          .enhanced-description {
            font-size: 1.05rem !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 992px) {
          .hero-title {
            font-size: 3rem !important;
          }
          
          .trust-indicator {
            padding: 6px 12px;
            font-size: 0.85rem;
          }
          
          .enhanced-description {
            font-size: 1.15rem !important;
          }
          
          .description-highlight {
            padding: 3px 6px;
          }
          
          .hero-video,
          .hero-image {
            max-height: 400px !important;
            height: 350px !important;
          }
        }
        
        @media (min-width: 993px) and (max-width: 1200px) {
          .hero-title {
            font-size: 3.5rem !important;
          }
        }
        
        /* Touch-friendly button adjustments for mobile */
        @media (max-width: 768px) {
          .btn {
            min-height: 44px !important;
            touch-action: manipulation;
          }
          
          .btn:active {
            transform: scale(0.98);
          }
          
          .floating-orb-1,
          .floating-orb-2,
          .floating-orb-3 {
            display: none;
          }
        }
        
        /* Landscape mobile adjustments */
        @media (max-width: 768px) and (orientation: landscape) {
          .hero-title {
            font-size: 2rem !important;
          }
          
          .enhanced-description {
            font-size: 1rem !important;
          }
          
          .hero-video,
          .hero-image {
            max-height: 200px !important;
            height: 180px !important;
          }
        }
        
        /* Performance optimizations */
        .hero-video,
        .hero-image,
        .floating-orb-1,
        .floating-orb-2,
        .floating-orb-3 {
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .hero-video:hover,
          .hero-image:hover,
          .btn-primary:hover,
          .btn-outline-light:hover {
            transform: none !important;
            filter: none !important;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
            transition: transform 0.1s ease;
          }
          
          .description-highlight:active {
            transform: scale(0.98) !important;
          }
        }
        
        /* Accessibility Enhancements */
        @media (prefers-reduced-motion: reduce) {
          .animated-text .text-char,
          .floating-orb-1,
          .floating-orb-2,
          .floating-orb-3,
          .hero-title::after,
          .hero-description::before,
          .description-highlight,
          .description-emphasis {
            animation: none !important;
            transition: none !important;
          }
          
          .text-char {
            opacity: 1 !important;
            transform: none !important;
          }
          
          .enhanced-description:hover {
            transform: none !important;
          }
        }
        
        /* High Contrast Mode Support */
        @media (prefers-contrast: high) {
          .text-char {
            color: #ffffff !important;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8) !important;
          }
          
          .btn {
            border: 2px solid currentColor !important;
          }
        }
        
        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .video-overlay {
            background: rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
