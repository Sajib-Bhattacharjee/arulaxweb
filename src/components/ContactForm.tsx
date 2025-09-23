import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  Tooltip,
  OverlayTrigger,
  ProgressBar,
} from "react-bootstrap";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaProjectDiagram,
  FaDollarSign,
  FaCommentDots,
  FaPaperPlane,
  FaPhone,
  FaUpload,
  FaClock,
  FaCheck,
  FaExclamationTriangle,
  FaInfoCircle,
  FaSpinner,
  FaShieldAlt,
  FaRobot,
  FaCalendarAlt,
  FaComments,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  contactMethod: string;
  message: string;
  files: FileList | null;
  honeypot: string; // Anti-spam field
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    contactMethod: "",
    message: "",
    files: null,
    honeypot: "", // Hidden anti-spam field
  });

  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [uploadProgress, setUploadProgress] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const projectTypes = [
    "Web Design",
    "Responsive Development",
    "E-commerce Solution",
    "Google Sheets Integration",
    "SEO & Performance",
    "Complete Website Package",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Other / Custom Project",
  ];

  const budgetRanges = [
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Let's Discuss",
  ];

  const timelineOptions = [
    "ASAP (Rush Job)",
    "1-2 weeks",
    "2-4 weeks",
    "1-2 months",
    "2-3 months",
    "3+ months",
    "Flexible",
  ];

  const contactMethods = [
    "Email",
    "Phone Call",
    "WhatsApp",
    "Video Call (Zoom/Teams)",
    "In-Person Meeting",
    "No Preference",
  ];

  // Input validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-()]/g, ""));
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      ""
    );
  };

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.length < 2
          ? "Name must be at least 2 characters long"
          : "";
      case "email":
        return !validateEmail(value)
          ? "Please enter a valid email address"
          : "";
      case "phone":
        return value && !validatePhone(value)
          ? "Please enter a valid phone number"
          : "";
      case "projectType":
        return !value ? "Please select a project type" : "";
      case "budget":
        return !value ? "Please select a budget range" : "";
      case "timeline":
        return !value ? "Please select a project timeline" : "";
      case "contactMethod":
        return !value ? "Please select a preferred contact method" : "";
      case "message":
        return value.length < 10
          ? "Please provide more details about your project (at least 10 characters)"
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Real-time validation
    const error = validateField(name, sanitizedValue);
    setFieldErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFormData((prev) => ({
      ...prev,
      files: files,
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFormData((prev) => ({
      ...prev,
      files: files,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check honeypot field (anti-spam)
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    // Validate all fields
    const errors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "honeypot" && key !== "files") {
        const error = validateField(
          key,
          formData[key as keyof FormData] as string
        );
        if (error) errors[key] = error;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setValidated(true);
      setShowError(true);
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    // Simulate file upload progress
    if (formData.files && formData.files.length > 0) {
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    try {
      // Simulate Google Sheets API integration
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (onSubmit) {
        onSubmit(formData);
      }

      console.log("Form submitted:", formData);

      // Google Sheets integration simulation
      console.log("Google Sheets data:", {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        projectType: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        contactMethod: formData.contactMethod,
        message: formData.message,
        fileCount: formData.files ? formData.files.length : 0,
      });

      // Email notification simulation
      console.log("Sending email notification:", {
        to: "hello@arulaxweb.com",
        subject: `New Project Inquiry from ${formData.name}`,
        body: `Project Type: ${formData.projectType}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nMessage: ${formData.message}`,
      });

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        contactMethod: "",
        message: "",
        files: null,
        honeypot: "",
      });
      setFieldErrors({});
      setValidated(false);
      setUploadProgress(0);

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-5 contact-form-section"
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

      <Container className="position-relative" fluid="lg">
        <Row className="justify-content-center g-3">
          <Col xs={12} sm={11} md={10} lg={9} xl={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-5">
                <motion.h2
                  className="display-4 fw-bold mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  Start Your Project
                </motion.h2>
                <motion.p
                  className="lead text-muted mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Tell us about your project and get a personalized quote within
                  24 hours
                </motion.p>

                {/* Security Badge */}
                <motion.div
                  className="d-flex align-items-center justify-content-center gap-2 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <FaShieldAlt className="text-success" size={16} />
                  <small className="text-muted">
                    <strong>Secure Form</strong> - Your information is encrypted
                    and protected
                  </small>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="border-0 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow:
                      "0 25px 50px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
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
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <Card.Body
                    className="p-5 position-relative"
                    style={{ zIndex: 2 }}
                  >
                    {/* Success Message */}
                    <AnimatePresence>
                      {showSuccess && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Alert
                            variant="success"
                            className="mb-4 border-0"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(40, 167, 69, 0.05) 100%)",
                              border: "2px solid rgba(40, 167, 69, 0.2)",
                              borderRadius: "15px",
                            }}
                          >
                            <div className="d-flex align-items-center gap-3">
                              <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              >
                                <FaCheck size={24} className="text-success" />
                              </motion.div>
                              <div>
                                <Alert.Heading className="mb-2">
                                  Thank you for your inquiry!
                                </Alert.Heading>
                                <p className="mb-0">
                                  We've received your message and will get back
                                  to you within 24 hours with a detailed
                                  response. Check your email for a confirmation
                                  message.
                                </p>
                              </div>
                            </div>
                          </Alert>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Error Message */}
                    <AnimatePresence>
                      {showError && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Alert
                            variant="danger"
                            className="mb-4 border-0"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(220, 53, 69, 0.1) 0%, rgba(220, 53, 69, 0.05) 100%)",
                              border: "2px solid rgba(220, 53, 69, 0.2)",
                              borderRadius: "15px",
                            }}
                          >
                            <div className="d-flex align-items-center gap-3">
                              <FaExclamationTriangle
                                size={24}
                                className="text-danger"
                              />
                              <div>
                                <Alert.Heading className="mb-2">
                                  Please fix the following errors:
                                </Alert.Heading>
                                <ul className="mb-0">
                                  {Object.values(fieldErrors)
                                    .filter((error) => error)
                                    .map((error, index) => (
                                      <li key={index}>{error}</li>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          </Alert>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Honeypot Field - Hidden Anti-Spam */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <Row className="g-3">
                        {/* Name Field */}
                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaUser className="me-2" size={14} />
                              Full Name *
                            </Form.Label>
                            <motion.div
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                                size="lg"
                                className={fieldErrors.name ? "is-invalid" : ""}
                                style={{
                                  background: "rgba(255, 255, 255, 0.9)",
                                  backdropFilter: "blur(10px)",
                                  border: fieldErrors.name
                                    ? "2px solid #dc3545"
                                    : "2px solid rgba(102, 126, 234, 0.2)",
                                  borderRadius: "15px",
                                  padding: "1rem 1rem 1rem 3rem",
                                  transition:
                                    "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                  boxShadow: fieldErrors.name
                                    ? "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
                                    : "0 4px 15px rgba(102, 126, 234, 0.1)",
                                }}
                                aria-describedby={
                                  fieldErrors.name ? "name-error" : undefined
                                }
                              />
                            </motion.div>

                            {/* Animated Icon */}
                            <motion.div
                              className="position-absolute"
                              style={{
                                left: "1rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 4,
                              }}
                              animate={{
                                scale: formData.name ? [1, 1.2, 1] : 1,
                                rotate: formData.name ? [0, 360] : 0,
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              <FaUser
                                size={18}
                                style={{
                                  color: fieldErrors.name
                                    ? "#dc3545"
                                    : formData.name
                                    ? "#28a745"
                                    : "#667eea",
                                  transition: "color 0.3s ease",
                                }}
                              />
                            </motion.div>

                            {/* Tooltip */}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip>
                                  Enter your full name as it appears on official
                                  documents
                                </Tooltip>
                              }
                            >
                              <div
                                className="position-absolute"
                                style={{
                                  right: "1rem",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  zIndex: 4,
                                }}
                              >
                                <FaInfoCircle
                                  size={14}
                                  className="text-muted"
                                />
                              </div>
                            </OverlayTrigger>

                            {/* Error Message */}
                            {fieldErrors.name && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-danger mt-2 d-flex align-items-center gap-2"
                                id="name-error"
                              >
                                <FaExclamationTriangle size={12} />
                                <small>{fieldErrors.name}</small>
                              </motion.div>
                            )}
                          </Form.Group>
                        </Col>

                        {/* Email Field */}
                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaEnvelope className="me-2" size={14} />
                              Email Address *
                            </Form.Label>
                            <motion.div
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email address"
                                required
                                size="lg"
                                className={
                                  fieldErrors.email ? "is-invalid" : ""
                                }
                                style={{
                                  background: "rgba(255, 255, 255, 0.9)",
                                  backdropFilter: "blur(10px)",
                                  border: fieldErrors.email
                                    ? "2px solid #dc3545"
                                    : "2px solid rgba(102, 126, 234, 0.2)",
                                  borderRadius: "15px",
                                  padding: "1rem 1rem 1rem 3rem",
                                  transition:
                                    "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                  boxShadow: fieldErrors.email
                                    ? "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
                                    : "0 4px 15px rgba(102, 126, 234, 0.1)",
                                }}
                                aria-describedby={
                                  fieldErrors.email ? "email-error" : undefined
                                }
                              />
                            </motion.div>

                            {/* Animated Icon */}
                            <motion.div
                              className="position-absolute"
                              style={{
                                left: "1rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 4,
                              }}
                              animate={{
                                scale: formData.email ? [1, 1.2, 1] : 1,
                                rotate: formData.email ? [0, 360] : 0,
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              <FaEnvelope
                                size={18}
                                style={{
                                  color: fieldErrors.email
                                    ? "#dc3545"
                                    : formData.email
                                    ? "#28a745"
                                    : "#667eea",
                                  transition: "color 0.3s ease",
                                }}
                              />
                            </motion.div>

                            {/* Tooltip */}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip>
                                  We'll use this to send you project updates and
                                  quotes
                                </Tooltip>
                              }
                            >
                              <div
                                className="position-absolute"
                                style={{
                                  right: "1rem",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  zIndex: 4,
                                }}
                              >
                                <FaInfoCircle
                                  size={14}
                                  className="text-muted"
                                />
                              </div>
                            </OverlayTrigger>

                            {/* Error Message */}
                            {fieldErrors.email && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-danger mt-2 d-flex align-items-center gap-2"
                                id="email-error"
                              >
                                <FaExclamationTriangle size={12} />
                                <small>{fieldErrors.email}</small>
                              </motion.div>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Phone Field */}
                      <Row className="g-3">
                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaPhone className="me-2" size={14} />
                              Phone Number
                            </Form.Label>
                            <motion.div
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Form.Control
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                size="lg"
                                className={
                                  fieldErrors.phone ? "is-invalid" : ""
                                }
                                style={{
                                  background: "rgba(255, 255, 255, 0.9)",
                                  backdropFilter: "blur(10px)",
                                  border: fieldErrors.phone
                                    ? "2px solid #dc3545"
                                    : "2px solid rgba(102, 126, 234, 0.2)",
                                  borderRadius: "15px",
                                  padding: "1rem 1rem 1rem 3rem",
                                  transition:
                                    "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                  boxShadow: fieldErrors.phone
                                    ? "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
                                    : "0 4px 15px rgba(102, 126, 234, 0.1)",
                                }}
                                aria-describedby={
                                  fieldErrors.phone ? "phone-error" : undefined
                                }
                              />
                            </motion.div>

                            {/* Animated Icon */}
                            <motion.div
                              className="position-absolute"
                              style={{
                                left: "1rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 4,
                              }}
                              animate={{
                                scale: formData.phone ? [1, 1.2, 1] : 1,
                                rotate: formData.phone ? [0, 360] : 0,
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              <FaPhone
                                size={18}
                                style={{
                                  color: fieldErrors.phone
                                    ? "#dc3545"
                                    : formData.phone
                                    ? "#28a745"
                                    : "#667eea",
                                  transition: "color 0.3s ease",
                                }}
                              />
                            </motion.div>

                            {/* Tooltip */}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip>
                                  Optional: For faster communication and project
                                  updates
                                </Tooltip>
                              }
                            >
                              <div
                                className="position-absolute"
                                style={{
                                  right: "1rem",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  zIndex: 4,
                                }}
                              >
                                <FaInfoCircle
                                  size={14}
                                  className="text-muted"
                                />
                              </div>
                            </OverlayTrigger>

                            {/* Error Message */}
                            {fieldErrors.phone && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-danger mt-2 d-flex align-items-center gap-2"
                                id="phone-error"
                              >
                                <FaExclamationTriangle size={12} />
                                <small>{fieldErrors.phone}</small>
                              </motion.div>
                            )}
                          </Form.Group>
                        </Col>

                        {/* Project Type Field */}
                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaProjectDiagram className="me-2" size={14} />
                              Project Type *
                            </Form.Label>
                            <motion.div
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Form.Select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleInputChange}
                                required
                                size="lg"
                                className={
                                  fieldErrors.projectType ? "is-invalid" : ""
                                }
                                style={{
                                  background: "rgba(255, 255, 255, 0.9)",
                                  backdropFilter: "blur(10px)",
                                  border: fieldErrors.projectType
                                    ? "2px solid #dc3545"
                                    : "2px solid rgba(102, 126, 234, 0.2)",
                                  borderRadius: "15px",
                                  padding: "1rem 1rem 1rem 3rem",
                                  transition:
                                    "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                  boxShadow: fieldErrors.projectType
                                    ? "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
                                    : "0 4px 15px rgba(102, 126, 234, 0.1)",
                                }}
                                aria-describedby={
                                  fieldErrors.projectType
                                    ? "projectType-error"
                                    : undefined
                                }
                              >
                                <option value="">Select project type</option>
                                {projectTypes.map((type, index) => (
                                  <option key={index} value={type}>
                                    {type}
                                  </option>
                                ))}
                              </Form.Select>
                            </motion.div>

                            {/* Animated Icon */}
                            <motion.div
                              className="position-absolute"
                              style={{
                                left: "1rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 4,
                              }}
                              animate={{
                                scale: formData.projectType ? [1, 1.2, 1] : 1,
                                rotate: formData.projectType ? [0, 360] : 0,
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              <FaProjectDiagram
                                size={18}
                                style={{
                                  color: fieldErrors.projectType
                                    ? "#dc3545"
                                    : formData.projectType
                                    ? "#28a745"
                                    : "#667eea",
                                  transition: "color 0.3s ease",
                                }}
                              />
                            </motion.div>

                            {/* Tooltip */}
                            <OverlayTrigger
                              placement="top"
                              overlay={
                                <Tooltip>
                                  Choose the type of project you need help with
                                </Tooltip>
                              }
                            >
                              <div
                                className="position-absolute"
                                style={{
                                  right: "1rem",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  zIndex: 4,
                                }}
                              >
                                <FaInfoCircle
                                  size={14}
                                  className="text-muted"
                                />
                              </div>
                            </OverlayTrigger>

                            {/* Error Message */}
                            {fieldErrors.projectType && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-danger mt-2 d-flex align-items-center gap-2"
                                id="projectType-error"
                              >
                                <FaExclamationTriangle size={12} />
                                <small>{fieldErrors.projectType}</small>
                              </motion.div>
                            )}
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Budget and Timeline Fields */}
                      <Row className="g-3">
                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaDollarSign className="me-2" size={14} />
                              Budget Range *
                            </Form.Label>
                            <Form.Select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              required
                              size="lg"
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(10px)",
                                border: "2px solid rgba(102, 126, 234, 0.2)",
                                borderRadius: "15px",
                                padding: "1rem 1rem 1rem 3rem",
                                transition:
                                  "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                boxShadow:
                                  "0 4px 15px rgba(102, 126, 234, 0.1)",
                              }}
                            >
                              <option value="">Select budget range</option>
                              {budgetRanges.map((range, index) => (
                                <option key={index} value={range}>
                                  {range}
                                </option>
                              ))}
                            </Form.Select>
                            <FaDollarSign
                              className="position-absolute"
                              style={{
                                left: "1rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 4,
                                color: "#667eea",
                              }}
                              size={18}
                            />
                          </Form.Group>
                        </Col>

                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaClock className="me-2" size={14} />
                              Project Timeline *
                            </Form.Label>
                            <Form.Select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              required
                              size="lg"
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(10px)",
                                border: "2px solid rgba(102, 126, 234, 0.2)",
                                borderRadius: "15px",
                                padding: "1rem 1rem 1rem 3rem",
                                transition:
                                  "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                boxShadow:
                                  "0 4px 15px rgba(102, 126, 234, 0.1)",
                              }}
                            >
                              <option value="">Select timeline</option>
                              {timelineOptions.map((timeline, index) => (
                                <option key={index} value={timeline}>
                                  {timeline}
                                </option>
                              ))}
                            </Form.Select>
                            <FaClock
                              className="position-absolute"
                              style={{
                                left: "1rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 4,
                                color: "#667eea",
                              }}
                              size={18}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Contact Method and File Upload */}
                      <Row className="g-3">
                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaComments className="me-2" size={14} />
                              Preferred Contact Method *
                            </Form.Label>
                            <Form.Select
                              name="contactMethod"
                              value={formData.contactMethod}
                              onChange={handleInputChange}
                              required
                              size="lg"
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(10px)",
                                border: "2px solid rgba(102, 126, 234, 0.2)",
                                borderRadius: "15px",
                                padding: "1rem 1rem 1rem 3rem",
                                transition:
                                  "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                boxShadow:
                                  "0 4px 15px rgba(102, 126, 234, 0.1)",
                              }}
                            >
                              <option value="">Select contact method</option>
                              {contactMethods.map((method, index) => (
                                <option key={index} value={method}>
                                  {method}
                                </option>
                              ))}
                            </Form.Select>
                            <FaComments
                              className="position-absolute"
                              style={{
                                left: "1rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                zIndex: 4,
                                color: "#667eea",
                              }}
                              size={18}
                            />
                          </Form.Group>
                        </Col>

                        <Col xs={12} sm={6} className="mb-3">
                          <Form.Group>
                            <Form.Label
                              className="mb-2 fw-semibold"
                              style={{ color: "#667eea" }}
                            >
                              <FaUpload className="me-2" size={14} />
                              Project Files
                            </Form.Label>
                            <div
                              className="file-upload-area"
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              onClick={() => fileInputRef.current?.click()}
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(10px)",
                                border: "2px dashed rgba(102, 126, 234, 0.3)",
                                borderRadius: "15px",
                                padding: "2rem 1rem",
                                textAlign: "center",
                                cursor: "pointer",
                                transition:
                                  "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                boxShadow:
                                  "0 4px 15px rgba(102, 126, 234, 0.1)",
                              }}
                            >
                              <FaUpload
                                size={32}
                                style={{
                                  color: "#667eea",
                                  marginBottom: "1rem",
                                }}
                              />
                              <h6 className="mb-2" style={{ color: "#667eea" }}>
                                Upload Project Files
                              </h6>
                              <p
                                className="text-muted mb-2"
                                style={{ fontSize: "0.9rem" }}
                              >
                                Drag & drop files here or click to browse
                              </p>
                              <small className="text-muted">
                                PDF, DOC, JPG, PNG (Max 10MB each)
                              </small>

                              {formData.files && formData.files.length > 0 && (
                                <div className="mt-3">
                                  <div className="d-flex align-items-center justify-content-center gap-2">
                                    <FaCheck
                                      className="text-success"
                                      size={14}
                                    />
                                    <small className="text-success">
                                      {formData.files.length} file(s) selected
                                    </small>
                                  </div>
                                  {uploadProgress > 0 && (
                                    <ProgressBar
                                      now={uploadProgress}
                                      className="mt-2"
                                      style={{
                                        height: "4px",
                                        borderRadius: "2px",
                                      }}
                                    />
                                  )}
                                </div>
                              )}
                            </div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              multiple
                              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                              onChange={handleFileChange}
                              style={{ display: "none" }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      {/* Message Field */}
                      <Form.Group className="mb-4">
                        <Form.Label
                          className="mb-2 fw-semibold"
                          style={{ color: "#667eea" }}
                        >
                          <FaCommentDots className="me-2" size={14} />
                          Project Details *
                        </Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Describe your project requirements, goals, and any specific features you need..."
                            required
                            className={fieldErrors.message ? "is-invalid" : ""}
                            style={{
                              background: "rgba(255, 255, 255, 0.9)",
                              backdropFilter: "blur(10px)",
                              border: fieldErrors.message
                                ? "2px solid #dc3545"
                                : "2px solid rgba(102, 126, 234, 0.2)",
                              borderRadius: "15px",
                              padding: "1rem 1rem 1rem 3rem",
                              transition:
                                "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                              boxShadow: fieldErrors.message
                                ? "0 0 0 0.2rem rgba(220, 53, 69, 0.25)"
                                : "0 4px 15px rgba(102, 126, 234, 0.1)",
                            }}
                            aria-describedby={
                              fieldErrors.message ? "message-error" : undefined
                            }
                          />

                          <FaCommentDots
                            className="position-absolute"
                            style={{
                              left: "1rem",
                              top: "1rem",
                              zIndex: 4,
                              color: fieldErrors.message
                                ? "#dc3545"
                                : formData.message
                                ? "#28a745"
                                : "#667eea",
                              transition: "color 0.3s ease",
                            }}
                            size={18}
                          />

                          {fieldErrors.message && (
                            <div className="text-danger mt-2 d-flex align-items-center gap-2">
                              <FaExclamationTriangle size={12} />
                              <small>{fieldErrors.message}</small>
                            </div>
                          )}
                        </div>
                        <Form.Text className="text-muted mt-2">
                          The more details you provide, the better we can tailor
                          our response to your needs.
                        </Form.Text>
                      </Form.Group>

                      {/* Security Notice */}
                      <Row className="mb-4">
                        <Col>
                          <div
                            className="d-flex align-items-center justify-content-center gap-2 p-3"
                            style={{
                              background: "rgba(40, 167, 69, 0.05)",
                              borderRadius: "10px",
                              border: "1px solid rgba(40, 167, 69, 0.2)",
                            }}
                          >
                            <FaShieldAlt className="text-success" size={16} />
                            <small className="text-success">
                              <strong>Secure Form:</strong> Your information is
                              encrypted and protected. We never share your data
                              with third parties.
                            </small>
                          </div>
                        </Col>
                      </Row>

                      {/* reCAPTCHA Placeholder */}
                      <Row className="mb-4">
                        <Col>
                          <div
                            className="d-flex align-items-center justify-content-center gap-2 p-3"
                            style={{
                              background: "rgba(102, 126, 234, 0.05)",
                              borderRadius: "10px",
                              border: "1px solid rgba(102, 126, 234, 0.2)",
                            }}
                          >
                            <FaRobot className="text-primary" size={16} />
                            <small className="text-muted">
                              <strong>Anti-Spam Protection:</strong> This form
                              includes advanced security measures to prevent
                              spam and protect your data.
                            </small>
                          </div>
                        </Col>
                      </Row>

                      {/* Submit Button */}
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            disabled={isSubmitting}
                            className="px-5 py-3 d-flex align-items-center justify-content-center gap-2 mx-auto"
                            style={{
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
                              border: "none",
                              minWidth: "250px",
                              borderRadius: "25px",
                              boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                              fontSize: "1.1rem",
                              fontWeight: "600",
                            }}
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear",
                                  }}
                                >
                                  <FaSpinner size={18} />
                                </motion.div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <motion.div
                                  animate={{ x: [0, 3, 0] }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                  }}
                                >
                                  <FaPaperPlane size={18} />
                                </motion.div>
                                Send Inquiry
                              </>
                            )}
                          </Button>
                        </motion.div>

                        <motion.div
                          className="mt-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <small className="text-muted d-block mb-2">
                            <FaCheck className="text-success me-2" size={12} />
                            We'll respond within 24 hours with a detailed
                            proposal
                          </small>
                          <small className="text-muted d-block">
                            <FaCalendarAlt
                              className="text-primary me-2"
                              size={12}
                            />
                            Free consultation and project timeline included
                          </small>
                        </motion.div>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Enhanced CSS Styles */}
      <style>{`
          .contact-form-section {
            position: relative;
            overflow-x: hidden;
          }

          .floating-input {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .floating-input:focus {
            outline: none;
            border-color: #667eea !important;
            box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25) !important;
            transform: translateY(-2px);
          }

          .floating-input.is-invalid:focus {
            border-color: #dc3545 !important;
            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25) !important;
          }

          .floating-label {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }

          .floating-label-active {
            color: #667eea !important;
            font-weight: 600;
          }

          .file-upload-area:hover {
            border-color: #667eea !important;
            background: rgba(102, 126, 234, 0.05) !important;
            transform: translateY(-2px);
          }

          .file-upload-area.drag-over {
            border-color: #667eea !important;
            background: rgba(102, 126, 234, 0.1) !important;
            transform: scale(1.02);
          }

          /* Enhanced Responsive Design */
          @media (max-width: 1200px) {
            .container {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }

          @media (max-width: 992px) {
            .floating-input {
              padding: 0.875rem 0.875rem 0.875rem 2.75rem !important;
              font-size: 0.95rem !important;
            }

            .floating-label {
              left: 2.75rem !important;
              font-size: 0.9rem !important;
            }

            .position-absolute[style*="left: 1rem"] {
              left: 0.875rem !important;
            }

            .file-upload-area {
              padding: 1.75rem 1rem !important;
            }

            .file-upload-area h6 {
              font-size: 1.1rem !important;
            }

            .file-upload-area p {
              font-size: 0.9rem !important;
            }

            .btn {
              min-width: 220px !important;
              font-size: 1rem !important;
              padding: 0.75rem 2rem !important;
            }
          }

          @media (max-width: 768px) {
            .contact-form-section {
              padding: 2rem 0 !important;
            }

            .container {
              padding-left: 0.75rem;
              padding-right: 0.75rem;
            }

            .floating-input {
              padding: 0.875rem 0.875rem 0.875rem 2.5rem !important;
              font-size: 0.9rem !important;
            }

            .floating-label {
              left: 2.5rem !important;
              font-size: 0.85rem !important;
            }

            .position-absolute[style*="left: 1rem"] {
              left: 0.75rem !important;
            }

            .file-upload-area {
              padding: 1.5rem 0.75rem !important;
            }

            .file-upload-area h6 {
              font-size: 1rem !important;
            }

            .file-upload-area p {
              font-size: 0.8rem !important;
            }

            .btn {
              min-width: 200px !important;
              font-size: 0.95rem !important;
              padding: 0.7rem 1.5rem !important;
            }

            /* Adjust card padding */
            .card-body {
              padding: 1.5rem !important;
            }

            /* Adjust form row spacing */
            .row .col {
              margin-bottom: 0.5rem;
            }
          }

          @media (max-width: 576px) {
            .contact-form-section {
              padding: 1.5rem 0 !important;
            }

            .container {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }

            .floating-input {
              padding: 0.75rem 0.75rem 0.75rem 2.25rem !important;
              font-size: 0.85rem !important;
            }

            .floating-label {
              left: 2.25rem !important;
              font-size: 0.8rem !important;
            }

            .position-absolute[style*="left: 1rem"] {
              left: 0.5rem !important;
            }

            .file-upload-area {
              padding: 1.25rem 0.5rem !important;
            }

            .file-upload-area h6 {
              font-size: 0.9rem !important;
            }

            .file-upload-area p {
              font-size: 0.75rem !important;
            }

            .btn {
              min-width: 180px !important;
              font-size: 0.9rem !important;
              padding: 0.6rem 1.25rem !important;
            }

            /* Adjust card padding for mobile */
            .card-body {
              padding: 1rem !important;
            }

            /* Adjust form row spacing */
            .row .col {
              margin-bottom: 0.25rem;
            }

            /* Adjust security notices */
            .d-flex.align-items-center.gap-2.p-3 {
              padding: 0.75rem !important;
              flex-direction: column !important;
              text-align: center !important;
              gap: 0.5rem !important;
            }

            /* Adjust alert spacing */
            .alert {
              padding: 0.75rem !important;
              margin-bottom: 1rem !important;
            }

            .alert .d-flex.gap-3 {
              flex-direction: column !important;
              gap: 0.5rem !important;
              text-align: center !important;
            }
          }

          @media (max-width: 480px) {
            .floating-input {
              padding: 0.7rem 0.7rem 0.7rem 2rem !important;
              font-size: 0.8rem !important;
            }

            .floating-label {
              left: 2rem !important;
              font-size: 0.75rem !important;
            }

            .position-absolute[style*="left: 1rem"] {
              left: 0.4rem !important;
            }

            .btn {
              min-width: 160px !important;
              font-size: 0.85rem !important;
              padding: 0.5rem 1rem !important;
            }

            .card-body {
              padding: 0.75rem !important;
            }

            .file-upload-area {
              padding: 1rem 0.4rem !important;
            }

            .file-upload-area h6 {
              font-size: 0.85rem !important;
            }

            .file-upload-area p {
              font-size: 0.7rem !important;
            }
          }

          /* Form styling improvements */
          .form-label {
            color: #667eea !important;
            font-weight: 600 !important;
            margin-bottom: 0.5rem !important;
          }

          /* Smooth animations for all interactive elements */
          .floating-input,
          .floating-label,
          .file-upload-area,
          .btn {
            will-change: transform, box-shadow, border-color;
          }

          /* Enhanced hover effects */
          .floating-input:hover:not(:focus) {
            border-color: rgba(102, 126, 234, 0.4) !important;
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.15) !important;
          }

          /* Loading animation improvements */
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .fa-spinner {
            animation: spin 1s linear infinite;
          }

          /* Focus management for accessibility */
          .floating-input:focus {
            outline: 2px solid #667eea;
            outline-offset: 2px;
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .floating-input {
              border-width: 3px !important;
            }

            .floating-label {
              font-weight: 700 !important;
            }
          }

          /* Touch device improvements */
          @media (hover: none) and (pointer: coarse) {
            .floating-input:hover {
              transform: none !important;
            }

            .file-upload-area:hover {
              transform: none !important;
            }

            .btn:hover {
              transform: none !important;
            }

            /* Increase touch targets for mobile */
            .floating-input {
              min-height: 48px !important;
            }

            .btn {
              min-height: 48px !important;
            }

            .file-upload-area {
              min-height: 120px !important;
            }
          }

          /* Landscape orientation adjustments */
          @media (max-height: 500px) and (orientation: landscape) {
            .contact-form-section {
              padding: 1rem 0 !important;
            }

            .card-body {
              padding: 1rem !important;
            }

            .floating-input {
              padding: 0.5rem 0.5rem 0.5rem 2rem !important;
            }

            .floating-label {
              font-size: 0.7rem !important;
            }

            .btn {
              padding: 0.5rem 1rem !important;
              font-size: 0.9rem !important;
            }
          }

          /* Mobile Touch Optimizations */
          @media (max-width: 768px) {
            .contact-form-section .form-control,
            .contact-form-section .form-select {
              min-height: 44px !important;
              font-size: 16px !important; /* Prevents zoom on iOS */
              touch-action: manipulation;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            
            .contact-form-section textarea.form-control {
              min-height: 120px !important;
            }
            
            .contact-form-section .btn {
              min-height: 44px !important;
              min-width: 44px !important;
              touch-action: manipulation;
              -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }
            
            .contact-form-section .btn:active {
              transform: scale(0.98) !important;
              transition: transform 0.1s ease;
            }
          }
          
          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            .contact-form-section .btn:hover {
              transform: none !important;
            }
            
            .contact-form-section .btn:active {
              transform: scale(0.98) !important;
              transition: transform 0.1s ease;
            }
          }

          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .floating-input,
            .floating-label,
            .file-upload-area,
            .btn,
            .motion-div {
              transition: none !important;
              animation: none !important;
            }
          }
        `}</style>
    </section>
  );
};

export default ContactForm;
