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
  FaGavel,
  FaHandshake,
  FaDollarSign,
  FaCopyright,
  FaShieldAlt,
  FaEnvelope,
  FaDownload,
  FaSearch,
  FaExclamationTriangle,
} from "react-icons/fa";

const TermsConditions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showContactAlert, setShowContactAlert] = useState(false);

  const lastUpdated = "September 17, 2025";

  const sections = [
    {
      id: "agreement",
      title: "1. Agreement Overview & Acceptance",
      icon: <FaHandshake size={24} />,
      content: `
        <p><strong>Welcome to AruLax Web!</strong> These Terms and Conditions ("Terms") govern your use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms.</p>
        
        <h5>Agreement Formation:</h5>
        <ul>
          <li><strong>Acceptance:</strong> By using our website, requesting quotes, or engaging our services, you acknowledge that you have read, understood, and agree to these Terms.</li>
          <li><strong>Legal Capacity:</strong> You confirm that you are at least 18 years old and have the legal capacity to enter into this agreement.</li>
          <li><strong>Business Authority:</strong> If representing a business, you confirm you have the authority to bind that entity to these Terms.</li>
        </ul>
        
        <h5>Scope of Agreement:</h5>
        <ul>
          <li>These Terms apply to all services provided by AruLax Web</li>
          <li>Specific project agreements may include additional terms</li>
          <li>In case of conflict, project-specific terms take precedence</li>
        </ul>
      `,
    },
    {
      id: "services",
      title: "2. Services Description & Scope",
      icon: <FaCopyright size={24} />,
      content: `
        <h5>Our Services Include:</h5>
        <ul>
          <li><strong>Custom Web Development:</strong> Bespoke websites tailored to your specific requirements and brand identity.</li>
          <li><strong>Template Customization:</strong> Professional customization of existing templates to match your needs.</li>
          <li><strong>Responsive Design:</strong> Mobile-friendly websites that work across all devices and screen sizes.</li>
          <li><strong>E-commerce Solutions:</strong> Online stores with WooCommerce, Shopify, and custom shopping cart integration.</li>
          <li><strong>Google Sheets Integration:</strong> Dynamic content management through Google Sheets for real-time updates.</li>
          <li><strong>SEO & Performance Optimization:</strong> Search engine optimization and website speed improvements.</li>
          <li><strong>Maintenance & Support:</strong> Ongoing website maintenance, updates, and technical support.</li>
        </ul>
        
        <h5>Service Delivery:</h5>
        <ul>
          <li>Services are provided remotely by our global team</li>
          <li>Project timelines are agreed upon in writing before commencement</li>
          <li>We provide regular updates and progress reports</li>
          <li>Client approval is required at key project milestones</li>
        </ul>
        
        <h5>Service Limitations:</h5>
        <ul>
          <li>We do not provide hosting services (we can recommend providers)</li>
          <li>Domain registration is the client's responsibility</li>
          <li>Content creation beyond basic setup may incur additional costs</li>
          <li>Third-party integrations depend on external service availability</li>
        </ul>
      `,
    },
    {
      id: "responsibilities",
      title: "3. User Responsibilities & Obligations",
      icon: <FaShieldAlt size={24} />,
      content: `
        <h5>Client Responsibilities:</h5>
        <ul>
          <li><strong>Accurate Information:</strong> Provide complete, accurate, and up-to-date information for your project.</li>
          <li><strong>Content Provision:</strong> Supply all necessary content, images, and materials in a timely manner.</li>
          <li><strong>Feedback & Approvals:</strong> Provide timely feedback and approvals to keep projects on schedule.</li>
          <li><strong>Access Credentials:</strong> Provide necessary login credentials and access to required platforms.</li>
          <li><strong>Backup Responsibility:</strong> Maintain backups of your website and data.</li>
        </ul>
        
        <h5>Prohibited Uses:</h5>
        <ul>
          <li><strong>Illegal Activities:</strong> Using our services for any illegal or unauthorized purposes.</li>
          <li><strong>Copyright Infringement:</strong> Using copyrighted materials without proper authorization.</li>
          <li><strong>Malicious Content:</strong> Uploading viruses, malware, or harmful code.</li>
          <li><strong>Spam & Abuse:</strong> Using websites for spam, harassment, or abusive content.</li>
          <li><strong>Competitive Intelligence:</strong> Reverse engineering or copying our proprietary methods.</li>
        </ul>
        
        <h5>Content Standards:</h5>
        <ul>
          <li>All content must comply with applicable laws and regulations</li>
          <li>Content must not infringe on third-party rights</li>
          <li>Adult content requires special handling and additional terms</li>
          <li>We reserve the right to refuse projects that conflict with our values</li>
        </ul>
      `,
    },
    {
      id: "payment",
      title: "4. Payment Terms & Pricing",
      icon: <FaDollarSign size={24} />,
      content: `
        <h5>Pricing Structure:</h5>
        <ul>
          <li><strong>Fixed Packages:</strong> Starter ($199), Pro ($299), Premium ($499) with defined features.</li>
          <li><strong>Custom Projects:</strong> Quoted based on specific requirements and scope.</li>
          <li><strong>Hourly Services:</strong> $75-150/hour depending on complexity and urgency.</li>
          <li><strong>Maintenance Plans:</strong> Monthly or annual plans for ongoing support.</li>
        </ul>
        
        <h5>Payment Terms:</h5>
        <ul>
          <li><strong>Payment Schedule:</strong> 50% deposit required to start, 50% upon completion.</li>
          <li><strong>Large Projects:</strong> May be divided into milestone-based payments.</li>
          <li><strong>Payment Methods:</strong> Credit card, PayPal, bank transfer, or other agreed methods.</li>
          <li><strong>Currency:</strong> All prices quoted in USD unless otherwise specified.</li>
          <li><strong>Late Payments:</strong> 1.5% monthly interest on overdue amounts after 30 days.</li>
        </ul>
        
        <h5>Additional Costs:</h5>
        <ul>
          <li><strong>Scope Changes:</strong> Modifications beyond original scope incur additional charges.</li>
          <li><strong>Rush Orders:</strong> Expedited delivery may include rush fees (25-50% surcharge).</li>
          <li><strong>Third-Party Services:</strong> Premium plugins, themes, or services billed separately.</li>
          <li><strong>Revisions:</strong> Unlimited revisions within scope; major changes may incur fees.</li>
        </ul>
        
        <h5>Refund Policy:</h5>
        <ul>
          <li><strong>Satisfaction Guarantee:</strong> 14-day money-back guarantee for completed projects.</li>
          <li><strong>Partial Refunds:</strong> Available for cancelled projects based on work completed.</li>
          <li><strong>No Refund Scenarios:</strong> After client approval of final deliverables.</li>
          <li><strong>Dispute Resolution:</strong> Good faith effort to resolve issues before refund requests.</li>
        </ul>
      `,
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property Rights",
      icon: <FaCopyright size={24} />,
      content: `
        <h5>Client Ownership:</h5>
        <ul>
          <li><strong>Final Deliverables:</strong> Upon full payment, clients own all custom-developed code and designs.</li>
          <li><strong>Content Rights:</strong> Clients retain ownership of all content, images, and materials provided.</li>
          <li><strong>Custom Features:</strong> Unique functionalities developed specifically for your project belong to you.</li>
          <li><strong>Domain & Hosting:</strong> Clients maintain full control over their domain and hosting accounts.</li>
        </ul>
        
        <h5>AruLax Web Rights:</h5>
        <ul>
          <li><strong>Templates & Frameworks:</strong> We retain rights to our proprietary templates and development frameworks.</li>
          <li><strong>General Methodologies:</strong> Our development processes and general techniques remain our property.</li>
          <li><strong>Portfolio Rights:</strong> Right to showcase completed projects in our portfolio (with client permission).</li>
          <li><strong>Improvement Rights:</strong> Right to use general insights from projects to improve our services.</li>
        </ul>
        
        <h5>Third-Party Rights:</h5>
        <ul>
          <li><strong>Open Source:</strong> Open source components remain under their respective licenses.</li>
          <li><strong>Premium Assets:</strong> Licensed themes, plugins, and assets remain under their original licenses.</li>
          <li><strong>Stock Images:</strong> Stock photos and graphics are licensed for your specific use only.</li>
          <li><strong>Fonts & Icons:</strong> Typography and icon licenses transfer with appropriate usage rights.</li>
        </ul>
        
        <h5>Usage Restrictions:</h5>
        <ul>
          <li>Clients cannot resell or redistribute our proprietary templates</li>
          <li>Custom code cannot be used as basis for competing services</li>
          <li>Portfolio display requires mutual agreement</li>
          <li>Testimonials and case studies require client approval</li>
        </ul>
      `,
    },
    {
      id: "liability",
      title: "6. Limitation of Liability & Disclaimers",
      icon: <FaExclamationTriangle size={24} />,
      content: `
        <h5>Service Disclaimers:</h5>
        <ul>
          <li><strong>Best Efforts:</strong> We provide services using industry best practices but cannot guarantee specific outcomes.</li>
          <li><strong>Third-Party Dependence:</strong> Some features depend on external services (Google Sheets, payment processors, etc.).</li>
          <li><strong>Browser Compatibility:</strong> We ensure compatibility with modern browsers but cannot support all legacy versions.</li>
          <li><strong>Performance Variables:</strong> Website speed depends on hosting, content size, and external factors.</li>
        </ul>
        
        <h5>Limitation of Liability:</h5>
        <ul>
          <li><strong>Maximum Liability:</strong> Our total liability is limited to the amount paid for services.</li>
          <li><strong>Indirect Damages:</strong> We are not liable for lost profits, data loss, or consequential damages.</li>
          <li><strong>Business Interruption:</strong> Not responsible for business losses due to website downtime.</li>
          <li><strong>Third-Party Actions:</strong> Not liable for actions of hosting providers, payment processors, or other third parties.</li>
        </ul>
        
        <h5>Client Indemnification:</h5>
        <ul>
          <li>Clients agree to indemnify us against claims arising from their content or use of services</li>
          <li>This includes copyright infringement, defamation, or illegal content claims</li>
          <li>Clients are responsible for ensuring they have rights to all provided materials</li>
        </ul>
        
        <h5>Force Majeure:</h5>
        <ul>
          <li>We are not liable for delays due to circumstances beyond our control</li>
          <li>This includes natural disasters, pandemics, internet outages, or government actions</li>
          <li>We will make reasonable efforts to minimize impact and communicate delays</li>
        </ul>
      `,
    },
    {
      id: "termination",
      title: "7. Termination & Project Cancellation",
      icon: <FaGavel size={24} />,
      content: `
        <h5>Client Termination Rights:</h5>
        <ul>
          <li><strong>Project Cancellation:</strong> Clients may cancel projects with written notice.</li>
          <li><strong>Refund Calculation:</strong> Refunds based on work completed and expenses incurred.</li>
          <li><strong>Deliverable Transfer:</strong> All completed work will be provided upon final payment.</li>
          <li><strong>Notice Period:</strong> 7-day notice preferred for ongoing projects.</li>
        </ul>
        
        <h5>AruLax Web Termination Rights:</h5>
        <ul>
          <li><strong>Breach of Terms:</strong> We may terminate for violation of these terms.</li>
          <li><strong>Non-Payment:</strong> Services may be suspended for overdue payments.</li>
          <li><strong>Scope Creep:</strong> Excessive changes beyond agreed scope may result in termination.</li>
          <li><strong>Uncooperative Clients:</strong> Failure to provide necessary materials or feedback.</li>
        </ul>
        
        <h5>Post-Termination:</h5>
        <ul>
          <li><strong>Work Product:</strong> Completed work delivered upon final payment settlement.</li>
          <li><strong>Confidentiality:</strong> Mutual confidentiality obligations continue indefinitely.</li>
          <li><strong>Final Invoice:</strong> All outstanding amounts due within 30 days.</li>
          <li><strong>Data Return:</strong> Client data returned or securely deleted as requested.</li>
        </ul>
        
        <h5>Survival Clauses:</h5>
        <ul>
          <li>Payment obligations, intellectual property rights, and liability limitations survive termination</li>
          <li>Confidentiality and non-disparagement clauses remain in effect</li>
          <li>Dispute resolution procedures continue to apply</li>
        </ul>
      `,
    },
    {
      id: "legal",
      title: "8. Legal Jurisdiction & Changes",
      icon: <FaGavel size={24} />,
      content: `
        <h5>Governing Law:</h5>
        <ul>
          <li><strong>Jurisdiction:</strong> These Terms are governed by the laws of [Your Jurisdiction].</li>
          <li><strong>Dispute Resolution:</strong> Disputes will be resolved through binding arbitration or local courts.</li>
          <li><strong>Language:</strong> English is the official language for all agreements and communications.</li>
          <li><strong>Severability:</strong> If any provision is invalid, the remainder remains enforceable.</li>
        </ul>
        
        <h5>Changes to Terms:</h5>
        <ul>
          <li><strong>Modification Rights:</strong> We reserve the right to update these Terms at any time.</li>
          <li><strong>Notification:</strong> Changes will be posted on our website with updated effective date.</li>
          <li><strong>Email Notice:</strong> Significant changes may be communicated via email to active clients.</li>
          <li><strong>Acceptance:</strong> Continued use after changes constitutes acceptance of new Terms.</li>
        </ul>
        
        <h5>Entire Agreement:</h5>
        <ul>
          <li>These Terms constitute the entire agreement between parties</li>
          <li>Supersedes all prior agreements and understandings</li>
          <li>Modifications must be in writing and signed by both parties</li>
          <li>Project-specific agreements may supplement these Terms</li>
        </ul>
        
        <h5>Contact for Legal Matters:</h5>
        <ul>
          <li><strong>Legal Department:</strong> legal@arulaxweb.com</li>
          <li><strong>Business Address:</strong> [Your Business Address]</li>
          <li><strong>Response Time:</strong> Legal inquiries answered within 5-7 business days</li>
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

  return (
    <div className="terms-conditions-page" style={{ width: "100%" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
                  <FaGavel size={48} className="me-3" />
                  <h1 className="display-4 fw-bold mb-0">Terms & Conditions</h1>
                </div>
                <p className="lead mb-4">
                  Legal terms and conditions governing the use of our website
                  and services.
                </p>
                <Badge bg="warning" text="dark" className="mb-4 p-2">
                  <FaExclamationTriangle className="me-2" />
                  Please read carefully before using our services
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
                    Legal Questions
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
                  placeholder="Search terms and conditions..."
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
            <strong>Redirecting to Contact Page...</strong> Our legal team will
            assist you!
          </Alert>
        </Container>
      )}

      {/* Main Content */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={3} className="d-none d-lg-block">
              <Card className="sticky-top" style={{ top: "100px" }}>
                <Card.Header className="bg-danger text-white">
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
                                "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
                    <Button variant="danger" onClick={() => setSearchTerm("")}>
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
                <h3 className="fw-bold text-danger mb-4">
                  Questions About Our Terms?
                </h3>
                <p className="lead text-muted mb-4">
                  Our legal team is here to clarify any questions about our
                  terms and conditions.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={handleContactUs}
                    className="d-flex align-items-center"
                  >
                    <FaEnvelope className="me-2" />
                    Contact Legal Team
                  </Button>
                  <Button
                    variant="outline-danger"
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
        .terms-conditions-page .accordion-button:not(.collapsed) {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
        
        .terms-conditions-page .accordion-button:focus {
          box-shadow: 0 0 0 0.25rem rgba(240, 147, 251, 0.25);
        }
        
        .terms-conditions-page h5 {
          color: #f5576c;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .terms-conditions-page ul {
          margin-bottom: 1.5rem;
        }
        
        .terms-conditions-page li {
          margin-bottom: 0.5rem;
        }
        
        .terms-conditions-page a {
          color: #f5576c;
          text-decoration: none;
        }
        
        .terms-conditions-page a:hover {
          color: #f093fb;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default TermsConditions;
