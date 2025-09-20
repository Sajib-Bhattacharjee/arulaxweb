import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGlobe, FaClock } from "react-icons/fa";

interface LocationMapProps {
  address?: string;
  mapEmbedUrl?: string;
  timezone?: string;
  workingHours?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({
  address = "Global Remote Team",
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e4b2f9b%3A0x9b7a4e5e3c4c5d6e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
  timezone = "Multiple Timezones",
  workingHours = "24/7 Support Available",
}) => {
  return (
    <section className="py-5 bg-light location-map-responsive">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="display-4 fw-bold text-primary mb-4">
                Our Location
              </h2>
              <p className="lead text-muted">
                We work remotely to serve clients worldwide with local expertise
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Map */}
          <Col xl={8} lg={7} md={12} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg overflow-hidden h-100">
                <div className="position-relative">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="400"
                    style={{
                      border: 0,
                      minHeight: "350px",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AruLax Web Location"
                  ></iframe>

                  {/* Responsive Overlay with company info */}
                  <div
                    className="position-absolute top-0 start-0 m-2 m-md-3 p-2 p-md-3 bg-white rounded-3 shadow-sm"
                    style={{
                      maxWidth: "250px",
                      width: "auto",
                    }}
                  >
                    <h5 className="fw-bold text-primary mb-1 mb-md-2 fs-6 fs-md-5">
                      AruLax Web
                    </h5>
                    <p className="small text-muted mb-0 d-none d-sm-block">
                      Professional Web Development Services
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Location Info */}
          <Col xl={4} lg={5} md={12} className="mb-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-100 d-flex flex-column">
                {/* Address */}
                <Card className="border-0 shadow-sm mb-3 flex-grow-1">
                  <Card.Body className="p-3 p-md-4 text-center h-100 d-flex flex-column justify-content-center">
                    <div
                      className="mx-auto mb-2 mb-md-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        borderRadius: "50%",
                        color: "white",
                      }}
                    >
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <h5 className="fw-bold text-primary mb-1 mb-md-2 fs-6 fs-md-5">
                      Address
                    </h5>
                    <p className="text-muted mb-1 mb-md-2 small">{address}</p>
                    <small className="text-muted d-none d-sm-block">
                      Serving clients globally with remote expertise
                    </small>
                  </Card.Body>
                </Card>

                {/* Working Hours */}
                <Card className="border-0 shadow-sm mb-3 flex-grow-1">
                  <Card.Body className="p-3 p-md-4 text-center h-100 d-flex flex-column justify-content-center">
                    <div
                      className="mx-auto mb-2 mb-md-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background:
                          "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                        borderRadius: "50%",
                        color: "white",
                      }}
                    >
                      <FaClock size={20} />
                    </div>
                    <h5 className="fw-bold text-info mb-1 mb-md-2 fs-6 fs-md-5">
                      Working Hours
                    </h5>
                    <p className="text-muted mb-1 mb-md-2 small">
                      {workingHours}
                    </p>
                    <small className="text-muted d-none d-sm-block">
                      {timezone}
                    </small>
                  </Card.Body>
                </Card>

                {/* Global Reach */}
                <Card className="border-0 shadow-sm flex-grow-1">
                  <Card.Body className="p-3 p-md-4 text-center h-100 d-flex flex-column justify-content-center">
                    <div
                      className="mx-auto mb-2 mb-md-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        background:
                          "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                        borderRadius: "50%",
                        color: "white",
                      }}
                    >
                      <FaGlobe size={20} />
                    </div>
                    <h5 className="fw-bold text-warning mb-1 mb-md-2 fs-6 fs-md-5">
                      Global Reach
                    </h5>
                    <p className="text-muted mb-1 mb-md-2 small">
                      Worldwide Service
                    </p>
                    <small className="text-muted d-none d-sm-block">
                      Working with clients across all continents
                    </small>
                  </Card.Body>
                </Card>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Additional Info */}
        <Row className="mt-4 mt-md-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className="border-0 shadow-lg remote-first-card text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 25%, #EC4899 50%, #A855F7 75%, #06B6D4 100%)",
                  backgroundSize: "400% 400%",
                  animation: "gradientShift 10s ease infinite",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
                    zIndex: 1,
                  }}
                />
                <Card.Body
                  className="p-4 p-md-5 text-center position-relative"
                  style={{ zIndex: 2 }}
                >
                  <Row className="align-items-center">
                    <Col lg={8} md={12} className="mb-3 mb-lg-0">
                      <motion.h4
                        className="fw-bold mb-3 fs-4 fs-md-3 remote-title"
                        style={{
                          textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        Remote-First Approach
                      </motion.h4>
                      <motion.p
                        className="mb-0 small remote-desc"
                        style={{
                          lineHeight: 1.6,
                          textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        Our distributed team model allows us to work efficiently
                        with clients worldwide, providing personalized service
                        regardless of your location. We use modern collaboration
                        tools to ensure seamless communication and project
                        delivery.
                      </motion.p>
                    </Col>
                    <Col lg={4} md={12} className="text-center">
                      <motion.div
                        className="d-flex justify-content-center gap-3 gap-md-4 mt-3 mt-lg-0 flex-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {[
                          { number: "95+", label: "Happy Clients" },
                          { number: "24/7", label: "Support" },
                          { number: "Global", label: "Reach" },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            className="text-center flex-grow-1 min-width-80 remote-stat"
                            whileHover={{ scale: 1.1, y: -3 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.div
                              className="fw-bold h4 h3-md mb-1 stat-number"
                              style={{
                                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                                filter:
                                  "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                              }}
                              animate={{
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.5,
                              }}
                            >
                              {stat.number}
                            </motion.div>
                            <small
                              className="stat-label"
                              style={{
                                textShadow: "0 1px 4px rgba(0,0,0,0.2)",
                              }}
                            >
                              {stat.label}
                            </small>
                          </motion.div>
                        ))}
                      </motion.div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Enhanced Responsive Styles */}
      <style>{`
        /* Responsive Location Map Styles */
        .location-map-responsive {
          position: relative;
        }
        
        /* Enhanced responsive breakpoints */
        @media (max-width: 1399px) {
          .location-map-responsive .col-xl-8 {
            margin-bottom: 1rem;
          }
        }
        
        @media (max-width: 991px) {
          .location-map-responsive .col-lg-7,
          .location-map-responsive .col-lg-5 {
            margin-bottom: 2rem;
          }
          
          .location-map-responsive iframe {
            min-height: 300px !important;
          }
        }
        
        @media (max-width: 767px) {
          .location-map-responsive .col-md-12 {
            margin-bottom: 1.5rem;
          }
          
          .location-map-responsive iframe {
            min-height: 250px !important;
          }
          
          .location-map-responsive .card-body {
            padding: 1rem !important;
          }
          
          .location-map-responsive .d-flex.gap-2 {
            gap: 0.5rem !important;
          }
        }
        
        @media (max-width: 575px) {
          .location-map-responsive iframe {
            min-height: 200px !important;
          }
          
          .location-map-responsive .card-body {
            padding: 0.75rem !important;
          }
          
          .location-map-responsive .fs-6 {
            font-size: 0.9rem !important;
          }
          
          .location-map-responsive .small {
            font-size: 0.75rem !important;
          }
          
          .location-map-responsive .h5 {
            font-size: 1.1rem !important;
          }
        }
        
        /* Flex utilities for better responsive behavior */
        .min-width-80 {
          min-width: 80px;
        }
        
        /* Enhanced card responsiveness */
        .location-map-responsive .card {
          transition: all 0.3s ease;
        }
        
        .location-map-responsive .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15) !important;
        }
        
        /* Responsive icon sizing */
        @media (max-width: 575px) {
          .location-map-responsive .fa {
            font-size: 16px !important;
          }
        }
        
        /* Responsive text sizing */
        @media (max-width: 767px) {
          .location-map-responsive .display-4 {
            font-size: 2rem !important;
          }
          
          .location-map-responsive .lead {
            font-size: 1rem !important;
          }
        }
        
        /* Enhanced iframe responsiveness */
        .location-map-responsive iframe {
          transition: all 0.3s ease;
        }
        
        /* Better spacing for mobile */
        @media (max-width: 991px) {
          .location-map-responsive .mb-4.mb-lg-0 {
            margin-bottom: 2rem !important;
          }
        }
        
        /* Improved card heights on mobile */
        @media (max-width: 767px) {
          .location-map-responsive .flex-grow-1 {
            flex-grow: 0 !important;
          }
          
          .location-map-responsive .h-100 {
            height: auto !important;
          }
        }
        
        /* Better responsive spacing */
        @media (max-width: 575px) {
          .location-map-responsive .mt-4.mt-md-5 {
            margin-top: 1.5rem !important;
          }
          
          .location-map-responsive .mb-3 {
            margin-bottom: 1rem !important;
          }
        }
        
        /* Enhanced Remote-First Approach Styles */
        .remote-first-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .remote-first-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.8s ease;
          z-index: 1;
        }
        
        .remote-first-card:hover::before {
          left: 100%;
        }
        
        .remote-first-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
        }
        
        .remote-title {
          transition: all 0.3s ease;
        }
        
        .remote-first-card:hover .remote-title {
          transform: translateY(-2px);
          text-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
        }
        
        .remote-desc {
          transition: all 0.3s ease;
        }
        
        .remote-first-card:hover .remote-desc {
          opacity: 0.95;
          transform: translateY(-1px);
        }
        
        .remote-stat {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .remote-stat:hover {
          transform: scale(1.1) translateY(-3px);
        }
        
        .stat-number {
          transition: all 0.3s ease;
        }
        
        .remote-stat:hover .stat-number {
          text-shadow: 0 4px 12px rgba(0,0,0,0.4) !important;
        }
        
        .stat-label {
          transition: all 0.3s ease;
        }
        
        .remote-stat:hover .stat-label {
          opacity: 0.9;
        }
        
        /* Gradient Shift Animation */
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
        
        /* Mobile Responsive Enhancements */
        @media (max-width: 768px) {
          .remote-first-card {
            margin: 1rem 0;
          }
          
          .remote-stat {
            margin-bottom: 1rem;
          }
        }
        
        @media (max-width: 576px) {
          .remote-first-card .card-body {
            padding: 1.5rem !important;
          }
          
          .remote-title {
            font-size: 1.5rem !important;
          }
          
          .remote-desc {
            font-size: 0.9rem !important;
          }
        }
        
        /* Accessibility Enhancements */
        @media (prefers-reduced-motion: reduce) {
          .remote-first-card,
          .remote-stat,
          .stat-number {
            transition: none !important;
            animation: none !important;
          }
          
          .remote-first-card::before {
            display: none;
          }
        }
        
        /* High Contrast Mode Support */
        @media (prefers-contrast: high) {
          .remote-first-card {
            border: 2px solid currentColor;
          }
          
          .stat-number,
          .remote-title {
            text-shadow: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LocationMap;
