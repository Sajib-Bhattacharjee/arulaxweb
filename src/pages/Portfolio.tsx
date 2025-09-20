import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
  Badge,
  Modal,
  Carousel,
  Breadcrumb,
  Dropdown,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaFilter,
  FaSort,
  FaEye,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaDatabase,
  FaMobile,
  FaShoppingCart,
  FaGraduationCap,
  FaBriefcase,
  FaEllipsisH,
  FaShare,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaRocket,
  FaCode,
  FaDesktop,
  FaCloud,
} from "react-icons/fa";

// Types
interface Project {
  id: string;
  title: string;
  category: "School" | "Business" | "E-Commerce" | "Others";
  tags: string[];
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  technologies: string[];
  features: string[];
  clientTestimonial?: {
    text: string;
    author: string;
    role: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  popularity: number;
  createdAt: string;
  hasLiveData: boolean;
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "featured">(
    "latest"
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Sample projects data
  const sampleProjects: Project[] = [
    {
      id: "1",
      title: "EcoSchool Management System",
      category: "School",
      tags: ["Google Sheets Live", "Responsive", "Dashboard"],
      description:
        "A comprehensive school management system with real-time data updates from Google Sheets, featuring student records, attendance tracking, and grade management.",
      shortDescription:
        "Modern school management with live Google Sheets integration",
      thumbnail:
        "https://picsum.photos/400x300/4CAF50/white?text=EcoSchool+System",
      images: [
        "https://picsum.photos/800x600/4CAF50/white?text=Dashboard+View",
        "https://picsum.photos/800x600/2196F3/white?text=Student+Records",
        "https://picsum.photos/800x600/FF9800/white?text=Live+Updates",
      ],
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      technologies: [
        "React",
        "TypeScript",
        "Google Sheets API",
        "Bootstrap",
        "Node.js",
      ],
      features: [
        "Real-time data synchronization with Google Sheets",
        "Student attendance tracking",
        "Grade management system",
        "Parent portal access",
        "Mobile-responsive design",
        "Automated report generation",
      ],
      clientTestimonial: {
        text: "The system has revolutionized how we manage our school data. The Google Sheets integration makes it so easy for teachers to update information.",
        author: "Sarah Johnson",
        role: "Principal, Greenwood Elementary",
      },
      liveUrl: "https://ecoschool-demo.arulaxweb.com",
      githubUrl: "https://github.com/arulaxweb/ecoschool",
      featured: true,
      popularity: 95,
      createdAt: "2024-12-15",
      hasLiveData: true,
    },
    {
      id: "2",
      title: "TechCorp Business Dashboard",
      category: "Business",
      tags: ["Analytics", "Real-time Data", "Professional"],
      description:
        "Enterprise-level business dashboard with advanced analytics, KPI tracking, and dynamic data visualization powered by Google Sheets integration.",
      shortDescription: "Professional business analytics dashboard",
      thumbnail:
        "https://picsum.photos/400x300/2196F3/white?text=TechCorp+Dashboard",
      images: [
        "https://picsum.photos/800x600/2196F3/white?text=Analytics+View",
        "https://picsum.photos/800x600/9C27B0/white?text=KPI+Tracking",
        "https://picsum.photos/800x600/FF5722/white?text=Reports",
      ],
      technologies: [
        "React",
        "D3.js",
        "Google Sheets API",
        "Material-UI",
        "Express",
      ],
      features: [
        "Real-time KPI monitoring",
        "Interactive data visualizations",
        "Automated report generation",
        "Multi-user access control",
        "Export to PDF/Excel",
        "Mobile dashboard access",
      ],
      clientTestimonial: {
        text: "Our decision-making process has improved dramatically with this dashboard. The real-time insights are invaluable.",
        author: "Michael Chen",
        role: "CEO, TechCorp Solutions",
      },
      liveUrl: "https://techcorp-dashboard.arulaxweb.com",
      featured: true,
      popularity: 88,
      createdAt: "2024-11-20",
      hasLiveData: true,
    },
    {
      id: "3",
      title: "ShopEasy E-Commerce Platform",
      category: "E-Commerce",
      tags: ["E-Commerce", "Payment Gateway", "Inventory Management"],
      description:
        "Full-featured e-commerce platform with inventory management, payment processing, and customer management system integrated with Google Sheets for easy product updates.",
      shortDescription:
        "Complete e-commerce solution with live inventory updates",
      thumbnail:
        "https://picsum.photos/400x300/FF9800/white?text=ShopEasy+Store",
      images: [
        "https://picsum.photos/800x600/FF9800/white?text=Store+Front",
        "https://picsum.photos/800x600/4CAF50/white?text=Product+Page",
        "https://picsum.photos/800x600/9C27B0/white?text=Admin+Panel",
      ],
      technologies: [
        "React",
        "Stripe API",
        "Google Sheets API",
        "MongoDB",
        "Node.js",
      ],
      features: [
        "Dynamic product catalog from Google Sheets",
        "Secure payment processing",
        "Inventory management",
        "Customer account system",
        "Order tracking",
        "Admin dashboard",
      ],
      liveUrl: "https://shopeasy-demo.arulaxweb.com",
      githubUrl: "https://github.com/arulaxweb/shopeasy",
      featured: false,
      popularity: 92,
      createdAt: "2024-10-05",
      hasLiveData: true,
    },
    {
      id: "4",
      title: "Creative Portfolio Website",
      category: "Others",
      tags: ["Portfolio", "Creative Design", "Animation"],
      description:
        "A stunning portfolio website for a creative agency featuring smooth animations, interactive galleries, and dynamic content management through Google Sheets.",
      shortDescription: "Creative portfolio with stunning animations",
      thumbnail:
        "https://picsum.photos/400x300/9C27B0/white?text=Creative+Portfolio",
      images: [
        "https://picsum.photos/800x600/9C27B0/white?text=Homepage",
        "https://picsum.photos/800x600/E91E63/white?text=Gallery",
        "https://picsum.photos/800x600/673AB7/white?text=About+Page",
      ],
      technologies: [
        "React",
        "Framer Motion",
        "GSAP",
        "Google Sheets API",
        "Netlify",
      ],
      features: [
        "Smooth page transitions",
        "Interactive image galleries",
        "Dynamic content updates",
        "Contact form integration",
        "SEO optimized",
        "Mobile-first design",
      ],
      clientTestimonial: {
        text: "The website perfectly captures our creative vision. The animations and user experience are outstanding.",
        author: "Emma Rodriguez",
        role: "Creative Director, Pixel Studios",
      },
      liveUrl: "https://creative-portfolio.arulaxweb.com",
      featured: false,
      popularity: 76,
      createdAt: "2024-09-12",
      hasLiveData: false,
    },
    {
      id: "5",
      title: "HealthCare Clinic Management",
      category: "Business",
      tags: ["Healthcare", "Appointment System", "Patient Records"],
      description:
        "Comprehensive healthcare clinic management system with patient records, appointment scheduling, and medical history tracking, all synchronized with Google Sheets.",
      shortDescription: "Complete healthcare management solution",
      thumbnail:
        "https://picsum.photos/400x300/00BCD4/white?text=HealthCare+System",
      images: [
        "https://picsum.photos/800x600/00BCD4/white?text=Patient+Dashboard",
        "https://picsum.photos/800x600/009688/white?text=Appointments",
        "https://picsum.photos/800x600/4CAF50/white?text=Medical+Records",
      ],
      technologies: [
        "React",
        "Firebase",
        "Google Sheets API",
        "Calendar API",
        "Material-UI",
      ],
      features: [
        "Patient record management",
        "Appointment scheduling",
        "Medical history tracking",
        "Prescription management",
        "Insurance processing",
        "Report generation",
      ],
      liveUrl: "https://healthcare-demo.arulaxweb.com",
      featured: true,
      popularity: 85,
      createdAt: "2024-08-30",
      hasLiveData: true,
    },
    {
      id: "6",
      title: "University Course Portal",
      category: "School",
      tags: ["Education", "Course Management", "Student Portal"],
      description:
        "Modern university course management portal with enrollment system, grade tracking, and course materials, integrated with Google Sheets for easy content updates.",
      shortDescription: "University course management and student portal",
      thumbnail:
        "https://picsum.photos/400x300/3F51B5/white?text=University+Portal",
      images: [
        "https://picsum.photos/800x600/3F51B5/white?text=Course+Catalog",
        "https://picsum.photos/800x600/673AB7/white?text=Student+Dashboard",
        "https://picsum.photos/800x600/9C27B0/white?text=Grades+View",
      ],
      technologies: [
        "React",
        "Redux",
        "Google Sheets API",
        "PDF.js",
        "Chart.js",
      ],
      features: [
        "Course enrollment system",
        "Grade tracking and analytics",
        "Assignment submission",
        "Discussion forums",
        "Calendar integration",
        "Mobile app companion",
      ],
      clientTestimonial: {
        text: "Students and faculty love the new portal. It's intuitive and has all the features we need.",
        author: "Dr. James Wilson",
        role: "Dean, State University",
      },
      liveUrl: "https://university-portal.arulaxweb.com",
      featured: false,
      popularity: 79,
      createdAt: "2024-07-18",
      hasLiveData: true,
    },
  ];

  // Initialize projects
  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProjects(sampleProjects);
      setFilteredProjects(sampleProjects);
      setIsLoading(false);
    };
    loadProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter and sort projects
  useEffect(() => {
    let filtered = [...projects];

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Tags filter
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTags.some((tag) => project.tags.includes(tag))
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.popularity - a.popularity;
        case "featured":
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        case "latest":
        default:
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
      }
    });

    setFilteredProjects(filtered);
  }, [projects, selectedCategory, selectedTags, searchQuery, sortBy]);

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  const categories = ["All", "School", "Business", "E-Commerce", "Others"];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const shareProject = (project: Project, platform: string) => {
    const url = project.liveUrl || window.location.href;
    const text = `Check out this amazing project: ${project.title}`;

    let shareUrl = "";
    switch (platform) {
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}&url=${encodeURIComponent(url)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const getTechnologyIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react":
        return <FaCode className="text-info" />;
      case "google sheets api":
        return <FaDatabase className="text-success" />;
      case "bootstrap":
      case "material-ui":
        return <FaDesktop className="text-primary" />;
      case "node.js":
      case "express":
        return <FaCloud className="text-warning" />;
      default:
        return <FaCode className="text-muted" />;
    }
  };

  return (
    <div className="portfolio-page" style={{ width: "100%" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #00b09b 75%, #96c93d 100%)",
          color: "white",
        }}
      >
        <Container>
          <Row className="text-center">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="display-3 fw-bold mb-4">Our Amazing Projects</h1>
                <p className="lead mb-4">
                  Discover our portfolio of innovative web solutions with Google
                  Sheets integration and cutting-edge technologies
                </p>

                {/* Animated Counters */}
                <Row className="justify-content-center">
                  <Col md={3} className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <h3 className="fw-bold text-warning">
                        {projects.length}+
                      </h3>
                      <p className="mb-0">Projects Completed</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <h3 className="fw-bold text-warning">
                        {projects.filter((p) => p.hasLiveData).length}
                      </h3>
                      <p className="mb-0">Live Data Systems</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="mb-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <h3 className="fw-bold text-warning">100%</h3>
                      <p className="mb-0">Client Satisfaction</p>
                    </motion.div>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Portfolio</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Filters and Search */}
      <Container className="py-4">
        <Row className="mb-4">
          <Col lg={8}>
            {/* Search Bar */}
            <InputGroup className="mb-3">
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </InputGroup>

            {/* Category Filters */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category
                      ? "primary"
                      : "outline-primary"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="d-flex align-items-center"
                >
                  {category === "School" && (
                    <FaGraduationCap className="me-1" />
                  )}
                  {category === "Business" && <FaBriefcase className="me-1" />}
                  {category === "E-Commerce" && (
                    <FaShoppingCart className="me-1" />
                  )}
                  {category === "Others" && <FaEllipsisH className="me-1" />}
                  {category === "All" && <FaFilter className="me-1" />}
                  {category}
                </Button>
              ))}
            </div>

            {/* Tag Filters */}
            <div className="d-flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  bg={selectedTags.includes(tag) ? "success" : "light"}
                  text={selectedTags.includes(tag) ? "white" : "dark"}
                  className="p-2 cursor-pointer"
                  onClick={() => handleTagToggle(tag)}
                  style={{ cursor: "pointer" }}
                >
                  {tag === "Google Sheets Live" && (
                    <FaDatabase className="me-1" />
                  )}
                  {tag === "Responsive" && <FaMobile className="me-1" />}
                  {tag === "E-Commerce" && <FaShoppingCart className="me-1" />}
                  {tag}
                </Badge>
              ))}
            </div>
          </Col>

          <Col lg={4}>
            {/* Sort Options */}
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" className="w-100">
                <FaSort className="me-2" />
                Sort by:{" "}
                {sortBy === "latest"
                  ? "Latest"
                  : sortBy === "popular"
                  ? "Most Popular"
                  : "Featured"}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item onClick={() => setSortBy("latest")}>
                  Latest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("popular")}>
                  Most Popular
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("featured")}>
                  Featured
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Results Count */}
            <div className="text-muted mt-2 text-center">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </Col>
        </Row>
      </Container>

      {/* Projects Grid */}
      <Container className="py-4">
        {isLoading ? (
          <Row>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Col lg={4} md={6} key={i} className="mb-4">
                <Card className="h-100">
                  <div className="bg-light" style={{ height: "200px" }} />
                  <Card.Body>
                    <div
                      className="bg-light rounded mb-2"
                      style={{ height: "20px" }}
                    />
                    <div
                      className="bg-light rounded mb-2"
                      style={{ height: "15px", width: "60%" }}
                    />
                    <div
                      className="bg-light rounded"
                      style={{ height: "60px" }}
                    />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <AnimatePresence>
            <Row>
              {filteredProjects.map((project, index) => (
                <Col lg={4} md={6} key={project.id} className="mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="h-100"
                  >
                    <Card
                      className="h-100 border-0 shadow-sm project-card"
                      style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="position-relative overflow-hidden">
                        <Card.Img
                          variant="top"
                          src={project.thumbnail}
                          style={{ height: "200px", objectFit: "cover" }}
                        />

                        {/* Overlay */}
                        <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                          <div className="text-center text-white">
                            <FaEye size={30} className="mb-2" />
                            <div className="fw-bold">View Project</div>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="position-absolute top-0 start-0 p-2">
                          {project.featured && (
                            <Badge bg="warning" className="me-1">
                              <FaStar className="me-1" />
                              Featured
                            </Badge>
                          )}
                          {project.hasLiveData && (
                            <Badge bg="success">
                              <FaDatabase className="me-1" />
                              Live Data
                            </Badge>
                          )}
                        </div>

                        {/* Share Button */}
                        <div className="position-absolute top-0 end-0 p-2">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="light"
                              size="sm"
                              className="border-0 rounded-circle"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FaShare />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={(e) => {
                                  e.stopPropagation();
                                  shareProject(project, "linkedin");
                                }}
                              >
                                <FaLinkedin className="me-2 text-primary" />
                                LinkedIn
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={(e) => {
                                  e.stopPropagation();
                                  shareProject(project, "facebook");
                                }}
                              >
                                <FaFacebook className="me-2 text-primary" />
                                Facebook
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={(e) => {
                                  e.stopPropagation();
                                  shareProject(project, "twitter");
                                }}
                              >
                                <FaTwitter className="me-2 text-info" />
                                Twitter
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>

                      <Card.Body className="d-flex flex-column">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <Badge bg="secondary" className="mb-2">
                            {project.category}
                          </Badge>
                          <div className="text-muted small">
                            ★ {project.popularity}/100
                          </div>
                        </div>

                        <Card.Title className="h5">{project.title}</Card.Title>
                        <Card.Text className="text-muted flex-grow-1">
                          {project.shortDescription}
                        </Card.Text>

                        {/* Tags */}
                        <div className="d-flex flex-wrap gap-1 mb-3">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              bg="light"
                              text="dark"
                              className="small"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge bg="light" text="dark" className="small">
                              +{project.tags.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Technologies */}
                        <div className="d-flex align-items-center gap-2 mb-3">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <div key={tech} title={tech}>
                              {getTechnologyIcon(tech)}
                            </div>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-muted small">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        <div className="d-flex gap-2">
                          <Button
                            variant="primary"
                            size="sm"
                            className="flex-grow-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProjectClick(project);
                            }}
                          >
                            <FaEye className="me-1" />
                            View Details
                          </Button>
                          {project.liveUrl && (
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.liveUrl, "_blank");
                              }}
                            >
                              <FaExternalLinkAlt />
                            </Button>
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </AnimatePresence>
        )}

        {/* No Results */}
        {!isLoading && filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <FaSearch size={48} className="text-muted mb-3" />
            <h4>No projects found</h4>
            <p className="text-muted">
              Try adjusting your filters or search terms to find what you're
              looking for.
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedTags([]);
                setSearchQuery("");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </Container>

      {/* CTA Section 1 - Mid Portfolio */}
      {filteredProjects.length >= 4 && (
        <Container className="py-5">
          <Row>
            <Col className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-5 rounded"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                }}
              >
                <FaRocket size={48} className="mb-3" />
                <h3 className="fw-bold mb-3">Impressed by What You See?</h3>
                <p className="lead mb-4">
                  Let's create something amazing together! Our team is ready to
                  bring your vision to life.
                </p>
                <Button
                  variant="light"
                  size="lg"
                  className="px-5"
                  onClick={() => (window.location.href = "/quote")}
                >
                  Get a Quote
                  <FaRocket className="ms-2" />
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      )}

      {/* Final CTA Section */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #00b09b 75%, #96c93d 100%)",
          color: "white",
        }}
      >
        <Container>
          <Row className="text-center">
            <Col>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="display-4 fw-bold mb-4">
                  Want Your Project Featured Here?
                </h2>
                <p className="lead mb-4">
                  Join our satisfied clients and let us create an amazing web
                  solution for your business with Google Sheets integration and
                  cutting-edge technology.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <Button
                    variant="light"
                    size="lg"
                    className="px-5"
                    onClick={() => (window.location.href = "/quote")}
                  >
                    Get a Quote
                    <FaRocket className="ms-2" />
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="px-5"
                    onClick={() => (window.location.href = "/our-work")}
                  >
                    View Our Process
                    <FaEye className="ms-2" />
                  </Button>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Project Details Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="border-0">
              <Modal.Title className="d-flex align-items-center">
                {selectedProject.title}
                {selectedProject.featured && (
                  <Badge bg="warning" className="ms-2">
                    <FaStar className="me-1" />
                    Featured
                  </Badge>
                )}
                {selectedProject.hasLiveData && (
                  <Badge bg="success" className="ms-2">
                    <FaDatabase className="me-1" />
                    Live Data
                  </Badge>
                )}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="p-0">
              <Row className="g-0">
                <Col lg={8}>
                  {/* Image/Video Carousel */}
                  <div className="position-relative">
                    {selectedProject.videoUrl ? (
                      <div className="ratio ratio-16x9">
                        <iframe
                          src={selectedProject.videoUrl}
                          title={`${selectedProject.title} Demo`}
                          allowFullScreen
                          className="rounded-start"
                        />
                      </div>
                    ) : (
                      <Carousel
                        activeIndex={currentImageIndex}
                        onSelect={(selectedIndex) =>
                          setCurrentImageIndex(selectedIndex)
                        }
                        className="project-carousel"
                      >
                        {selectedProject.images.map((image, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100"
                              src={image}
                              alt={`${selectedProject.title} screenshot ${
                                index + 1
                              }`}
                              style={{ height: "400px", objectFit: "cover" }}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    )}
                  </div>
                </Col>

                <Col lg={4} className="p-4">
                  {/* Project Details */}
                  <div className="mb-3">
                    <Badge bg="secondary" className="mb-2">
                      {selectedProject.category}
                    </Badge>
                    <div className="text-muted small">
                      Popularity: ★ {selectedProject.popularity}/100
                    </div>
                  </div>

                  <p className="text-muted mb-4">
                    {selectedProject.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Tags</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} bg="light" text="dark">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Technologies Used</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="d-flex align-items-center gap-1 text-muted small"
                        >
                          {getTechnologyIcon(tech)}
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h6 className="fw-bold mb-2">Key Features</h6>
                    <ul className="list-unstyled">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="d-flex align-items-start mb-1"
                        >
                          <FaRocket
                            className="text-primary me-2 mt-1"
                            size={12}
                          />
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Testimonial */}
                  {selectedProject.clientTestimonial && (
                    <div className="mb-4 p-3 bg-light rounded">
                      <FaQuoteLeft className="text-primary mb-2" />
                      <p className="small mb-2 fst-italic">
                        "{selectedProject.clientTestimonial.text}"
                      </p>
                      <div className="small text-muted">
                        <strong>
                          {selectedProject.clientTestimonial.author}
                        </strong>
                        <br />
                        {selectedProject.clientTestimonial.role}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mb-3">
                    {selectedProject.liveUrl && (
                      <Button
                        variant="primary"
                        onClick={() =>
                          window.open(selectedProject.liveUrl, "_blank")
                        }
                        className="flex-grow-1"
                      >
                        <FaExternalLinkAlt className="me-1" />
                        Live Demo
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline-dark"
                        onClick={() =>
                          window.open(selectedProject.githubUrl, "_blank")
                        }
                      >
                        <FaGithub />
                      </Button>
                    )}
                  </div>

                  {/* Share Buttons */}
                  <div className="d-flex gap-2">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => shareProject(selectedProject, "linkedin")}
                    >
                      <FaLinkedin />
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => shareProject(selectedProject, "facebook")}
                    >
                      <FaFacebook />
                    </Button>
                    <Button
                      variant="outline-info"
                      size="sm"
                      onClick={() => shareProject(selectedProject, "twitter")}
                    >
                      <FaTwitter />
                    </Button>
                  </div>
                </Col>
              </Row>
            </Modal.Body>

            <Modal.Footer className="border-0 justify-content-between">
              <div className="d-flex gap-2">
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    const currentIndex = projects.findIndex(
                      (p) => p.id === selectedProject.id
                    );
                    const prevIndex =
                      currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
                    setSelectedProject(projects[prevIndex]);
                    setCurrentImageIndex(0);
                  }}
                >
                  <FaChevronLeft className="me-1" />
                  Previous
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    const currentIndex = projects.findIndex(
                      (p) => p.id === selectedProject.id
                    );
                    const nextIndex =
                      currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
                    setSelectedProject(projects[nextIndex]);
                    setCurrentImageIndex(0);
                  }}
                >
                  Next
                  <FaChevronRight className="ms-1" />
                </Button>
              </div>

              <Button
                variant="primary"
                onClick={() => (window.location.href = "/contact")}
              >
                Start Similar Project
                <FaRocket className="ms-1" />
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <style>{`
        .project-card {
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .project-overlay {
          background: linear-gradient(135deg, rgba(30, 60, 114, 0.9) 0%, rgba(42, 82, 152, 0.9) 25%, rgba(0, 176, 155, 0.9) 75%, rgba(150, 201, 61, 0.9) 100%);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .project-modal .modal-content {
          border-radius: 15px;
          overflow: hidden;
        }
        
        .project-carousel .carousel-control-prev,
        .project-carousel .carousel-control-next {
          background: rgba(0,0,0,0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .project-carousel .carousel-control-prev {
          left: 10px;
        }
        
        .project-carousel .carousel-control-next {
          right: 10px;
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 480px) {
          .project-card {
            margin-bottom: 1rem;
          }
          
          .project-card:hover {
            transform: none;
          }
          
          .project-overlay {
            opacity: 1;
            background: rgba(0,0,0,0.7);
          }
          
          .btn {
            min-height: 44px !important;
            font-size: 0.9rem !important;
            padding: 8px 12px !important;
            touch-action: manipulation;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
          }
          
          .display-3 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          
          .lead {
            font-size: 1rem !important;
          }
          
          .form-control {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
          
          .modal-dialog {
            margin: 10px !important;
          }
          
          .project-carousel .carousel-control-prev,
          .project-carousel .carousel-control-next {
            width: 35px;
            height: 35px;
          }
        }
        
        @media (min-width: 481px) and (max-width: 768px) {
          .project-card:hover {
            transform: translateY(-3px);
          }
          
          .project-overlay {
            opacity: 0;
          }
          
          .project-card:hover .project-overlay {
            opacity: 1;
          }
          
          .btn {
            min-height: 44px !important;
            touch-action: manipulation;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
          }
          
          .display-3 {
            font-size: 2.5rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .project-overlay {
            opacity: 1;
            background: rgba(0,0,0,0.7);
          }
          
          .btn {
            touch-action: manipulation;
          }
          
          .btn:active {
            transform: scale(0.98) !important;
          }
        }
        
        /* Touch-friendly adjustments */
        @media (max-width: 768px) {
          .btn {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
          
          .badge {
            touch-action: manipulation;
          }
          
          .form-control {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
