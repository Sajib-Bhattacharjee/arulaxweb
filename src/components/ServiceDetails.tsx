import React, { useState, useRef } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  FaPalette,
  FaMobile,
  FaDatabase,
  FaShoppingCart,
  FaSearch,
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  features: string[];
  benefits: string[];
  examples: string[];
  technologies: string[];
}

interface ServiceDetailsProps {
  services?: ServiceDetail[];
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ services }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const defaultServices: ServiceDetail[] = [
    {
      id: "web-design",
      title: "Web Design",
      subtitle: "Custom, Modern, Responsive",
      description:
        "Transform your brand vision into stunning digital experiences with our custom web design services. We create visually appealing, user-friendly websites that not only look amazing but also drive conversions and business growth.",
      icon: <FaPalette size={50} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: [
        "Custom UI/UX Design tailored to your brand",
        "Mobile-first responsive design approach",
        "User experience optimization and testing",
        "Brand integration and visual identity",
        "Wireframing and prototyping",
        "Accessibility compliance (WCAG guidelines)",
        "Cross-browser compatibility testing",
        "Performance-optimized design elements",
      ],
      benefits: [
        "Increased user engagement and time on site",
        "Higher conversion rates and lead generation",
        "Professional brand image and credibility",
        "Better search engine rankings",
        "Reduced bounce rates",
        "Improved customer trust and loyalty",
      ],
      examples: [
        "Corporate websites with professional branding",
        "E-commerce stores with intuitive shopping experience",
        "Portfolio websites for creative professionals",
        "Educational institution websites",
        "Restaurant and hospitality websites",
        "Healthcare and medical practice websites",
      ],
      technologies: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "InVision",
        "Principle",
        "Zeplin",
      ],
    },
    {
      id: "responsive-development",
      title: "Responsive Development",
      subtitle: "Mobile-First, Cross-Browser",
      description:
        "Build modern, fast, and reliable web applications with our responsive development services. We use cutting-edge technologies to ensure your website performs flawlessly across all devices and browsers.",
      icon: <FaMobile size={50} />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: [
        "Mobile-first development approach",
        "Progressive Web App (PWA) development",
        "Cross-browser compatibility assurance",
        "Performance optimization and speed enhancement",
        "Clean, semantic HTML5 code structure",
        "Modern CSS3 and JavaScript implementation",
        "API integration and third-party services",
        "Content Management System integration",
      ],
      benefits: [
        "Excellent user experience on all devices",
        "Faster loading times and better performance",
        "Higher search engine rankings",
        "Reduced development and maintenance costs",
        "Future-proof and scalable architecture",
        "Better accessibility and usability",
      ],
      examples: [
        "React-based single page applications",
        "WordPress custom theme development",
        "E-commerce platforms with custom features",
        "Progressive Web Apps for mobile experience",
        "API-driven dynamic websites",
        "Multi-language and multi-region websites",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "WordPress",
        "Bootstrap",
        "Sass/SCSS",
      ],
    },
    {
      id: "google-sheets-integration",
      title: "Dynamic Google Sheets Updates",
      subtitle: "Real-Time Data Management",
      description:
        "Empower your team to update website content instantly through Google Sheets integration. Perfect for schools, businesses, and organizations that need frequent content updates without technical expertise.",
      icon: <FaDatabase size={50} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: [
        "Real-time data synchronization with Google Sheets",
        "Easy content management for non-technical users",
        "Automated website updates without coding",
        "Custom data formatting and display options",
        "Multiple sheet support and data filtering",
        "Secure API integration with authentication",
        "Data validation and error handling",
        "Backup and version control systems",
      ],
      benefits: [
        "Instant content updates without developer involvement",
        "Reduced maintenance costs and time",
        "Empowered team members to manage content",
        "Always up-to-date information for visitors",
        "Streamlined workflow and collaboration",
        "No need for complex CMS training",
      ],
      examples: [
        "School websites with student information and announcements",
        "Business directories with real-time listings",
        "Event websites with dynamic schedules and speakers",
        "Restaurant menus with daily specials",
        "Team member directories with contact information",
        "Product catalogs with inventory updates",
      ],
      technologies: [
        "Google Sheets API",
        "Google Apps Script",
        "JavaScript",
        "REST APIs",
        "OAuth 2.0",
        "JSON",
      ],
    },
    {
      id: "ecommerce-solutions",
      title: "E-commerce Solutions",
      subtitle: "WooCommerce, Shopify Integration",
      description:
        "Launch your online store with our comprehensive e-commerce solutions. From setup to optimization, we handle everything to ensure your online business runs smoothly and profitably.",
      icon: <FaShoppingCart size={50} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      features: [
        "WooCommerce and Shopify store setup",
        "Payment gateway integration (PayPal, Stripe, etc.)",
        "Inventory management and tracking systems",
        "Order processing and fulfillment workflows",
        "Customer account and wishlist functionality",
        "Shopping cart optimization for conversions",
        "Product catalog management and SEO",
        "Multi-currency and shipping options",
      ],
      benefits: [
        "Increased online sales and revenue",
        "Streamlined order management process",
        "Better customer shopping experience",
        "Reduced cart abandonment rates",
        "Automated inventory and order tracking",
        "Enhanced customer retention and loyalty",
      ],
      examples: [
        "Fashion and clothing online stores",
        "Electronics and gadget e-commerce sites",
        "Food and beverage online ordering systems",
        "Digital product and course platforms",
        "Subscription-based service websites",
        "B2B wholesale and bulk ordering portals",
      ],
      technologies: [
        "WooCommerce",
        "Shopify",
        "Stripe",
        "PayPal",
        "Magento",
        "BigCommerce",
      ],
    },
    {
      id: "seo-performance",
      title: "SEO & Performance Optimization",
      subtitle: "Google-Friendly & Fast Loading",
      description:
        "Boost your search engine rankings and user experience with our comprehensive SEO and performance optimization services. We ensure your website loads fast and ranks high in search results.",
      icon: <FaSearch size={50} />,
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      features: [
        "Technical SEO audit and optimization",
        "Page speed optimization and performance tuning",
        "Google Analytics and Search Console setup",
        "Keyword research and content optimization",
        "Meta tags and structured data implementation",
        "Image optimization and lazy loading",
        "Core Web Vitals optimization",
        "Mobile SEO and local search optimization",
      ],
      benefits: [
        "Higher search engine rankings and visibility",
        "Increased organic traffic and leads",
        "Better user experience and engagement",
        "Faster loading times and reduced bounce rates",
        "Improved conversion rates and ROI",
        "Enhanced mobile search performance",
      ],
      examples: [
        "Local business websites with map integration",
        "Blog and content websites with high traffic",
        "E-commerce sites with product optimization",
        "Service-based business websites",
        "Educational and informational websites",
        "News and media publication sites",
      ],
      technologies: [
        "Google Analytics",
        "Google Search Console",
        "GTmetrix",
        "PageSpeed Insights",
        "Screaming Frog",
        "Yoast SEO",
      ],
    },
    {
      id: "custom-development",
      title: "Custom Development",
      subtitle: "Tailored Business Solutions",
      description:
        "Transform your unique business requirements into powerful digital solutions with our custom development services. We build bespoke web applications, APIs, and integrations that perfectly match your specific needs and goals.",
      icon: <FaRocket size={50} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: [
        "Custom web application development from scratch",
        "RESTful API development and integration",
        "Database design and optimization",
        "Third-party service integrations",
        "Microservices architecture implementation",
        "Real-time data processing and analytics",
        "Custom dashboard and reporting systems",
        "Scalable and maintainable code architecture",
      ],
      benefits: [
        "Perfect fit for your unique business processes",
        "Competitive advantage through custom features",
        "Scalable solutions that grow with your business",
        "Reduced operational costs through automation",
        "Enhanced security and data control",
        "Future-proof technology stack",
      ],
      examples: [
        "Custom CRM systems for sales teams",
        "Project management platforms with unique workflows",
        "Data analytics and reporting dashboards",
        "Inventory management systems",
        "Customer portal and self-service platforms",
        "Integration platforms connecting multiple systems",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "AWS",
      ],
    },
  ];

  const servicesList = services || defaultServices;

  return (
    <section
      className="py-5 service-details-section"
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
          top: "5%",
          right: "10%",
          width: "150px",
          height: "150px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute"
        style={{
          bottom: "10%",
          left: "5%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(240, 147, 251, 0.05), rgba(245, 87, 108, 0.05))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="position-relative">
        {/* Section Header */}
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
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Service Details
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Explore our comprehensive web development services in detail
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        {servicesList.map((service, index) => (
          <div key={service.id} id={`service-detail-${service.id}`}>
            <Row className="mb-5">
              <Col>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  <Card
                    className="border-0 shadow-lg overflow-hidden service-detail-card"
                    style={{
                      transition:
                        "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      transform:
                        hoveredService === service.id
                          ? "translateY(-10px)"
                          : "translateY(0)",
                      boxShadow:
                        hoveredService === service.id
                          ? `0 25px 50px ${
                              service.gradient.includes("#667eea")
                                ? "#667eea20"
                                : "#f093fb20"
                            }`
                          : "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      className="position-relative service-header"
                      style={{
                        background: service.gradient,
                        minHeight: "200px",
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

                      <div
                        className="position-relative d-flex align-items-center"
                        style={{ zIndex: 2, minHeight: "200px" }}
                      >
                        <Container>
                          <Row className="align-items-center text-white">
                            <Col md={2} className="text-center mb-3 mb-md-0">
                              <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ duration: 0.3 }}
                                className="service-icon-wrapper"
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  background: "rgba(255,255,255,0.2)",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  backdropFilter: "blur(10px)",
                                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                                }}
                              >
                                {service.icon}
                              </motion.div>
                            </Col>
                            <Col md={10}>
                              <motion.h2
                                className="display-5 fw-bold mb-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -20 }
                                }
                                transition={{
                                  duration: 0.6,
                                  delay: index * 0.2 + 0.3,
                                }}
                              >
                                {service.title}
                              </motion.h2>
                              <motion.p
                                className="lead mb-0 opacity-90"
                                initial={{ opacity: 0, x: -20 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -20 }
                                }
                                transition={{
                                  duration: 0.6,
                                  delay: index * 0.2 + 0.4,
                                }}
                              >
                                {service.subtitle}
                              </motion.p>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </div>

                    <Card.Body className="p-5">
                      <Row>
                        <Col lg={12} className="mb-4">
                          <motion.p
                            className="lead text-muted"
                            style={{ lineHeight: "1.7" }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + 0.5,
                            }}
                          >
                            {service.description}
                          </motion.p>
                        </Col>
                      </Row>

                      <Row>
                        {/* Features */}
                        <Col lg={6} className="mb-4">
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -30 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + 0.6,
                            }}
                          >
                            <h4 className="fw-bold text-primary mb-3 d-flex align-items-center">
                              <FaCheckCircle className="me-2" size={20} />
                              Features Included
                            </h4>
                            <ul className="list-unstyled">
                              {service.features.map((feature, featureIndex) => (
                                <motion.li
                                  key={featureIndex}
                                  className="mb-2 d-flex align-items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={
                                    isInView
                                      ? { opacity: 1, x: 0 }
                                      : { opacity: 0, x: -20 }
                                  }
                                  transition={{
                                    duration: 0.4,
                                    delay:
                                      index * 0.2 + 0.7 + featureIndex * 0.1,
                                  }}
                                >
                                  <span
                                    className="me-2 mt-1"
                                    style={{
                                      width: "8px",
                                      height: "8px",
                                      background: service.gradient,
                                      borderRadius: "50%",
                                      display: "inline-block",
                                      flexShrink: 0,
                                    }}
                                  />
                                  <span className="text-muted">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </Col>

                        {/* Benefits */}
                        <Col lg={6} className="mb-4">
                          <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 30 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + 0.6,
                            }}
                          >
                            <h4 className="fw-bold text-success mb-3 d-flex align-items-center">
                              <FaStar className="me-2" size={20} />
                              Key Benefits
                            </h4>
                            <ul className="list-unstyled">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <motion.li
                                  key={benefitIndex}
                                  className="mb-2 d-flex align-items-start"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={
                                    isInView
                                      ? { opacity: 1, x: 0 }
                                      : { opacity: 0, x: 20 }
                                  }
                                  transition={{
                                    duration: 0.4,
                                    delay:
                                      index * 0.2 + 0.7 + benefitIndex * 0.1,
                                  }}
                                >
                                  <FaCheckCircle
                                    className="text-success me-2 mt-1"
                                    size={14}
                                  />
                                  <span className="text-muted">{benefit}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        </Col>
                      </Row>

                      <Row>
                        {/* Examples */}
                        <Col lg={8} className="mb-4">
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + 0.8,
                            }}
                          >
                            <h4 className="fw-bold text-warning mb-3">
                              Project Examples
                            </h4>
                            <Row>
                              {service.examples.map((example, exampleIndex) => (
                                <Col md={6} key={exampleIndex} className="mb-2">
                                  <motion.div
                                    className="d-flex align-items-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={
                                      isInView
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.9 }
                                    }
                                    transition={{
                                      duration: 0.4,
                                      delay:
                                        index * 0.2 + 0.9 + exampleIndex * 0.1,
                                    }}
                                  >
                                    <Badge
                                      bg="light"
                                      text="dark"
                                      className="me-2 px-2 py-1"
                                      style={{
                                        background: service.gradient,
                                        color: "white",
                                        border: "none",
                                      }}
                                    >
                                      {exampleIndex + 1}
                                    </Badge>
                                    <small className="text-muted">
                                      {example}
                                    </small>
                                  </motion.div>
                                </Col>
                              ))}
                            </Row>
                          </motion.div>
                        </Col>

                        {/* Technologies */}
                        <Col lg={4} className="mb-4">
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + 0.8,
                            }}
                          >
                            <h4 className="fw-bold text-info mb-3">
                              Technologies Used
                            </h4>
                            <div className="d-flex flex-wrap gap-2">
                              {service.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={
                                    isInView
                                      ? { opacity: 1, scale: 1 }
                                      : { opacity: 0, scale: 0.8 }
                                  }
                                  transition={{
                                    duration: 0.4,
                                    delay: index * 0.2 + 0.9 + techIndex * 0.1,
                                  }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <Badge
                                    style={{
                                      background: service.gradient,
                                      color: "white",
                                    }}
                                    className="px-3 py-2"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </Col>
                      </Row>

                      {/* CTA Button */}
                      <Row className="mt-4">
                        <Col>
                          <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                              isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                            }
                            transition={{
                              duration: 0.6,
                              delay: index * 0.2 + 1.0,
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                variant="primary"
                                className="px-4 py-2 fw-bold"
                                style={{
                                  background: service.gradient,
                                  border: "none",
                                  borderRadius: "25px",
                                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                                }}
                              >
                                Learn More <FaArrowRight className="ms-2" />
                              </Button>
                            </motion.div>
                          </motion.div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Row>
            {index < servicesList.length - 1 && (
              <motion.hr
                className="my-5"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scaleX: 1 }
                    : { opacity: 0, scaleX: 0 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              />
            )}
          </div>
        ))}
      </Container>

      <style>{`
        .service-detail-card {
          will-change: transform, box-shadow;
        }
        
        .service-detail-card:hover {
          transform: translateY(-10px) !important;
        }
        
        .service-icon-wrapper {
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          .service-detail-card {
            transform: translateY(0) !important;
          }
          .service-detail-card:hover {
            transform: translateY(-5px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceDetails;
