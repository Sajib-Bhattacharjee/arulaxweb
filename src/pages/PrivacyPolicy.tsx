import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
  Alert,
} from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaEnvelope,
  FaDownload,
  FaSearch,
} from "react-icons/fa";

const PrivacyPolicy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactAlert, setShowContactAlert] = useState(false);

  const lastUpdated = "September 17, 2025";

  const sections = [
    {
      id: "overview",
      title: "1. Overview & Introduction",
      icon: <FaShieldAlt size={24} />,
      content: `
        <p>Welcome to AruLax Web ("we," "our," or "us"). We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
        
        <p><strong>Who We Are:</strong> AruLax Web is a web development agency specializing in custom websites, template customization, e-commerce solutions, and Google Sheets integration for dynamic content management.</p>
        
        <p><strong>Purpose of This Policy:</strong> This policy informs you about our practices regarding the collection, use, and disclosure of personal information that we receive from users of our website and services.</p>
        
        <p>By accessing or using our website, you agree to the collection and use of information in accordance with this policy.</p>
      `,
    },
    {
      id: "data-collected",
      title: "2. Information We Collect",
      icon: <FaDatabase size={24} />,
      content: `
        <h5>Personal Information:</h5>
        <ul>
          <li><strong>Contact Information:</strong> Name, email address, phone number, and business details collected through contact forms, quote requests, and service inquiries.</li>
          <li><strong>Project Information:</strong> Details about your project requirements, budget, timeline, and specific service needs.</li>
          <li><strong>Communication Data:</strong> Records of our communications with you, including emails, calls, and chat messages.</li>
        </ul>
        
        <h5>Technical Information:</h5>
        <ul>
          <li><strong>Website Usage Data:</strong> IP address, browser type, operating system, referring URLs, and pages visited.</li>
          <li><strong>Cookies and Tracking:</strong> Information collected through cookies, web beacons, and similar technologies (see our Cookie Policy for details).</li>
          <li><strong>Google Sheets Integration Data:</strong> When we implement Google Sheets integration for your website, we may access and process data you choose to store in your Google Sheets for dynamic content updates.</li>
        </ul>
        
        <h5>Analytics Data:</h5>
        <ul>
          <li><strong>Website Performance:</strong> Data about how you interact with our website to improve user experience.</li>
          <li><strong>Service Usage:</strong> Information about which services interest you most to better tailor our offerings.</li>
        </ul>
      `,
    },
    {
      id: "data-use",
      title: "3. How We Use Your Information",
      icon: <FaUserShield size={24} />,
      content: `
        <h5>Primary Uses:</h5>
        <ul>
          <li><strong>Service Delivery:</strong> To provide web development services, respond to inquiries, and deliver requested quotes and consultations.</li>
          <li><strong>Project Management:</strong> To manage your projects, communicate updates, and ensure timely delivery of services.</li>
          <li><strong>Customer Support:</strong> To provide technical support, answer questions, and resolve issues.</li>
        </ul>
        
        <h5>Business Operations:</h5>
        <ul>
          <li><strong>Website Improvement:</strong> To analyze website usage and improve our services, user experience, and content.</li>
          <li><strong>Marketing Communications:</strong> To send you relevant information about our services, updates, and promotional offers (with your consent).</li>
          <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights and interests.</li>
        </ul>
        
        <h5>Google Sheets Integration:</h5>
        <ul>
          <li><strong>Dynamic Content:</strong> To implement real-time data updates on your website using your Google Sheets data.</li>
          <li><strong>Content Management:</strong> To enable you to easily update website content through Google Sheets interface.</li>
        </ul>
      `,
    },
    {
      id: "third-party",
      title: "4. Third-Party Services & Data Sharing",
      icon: <FaDatabase size={24} />,
      content: `
        <h5>Third-Party Services We Use:</h5>
        <ul>
          <li><strong>Google Services:</strong> Google Sheets API, Google Analytics, Google Workspace for business communications.</li>
          <li><strong>Hosting Providers:</strong> Secure hosting services to store and deliver website content.</li>
          <li><strong>Email Services:</strong> Professional email marketing and communication tools.</li>
          <li><strong>Payment Processors:</strong> Secure payment gateways for processing service payments.</li>
          <li><strong>Development Tools:</strong> Code repositories, project management tools, and collaboration platforms.</li>
        </ul>
        
        <h5>Data Sharing Principles:</h5>
        <ul>
          <li>We do not sell, trade, or rent your personal information to third parties.</li>
          <li>We only share information with trusted service providers who assist in our operations.</li>
          <li>All third-party providers are contractually obligated to protect your information.</li>
          <li>We may disclose information if required by law or to protect our legal rights.</li>
        </ul>
      `,
    },
    {
      id: "data-protection",
      title: "5. Data Protection & Security",
      icon: <FaShieldAlt size={24} />,
      content: `
        <h5>Security Measures:</h5>
        <ul>
          <li><strong>Encryption:</strong> All data transmission is secured using SSL/TLS encryption.</li>
          <li><strong>Secure Hosting:</strong> We use reputable hosting providers with robust security measures.</li>
          <li><strong>Access Controls:</strong> Limited access to personal data on a need-to-know basis.</li>
          <li><strong>Regular Updates:</strong> We keep our systems and security measures up to date.</li>
          <li><strong>Data Backup:</strong> Regular backups to prevent data loss while maintaining security.</li>
        </ul>
        
        <h5>Data Retention:</h5>
        <ul>
          <li>We retain personal information only as long as necessary for the purposes outlined in this policy.</li>
          <li>Project-related data is typically retained for 3 years after project completion.</li>
          <li>Contact information may be retained longer if you've consented to marketing communications.</li>
          <li>You can request deletion of your data at any time (subject to legal requirements).</li>
        </ul>
      `,
    },
    {
      id: "user-rights",
      title: "6. Your Rights & Choices",
      icon: <FaUserShield size={24} />,
      content: `
        <h5>Your Privacy Rights:</h5>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information (right to be forgotten).</li>
          <li><strong>Portability:</strong> Request transfer of your data to another service provider.</li>
          <li><strong>Objection:</strong> Object to processing of your information for marketing purposes.</li>
          <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
        </ul>
        
        <h5>How to Exercise Your Rights:</h5>
        <ul>
          <li>Email us at privacy@arulaxweb.com with your request.</li>
          <li>Include sufficient information to verify your identity.</li>
          <li>We will respond to your request within 30 days.</li>
          <li>Some requests may require additional verification for security purposes.</li>
        </ul>
        
        <h5>Marketing Communications:</h5>
        <ul>
          <li>You can opt out of marketing emails by clicking the unsubscribe link.</li>
          <li>You can update your communication preferences by contacting us.</li>
          <li>We will honor your preferences and update our records accordingly.</li>
        </ul>
      `,
    },
    {
      id: "contact-info",
      title: "7. Contact Information & Questions",
      icon: <FaEnvelope size={24} />,
      content: `
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
        
        <div class="contact-details">
          <p><strong>Privacy Officer:</strong> AruLax Web Privacy Team</p>
          <p><strong>Email:</strong> <a href="mailto:privacy@arulaxweb.com">privacy@arulaxweb.com</a></p>
          <p><strong>General Contact:</strong> <a href="mailto:hello@arulaxweb.com">hello@arulaxweb.com</a></p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Response Time:</strong> We aim to respond to privacy inquiries within 24-48 hours.</p>
        </div>
        
        <p>For general business inquiries, please use our <a href="/contact">Contact Page</a>.</p>
        
        <h5>Changes to This Policy:</h5>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
        <ul>
          <li>Posting the new Privacy Policy on this page</li>
          <li>Updating the "Last Updated" date</li>
          <li>Sending email notifications for significant changes (if you've provided consent)</li>
        </ul>
        
        <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
      `,
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContactUs = () => {
    setShowContactAlert(true);
    setTimeout(() => setShowContactAlert(false), 5000);
    // Navigate to contact page
    window.location.href = "/contact";
  };

  const handleDownloadPDF = () => {
    console.log("Download PDF functionality would be implemented here");
    // This would generate and download a PDF version
  };

  return (
    <div className="privacy-policy-page" style={{ width: "100%" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <Container>
          <Row className="text-center">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <FaShieldAlt size={48} className="me-3" />
                  <h1 className="display-4 fw-bold mb-0">Privacy Policy</h1>
                </div>
                <p className="lead mb-4">
                  Your privacy is important to us. Learn how we collect, use,
                  and protect your information.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    variant="light"
                    size="lg"
                    onClick={handleDownloadPDF}
                    className="d-flex align-items-center"
                  >
                    <FaDownload className="me-2" />
                    Download PDF
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    onClick={handleContactUs}
                    className="d-flex align-items-center"
                  >
                    <FaEnvelope className="me-2" />
                    Contact Us
                  </Button>
                </div>
                <p className="mt-4 mb-0">
                  <small>
                    <strong>Last Updated:</strong> {lastUpdated}
                  </small>
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search and Navigation */}
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <div className="position-relative">
                <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                <input
                  type="text"
                  className="form-control form-control-lg ps-5"
                  placeholder="Search privacy policy..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: "25px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Alert for Contact */}
      {showContactAlert && (
        <Container className="mt-3">
          <Alert variant="success" className="text-center">
            <strong>Redirecting to Contact Page...</strong> We'll help you with
            any privacy questions!
          </Alert>
        </Container>
      )}

      {/* Main Content */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={3} className="d-none d-lg-block">
              {/* Table of Contents */}
              <Card className="sticky-top" style={{ top: "100px" }}>
                <Card.Header className="bg-primary text-white">
                  <h6 className="mb-0">Table of Contents</h6>
                </Card.Header>
                <Card.Body className="p-0">
                  {sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#${section.id}`}
                      className="d-block p-3 text-decoration-none border-bottom"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {section.title}
                    </a>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            <Col lg={9}>
              {/* Policy Sections */}
              <Accordion defaultActiveKey="0" className="shadow-sm">
                {filteredSections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Accordion.Item eventKey={index.toString()} id={section.id}>
                      <Accordion.Header>
                        <div className="d-flex align-items-center">
                          <div
                            className="me-3 d-flex align-items-center justify-content-center"
                            style={{
                              width: "40px",
                              height: "40px",
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              borderRadius: "10px",
                              color: "white",
                            }}
                          >
                            {section.icon}
                          </div>
                          <h5 className="mb-0">{section.title}</h5>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="p-4">
                        <div
                          dangerouslySetInnerHTML={{ __html: section.content }}
                          style={{ lineHeight: "1.6" }}
                        />
                      </Accordion.Body>
                    </Accordion.Item>
                  </motion.div>
                ))}
              </Accordion>

              {filteredSections.length === 0 && (
                <Card className="text-center py-5">
                  <Card.Body>
                    <FaSearch size={48} className="text-muted mb-3" />
                    <h5>No results found</h5>
                    <p className="text-muted">
                      Try searching with different keywords or browse all
                      sections above.
                    </p>
                    <Button variant="primary" onClick={() => setSearchTerm("")}>
                      Show All Sections
                    </Button>
                  </Card.Body>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="fw-bold text-primary mb-4">
                  Have Questions About Your Privacy?
                </h3>
                <p className="lead text-muted mb-4">
                  We're here to help! Contact us for any privacy-related
                  questions or concerns.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleContactUs}
                    className="d-flex align-items-center"
                  >
                    <FaEnvelope className="me-2" />
                    Contact Privacy Team
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={handleDownloadPDF}
                    className="d-flex align-items-center"
                  >
                    <FaDownload className="me-2" />
                    Download PDF Copy
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .privacy-policy-page .accordion-button:not(.collapsed) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .privacy-policy-page .accordion-button:focus {
          box-shadow: 0 0 0 0.25rem rgba(102, 126, 234, 0.25);
        }
        
        .privacy-policy-page .contact-details {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #667eea;
          margin: 1rem 0;
        }
        
        .privacy-policy-page h5 {
          color: #667eea;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .privacy-policy-page ul {
          margin-bottom: 1.5rem;
        }
        
        .privacy-policy-page li {
          margin-bottom: 0.5rem;
        }
        
        .privacy-policy-page a {
          color: #667eea;
          text-decoration: none;
        }
        
        .privacy-policy-page a:hover {
          color: #764ba2;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
