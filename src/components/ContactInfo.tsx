import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaSkype,
} from "react-icons/fa";

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
  color: string;
  description: string;
}

interface SocialLink {
  icon: React.ReactNode;
  platform: string;
  url: string;
  color: string;
  followers?: string;
}

interface ContactInfoProps {
  email?: string;
  phone?: string;
  whatsapp?: string;
  skype?: string;
  socialLinks?: SocialLink[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  email = "hello@arulaxweb.com",
  phone = "+1 (555) 123-4567",
  whatsapp = "+1 (555) 123-4567",
  skype = "arulaxweb",
  socialLinks,
}) => {
  const defaultSocialLinks: SocialLink[] = [
    {
      icon: <FaLinkedin size={24} />,
      platform: "LinkedIn",
      url: "https://linkedin.com/company/arulaxweb",
      color: "#0077b5",
      followers: "500+",
    },
    {
      icon: <FaTwitter size={24} />,
      platform: "Twitter",
      url: "https://twitter.com/arulaxweb",
      color: "#1da1f2",
      followers: "1.2K",
    },
    {
      icon: <FaGithub size={24} />,
      platform: "GitHub",
      url: "https://github.com/arulaxweb",
      color: "#333",
      followers: "200+",
    },
    {
      icon: <FaInstagram size={24} />,
      platform: "Instagram",
      url: "https://instagram.com/arulaxweb",
      color: "#e4405f",
      followers: "800+",
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      icon: <FaEnvelope size={32} />,
      label: "Email",
      value: email,
      link: `mailto:${email}`,
      color: "#dc3545",
      description: "Send us an email anytime",
    },
    {
      icon: <FaPhone size={32} />,
      label: "Phone",
      value: phone,
      link: `tel:${phone}`,
      color: "#28a745",
      description: "Call us during business hours",
    },
    {
      icon: <FaWhatsapp size={32} />,
      label: "WhatsApp",
      value: whatsapp,
      link: `https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`,
      color: "#25d366",
      description: "Chat with us instantly",
    },
    {
      icon: <FaSkype size={32} />,
      label: "Skype",
      value: skype,
      link: `skype:${skype}?chat`,
      color: "#00aff0",
      description: "Video call or screen share",
    },
  ];

  const socials = socialLinks || defaultSocialLinks;

  return (
    <section className="py-5">
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
                Get In Touch
              </h2>
              <p className="lead text-muted">
                Multiple ways to reach us - choose what works best for you
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Contact Methods */}
        <Row className="mb-5">
          {contactMethods.map((method, index) => (
            <Col lg={3} md={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="h-100 border-0 shadow-sm text-center contact-method-card"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => window.open(method.link, "_blank")}
                >
                  <Card.Body className="p-4">
                    <div
                      className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: `${method.color}15`,
                        borderRadius: "50%",
                        color: method.color,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {method.icon}
                    </div>
                    <h5 className="fw-bold text-dark mb-2">{method.label}</h5>
                    <p className="text-primary fw-semibold mb-2">
                      {method.value}
                    </p>
                    <small className="text-muted">{method.description}</small>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Social Media Section */}
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold text-primary mb-3">
                      Follow Us on Social Media
                    </h3>
                    <p className="text-muted">
                      Stay updated with our latest projects, tips, and industry
                      insights
                    </p>
                  </div>

                  <Row className="justify-content-center">
                    {socials.map((social, index) => (
                      <Col lg={3} md={6} className="mb-4" key={index}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Card
                            className="border-0 shadow-sm text-center social-card"
                            style={{
                              cursor: "pointer",
                              transition: "all 0.3s ease",
                            }}
                            onClick={() => window.open(social.url, "_blank")}
                          >
                            <Card.Body className="p-4">
                              <div
                                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  backgroundColor: social.color,
                                  borderRadius: "50%",
                                  color: "white",
                                }}
                              >
                                {social.icon}
                              </div>
                              <h6 className="fw-bold text-dark mb-1">
                                {social.platform}
                              </h6>
                              {social.followers && (
                                <small className="text-muted">
                                  {social.followers} followers
                                </small>
                              )}
                            </Card.Body>
                          </Card>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>

                  {/* Response Time Promise */}
                  <div className="mt-4 pt-4 border-top text-center">
                    <Row>
                      <Col md={4} className="mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                          <div
                            className="me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "50px",
                              height: "50px",
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              borderRadius: "50%",
                              color: "white",
                            }}
                          >
                            <FaEnvelope size={20} />
                          </div>
                          <div className="text-start">
                            <div className="fw-bold text-primary">Email</div>
                            <small className="text-muted">24h response</small>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className="mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                          <div
                            className="me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "50px",
                              height: "50px",
                              background:
                                "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                              borderRadius: "50%",
                              color: "white",
                            }}
                          >
                            <FaWhatsapp size={20} />
                          </div>
                          <div className="text-start">
                            <div className="fw-bold text-info">WhatsApp</div>
                            <small className="text-muted">
                              Instant response
                            </small>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className="mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                          <div
                            className="me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "50px",
                              height: "50px",
                              background:
                                "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                              borderRadius: "50%",
                              color: "white",
                            }}
                          >
                            <FaPhone size={20} />
                          </div>
                          <div className="text-start">
                            <div className="fw-bold text-warning">Phone</div>
                            <small className="text-muted">Business hours</small>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .contact-method-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .social-card:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default ContactInfo;
