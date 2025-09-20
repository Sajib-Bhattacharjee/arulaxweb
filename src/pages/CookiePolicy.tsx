import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
  Alert,
  Badge,
} from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaCookie,
  FaCog,
  FaChartBar,
  FaShoppingCart,
  FaShieldAlt,
  FaEnvelope,
  FaDownload,
  FaSearch,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const CookiePolicy: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactAlert, setShowContactAlert] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Always required
    analytics: true,
    marketing: false,
    functional: true,
  });

  const lastUpdated = "September 17, 2025";

  const sections = [
    {
      id: "introduction",
      title: "1. What Are Cookies & Why We Use Them",
      icon: <FaCookie size={24} />,
      content: `
        <h5>What Are Cookies?</h5>
        <p>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.</p>
        
        <h5>Why AruLax Web Uses Cookies:</h5>
        <ul>
          <li><strong>Essential Functionality:</strong> To ensure our website works properly and securely.</li>
          <li><strong>User Experience:</strong> To remember your preferences and settings.</li>
          <li><strong>Performance Analysis:</strong> To understand how visitors interact with our website.</li>
          <li><strong>Service Improvement:</strong> To identify areas for enhancement and optimization.</li>
          <li><strong>Contact Forms:</strong> To prevent spam and ensure form submissions work correctly.</li>
        </ul>
        
        <h5>Legal Basis:</h5>
        <p>We use cookies based on your consent (where required by law) and our legitimate business interests in providing and improving our services. Essential cookies are necessary for the website to function and don't require consent.</p>
      `,
    },
    {
      id: "types",
      title: "2. Types of Cookies We Use",
      icon: <FaCog size={24} />,
      content: `
        <h5>Essential Cookies (Always Active)</h5>
        <p>These cookies are necessary for our website to function properly and cannot be disabled.</p>
        <ul>
          <li><strong>Session Management:</strong> Keep you logged in and maintain your session.</li>
          <li><strong>Security:</strong> Protect against cross-site request forgery and other security threats.</li>
          <li><strong>Form Functionality:</strong> Remember form data and prevent duplicate submissions.</li>
          <li><strong>Load Balancing:</strong> Ensure optimal website performance and availability.</li>
        </ul>
        
        <h5>Analytics Cookies</h5>
        <p>Help us understand how visitors use our website so we can improve it.</p>
        <ul>
          <li><strong>Google Analytics:</strong> Tracks page views, user behavior, and traffic sources.</li>
          <li><strong>Performance Monitoring:</strong> Measures website speed and identifies technical issues.</li>
          <li><strong>User Journey:</strong> Understands how users navigate through our site.</li>
          <li><strong>Conversion Tracking:</strong> Measures the effectiveness of our contact forms and CTAs.</li>
        </ul>
        
        <h5>Functional Cookies</h5>
        <p>Enhance your experience by remembering your choices and preferences.</p>
        <ul>
          <li><strong>Language Preferences:</strong> Remember your preferred language settings.</li>
          <li><strong>Theme Settings:</strong> Store your dark/light mode preferences.</li>
          <li><strong>Form Preferences:</strong> Remember your contact form preferences.</li>
          <li><strong>Accessibility:</strong> Store accessibility settings and preferences.</li>
        </ul>
        
        <h5>Marketing Cookies (Optional)</h5>
        <p>Used to deliver relevant advertisements and track marketing campaign effectiveness.</p>
        <ul>
          <li><strong>Social Media:</strong> Enable social media sharing and integration.</li>
          <li><strong>Advertising:</strong> Show relevant ads on other websites (if enabled).</li>
          <li><strong>Campaign Tracking:</strong> Measure the success of marketing campaigns.</li>
          <li><strong>Retargeting:</strong> Show relevant content to previous visitors (if enabled).</li>
        </ul>
      `,
    },
    {
      id: "third-party",
      title: "3. Third-Party Cookies & Services",
      icon: <FaShoppingCart size={24} />,
      content: `
        <h5>Google Services:</h5>
        <ul>
          <li><strong>Google Analytics:</strong> Provides detailed website analytics and user behavior insights.</li>
          <li><strong>Google Sheets API:</strong> Enables dynamic content updates for client websites.</li>
          <li><strong>Google Fonts:</strong> Delivers web fonts for better typography (may set cookies).</li>
          <li><strong>Google Maps:</strong> Powers embedded maps on our contact page.</li>
        </ul>
        
        <h5>Social Media Platforms:</h5>
        <ul>
          <li><strong>LinkedIn:</strong> Social sharing buttons and professional network integration.</li>
          <li><strong>YouTube:</strong> Embedded videos and channel integration.</li>
          <li><strong>Facebook:</strong> Social sharing and potential advertising pixels (if enabled).</li>
        </ul>
        
        <h5>Development & Hosting Services:</h5>
        <ul>
          <li><strong>Hosting Providers:</strong> May set cookies for security and performance optimization.</li>
          <li><strong>CDN Services:</strong> Content delivery networks for faster loading times.</li>
          <li><strong>Security Services:</strong> Protection against malicious attacks and spam.</li>
        </ul>
        
        <h5>Communication Tools:</h5>
        <ul>
          <li><strong>Email Marketing:</strong> Newsletter signup and email campaign tracking (if subscribed).</li>
          <li><strong>Live Chat:</strong> Customer support chat functionality (if implemented).</li>
          <li><strong>Contact Forms:</strong> Spam protection and form submission tracking.</li>
        </ul>
        
        <p><strong>Note:</strong> Third-party cookies are governed by the respective third-party privacy policies. We recommend reviewing their policies for complete information.</p>
      `,
    },
    {
      id: "consent",
      title: "4. Cookie Consent & Your Choices",
      icon: <FaShieldAlt size={24} />,
      content: `
        <h5>Consent Management:</h5>
        <p>We respect your right to control how cookies are used on our website. You can manage your cookie preferences at any time.</p>
        
        <h5>Cookie Categories & Control:</h5>
        <ul>
          <li><strong>Essential Cookies:</strong> Cannot be disabled as they are necessary for website functionality.</li>
          <li><strong>Analytics Cookies:</strong> Can be disabled, but this may limit our ability to improve the website.</li>
          <li><strong>Functional Cookies:</strong> Can be disabled, but some features may not work as expected.</li>
          <li><strong>Marketing Cookies:</strong> Can be disabled at any time without affecting core website functionality.</li>
        </ul>
        
        <h5>How to Manage Consent:</h5>
        <ul>
          <li><strong>Cookie Banner:</strong> Use the cookie consent banner when you first visit our website.</li>
          <li><strong>Settings Panel:</strong> Access detailed cookie settings through the "Manage Cookies" link.</li>
          <li><strong>Browser Settings:</strong> Configure cookie preferences directly in your browser.</li>
          <li><strong>Contact Us:</strong> Email us to update your preferences or ask questions.</li>
        </ul>
        
        <h5>Withdrawal of Consent:</h5>
        <p>You can withdraw your consent at any time by:</p>
        <ul>
          <li>Adjusting your cookie preferences on our website</li>
          <li>Clearing your browser cookies</li>
          <li>Contacting us directly</li>
        </ul>
        
        <p>Withdrawing consent will not affect the lawfulness of processing based on consent before withdrawal.</p>
      `,
    },
    {
      id: "browser-settings",
      title: "5. Managing Cookies in Your Browser",
      icon: <FaCog size={24} />,
      content: `
        <h5>Browser-Specific Instructions:</h5>
        
        <h6>Google Chrome:</h6>
        <ul>
          <li>Go to Settings > Privacy and Security > Cookies and other site data</li>
          <li>Choose your preferred cookie settings</li>
          <li>You can block all cookies, allow all cookies, or block third-party cookies</li>
        </ul>
        
        <h6>Mozilla Firefox:</h6>
        <ul>
          <li>Go to Options > Privacy & Security</li>
          <li>Under "Cookies and Site Data," choose your preferences</li>
          <li>You can manage exceptions for specific websites</li>
        </ul>
        
        <h6>Safari:</h6>
        <ul>
          <li>Go to Safari > Preferences > Privacy</li>
          <li>Choose your cookie and tracking preferences</li>
          <li>You can prevent cross-site tracking and manage website data</li>
        </ul>
        
        <h6>Microsoft Edge:</h6>
        <ul>
          <li>Go to Settings > Cookies and site permissions</li>
          <li>Manage cookies and site data</li>
          <li>Configure tracking prevention settings</li>
        </ul>
        
        <h5>Mobile Browsers:</h5>
        <ul>
          <li><strong>iOS Safari:</strong> Settings > Safari > Privacy & Security</li>
          <li><strong>Android Chrome:</strong> Chrome app > Settings > Site settings > Cookies</li>
          <li><strong>Mobile Firefox:</strong> Firefox app > Settings > Data Management</li>
        </ul>
        
        <h5>Important Notes:</h5>
        <ul>
          <li>Disabling cookies may affect website functionality</li>
          <li>Some features may not work properly without cookies</li>
          <li>You may need to re-enter information on each visit</li>
          <li>Contact forms may not function correctly without essential cookies</li>
        </ul>
      `,
    },
    {
      id: "data-retention",
      title: "6. Cookie Duration & Data Retention",
      icon: <FaChartBar size={24} />,
      content: `
        <h5>Cookie Lifespan:</h5>
        
        <h6>Session Cookies:</h6>
        <ul>
          <li><strong>Duration:</strong> Deleted when you close your browser</li>
          <li><strong>Purpose:</strong> Essential for website functionality during your visit</li>
          <li><strong>Examples:</strong> Login status, form data, security tokens</li>
        </ul>
        
        <h6>Persistent Cookies:</h6>
        <ul>
          <li><strong>Duration:</strong> Remain on your device for a specified period</li>
          <li><strong>Typical Lifespan:</strong> 30 days to 2 years, depending on purpose</li>
          <li><strong>Examples:</strong> Preferences, analytics data, marketing tracking</li>
        </ul>
        
        <h5>Specific Cookie Durations:</h5>
        <ul>
          <li><strong>Essential Cookies:</strong> Session-based or up to 1 year</li>
          <li><strong>Analytics Cookies:</strong> Up to 2 years (Google Analytics default)</li>
          <li><strong>Functional Cookies:</strong> 30 days to 1 year</li>
          <li><strong>Marketing Cookies:</strong> 30 days to 1 year</li>
        </ul>
        
        <h5>Data Retention Principles:</h5>
        <ul>
          <li>We retain cookie data only as long as necessary for the intended purpose</li>
          <li>Analytics data is anonymized and aggregated</li>
          <li>Personal identifiers are removed or encrypted</li>
          <li>Regular data cleanup and purging processes are in place</li>
        </ul>
        
        <h5>Automatic Deletion:</h5>
        <ul>
          <li>Cookies automatically expire based on their set duration</li>
          <li>Old analytics data is automatically purged</li>
          <li>Withdrawn consent results in immediate cookie deletion</li>
          <li>Browser clearing removes all stored cookies</li>
        </ul>
      `,
    },
    {
      id: "updates-contact",
      title: "7. Policy Updates & Contact Information",
      icon: <FaEnvelope size={24} />,
      content: `
        <h5>Policy Updates:</h5>
        <p>We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements.</p>
        
        <h5>How We Notify You:</h5>
        <ul>
          <li><strong>Website Notice:</strong> Updated policy posted on our website with new effective date</li>
          <li><strong>Email Notification:</strong> Significant changes communicated via email (if subscribed)</li>
          <li><strong>Cookie Banner:</strong> New consent request for material changes</li>
          <li><strong>Version History:</strong> Previous versions available upon request</li>
        </ul>
        
        <h5>Contact Information:</h5>
        <div class="contact-details">
          <p><strong>Cookie Questions:</strong> AruLax Web Privacy Team</p>
          <p><strong>Email:</strong> <a href="mailto:cookies@arulaxweb.com">cookies@arulaxweb.com</a></p>
          <p><strong>Privacy Officer:</strong> <a href="mailto:privacy@arulaxweb.com">privacy@arulaxweb.com</a></p>
          <p><strong>General Contact:</strong> <a href="mailto:hello@arulaxweb.com">hello@arulaxweb.com</a></p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Response Time:</strong> Cookie inquiries answered within 24-48 hours</p>
        </div>
        
        <h5>What to Include in Your Inquiry:</h5>
        <ul>
          <li>Specific cookie-related question or concern</li>
          <li>Browser type and version (if technical issue)</li>
          <li>Steps you've already taken to manage cookies</li>
          <li>Your preferred method of response</li>
        </ul>
        
        <h5>Additional Resources:</h5>
        <ul>
          <li><strong>Privacy Policy:</strong> <a href="/privacy-policy">Complete privacy information</a></li>
          <li><strong>Terms & Conditions:</strong> <a href="/terms-conditions">Legal terms of service</a></li>
          <li><strong>Contact Page:</strong> <a href="/contact">General business inquiries</a></li>
        </ul>
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
    window.location.href = "/contact";
  };

  const handleDownloadPDF = () => {
    console.log("Download PDF functionality would be implemented here");
  };

  const handleCookieToggle = (cookieType: keyof typeof cookieSettings) => {
    if (cookieType === "essential") return; // Essential cookies cannot be disabled

    setCookieSettings((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }));
  };

  const saveCookiePreferences = () => {
    console.log("Saving cookie preferences:", cookieSettings);
    // This would implement actual cookie consent management
    alert("Cookie preferences saved successfully!");
  };

  return (
    <div className="cookie-policy-page" style={{ width: "100%" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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
                  <FaCookie size={48} className="me-3" />
                  <h1 className="display-4 fw-bold mb-0">Cookie Policy</h1>
                </div>
                <p className="lead mb-4">
                  Learn how we use cookies to improve your experience on our
                  website.
                </p>
                <Badge bg="info" text="dark" className="mb-4 p-2">
                  <FaCog className="me-2" />
                  Manage your cookie preferences below
                </Badge>
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
                    Cookie Questions
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

      {/* Cookie Preferences Panel */}
      <section className="py-4 bg-light border-bottom">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow-sm">
                <Card.Header className="bg-info text-white">
                  <h5 className="mb-0 d-flex align-items-center">
                    <FaCog className="me-2" />
                    Manage Cookie Preferences
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={6} className="mb-3">
                      <div className="d-flex justify-content-between align-items-center p-3 border rounded">
                        <div>
                          <strong>Essential Cookies</strong>
                          <br />
                          <small className="text-muted">
                            Required for website functionality
                          </small>
                        </div>
                        <FaToggleOn size={24} className="text-success" />
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex justify-content-between align-items-center p-3 border rounded">
                        <div>
                          <strong>Analytics Cookies</strong>
                          <br />
                          <small className="text-muted">
                            Help us improve the website
                          </small>
                        </div>
                        <Button
                          variant="link"
                          className="p-0"
                          onClick={() => handleCookieToggle("analytics")}
                        >
                          {cookieSettings.analytics ? (
                            <FaToggleOn size={24} className="text-success" />
                          ) : (
                            <FaToggleOff size={24} className="text-muted" />
                          )}
                        </Button>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex justify-content-between align-items-center p-3 border rounded">
                        <div>
                          <strong>Functional Cookies</strong>
                          <br />
                          <small className="text-muted">
                            Remember your preferences
                          </small>
                        </div>
                        <Button
                          variant="link"
                          className="p-0"
                          onClick={() => handleCookieToggle("functional")}
                        >
                          {cookieSettings.functional ? (
                            <FaToggleOn size={24} className="text-success" />
                          ) : (
                            <FaToggleOff size={24} className="text-muted" />
                          )}
                        </Button>
                      </div>
                    </Col>
                    <Col md={6} className="mb-3">
                      <div className="d-flex justify-content-between align-items-center p-3 border rounded">
                        <div>
                          <strong>Marketing Cookies</strong>
                          <br />
                          <small className="text-muted">
                            Personalized advertising
                          </small>
                        </div>
                        <Button
                          variant="link"
                          className="p-0"
                          onClick={() => handleCookieToggle("marketing")}
                        >
                          {cookieSettings.marketing ? (
                            <FaToggleOn size={24} className="text-success" />
                          ) : (
                            <FaToggleOff size={24} className="text-muted" />
                          )}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-3">
                    <Button
                      variant="info"
                      size="lg"
                      onClick={saveCookiePreferences}
                      className="px-5"
                    >
                      Save Preferences
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search */}
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <div className="position-relative">
                <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                <input
                  type="text"
                  className="form-control form-control-lg ps-5"
                  placeholder="Search cookie policy..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: "25px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Alert */}
      {showContactAlert && (
        <Container className="mt-3">
          <Alert variant="success" className="text-center">
            <strong>Redirecting to Contact Page...</strong> We'll help you with
            cookie questions!
          </Alert>
        </Container>
      )}

      {/* Main Content */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={3} className="d-none d-lg-block">
              <Card className="sticky-top" style={{ top: "100px" }}>
                <Card.Header className="bg-info text-white">
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
                                "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
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
                    <Button variant="info" onClick={() => setSearchTerm("")}>
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
                <h3 className="fw-bold text-info mb-4">
                  Questions About Cookies?
                </h3>
                <p className="lead text-muted mb-4">
                  We're here to help you understand and manage your cookie
                  preferences.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    variant="info"
                    size="lg"
                    onClick={handleContactUs}
                    className="d-flex align-items-center"
                  >
                    <FaEnvelope className="me-2" />
                    Contact Cookie Team
                  </Button>
                  <Button
                    variant="outline-info"
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
        .cookie-policy-page .accordion-button:not(.collapsed) {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }
        
        .cookie-policy-page .accordion-button:focus {
          box-shadow: 0 0 0 0.25rem rgba(79, 172, 254, 0.25);
        }
        
        .cookie-policy-page .contact-details {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid #4facfe;
          margin: 1rem 0;
        }
        
        .cookie-policy-page h5 {
          color: #4facfe;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .cookie-policy-page h6 {
          color: #00f2fe;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .cookie-policy-page ul {
          margin-bottom: 1.5rem;
        }
        
        .cookie-policy-page li {
          margin-bottom: 0.5rem;
        }
        
        .cookie-policy-page a {
          color: #4facfe;
          text-decoration: none;
        }
        
        .cookie-policy-page a:hover {
          color: #00f2fe;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default CookiePolicy;
