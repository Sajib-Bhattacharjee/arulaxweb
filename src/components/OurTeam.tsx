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
}

interface OurTeamProps {
  teamMembers?: TeamMember[];
  showJoinCTA?: boolean;
}

const OurTeam: React.FC<OurTeamProps> = ({
  teamMembers,
  showJoinCTA = true,
}) => {
  const defaultTeamMembers: TeamMember[] = [
    {
      name: "Alex Rodriguez",
      role: "Lead Developer & Co-Founder",
      photo: "https://picsum.photos/300x300/4CAF50/white?text=AR",
      bio: "Full-stack developer with 8+ years of experience in modern web technologies. Passionate about creating scalable solutions and mentoring the next generation of developers.",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      socialLinks: [
        { platform: "linkedin", url: "#" },
        { platform: "github", url: "#" },
        { platform: "email", url: "mailto:alex@arulaxweb.com" },
      ],
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer & Creative Director",
      photo: "https://picsum.photos/300x300/2196F3/white?text=SC",
      bio: "Creative designer with a keen eye for user experience and visual storytelling. Specializes in creating intuitive interfaces that users love and businesses need.",
      skills: ["Figma", "Adobe Suite", "User Research", "Prototyping"],
      socialLinks: [
        { platform: "linkedin", url: "#" },
        { platform: "twitter", url: "#" },
        { platform: "email", url: "mailto:sarah@arulaxweb.com" },
      ],
    },
    {
      name: "Michael Johnson",
      role: "Project Manager & Client Relations",
      photo: "https://picsum.photos/300x300/FF9800/white?text=MJ",
      bio: "Experienced project manager with a track record of delivering complex web projects on time and within budget. Expert in client communication and team coordination.",
      skills: ["Agile", "Scrum", "Client Management", "Strategy"],
      socialLinks: [
        { platform: "linkedin", url: "#" },
        { platform: "email", url: "mailto:michael@arulaxweb.com" },
      ],
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
                Our Team & Community
              </h2>
              <p className="lead text-muted">
                Meet the passionate professionals behind AruLax Web
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {members.map((member, index) => (
            <Col lg={4} md={6} className="mb-5" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="h-100 shadow-sm border-0 overflow-hidden"
                  style={{ transition: "all 0.3s ease" }}
                >
                  <div className="position-relative">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="card-img-top"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div
                      className="position-absolute bottom-0 start-0 w-100 p-3"
                      style={{
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      }}
                    >
                      <h4 className="text-white fw-bold mb-1">{member.name}</h4>
                      <p className="text-light mb-0 small">{member.role}</p>
                    </div>
                  </div>

                  <Card.Body className="p-4">
                    <p
                      className="text-muted mb-3"
                      style={{ lineHeight: "1.6" }}
                    >
                      {member.bio}
                    </p>

                    {member.skills && (
                      <div className="mb-3">
                        <div className="d-flex flex-wrap gap-1">
                          {member.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="badge bg-light text-dark border"
                              style={{ fontSize: "0.75rem" }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="d-flex justify-content-center gap-2">
                      {member.socialLinks.map((social, socialIndex) => (
                        <a
                          key={socialIndex}
                          href={social.url}
                          className="btn btn-outline-secondary btn-sm rounded-circle p-2"
                          style={{
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: getSocialColor(social.platform),
                            borderColor: getSocialColor(social.platform),
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              getSocialColor(social.platform);
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                            e.currentTarget.style.color = getSocialColor(
                              social.platform
                            );
                          }}
                        >
                          {getSocialIcon(social.platform)}
                        </a>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
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
              >
                <Card className="border-0 shadow-sm bg-primary text-white">
                  <Card.Body className="p-5">
                    <FaUsers size={48} className="mb-3" />
                    <h3 className="fw-bold mb-3">Join Our Community</h3>
                    <p className="lead mb-4">
                      Are you passionate about web development? We're always
                      looking for talented individuals to join our growing team.
                    </p>
                    <Button
                      variant="light"
                      size="lg"
                      className="px-4"
                      onClick={() =>
                        console.log("Join Our Community button clicked")
                      }
                    >
                      View Open Positions
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default OurTeam;
