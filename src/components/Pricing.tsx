import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Badge,
} from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  FaCheck,
  FaStar,
  FaRocket,
  FaCrown,
  FaArrowRight,
  FaEnvelope,
  FaShieldAlt,
  FaClock,
  FaHandshake,
} from "react-icons/fa";

interface PricingPackage {
  name: string;
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
  icon: React.ReactNode;
  gradient: string;
  ctaText: string;
}

interface PricingProps {
  packages?: PricingPackage[];
  onGetStarted?: (packageName: string) => void;
  onCustomQuote?: () => void;
  onStartProject?: () => void;
}

const Pricing: React.FC<PricingProps> = ({
  packages,
  onGetStarted = (packageName: string) =>
    console.log(`Get Started clicked for ${packageName}`),
  onCustomQuote = () => console.log("Custom Quote requested"),
  onStartProject = () => console.log("Start Your Project Today clicked"),
}) => {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const defaultPackages: PricingPackage[] = [
    {
      name: "Starter",
      price: "$199",
      originalPrice: "$299",
      icon: <FaRocket size={32} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Purple-Blue gradient
      popular: false,
      ctaText: "Get Started",
      features: [
        "Basic template customization",
        "Google Sheet updates integration",
        "Mobile responsive design",
        "Basic SEO setup",
        "1 month support",
        "2 revisions included",
        "Contact form integration",
        "Social media links",
      ],
    },
    {
      name: "Pro",
      price: "$299",
      originalPrice: "$399",
      icon: <FaStar size={32} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", // Pink-Red gradient
      popular: true,
      ctaText: "Get Started",
      features: [
        "Advanced custom design",
        "Google Sheets + 2 dynamic updates",
        "Advanced SEO optimization",
        "Performance optimization",
        "3 months support",
        "5 revisions included",
        "E-commerce integration (basic)",
        "Analytics setup",
        "Blog/News section",
        "Custom contact forms",
      ],
    },
    {
      name: "Premium",
      price: "$499",
      originalPrice: "$699",
      icon: <FaCrown size={32} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Blue-Cyan gradient
      popular: false,
      ctaText: "Get Started",
      features: [
        "Full custom design & development",
        "Unlimited Google Sheets updates",
        "Advanced SEO + Local SEO",
        "Premium performance optimization",
        "6 months support",
        "Unlimited revisions",
        "Full e-commerce solution",
        "Advanced analytics & reporting",
        "Multi-language support",
        "Custom admin panel",
        "Priority support",
        "Free hosting setup",
      ],
    },
  ];

  const pricingPackages = packages || defaultPackages;

  return (
    <section
      className="py-5 pricing-section"
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
                    "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #feca57 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                Transparent Pricing
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Choose the perfect package for your business needs. No hidden
                fees, no surprises.
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Packages Table/Cards */}
        <Row className="mb-5">
          {pricingPackages.map((pkg, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="h-100"
                onHoverStart={() => setHoveredPackage(index)}
                onHoverEnd={() => setHoveredPackage(null)}
              >
                <motion.div
                  whileHover={{
                    boxShadow: `0 30px 60px ${
                      pkg.name === "Starter"
                        ? "rgba(102, 126, 234, 0.3)"
                        : pkg.name === "Pro"
                        ? "rgba(240, 147, 251, 0.3)"
                        : "rgba(79, 172, 254, 0.3)"
                    }`,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    className={`h-100 border-0 shadow-lg position-relative pricing-card ${
                      pkg.popular ? "border-primary" : ""
                    }`}
                    style={{
                      transform: pkg.popular ? "scale(1.05)" : "scale(1)",
                      transition:
                        "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      background:
                        hoveredPackage === index
                          ? `linear-gradient(145deg, #ffffff 0%, ${
                              pkg.name === "Starter"
                                ? "rgba(102, 126, 234, 0.02)"
                                : pkg.name === "Pro"
                                ? "rgba(240, 147, 251, 0.02)"
                                : "rgba(79, 172, 254, 0.02)"
                            } 100%)`
                          : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                      backdropFilter: "blur(20px)",
                      border:
                        hoveredPackage === index
                          ? `2px solid ${
                              pkg.name === "Starter"
                                ? "rgba(102, 126, 234, 0.3)"
                                : pkg.name === "Pro"
                                ? "rgba(240, 147, 251, 0.3)"
                                : "rgba(79, 172, 254, 0.3)"
                            }`
                          : "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow:
                        hoveredPackage === index
                          ? `0 25px 50px ${
                              pkg.name === "Starter"
                                ? "rgba(102, 126, 234, 0.2)"
                                : pkg.name === "Pro"
                                ? "rgba(240, 147, 251, 0.2)"
                                : "rgba(79, 172, 254, 0.2)"
                            }, inset 0 1px 0 rgba(255, 255, 255, 0.8)`
                          : "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                      minHeight: "650px",
                      height: "650px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {pkg.popular && (
                      <motion.div
                        className="position-absolute top-0 mt-3 start-50 translate-middle"
                        style={{ zIndex: 10 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -20 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        <Badge
                          className="px-4 py-2"
                          style={{
                            fontSize: "0.9rem",
                            background:
                              "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                            border: "none",
                            boxShadow: "0 8px 20px rgba(240, 147, 251, 0.4)",
                          }}
                        >
                          Most Popular
                        </Badge>
                      </motion.div>
                    )}

                    {/* Enhanced Header */}
                    <div
                      className="text-white text-center position-relative"
                      style={{
                        background: pkg.gradient,
                        overflow: "hidden",
                        minHeight: "160px",
                        height: "160px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "1.5rem 1rem",
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
                            hoveredPackage === index
                              ? "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)"
                              : "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                          zIndex: 1,
                        }}
                        animate={{
                          rotate: [0, 360],
                          scale:
                            hoveredPackage === index ? [1, 1.1, 1] : [1, 1, 1],
                        }}
                        transition={{
                          duration: hoveredPackage === index ? 15 : 20,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      <div className="position-relative" style={{ zIndex: 2 }}>
                        <motion.div
                          className="mb-3"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            style={{
                              filter: "brightness(0) invert(1)",
                              transition: "all 0.3s ease",
                            }}
                          >
                            {pkg.icon}
                          </div>
                        </motion.div>
                        <motion.h3
                          className="fw-bold mb-2"
                          style={{
                            color: "white",
                            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            fontSize: "1.5rem",
                          }}
                        >
                          {pkg.name}
                        </motion.h3>
                        <div className="mb-2">
                          {pkg.originalPrice && (
                            <span
                              className="text-decoration-line-through opacity-75 me-2"
                              style={{
                                fontSize: "1rem",
                                color: "rgba(255,255,255,0.8)",
                              }}
                            >
                              {pkg.originalPrice}
                            </span>
                          )}
                          <motion.span
                            className="h2 fw-bold"
                            style={{
                              color: "white",
                              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                              fontSize: "2.2rem",
                            }}
                          >
                            {pkg.price}
                          </motion.span>
                        </div>
                        <small
                          className="opacity-90"
                          style={{
                            color: "rgba(255,255,255,0.9)",
                            fontSize: "0.85rem",
                          }}
                        >
                          One-time payment
                        </small>
                      </div>
                    </div>

                    <Card.Body
                      className="d-flex flex-column"
                      style={{
                        background:
                          hoveredPackage === index
                            ? pkg.name === "Starter"
                              ? "linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.04) 100%)"
                              : pkg.name === "Pro"
                              ? "linear-gradient(135deg, rgba(240, 147, 251, 0.08) 0%, rgba(245, 87, 108, 0.04) 100%)"
                              : "linear-gradient(135deg, rgba(79, 172, 254, 0.08) 0%, rgba(0, 242, 254, 0.04) 100%)"
                            : pkg.name === "Starter"
                            ? "linear-gradient(135deg, rgba(102, 126, 234, 0.04) 0%, rgba(118, 75, 162, 0.02) 100%)"
                            : pkg.name === "Pro"
                            ? "linear-gradient(135deg, rgba(240, 147, 251, 0.04) 0%, rgba(245, 87, 108, 0.02) 100%)"
                            : "linear-gradient(135deg, rgba(79, 172, 254, 0.04) 0%, rgba(0, 242, 254, 0.02) 100%)",
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        minHeight: "390px",
                        padding: "1.5rem 1rem",
                      }}
                    >
                      <ul className="list-unstyled mb-4 flex-grow-1">
                        {pkg.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="mb-1 d-flex align-items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{
                              duration: 0.4,
                              delay: 0.4 + index * 0.1 + featureIndex * 0.05,
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <FaCheck
                                className="text-success me-2 mt-1"
                                size={12}
                              />
                            </motion.div>
                            <span
                              className="text-muted"
                              style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                            >
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant={pkg.popular ? "primary" : "outline-primary"}
                          size="sm"
                          className="w-100 py-2"
                          onClick={() => onGetStarted(pkg.name)}
                          style={{
                            background: pkg.gradient,
                            border: "none",
                            borderRadius: "20px",
                            fontSize: "0.9rem",
                            fontWeight: "600",
                            boxShadow:
                              pkg.name === "Pro"
                                ? "0 8px 20px rgba(240, 147, 251, 0.3)"
                                : pkg.name === "Starter"
                                ? "0 8px 20px rgba(102, 126, 234, 0.3)"
                                : "0 8px 20px rgba(79, 172, 254, 0.3)",
                            color: "white",
                          }}
                        >
                          {pkg.ctaText}
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ms-2"
                          >
                            <FaArrowRight size={12} />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Enhanced Package Comparison */}
        <Row className="mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h3
                className="text-center fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                Package Comparison
              </motion.h3>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="border-0 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                  }}
                >
                  <Card.Body className="p-0">
                    <div className="table-responsive">
                      <Table className="mb-0">
                        <thead
                          className="text-white"
                          style={{
                            background:
                              "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 100%)",
                          }}
                        >
                          <tr>
                            <th className="border-0 p-4">Features</th>
                            <th className="border-0 p-4 text-center">
                              Starter
                            </th>
                            <th className="border-0 p-4 text-center bg-warning text-dark">
                              Pro
                            </th>
                            <th className="border-0 p-4 text-center">
                              Premium
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              feature: "Google Sheets Integration",
                              starter: <FaCheck className="text-success" />,
                              pro: <FaCheck className="text-success" />,
                              premium: <FaCheck className="text-success" />,
                            },
                            {
                              feature: "Dynamic Updates",
                              starter: "Basic",
                              pro: "2 Updates",
                              premium: "Unlimited",
                            },
                            {
                              feature: "SEO Optimization",
                              starter: "Basic",
                              pro: "Advanced",
                              premium: "Premium + Local",
                            },
                            {
                              feature: "Support Duration",
                              starter: "1 Month",
                              pro: "3 Months",
                              premium: "6 Months",
                            },
                            {
                              feature: "Revisions",
                              starter: "2",
                              pro: "5",
                              premium: "Unlimited",
                            },
                            {
                              feature: "E-commerce",
                              starter: "-",
                              pro: "Basic",
                              premium: "Full Solution",
                            },
                          ].map((row, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -20 }
                              }
                              transition={{
                                duration: 0.4,
                                delay: 0.5 + index * 0.1,
                              }}
                              whileHover={{
                                backgroundColor: "rgba(102, 126, 234, 0.05)",
                              }}
                            >
                              <td className="p-3 fw-semibold">{row.feature}</td>
                              <td className="p-3 text-center">{row.starter}</td>
                              <td className="p-3 text-center bg-light">
                                {row.pro}
                              </td>
                              <td className="p-3 text-center">{row.premium}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Custom Quote Section */}
        <Row className="mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="border-0 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow:
                      "0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
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
                        "radial-gradient(circle, rgba(79, 172, 254, 0.05) 0%, transparent 70%)",
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
                    className="p-5 text-center position-relative"
                    style={{ zIndex: 2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaEnvelope
                        size={48}
                        className="mb-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      />
                    </motion.div>
                    <motion.h3
                      className="fw-bold mb-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #feca57 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      Need a Custom Solution?
                    </motion.h3>
                    <motion.p
                      className="lead text-muted mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      Have specific requirements that don't fit our standard
                      packages? Let's discuss your unique needs and create a
                      tailored solution just for you.
                    </motion.p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        onClick={onCustomQuote}
                        className="px-5 py-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 25%, #45b7d1 50%, #96ceb4 75%, #feca57 100%)",
                          border: "none",
                          borderRadius: "25px",
                          boxShadow:
                            "0 8px 25px rgba(255, 107, 107, 0.3), 0 4px 15px rgba(78, 205, 196, 0.2)",
                        }}
                      >
                        Request Custom Quote
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="ms-2"
                        >
                          <FaArrowRight size={16} />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>

        {/* Enhanced Money Back Guarantee */}
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
                  className="border-0 shadow-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Card.Body className="p-4">
                    <Row className="align-items-center text-center">
                      {[
                        {
                          icon: FaShieldAlt,
                          title: "100% Satisfaction",
                          subtitle: "Guaranteed quality",
                          color: "#28a745",
                        },
                        {
                          icon: FaClock,
                          title: "Fast Delivery",
                          subtitle: "Within 1-2 weeks",
                          color: "#17a2b8",
                        },
                        {
                          icon: FaStar,
                          title: "5-Star Service",
                          subtitle: "Rated by 95+ clients",
                          color: "#ffc107",
                        },
                        {
                          icon: FaHandshake,
                          title: "Premium Support",
                          subtitle: "Ongoing assistance",
                          color: "#007bff",
                        },
                      ].map((item, index) => (
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
                              <item.icon size={32} color={item.color} />
                            </motion.div>
                            <h6 className="fw-bold">{item.title}</h6>
                            <small className="text-muted">
                              {item.subtitle}
                            </small>
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
                      Ready to Get Started?
                    </motion.h3>
                    <motion.p
                      className="lead mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      Choose your perfect package and let's bring your vision to
                      life. Our team is ready to create something amazing for
                      your business.
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
                          onClick={onStartProject}
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
                          Start Your Project Today
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
        .pricing-card {
          will-change: transform, box-shadow;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .pricing-card:hover {
          transform: translateY(-20px) !important;
        }
        
        .pricing-card:hover .btn {
          transform: translateY(-2px) !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.3) !important;
        }
        
        .cta-card {
          will-change: transform, box-shadow;
        }
        
        .cta-card:hover {
          transform: translateY(-5px) !important;
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 1200px) {
          .pricing-card {
            min-height: 600px !important;
            height: 600px !important;
          }
          
          .pricing-card .card-body {
            min-height: 300px !important;
          }
        }
        
        @media (max-width: 992px) {
          .pricing-card {
            min-height: 550px !important;
            height: 550px !important;
          }
          
          .pricing-card .card-body {
            min-height: 250px !important;
          }
          
          .pricing-card:hover {
            transform: translateY(-15px) scale(1.01) !important;
          }
        }
        
        @media (max-width: 768px) {
          .pricing-card {
            transform: translateY(0) !important;
            min-height: 500px !important;
            height: 500px !important;
            margin-bottom: 2rem !important;
          }
          
          .pricing-card .card-body {
            min-height: 200px !important;
          }
          
          .pricing-card:hover {
            transform: translateY(-10px) scale(1.005) !important;
          }
          
          .cta-card {
            transform: translateY(0) !important;
          }
          
          .cta-card:hover {
            transform: translateY(-3px) !important;
          }
          
          /* Improve button spacing on mobile */
          .pricing-card .btn {
            width: 100%;
            margin-top: 1rem;
            padding: 0.75rem 1.5rem !important;
          }
          
          /* Adjust card padding for mobile */
          .pricing-card .card-body {
            padding: 1.5rem !important;
          }
          
          /* Improve feature list spacing */
          .pricing-card .list-unstyled li {
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 576px) {
          .pricing-card {
            min-height: 450px !important;
            height: 450px !important;
            margin-bottom: 1.5rem !important;
          }
          
          .pricing-card .card-body {
            min-height: 150px !important;
          }
          
          .pricing-card .card-body {
            padding: 1.25rem !important;
          }
          
          /* Adjust header padding */
          .pricing-card .p-4 {
            padding: 1rem !important;
          }
          
          /* Improve text sizing */
          .pricing-card .h3 {
            font-size: 1.5rem !important;
          }
          
          .pricing-card .display-4 {
            font-size: 2.5rem !important;
          }
          
          /* Smaller buttons on mobile */
          .pricing-card .btn {
            padding: 0.6rem 1.25rem !important;
            font-size: 0.9rem !important;
          }
        }
        
        /* Ensure cards maintain equal height and width */
        .pricing-card {
          display: flex !important;
          flex-direction: column !important;
          height: 650px !important;
          width: 100% !important;
        }
        
        .pricing-card .card-body {
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          flex-grow: 1 !important;
          height: 100% !important;
          min-height: 350px !important;
        }
        
        /* Fixed header height for consistency */
        .pricing-card .text-white {
          min-height: 160px !important;
          height: 160px !important;
        }
        
        .pricing-card .list-unstyled {
          flex-grow: 1 !important;
          margin-bottom: 1rem !important;
        }
        
        .pricing-card .features-section {
          flex-grow: 1 !important;
          margin-bottom: 1rem !important;
        }
        
        /* Force equal heights for all cards in row */
        .row .col {
          display: flex !important;
        }
        
        .row .col > * {
          width: 100% !important;
          height: 100% !important;
        }
        
        /* Enhanced button animations */
        .pricing-card .btn {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        .pricing-card .btn:hover {
          transform: translateY(-3px) !important;
        }
        
        /* Improve hover effects for touch devices */
        @media (hover: none) {
          .pricing-card:hover {
            transform: none !important;
          }
          
          .pricing-card:hover .btn {
            transform: none !important;
          }
          
          .cta-card:hover {
            transform: none !important;
          }
        }
        
        /* Add subtle glow effect */
        .pricing-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .pricing-card:hover::before {
          opacity: 1;
        }
        
        /* Enhanced glass morphism effect */
        .pricing-card {
          position: relative;
          overflow: hidden;
        }
        
        /* Smooth transitions for all interactive elements */
        .pricing-card * {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
