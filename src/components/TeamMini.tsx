import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaPalette,
  FaTasks,
  FaArrowRight,
} from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio?: string;
  gradient: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  icon: React.ReactNode;
  experience: string;
}

interface TeamMiniProps {
  teamMembers: TeamMember[];
}

const TeamMini: React.FC<TeamMiniProps> = ({ teamMembers }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const defaultTeamMembers: TeamMember[] = [
    {
      name: "Sajib Bhattacharjee",
      role: "Founder & CEO of AruLax Web",
      photo: "https://avatars.githubusercontent.com/u/86997775?v=4",
      bio: "Full-stack developer with 5+ years of experience crafting modern, responsive, and high-performance web applications using cutting-edge technologies.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: [
        "React",
        "Redux",
        "Typescript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/",
        github: "https://github.com/Sajib-Bhattacharjee",
        email: "sbc@arulaxweb.com",
      },
      icon: <FaCode size={24} />,
      experience: "5+ Years",
    },
    {
      name: "Saiket Kumar Ray",
      role: "UI/UX Designer & Marketing Specialist",
      photo: "https://picsum.photos/300/300?random=17",
      bio: "Creative designer passionate about creating intuitive and beautiful user experiences that convert.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: [
        "Figma",
        "Adobe Creative",
        "User Research",
        "Marketing",
        "SEO",
        "Content Strategy",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "saiket@arulaxweb.com",
      },
      icon: <FaPalette size={24} />,
      experience: "6+ Years",
    },
    {
      name: "Fatema Zahan Shayla",
      role: "Project Manager",
      photo: "https://avatars.githubusercontent.com/u/103666625?v=4",
      bio: "Experienced project manager ensuring smooth delivery and exceptional client satisfaction every time.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      skills: ["Agile", "Client Relations", "Quality Assurance"],
      social: {
        linkedin:
          "https://www.linkedin.com/in/fatema-zahan-shayla-8b823b2ab/?originalSubdomain=b",
        email: "fatema@arulaxweb.com",
      },
      icon: <FaTasks size={24} />,
      experience: "3+ Years",
    },
  ];

  const members = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;

  return (
    <section
      className="py-5 team-section"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Dynamic Background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background:
            "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",
          zIndex: -2,
        }}
      />

      {/* Floating Background Elements */}
      <motion.div
        className="position-absolute"
        style={{
          top: "15%",
          left: "8%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="position-absolute"
        style={{
          bottom: "20%",
          right: "10%",
          width: "60px",
          height: "60px",
          background:
            "linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <Container>
        <Row className="text-center mb-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="display-5 fw-bold mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #f093fb 50%, #43e97b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Meet Our Team
              </motion.h2>
              <motion.p
                className="lead text-muted mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Talented professionals dedicated to your success
              </motion.p>

              {/* Team Stats */}
              <Row className="justify-content-center">
                <Col md={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">14+</h4>
                    <small className="text-muted">
                      Years Combined Experience
                    </small>
                  </motion.div>
                </Col>
                <Col md={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">3</h4>
                    <small className="text-muted">Core Team Members</small>
                  </motion.div>
                </Col>
                <Col md={4} className="mb-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-primary mb-0">150+</h4>
                    <small className="text-muted">Projects Delivered</small>
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {members.map((member, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="h-100"
              >
                <Card
                  className="h-100 border-0 text-center team-card"
                  style={{
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    background:
                      hoveredIndex === index ? member.gradient : "white",
                    boxShadow:
                      hoveredIndex === index
                        ? "0 25px 50px rgba(0,0,0,0.15)"
                        : "0 8px 30px rgba(0,0,0,0.08)",
                    transform:
                      hoveredIndex === index
                        ? "translateY(-15px)"
                        : "translateY(0)",
                  }}
                >
                  {/* Profile Section */}
                  <div className="position-relative p-4">
                    {/* Role Icon */}
                    <motion.div
                      className="position-absolute"
                      style={{
                        top: "20px",
                        right: "20px",
                        width: "40px",
                        height: "40px",
                        background:
                          hoveredIndex === index
                            ? "rgba(255,255,255,0.2)"
                            : member.gradient,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        backdropFilter: "blur(10px)",
                      }}
                      animate={{
                        rotate: hoveredIndex === index ? 360 : 0,
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {member.icon}
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                      className="mb-3 position-relative"
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="rounded-circle"
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "cover",
                          border: `4px solid ${
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.3)"
                              : "#f8f9fa"
                          }`,
                          transition: "border 0.3s ease",
                          filter:
                            hoveredIndex === index
                              ? "brightness(1.1)"
                              : "brightness(1)",
                        }}
                      />

                      {/* Experience Badge */}
                      <div
                        className="position-absolute"
                        style={{
                          bottom: "0",
                          right: "10px",
                          background: member.gradient,
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          fontSize: "0.7rem",
                          fontWeight: "bold",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        }}
                      >
                        {member.experience}
                      </div>
                    </motion.div>
                  </div>

                  <Card.Body className="p-4 pt-0">
                    <Card.Title
                      className="h5 mb-1 fw-bold"
                      style={{
                        color: hoveredIndex === index ? "white" : "#1e3c72",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {member.name}
                    </Card.Title>

                    <Card.Subtitle
                      className="mb-3"
                      style={{
                        color:
                          hoveredIndex === index
                            ? "rgba(255,255,255,0.8)"
                            : "#6c757d",
                        transition: "color 0.3s ease",
                        fontWeight: "500",
                      }}
                    >
                      {member.role}
                    </Card.Subtitle>

                    {member.bio && (
                      <Card.Text
                        className="small mb-4"
                        style={{
                          color:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.9)"
                              : "#6c757d",
                          transition: "color 0.3s ease",
                          lineHeight: 1.5,
                        }}
                      >
                        {member.bio}
                      </Card.Text>
                    )}

                    {/* Skills */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        height: hoveredIndex === index ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: hoveredIndex === index ? 1 : 0,
                              scale: hoveredIndex === index ? 1 : 0.8,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.1,
                            }}
                            className="badge"
                            style={{
                              background: "rgba(255,255,255,0.2)",
                              color: "white",
                              fontSize: "0.7rem",
                              padding: "4px 8px",
                              border: "1px solid rgba(255,255,255,0.3)",
                              backdropFilter: "blur(10px)",
                            }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="d-flex justify-content-center gap-3"
                    >
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "1.2rem",
                            transition: "color 0.3s ease",
                          }}
                        >
                          <FaLinkedin />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "1.2rem",
                            transition: "color 0.3s ease",
                          }}
                        >
                          <FaTwitter />
                        </motion.a>
                      )}
                      {member.social.github && (
                        <motion.a
                          href={member.social.github}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "1.2rem",
                            transition: "color 0.3s ease",
                          }}
                        >
                          <FaGithub />
                        </motion.a>
                      )}
                      {member.social.email && (
                        <motion.a
                          href={`mailto:${member.social.email}`}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            color: "rgba(255,255,255,0.8)",
                            fontSize: "1.2rem",
                            transition: "color 0.3s ease",
                          }}
                        >
                          <FaEnvelope />
                        </motion.a>
                      )}
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Bottom CTA */}
        <Row className="mt-5">
          <Col className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-muted mb-4">
                Want to work with our amazing team? Let's start your project
                today!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => navigate("/quote")}
                  variant="primary"
                  size="lg"
                  className="px-5 py-3 fw-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    border: "none",
                    borderRadius: "50px",
                    boxShadow: "0 8px 25px rgba(79, 172, 254, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <FaArrowRight className="me-2" />
                  Start Your Project
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .team-section .team-card:hover {
          box-shadow: 0 30px 60px rgba(0,0,0,0.2) !important;
        }
        
        .team-section .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(79, 172, 254, 0.4) !important;
        }
        
        .team-section a:hover {
          color: white !important;
        }
        
        /* Mobile-first responsive design */
        @media (max-width: 480px) {
          .team-section .team-card {
            margin-bottom: 1.5rem;
          }
          
          .team-section .display-5 {
            font-size: 1.8rem !important;
            line-height: 1.2 !important;
          }
          
          .team-section .btn {
            min-height: 44px !important;
            font-size: 0.9rem !important;
            padding: 10px 16px !important;
            touch-action: manipulation;
          }
          
          .team-section .btn:active {
            transform: scale(0.98) !important;
          }
          
          .team-section .team-card img {
            width: 100px !important;
            height: 100px !important;
          }
          
          .team-section .lead {
            font-size: 0.95rem !important;
          }
        }
        
        @media (min-width: 481px) and (max-width: 768px) {
          .team-section .team-card {
            margin-bottom: 1.8rem;
          }
          
          .team-section .display-5 {
            font-size: 2.2rem !important;
          }
          
          .team-section .btn {
            min-height: 44px !important;
            touch-action: manipulation;
          }
          
          .team-section .btn:active {
            transform: scale(0.98) !important;
          }
        }
        
        @media (max-width: 768px) {
          .team-section .team-card {
            margin-bottom: 2rem;
          }
          
          .team-section .display-5 {
            font-size: 2rem !important;
          }
          
          .team-section .btn {
            touch-action: manipulation;
          }
          
          .team-section .btn:active {
            transform: scale(0.98) !important;
          }
        }
        
        /* Touch-friendly adjustments */
        @media (max-width: 768px) {
          .team-section .btn {
            min-height: 44px !important;
            min-width: 44px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default TeamMini;
