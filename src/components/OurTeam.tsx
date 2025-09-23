import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

interface SocialLink {
  platform: "linkedin" | "twitter" | "github" | "email";
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string;
  socialLinks: SocialLink[];
  skills?: string[];
  gradient?: string;
  borderGradient?: string;
  color?: string;
  experience?: string;
  icon?: React.ReactNode;
}

interface OurTeamProps {
  teamMembers?: TeamMember[];
  showJoinCTA?: boolean;
}

const OurTeam: React.FC<OurTeamProps> = ({
  teamMembers,
  showJoinCTA = true,
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const defaultTeamMembers: TeamMember[] = [
    {
      name: "Sajib Bhattacharjee",
      role: "Founder & CEO of AruLax Web",
      photo: "https://avatars.githubusercontent.com/u/86997775?v=4",
      bio: "Full-stack developer with 5+ years of experience crafting modern, responsive, and high-performance web applications using cutting-edge technologies.",
      skills: [
        "React",
        "Redux",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      socialLinks: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/",
        },
        { platform: "github", url: "https://github.com/Sajib-Bhattacharjee" },
        { platform: "email", url: "mailto:sbc@arulaxweb.com" },
      ],
      gradient:
        "linear-gradient(135deg, #0F0620 0%, #1B0D5B 50%, #111E2E 100%)",
      borderGradient: "linear-gradient(135deg, #0F0620, #1B0D5B, #111E2E)",
      color: "#667eea",
      experience: "5+ Years",
      icon: <FaUsers size={24} />,
    },
    {
      name: "Saiket Kumar Ray",
      role: "UI/UX Designer & Marketing Specialist",
      photo: "https://picsum.photos/300/300?random=17",
      bio: "Creative designer passionate about creating intuitive and beautiful user experiences that convert visitors into customers.",
      skills: [
        "Figma",
        "Adobe Creative",
        "User Research",
        "Marketing",
        "SEO",
        "Content Strategy",
      ],
      socialLinks: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "email", url: "mailto:saiket@arulaxweb.com" },
      ],
      gradient:
        "linear-gradient(135deg, #512F1A 0%, #124A4C 50%, #1B0E5E 100%)",
      borderGradient: "linear-gradient(135deg, #512F1A, #124A4C, #1B0E5E)",
      color: "#4facfe",
      experience: "6+ Years",
      icon: <FaUsers size={24} />,
    },
    {
      name: "Fatema Zahan Shayla",
      role: "Project Manager",
      photo: "https://avatars.githubusercontent.com/u/103666625?v=4",
      bio: "Experienced project manager ensuring smooth delivery and exceptional client satisfaction with every project we complete.",
      skills: [
        "Agile",
        "Client Relations",
        "Quality Assurance",
        "Team Leadership",
      ],
      socialLinks: [
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/fatema-zahan-shayla-8b823b2ab/?originalSubdomain=b",
        },
        { platform: "email", url: "mailto:fatema@arulaxweb.com" },
      ],
      gradient:
        "linear-gradient(135deg, #520D5A 0%, #0D0518 50%, #500C58 100%)",
      borderGradient: "linear-gradient(135deg, #520D5A, #0D0518, #500C58)",
      color: "#f093fb",
      experience: "3+ Years",
      icon: <FaUsers size={24} />,
    },
  ];

  const members = teamMembers || defaultTeamMembers;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return <FaLinkedin size={20} />;
      case "twitter":
        return <FaTwitter size={20} />;
      case "github":
        return <FaGithub size={20} />;
      case "email":
        return <FaEnvelope size={20} />;
      default:
        return null;
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case "linkedin":
        return "#0077b5";
      case "twitter":
        return "#1da1f2";
      case "github":
        return "#333";
      case "email":
        return "#ea4335";
      default:
        return "#6c757d";
    }
  };

  return (
    <section
      className="py-5 our-team-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",
      }}
    >
      {/* Dynamic Background */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(79, 172, 254, 0.03) 50%, rgba(240, 147, 251, 0.03) 100%)",
          zIndex: -2,
        }}
      />

      {/* Animated Background Shapes */}
      <motion.div
        className="position-absolute"
        style={{
          top: "10%",
          right: "5%",
          width: "120px",
          height: "120px",
          background:
            "linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="position-absolute"
        style={{
          bottom: "15%",
          left: "8%",
          width: "80px",
          height: "80px",
          background:
            "linear-gradient(135deg, rgba(79, 172, 254, 0.08), rgba(0, 242, 254, 0.08))",
          borderRadius: "50%",
          zIndex: -1,
        }}
        animate={{
          y: [0, 15, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
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
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Team & Community
              </motion.h2>

              <motion.p
                className="lead text-muted"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Meet the passionate professionals behind AruLax Web
              </motion.p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {members.map((member, index) => (
            <Col lg={4} md={6} className="mb-5" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gradient Border Container */}
                <motion.div
                  className="position-relative"
                  style={{
                    padding: "3px",
                    background:
                      member.borderGradient ||
                      "linear-gradient(135deg, #667eea, #764ba2, #667eea)",
                    borderRadius: "20px",
                    zIndex: 1,
                  }}
                  animate={{
                    background: [
                      member.borderGradient ||
                        "linear-gradient(135deg, #667eea, #764ba2, #667eea)",
                      `linear-gradient(135deg, ${
                        member.color || "#667eea"
                      }40, ${member.color || "#667eea"}80, ${
                        member.color || "#667eea"
                      }40)`,
                      member.borderGradient ||
                        "linear-gradient(135deg, #667eea, #764ba2, #667eea)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Animated Border Ring */}
                  <motion.div
                    className="position-absolute"
                    style={{
                      top: "-2px",
                      left: "-2px",
                      right: "-2px",
                      bottom: "-2px",
                      background: `conic-gradient(from 0deg, transparent, ${
                        member.color || "#667eea"
                      }, transparent, ${
                        member.color || "#667eea"
                      }60, transparent)`,
                      borderRadius: "22px",
                      zIndex: -1,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <Card
                    className="h-100 border-0 overflow-hidden position-relative"
                    style={{
                      background:
                        hoveredIndex === index
                          ? member.gradient ||
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                      boxShadow:
                        hoveredIndex === index
                          ? `0 25px 60px ${
                              member.color || "#667eea"
                            }30, 0 10px 30px ${
                              member.color || "#667eea"
                            }20, inset 0 1px 0 rgba(255,255,255,0.2)`
                          : "0 8px 30px rgba(0,0,0,0.08), 0 2px 10px rgba(0,0,0,0.04)",
                      borderRadius: "17px",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      backdropFilter:
                        hoveredIndex === index ? "blur(20px)" : "blur(0px)",
                      transform:
                        hoveredIndex === index
                          ? "translateY(-20px) rotateX(5deg)"
                          : "translateY(0) rotateX(0)",
                    }}
                  >
                    {/* Floating Particles Background */}
                    {[...Array(5)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="position-absolute"
                        style={{
                          width: "4px",
                          height: "4px",
                          background:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.6)"
                              : "transparent",
                          borderRadius: "50%",
                          top: `${20 + particleIndex * 15}%`,
                          left: `${10 + particleIndex * 18}%`,
                          zIndex: 0,
                        }}
                        animate={{
                          y: hoveredIndex === index ? [0, -25, 0] : [0, 0, 0],
                          opacity:
                            hoveredIndex === index ? [0.3, 1, 0.3] : [0, 0, 0],
                          scale:
                            hoveredIndex === index
                              ? [0.5, 1.5, 0.5]
                              : [0, 0, 0],
                        }}
                        transition={{
                          duration: 2 + particleIndex * 0.3,
                          repeat: Infinity,
                          delay: particleIndex * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}

                    {/* Shimmer Effect */}
                    <motion.div
                      className="position-absolute"
                      style={{
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        zIndex: 1,
                      }}
                      animate={{
                        left:
                          hoveredIndex === index
                            ? ["100%", "100%"]
                            : ["100%", "100%"],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    />

                    <div className="position-relative">
                      <motion.img
                        src={member.photo}
                        alt={member.name}
                        className="card-img-top"
                        style={{
                          height: "300px",
                          objectFit: "cover",
                          transition: "all 0.4s ease",
                        }}
                        whileHover={{
                          scale: 1.05,
                          filter: "brightness(1.1) contrast(1.05)",
                        }}
                      />

                      {/* Experience Badge */}
                      {member.experience && (
                        <motion.div
                          className="position-absolute"
                          style={{
                            top: "15px",
                            right: "15px",
                            padding: "6px 12px",
                            background:
                              hoveredIndex === index
                                ? "rgba(255,255,255,0.25)"
                                : "rgba(255,255,255,0.9)",
                            borderRadius: "15px",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            zIndex: 2,
                          }}
                          whileHover={{ scale: 1.1 }}
                          animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                          }}
                        >
                          <small
                            className="fw-bold"
                            style={{
                              color:
                                hoveredIndex === index ? "white" : "#2d3748",
                              fontSize: "0.75rem",
                            }}
                          >
                            {member.experience}
                          </small>
                        </motion.div>
                      )}

                      <div
                        className="position-absolute bottom-0 start-0 w-100 p-3"
                        style={{
                          background:
                            "linear-gradient(transparent, rgba(0,0,0,0.8))",
                          backdropFilter: "blur(5px)",
                        }}
                      >
                        <motion.h4
                          className="text-white fw-bold mb-1"
                          style={{
                            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {member.name}
                        </motion.h4>
                        <motion.p
                          className="text-light mb-0 small"
                          style={{
                            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {member.role}
                        </motion.p>
                      </div>
                    </div>

                    <Card.Body
                      className="p-4"
                      style={{ zIndex: 3, position: "relative" }}
                    >
                      <motion.p
                        className="mb-3"
                        style={{
                          lineHeight: "1.7",
                          color:
                            hoveredIndex === index
                              ? "rgba(255,255,255,0.95)"
                              : "#5a6c7d",
                          transition: "all 0.4s ease",
                          textShadow:
                            hoveredIndex === index
                              ? "0 1px 2px rgba(0,0,0,0.2)"
                              : "none",
                        }}
                      >
                        {member.bio}
                      </motion.p>

                      {member.skills && (
                        <motion.div
                          className="mb-3"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 1,
                            height: "auto",
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <div className="d-flex flex-wrap gap-1">
                            {member.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                className="badge"
                                style={{
                                  fontSize: "0.75rem",
                                  background:
                                    hoveredIndex === index
                                      ? "rgba(255,255,255,0.25)"
                                      : "rgba(108, 117, 125, 0.1)",
                                  color:
                                    hoveredIndex === index
                                      ? "white"
                                      : "#495057",
                                  border:
                                    hoveredIndex === index
                                      ? "1px solid rgba(255,255,255,0.3)"
                                      : "1px solid rgba(108, 117, 125, 0.2)",
                                  backdropFilter:
                                    hoveredIndex === index
                                      ? "blur(10px)"
                                      : "none",
                                  transition: "all 0.3s ease",
                                }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: skillIndex * 0.1,
                                }}
                                whileHover={{
                                  scale: 1.1,
                                  transition: { duration: 0.2 },
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      <motion.div
                        className="d-flex justify-content-center gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {member.socialLinks.map((social, socialIndex) => (
                          <motion.a
                            key={socialIndex}
                            href={social.url}
                            className="btn btn-sm rounded-circle p-2"
                            style={{
                              width: "45px",
                              height: "45px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background:
                                hoveredIndex === index
                                  ? `rgba(${
                                      getSocialColor(social.platform)
                                        .replace("#", "")
                                        .match(/.{2}/g)
                                        ?.map((hex) => parseInt(hex, 16))
                                        .join(", ") || "102, 126, 234"
                                    }, 0.2)`
                                  : "transparent",
                              color:
                                hoveredIndex === index
                                  ? "white"
                                  : getSocialColor(social.platform),
                              borderColor:
                                hoveredIndex === index
                                  ? "rgba(255,255,255,0.3)"
                                  : getSocialColor(social.platform),
                              border: "2px solid",
                              backdropFilter:
                                hoveredIndex === index ? "blur(10px)" : "none",
                              transition: "all 0.3s ease",
                            }}
                            whileHover={{
                              scale: 1.15,
                              rotate: 5,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                              y:
                                hoveredIndex === index
                                  ? [-2, 2, -2]
                                  : [0, 0, 0],
                            }}
                            transition={{
                              y: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: socialIndex * 0.2,
                              },
                            }}
                          >
                            {getSocialIcon(social.platform)}
                          </motion.a>
                        ))}
                      </motion.div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {showJoinCTA && (
          <Row className="mt-5">
            <Col className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card
                  className="border-0 shadow-lg position-relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "20px",
                  }}
                >
                  {/* Background Pattern */}
                  <div
                    className="position-absolute"
                    style={{
                      top: "-50px",
                      right: "-50px",
                      width: "100px",
                      height: "100px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "50%",
                      zIndex: -1,
                    }}
                  />

                  <Card.Body className="p-5 text-white">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <FaUsers size={48} className="mb-3" />
                    </motion.div>

                    <motion.h3
                      className="fw-bold mb-3"
                      style={{
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      Join Our Community
                    </motion.h3>

                    <motion.p
                      className="lead mb-4"
                      style={{
                        textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                        lineHeight: "1.6",
                      }}
                    >
                      Are you passionate about web development? We're always
                      looking for talented individuals to join our growing team.
                    </motion.p>

                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="light"
                        size="lg"
                        className="px-5 py-3 fw-bold"
                        style={{
                          borderRadius: "25px",
                          boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() =>
                          console.log("Join Our Community button clicked")
                        }
                      >
                        View Open Positions
                      </Button>
                    </motion.div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        )}
      </Container>

      {/* Enhanced Styles */}
      <style>{`
        .our-team-section {
          position: relative;
        }
        
        .our-team-section .card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow, background;
        }
        
        .our-team-section .card:hover {
          animation: cardFloat 3s ease-in-out infinite;
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        /* Enhanced Mobile Responsiveness */
        @media (max-width: 1200px) {
          .our-team-section .card {
            margin-bottom: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .our-team-section .card {
            margin-bottom: 2rem;
          }
          
          .display-4 {
            font-size: 2.2rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .our-team-section .card {
            margin-bottom: 2.5rem;
          }
          
          .display-4 {
            font-size: 1.8rem !important;
          }
          
          .lead {
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .our-team-section .card {
            margin-bottom: 3rem;
          }
          
          .display-4 {
            font-size: 1.6rem !important;
          }
          
          .lead {
            font-size: 0.95rem !important;
          }
        }
        
        /* Touch Device Optimizations */
        @media (hover: none) and (pointer: coarse) {
          .our-team-section .card:hover {
            animation: none;
          }
          
          .our-team-section .card:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
        }
        
        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .our-team-section .card {
            transition: none;
          }
          
          .our-team-section .card:hover {
            animation: none;
            transform: none;
          }
        }
        
        /* High Contrast Support */
        @media (prefers-contrast: high) {
          .our-team-section .card {
            border: 2px solid currentColor;
          }
          
          .our-team-section .card p {
            color: currentColor !important;
          }
        }
        
        /* Print Styles */
        @media print {
          .our-team-section .card {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
            background: white !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
