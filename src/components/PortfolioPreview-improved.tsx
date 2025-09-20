import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaEye, FaArrowRight } from "react-icons/fa";

interface Project {
  id: string;
  name: string;
  image: string;
  tags: string[];
  description?: string;
}

interface PortfolioPreviewProps {
  portfolioProjects: Project[];
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({
  portfolioProjects,
}) => {
  const navigate = useNavigate();

  const defaultProjects: Project[] = [
    {
      id: "1",
      name: "EduTech Academy",
      image: "https://picsum.photos/400x300/4CAF50/white?text=EduTech+Academy",
      tags: ["School", "Education", "React"],
      description:
        "Modern educational platform with interactive learning modules and Google Sheets integration",
    },
    {
      id: "2",
      name: "Corporate Solutions",
      image:
        "https://picsum.photos/400x300/2196F3/white?text=Corporate+Solutions",
      tags: ["Business", "Corporate", "CMS"],
      description:
        "Professional business website with content management system and real-time data updates",
    },
    {
      id: "3",
      name: "Fashion Store",
      image: "https://picsum.photos/400x300/FF9800/white?text=Fashion+Store",
      tags: ["E-commerce", "Fashion", "Shopping"],
      description:
        "Complete e-commerce solution with payment integration and inventory management",
    },
    {
      id: "4",
      name: "Restaurant Chain",
      image: "https://picsum.photos/400x300/F44336/white?text=Restaurant+Chain",
      tags: ["Business", "Food", "Booking"],
      description:
        "Multi-location restaurant website with online reservations and Google Sheets menu updates",
    },
    {
      id: "5",
      name: "Tech Startup",
      image: "https://picsum.photos/400x300/9C27B0/white?text=Tech+Startup",
      tags: ["Business", "Technology", "SaaS"],
      description:
        "Modern SaaS platform with advanced analytics and dynamic data visualization",
    },
    {
      id: "6",
      name: "Art Gallery",
      image: "https://picsum.photos/400x300/607D8B/white?text=Art+Gallery",
      tags: ["Art", "Gallery", "Portfolio"],
      description:
        "Elegant portfolio website for contemporary art gallery with virtual exhibitions",
    },
  ];

  const projects =
    portfolioProjects.length > 0 ? portfolioProjects : defaultProjects;

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      School: "success",
      Business: "primary",
      "E-commerce": "warning",
      Education: "info",
      Fashion: "danger",
      Technology: "dark",
      Art: "secondary",
      Corporate: "primary",
      CMS: "info",
      Shopping: "warning",
      Food: "danger",
      Booking: "success",
      SaaS: "dark",
      Gallery: "secondary",
      Portfolio: "info",
      React: "info",
    };
    return colors[tag] || "secondary";
  };

  const handleViewAllProjects = () => {
    navigate("/portfolio");
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/portfolio#project-${projectId}`);
  };

  return (
    <section className="py-5 bg-light" aria-label="Portfolio preview">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="display-5 fw-bold text-primary mb-3">
                Our Portfolio
              </h2>
              <p className="lead text-muted mb-4">
                Showcasing our latest web development projects with Google
                Sheets integration and modern design
              </p>

              {/* Portfolio Stats */}
              <div className="d-flex justify-content-center gap-4 mb-4">
                <div className="text-center">
                  <h4 className="text-primary fw-bold mb-0">150+</h4>
                  <small className="text-muted">Projects Completed</small>
                </div>
                <div className="text-center">
                  <h4 className="text-primary fw-bold mb-0">100%</h4>
                  <small className="text-muted">Client Satisfaction</small>
                </div>
                <div className="text-center">
                  <h4 className="text-primary fw-bold mb-0">50+</h4>
                  <small className="text-muted">
                    Google Sheets Integrations
                  </small>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-100"
              >
                <Card
                  className="h-100 shadow-sm border-0 overflow-hidden position-relative"
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => handleProjectClick(project.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.name} project details`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleProjectClick(project.id);
                    }
                  }}
                >
                  <div className="position-relative overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={`${project.name} - ${
                        project.description ||
                        "Web development project showcase"
                      }`}
                      style={{ height: "250px", objectFit: "cover" }}
                      loading="lazy"
                    />
                    <motion.div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(30, 60, 114, 0.9) 0%, rgba(42, 82, 152, 0.9) 100%)",
                        opacity: 0,
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center text-white">
                        <FaEye size={30} className="mb-3" />
                        <h5 className="mb-3 fw-bold">{project.name}</h5>
                        <Button
                          variant="outline-light"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProjectClick(project.id);
                          }}
                          className="px-4"
                        >
                          <FaEye className="me-2" />
                          View Case Study
                        </Button>
                      </div>
                    </motion.div>

                    {/* Featured badge for first 3 projects */}
                    {index < 3 && (
                      <Badge
                        bg="warning"
                        className="position-absolute top-0 end-0 m-2"
                        style={{ fontSize: "0.75rem" }}
                      >
                        Featured
                      </Badge>
                    )}
                  </div>

                  <Card.Body className="p-4">
                    <Card.Title className="h5 mb-2 text-primary">
                      {project.name}
                    </Card.Title>
                    {project.description && (
                      <Card.Text
                        className="text-muted small mb-3"
                        style={{ lineHeight: 1.5 }}
                      >
                        {project.description}
                      </Card.Text>
                    )}
                    <div
                      className="d-flex flex-wrap gap-1"
                      role="list"
                      aria-label="Project technologies"
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          bg={getTagColor(tag)}
                          className="small"
                          style={{ fontSize: "0.7rem" }}
                          role="listitem"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-muted mb-4">
                Want to see more of our work? Explore our complete portfolio
                with detailed case studies.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleViewAllProjects}
                  className="px-5 py-3 fw-bold"
                  style={{
                    fontSize: "1.1rem",
                    boxShadow: "0 4px 15px rgba(30, 60, 114, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  aria-label="View all portfolio projects with detailed case studies"
                >
                  <FaEye className="me-2" />
                  View All Projects
                  <FaArrowRight className="ms-2" />
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        /* Enhanced hover effects */
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        
        .card:focus {
          outline: 2px solid #0d6efd;
          outline-offset: 2px;
        }
        
        /* Button hover effects */
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 60, 114, 0.5) !important;
        }
        
        /* Badge hover effects */
        .badge {
          transition: all 0.2s ease;
        }
        
        .badge:hover {
          transform: scale(1.1);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .card {
            margin-bottom: 2rem;
          }
          
          .btn-lg {
            font-size: 1rem !important;
            padding: 0.75rem 2rem !important;
          }
        }
        
        /* Loading state for images */
        .card-img-top {
          transition: opacity 0.3s ease;
        }
        
        .card-img-top[loading="lazy"] {
          opacity: 0;
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioPreview;
