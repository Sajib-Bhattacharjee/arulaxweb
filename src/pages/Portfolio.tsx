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
  FaShare,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaRocket,
  FaCode,
  FaDesktop,
  FaCloud,
  FaUser,
  FaBuilding,
  FaUtensils,
  FaHeartbeat,
  FaHotel,
  FaPlane,
  FaCamera,
  FaUserTie,
  FaHome,
  FaFileAlt,
  FaCog,
  FaCalendarAlt,
  FaGlobe,
  FaHammer,
  FaTruck,
  FaBlog,
  FaCopy,
  FaCheck,
  FaPlay,
  FaExpand,
  FaTimes,
  FaLightbulb,
  FaChartLine,
  FaCalculator,
  FaTrophy,
  FaHandshake,
  FaClock,
  FaCheckCircle,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaShieldAlt,
  FaHeadset,
  FaPalette,
} from "react-icons/fa";

// Types
interface Project {
  id: string;
  title: string;
  category:
    | "Business"
    | "Portfolio"
    | "Admin"
    | "Education"
    | "eCommerce"
    | "Restaurant"
    | "Medical"
    | "Coming Soon"
    | "One Page"
    | "Landing Page"
    | "Corporate"
    | "Agency"
    | "Travel"
    | "Hotel"
    | "Events"
    | "Photography"
    | "Personal"
    | "Resume / CV"
    | "Real Estate"
    | "Health"
    | "Website Templates"
    | "Construction"
    | "Transportation"
    | "Blog & Magazine";
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
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  startingPrice: string;
  industry?: string[];
  successMetrics?: {
    clientROI: string;
    trafficIncrease: string;
    conversionRate: string;
    projectDuration: string;
    clientSatisfaction: number;
  };
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
  const [selectedForComparison, setSelectedForComparison] = useState<string[]>(
    []
  );
  const [showComparison, setShowComparison] = useState(false);
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const [demoUrl, setDemoUrl] = useState("");
  const [showCalculator, setShowCalculator] = useState(false);
  const [userBehavior, setUserBehavior] = useState<{
    viewedProjects: string[];
    clickedCategories: string[];
    timeSpent: { [key: string]: number };
  }>({
    viewedProjects: [],
    clickedCategories: [],
    timeSpent: {},
  });
  const [calculatorConfig, setCalculatorConfig] = useState({
    projectType: "",
    features: [] as string[],
    pages: 1,
    integrations: [] as string[],
    customizations: [] as string[],
  });
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Sample projects data
  const sampleProjects: Project[] = [
    {
      id: "1",
      title: "EcoSchool Management System",
      category: "Education",
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
      estimatedTime: "2-3 months",
      difficulty: "Intermediate",
      startingPrice: "$8,000",
      industry: ["Education", "Technology"],
      successMetrics: {
        clientROI: "340%",
        trafficIncrease: "+250%",
        conversionRate: "+180%",
        projectDuration: "2.5 months",
        clientSatisfaction: 98,
      },
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
      estimatedTime: "3-4 months",
      difficulty: "Advanced",
      startingPrice: "$12,000",
      industry: ["Business", "Technology", "Analytics"],
      successMetrics: {
        clientROI: "420%",
        trafficIncrease: "+320%",
        conversionRate: "+250%",
        projectDuration: "3.2 months",
        clientSatisfaction: 95,
      },
    },
    {
      id: "3",
      title: "ShopEasy E-Commerce Platform",
      category: "eCommerce",
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
      estimatedTime: "4-5 months",
      difficulty: "Advanced",
      startingPrice: "$15,000",
      industry: ["E-commerce", "Retail"],
      successMetrics: {
        clientROI: "280%",
        trafficIncrease: "+400%",
        conversionRate: "+220%",
        projectDuration: "4.1 months",
        clientSatisfaction: 97,
      },
    },
    {
      id: "4",
      title: "Creative Portfolio Website",
      category: "Portfolio",
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
      estimatedTime: "1-2 months",
      difficulty: "Beginner",
      startingPrice: "$3,000",
      industry: ["Creative", "Marketing"],
      successMetrics: {
        clientROI: "180%",
        trafficIncrease: "+150%",
        conversionRate: "+120%",
        projectDuration: "1.8 months",
        clientSatisfaction: 92,
      },
    },
    {
      id: "5",
      title: "HealthCare Clinic Management",
      category: "Medical",
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
      estimatedTime: "3-4 months",
      difficulty: "Advanced",
      startingPrice: "$10,000",
      industry: ["Healthcare", "Medical"],
      successMetrics: {
        clientROI: "380%",
        trafficIncrease: "+280%",
        conversionRate: "+190%",
        projectDuration: "3.5 months",
        clientSatisfaction: 96,
      },
    },
    {
      id: "6",
      title: "University Course Portal",
      category: "Education",
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
      estimatedTime: "4-6 months",
      difficulty: "Advanced",
      startingPrice: "$18,000",
      industry: ["Education", "Technology"],
      successMetrics: {
        clientROI: "450%",
        trafficIncrease: "+380%",
        conversionRate: "+300%",
        projectDuration: "5.2 months",
        clientSatisfaction: 99,
      },
    },
    {
      id: "7",
      title: "Bella Vista Restaurant",
      category: "Restaurant",
      tags: ["Online Ordering", "Menu Management", "Reservation System"],
      description:
        "Modern restaurant website with online ordering, table reservations, and menu management system integrated with Google Sheets for easy updates.",
      shortDescription: "Complete restaurant solution with online ordering",
      thumbnail:
        "https://picsum.photos/400x300/FF5722/white?text=Bella+Vista+Restaurant",
      images: [
        "https://picsum.photos/800x600/FF5722/white?text=Restaurant+Homepage",
        "https://picsum.photos/800x600/E91E63/white?text=Online+Menu",
        "https://picsum.photos/800x600/9C27B0/white?text=Reservation+System",
      ],
      technologies: [
        "React",
        "Google Sheets API",
        "Stripe",
        "Calendar API",
        "Bootstrap",
      ],
      features: [
        "Online food ordering system",
        "Table reservation management",
        "Dynamic menu updates from Google Sheets",
        "Payment processing integration",
        "Customer reviews and ratings",
        "Mobile-responsive design",
      ],
      liveUrl: "https://bellavista-restaurant.arulaxweb.com",
      featured: true,
      popularity: 87,
      createdAt: "2024-06-25",
      hasLiveData: true,
      estimatedTime: "2-3 months",
      difficulty: "Intermediate",
      startingPrice: "$6,000",
      industry: ["Restaurant", "Food & Beverage"],
      successMetrics: {
        clientROI: "320%",
        trafficIncrease: "+200%",
        conversionRate: "+160%",
        projectDuration: "2.2 months",
        clientSatisfaction: 94,
      },
    },
    {
      id: "8",
      title: "Luxury Travel Agency",
      category: "Travel",
      tags: ["Booking System", "Travel Packages", "Customer Portal"],
      description:
        "Premium travel agency website with package booking, customer portal, and travel management system with real-time data from Google Sheets.",
      shortDescription: "Luxury travel booking and management platform",
      thumbnail:
        "https://picsum.photos/400x300/00BCD4/white?text=Luxury+Travel",
      images: [
        "https://picsum.photos/800x600/00BCD4/white?text=Travel+Packages",
        "https://picsum.photos/800x600/009688/white?text=Booking+System",
        "https://picsum.photos/800x600/4CAF50/white?text=Customer+Portal",
      ],
      technologies: [
        "React",
        "Google Sheets API",
        "Payment Gateway",
        "Maps API",
        "Node.js",
      ],
      features: [
        "Travel package booking system",
        "Customer portal with booking history",
        "Real-time package availability",
        "Payment processing",
        "Travel itinerary management",
        "Multi-language support",
      ],
      clientTestimonial: {
        text: "Our booking process has become so much smoother. Customers love the easy-to-use interface.",
        author: "Maria Santos",
        role: "Owner, Luxury Travel Co.",
      },
      liveUrl: "https://luxury-travel.arulaxweb.com",
      featured: true,
      popularity: 91,
      createdAt: "2024-05-15",
      hasLiveData: true,
      estimatedTime: "3-4 months",
      difficulty: "Advanced",
      startingPrice: "$12,000",
      industry: ["Travel", "Tourism"],
      successMetrics: {
        clientROI: "350%",
        trafficIncrease: "+300%",
        conversionRate: "+240%",
        projectDuration: "3.3 months",
        clientSatisfaction: 97,
      },
    },
    {
      id: "9",
      title: "Real Estate Portal",
      category: "Real Estate",
      tags: ["Property Listings", "Virtual Tours", "Lead Management"],
      description:
        "Comprehensive real estate portal with property listings, virtual tours, and lead management system integrated with Google Sheets.",
      shortDescription: "Complete real estate management platform",
      thumbnail:
        "https://picsum.photos/400x300/795548/white?text=Real+Estate+Portal",
      images: [
        "https://picsum.photos/800x600/795548/white?text=Property+Listings",
        "https://picsum.photos/800x600/607D8B/white?text=Virtual+Tours",
        "https://picsum.photos/800x600/9E9E9E/white?text=Lead+Management",
      ],
      technologies: [
        "React",
        "Google Sheets API",
        "Maps API",
        "360° Viewer",
        "CRM Integration",
      ],
      features: [
        "Property listing management",
        "Virtual property tours",
        "Lead capture and management",
        "Advanced search and filters",
        "Agent dashboard",
        "Mobile app integration",
      ],
      liveUrl: "https://realestate-portal.arulaxweb.com",
      featured: false,
      popularity: 83,
      createdAt: "2024-04-10",
      hasLiveData: true,
      estimatedTime: "4-5 months",
      difficulty: "Advanced",
      startingPrice: "$14,000",
      industry: ["Real Estate", "Property"],
      successMetrics: {
        clientROI: "290%",
        trafficIncrease: "+220%",
        conversionRate: "+170%",
        projectDuration: "4.3 months",
        clientSatisfaction: 93,
      },
    },
    {
      id: "10",
      title: "Construction Company Website",
      category: "Construction",
      tags: ["Project Portfolio", "Client Portal", "Project Tracking"],
      description:
        "Professional construction company website with project portfolio, client portal, and project tracking system using Google Sheets integration.",
      shortDescription: "Construction company with project management",
      thumbnail:
        "https://picsum.photos/400x300/FF9800/white?text=Construction+Company",
      images: [
        "https://picsum.photos/800x600/FF9800/white?text=Project+Portfolio",
        "https://picsum.photos/800x600/FF5722/white?text=Client+Portal",
        "https://picsum.photos/800x600/4CAF50/white?text=Project+Tracking",
      ],
      technologies: [
        "React",
        "Google Sheets API",
        "Image Gallery",
        "Progress Tracking",
        "Bootstrap",
      ],
      features: [
        "Project portfolio showcase",
        "Client portal access",
        "Real-time project updates",
        "Progress tracking system",
        "Photo gallery management",
        "Quote request system",
      ],
      clientTestimonial: {
        text: "Our clients can now track their project progress in real-time. It's been a game-changer for our business.",
        author: "John Miller",
        role: "CEO, Miller Construction",
      },
      liveUrl: "https://construction-company.arulaxweb.com",
      featured: false,
      popularity: 78,
      createdAt: "2024-03-22",
      hasLiveData: true,
      estimatedTime: "2-3 months",
      difficulty: "Intermediate",
      startingPrice: "$7,000",
      industry: ["Construction", "Building"],
      successMetrics: {
        clientROI: "260%",
        trafficIncrease: "+180%",
        conversionRate: "+140%",
        projectDuration: "2.4 months",
        clientSatisfaction: 91,
      },
    },
    {
      id: "11",
      title: "Photography Portfolio",
      category: "Photography",
      tags: ["Gallery Management", "Client Albums", "Booking System"],
      description:
        "Stunning photography portfolio with dynamic gallery, client album sharing, and booking system integrated with Google Sheets for content management.",
      shortDescription: "Professional photography portfolio with booking",
      thumbnail:
        "https://picsum.photos/400x300/9C27B0/white?text=Photography+Portfolio",
      images: [
        "https://picsum.photos/800x600/9C27B0/white?text=Photo+Gallery",
        "https://picsum.photos/800x600/E91E63/white?text=Client+Albums",
        "https://picsum.photos/800x600/673AB7/white?text=Booking+System",
      ],
      technologies: [
        "React",
        "Google Sheets API",
        "Image Optimization",
        "Lightbox Gallery",
        "Calendar API",
      ],
      features: [
        "Dynamic photo gallery",
        "Client album sharing",
        "Session booking system",
        "Portfolio categorization",
        "Social media integration",
        "Print ordering system",
      ],
      liveUrl: "https://photography-portfolio.arulaxweb.com",
      featured: true,
      popularity: 89,
      createdAt: "2024-02-18",
      hasLiveData: false,
      estimatedTime: "1-2 months",
      difficulty: "Beginner",
      startingPrice: "$4,000",
      industry: ["Photography", "Creative"],
      successMetrics: {
        clientROI: "220%",
        trafficIncrease: "+190%",
        conversionRate: "+130%",
        projectDuration: "1.6 months",
        clientSatisfaction: 95,
      },
    },
    {
      id: "12",
      title: "Corporate Website",
      category: "Corporate",
      tags: ["Professional Design", "Company Profile", "News Section"],
      description:
        "Professional corporate website with company profile, news section, and dynamic content management through Google Sheets integration.",
      shortDescription: "Professional corporate website solution",
      thumbnail:
        "https://picsum.photos/400x300/2196F3/white?text=Corporate+Website",
      images: [
        "https://picsum.photos/800x600/2196F3/white?text=Company+Profile",
        "https://picsum.photos/800x600/3F51B5/white?text=News+Section",
        "https://picsum.photos/800x600/673AB7/white?text=Contact+Page",
      ],
      technologies: [
        "React",
        "Google Sheets API",
        "CMS Integration",
        "SEO Optimization",
        "Analytics",
      ],
      features: [
        "Professional company profile",
        "Dynamic news and updates",
        "Team member management",
        "Service showcase",
        "Contact and inquiry forms",
        "Multi-language support",
      ],
      liveUrl: "https://corporate-website.arulaxweb.com",
      featured: false,
      popularity: 85,
      createdAt: "2024-01-30",
      hasLiveData: true,
      estimatedTime: "2-3 months",
      difficulty: "Intermediate",
      startingPrice: "$5,000",
      industry: ["Corporate", "Business"],
      successMetrics: {
        clientROI: "240%",
        trafficIncrease: "+160%",
        conversionRate: "+110%",
        projectDuration: "2.1 months",
        clientSatisfaction: 90,
      },
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

  // Track user behavior when projects are clicked
  const trackProjectView = (projectId: string) => {
    setUserBehavior((prev) => ({
      ...prev,
      viewedProjects: [...new Set([...prev.viewedProjects, projectId])],
    }));
  };

  const trackCategoryClick = (category: string) => {
    setUserBehavior((prev) => ({
      ...prev,
      clickedCategories: [...new Set([...prev.clickedCategories, category])],
    }));
  };

  // Get all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  const categories = [
    "All",
    "Business",
    "Portfolio",
    "Admin",
    "Education",
    "eCommerce",
    "Restaurant",
    "Medical",
    "Coming Soon",
    "One Page",
    "Landing Page",
    "Corporate",
    "Agency",
    "Travel",
    "Hotel",
    "Events",
    "Photography",
    "Personal",
    "Resume / CV",
    "Real Estate",
    "Health",
    "Website Templates",
    "Construction",
    "Transportation",
    "Blog & Magazine",
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setShowModal(true);
    trackProjectView(project.id);
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

  const handleComparisonToggle = (projectId: string) => {
    setSelectedForComparison((prev) => {
      if (prev.includes(projectId)) {
        return prev.filter((id) => id !== projectId);
      } else if (prev.length < 3) {
        return [...prev, projectId];
      }
      return prev;
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "success";
      case "Intermediate":
        return "warning";
      case "Advanced":
        return "danger";
      default:
        return "secondary";
    }
  };

  const handleLiveDemo = (project: Project) => {
    if (project.liveUrl) {
      setDemoUrl(project.liveUrl);
      setShowLiveDemo(true);
    }
  };

  const getQuoteForProject = (project: Project) => {
    // You can customize this URL or implement your quote system
    const quoteUrl = `/quote?project=${encodeURIComponent(
      project.title
    )}&category=${encodeURIComponent(
      project.category
    )}&price=${encodeURIComponent(project.startingPrice)}`;
    window.location.href = quoteUrl;
  };

  // Smart Recommendations based on user behavior
  const getSmartRecommendations = () => {
    if (userBehavior.viewedProjects.length === 0) {
      return projects.filter((p) => p.featured).slice(0, 3);
    }

    const viewedCategories = userBehavior.viewedProjects
      .map((id) => {
        const project = projects.find((p) => p.id === id);
        return project?.category;
      })
      .filter(Boolean);

    const recommendations = projects
      .filter(
        (p) =>
          !userBehavior.viewedProjects.includes(p.id) &&
          (viewedCategories.includes(p.category) ||
            p.industry?.some((ind) =>
              userBehavior.clickedCategories.includes(ind)
            ))
      )
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 3);

    return recommendations.length > 0
      ? recommendations
      : projects.filter((p) => p.featured).slice(0, 3);
  };

  const calculateProjectPrice = () => {
    let basePrice = 0;

    // Base price by project type
    const projectTypePrices = {
      Business: 8000,
      Portfolio: 3000,
      Admin: 10000,
      Education: 12000,
      eCommerce: 15000,
      Restaurant: 6000,
      Medical: 10000,
      Corporate: 5000,
      Agency: 8000,
      Travel: 12000,
      Hotel: 10000,
      Events: 4000,
      Photography: 4000,
      Personal: 3000,
      "Real Estate": 14000,
      Health: 9000,
      Construction: 7000,
      Transportation: 8000,
    };

    basePrice =
      projectTypePrices[
        calculatorConfig.projectType as keyof typeof projectTypePrices
      ] || 5000;

    // Add feature costs
    const featurePrices = {
      "Google Sheets Integration": 2000,
      "Payment Gateway": 1500,
      "User Authentication": 1000,
      "Admin Dashboard": 2000,
      "Mobile App": 3000,
      "API Integration": 1500,
      "E-commerce Features": 2500,
      "Booking System": 1800,
      "Real-time Chat": 1200,
      "Analytics Dashboard": 1500,
    };

    calculatorConfig.features.forEach((feature) => {
      basePrice += featurePrices[feature as keyof typeof featurePrices] || 500;
    });

    // Add page costs
    basePrice += (calculatorConfig.pages - 1) * 200;

    // Add integration costs
    calculatorConfig.integrations.forEach(() => {
      basePrice += 800;
    });

    // Add customization costs
    calculatorConfig.customizations.forEach(() => {
      basePrice += 1000;
    });

    return basePrice;
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

      {/* Client Success Stories Section */}
      <section className="py-5 client-success-section position-relative">
        {/* Dynamic Background Elements */}
        <div className="success-bg-elements">
          <motion.div
            className="floating-orb orb-1"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="floating-orb orb-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="floating-orb orb-3"
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
              scale: [1, 1.5, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              className="d-inline-block mb-3"
            >
              <FaTrophy size={60} className="text-warning" />
            </motion.div>
            <motion.h2
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Client Success Stories
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Real results from real clients. See how we've transformed
              businesses with our web solutions.
            </motion.p>
          </motion.div>

          <Row className="g-4">
            {[
              {
                id: 1,
                client: "TechCorp Solutions",
                industry: "Technology",
                project: "Business Dashboard",
                testimonial:
                  "Our decision-making process has improved dramatically with this dashboard. The real-time insights are invaluable.",
                author: "Michael Chen",
                role: "CEO",
                avatar: "https://picsum.photos/80/80?random=1",
                metrics: {
                  roi: "420%",
                  traffic: "+320%",
                  conversion: "+250%",
                  satisfaction: 95,
                },
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              },
              {
                id: 2,
                client: "Greenwood Elementary",
                industry: "Education",
                project: "School Management System",
                testimonial:
                  "The system has revolutionized how we manage our school data. The Google Sheets integration makes it so easy for teachers.",
                author: "Sarah Johnson",
                role: "Principal",
                avatar: "https://picsum.photos/80/80?random=2",
                metrics: {
                  roi: "340%",
                  traffic: "+250%",
                  conversion: "+180%",
                  satisfaction: 98,
                },
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              },
              {
                id: 3,
                client: "Luxury Travel Co.",
                industry: "Travel",
                project: "Travel Booking Platform",
                testimonial:
                  "Our booking process has become so much smoother. Customers love the easy-to-use interface.",
                author: "Maria Santos",
                role: "Owner",
                avatar: "https://picsum.photos/80/80?random=3",
                metrics: {
                  roi: "350%",
                  traffic: "+300%",
                  conversion: "+240%",
                  satisfaction: 97,
                },
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              },
            ].map((story, index) => (
              <Col lg={4} md={6} key={story.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -15,
                    scale: 1.03,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="h-100"
                >
                  <Card className="h-100 border-0 shadow-lg success-story-card position-relative overflow-hidden">
                    <motion.div
                      className="success-story-header position-relative"
                      style={{ background: story.gradient }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated background overlay */}
                      <motion.div
                        className="header-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="d-flex align-items-center p-4 position-relative">
                        <motion.img
                          src={story.avatar}
                          alt={story.author}
                          className="rounded-circle me-3"
                          style={{ width: 60, height: 60, objectFit: "cover" }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.3 },
                          }}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.3,
                            type: "spring",
                            stiffness: 200,
                          }}
                          viewport={{ once: true }}
                        />
                        <motion.div
                          className="text-white"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.5,
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.h6
                            className="mb-1 fw-bold"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {story.author}
                          </motion.h6>
                          <motion.small
                            className="opacity-75"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.75 }}
                            transition={{ delay: index * 0.1 + 0.7 }}
                            viewport={{ once: true }}
                          >
                            {story.role}
                          </motion.small>
                          <motion.div
                            className="mt-1"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.9,
                              type: "spring",
                              stiffness: 200,
                            }}
                            viewport={{ once: true }}
                          >
                            <Badge
                              bg="light"
                              text="dark"
                              className="small"
                              style={{
                                background: "rgba(255, 255, 255, 0.9)",
                                backdropFilter: "blur(10px)",
                              }}
                            >
                              {story.industry}
                            </Badge>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>

                    <Card.Body className="p-4">
                      <div className="mb-3">
                        <h6 className="fw-bold text-primary">{story.client}</h6>
                        <p className="text-muted small mb-0">{story.project}</p>
                      </div>

                      <div className="mb-4">
                        <FaQuoteLeft className="text-primary mb-2" size={20} />
                        <p className="fst-italic text-muted">
                          "{story.testimonial}"
                        </p>
                      </div>

                      <div className="row g-2 mb-3">
                        <Col xs={6}>
                          <div className="text-center p-2 bg-success bg-opacity-10 rounded">
                            <div className="h6 mb-1 text-success fw-bold">
                              {story.metrics.roi}
                            </div>
                            <div className="small text-muted">ROI</div>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-center p-2 bg-primary bg-opacity-10 rounded">
                            <div className="h6 mb-1 text-primary fw-bold">
                              {story.metrics.traffic}
                            </div>
                            <div className="small text-muted">Traffic</div>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-center p-2 bg-warning bg-opacity-10 rounded">
                            <div className="h6 mb-1 text-warning fw-bold">
                              {story.metrics.conversion}
                            </div>
                            <div className="small text-muted">Conversion</div>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-center p-2 bg-info bg-opacity-10 rounded">
                            <div className="h6 mb-1 text-info fw-bold">
                              {story.metrics.satisfaction}%
                            </div>
                            <div className="small text-muted">Satisfaction</div>
                          </div>
                        </Col>
                      </div>

                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="w-100"
                        onClick={() => {
                          const project = projects.find((p) =>
                            p.title.includes(story.project.split(" ")[0])
                          );
                          if (project) handleProjectClick(project);
                        }}
                      >
                        <FaEye className="me-2" />
                        View Project Details
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-5"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => (window.location.href = "/testimonials")}
            >
              <FaTrophy className="me-2" />
              View All Success Stories
            </Button>
          </motion.div>
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
                  onClick={() => {
                    setSelectedCategory(category);
                    if (category !== "All") {
                      trackCategoryClick(category);
                    }
                  }}
                  className="d-flex align-items-center"
                >
                  {category === "All" && <FaFilter className="me-1" />}
                  {category === "Business" && <FaBriefcase className="me-1" />}
                  {category === "Portfolio" && <FaUser className="me-1" />}
                  {category === "Admin" && <FaCog className="me-1" />}
                  {category === "Education" && (
                    <FaGraduationCap className="me-1" />
                  )}
                  {category === "eCommerce" && (
                    <FaShoppingCart className="me-1" />
                  )}
                  {category === "Restaurant" && <FaUtensils className="me-1" />}
                  {category === "Medical" && <FaHeartbeat className="me-1" />}
                  {category === "Coming Soon" && <FaRocket className="me-1" />}
                  {category === "One Page" && <FaFileAlt className="me-1" />}
                  {category === "Landing Page" && <FaGlobe className="me-1" />}
                  {category === "Corporate" && <FaBuilding className="me-1" />}
                  {category === "Agency" && <FaBriefcase className="me-1" />}
                  {category === "Travel" && <FaPlane className="me-1" />}
                  {category === "Hotel" && <FaHotel className="me-1" />}
                  {category === "Events" && <FaCalendarAlt className="me-1" />}
                  {category === "Photography" && <FaCamera className="me-1" />}
                  {category === "Personal" && <FaUser className="me-1" />}
                  {category === "Resume / CV" && <FaUserTie className="me-1" />}
                  {category === "Real Estate" && <FaHome className="me-1" />}
                  {category === "Health" && <FaHeartbeat className="me-1" />}
                  {category === "Website Templates" && (
                    <FaDesktop className="me-1" />
                  )}
                  {category === "Construction" && <FaHammer className="me-1" />}
                  {category === "Transportation" && (
                    <FaTruck className="me-1" />
                  )}
                  {category === "Blog & Magazine" && (
                    <FaBlog className="me-1" />
                  )}
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

            {/* Smart Recommendations */}
            {userBehavior.viewedProjects.length > 0 && (
              <div className="mt-4 p-3 bg-primary text-white rounded">
                <h6 className="fw-bold mb-3">
                  <FaLightbulb className="me-2" />
                  Recommended for You
                </h6>
                <div className="d-flex flex-column gap-2">
                  {getSmartRecommendations().map((project) => (
                    <div
                      key={project.id}
                      className="d-flex align-items-center gap-2"
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        style={{
                          width: 40,
                          height: 30,
                          objectFit: "cover",
                          borderRadius: 4,
                        }}
                      />
                      <div className="flex-grow-1">
                        <div className="small fw-bold">{project.title}</div>
                        <div className="small opacity-75">
                          {project.category}
                        </div>
                      </div>
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => handleProjectClick(project)}
                      >
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cost Calculator Button */}
            <div className="mt-3">
              <Button
                variant="warning"
                className="w-100"
                onClick={() => setShowCalculator(true)}
              >
                <FaCalculator className="me-2" />
                Calculate Your Project Cost
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Comparison Bar */}
      {selectedForComparison.length > 0 && (
        <div
          className="comparison-bar position-fixed bottom-0 start-0 w-100 bg-primary text-white p-3 shadow-lg"
          style={{ zIndex: 1000 }}
        >
          <Container>
            <Row className="align-items-center">
              <Col md={8}>
                <div className="d-flex align-items-center gap-3">
                  <h6 className="mb-0">
                    {selectedForComparison.length} project
                    {selectedForComparison.length > 1 ? "s" : ""} selected for
                    comparison
                  </h6>
                  <div className="d-flex gap-2">
                    {selectedForComparison.map((projectId) => {
                      const project = projects.find((p) => p.id === projectId);
                      return project ? (
                        <Badge
                          key={projectId}
                          bg="light"
                          text="dark"
                          className="d-flex align-items-center gap-1"
                        >
                          {project.title}
                          <Button
                            variant="link"
                            size="sm"
                            className="p-0 ms-1 text-dark"
                            onClick={() => handleComparisonToggle(projectId)}
                          >
                            <FaTimes size={10} />
                          </Button>
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
              </Col>
              <Col md={4} className="text-end">
                <div className="d-flex gap-2 justify-content-end">
                  <Button
                    variant="light"
                    size="sm"
                    onClick={() => setSelectedForComparison([])}
                  >
                    Clear All
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => setShowComparison(true)}
                    disabled={selectedForComparison.length < 2}
                  >
                    Compare Projects
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {/* Projects Grid */}
      <Container
        className="py-4"
        style={{
          marginBottom: selectedForComparison.length > 0 ? "80px" : "0",
        }}
      >
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

                        {/* Action Buttons */}
                        <div className="position-absolute top-0 end-0 p-2 d-flex gap-1">
                          {/* Comparison Button */}
                          <Button
                            variant={
                              selectedForComparison.includes(project.id)
                                ? "success"
                                : "light"
                            }
                            size="sm"
                            className="border-0 rounded-circle"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleComparisonToggle(project.id);
                            }}
                            title={
                              selectedForComparison.includes(project.id)
                                ? "Remove from comparison"
                                : "Add to comparison"
                            }
                          >
                            {selectedForComparison.includes(project.id) ? (
                              <FaCheck />
                            ) : (
                              <FaCopy />
                            )}
                          </Button>

                          {/* Share Button */}
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
                          <div className="d-flex flex-wrap gap-1">
                            <Badge bg="secondary" className="mb-1">
                              {project.category}
                            </Badge>
                            <Badge
                              bg={getDifficultyColor(project.difficulty)}
                              className="mb-1"
                            >
                              {project.difficulty}
                            </Badge>
                          </div>
                          <div className="text-muted small">
                            ★ {project.popularity}/100
                          </div>
                        </div>

                        <Card.Title className="h5">{project.title}</Card.Title>
                        <Card.Text className="text-muted flex-grow-1">
                          {project.shortDescription}
                        </Card.Text>

                        {/* Project Details */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="small text-muted">
                            <div>⏱️ {project.estimatedTime}</div>
                            <div>💰 {project.startingPrice}</div>
                            {project.successMetrics && (
                              <div className="mt-1">
                                <Badge bg="success" className="small">
                                  <FaChartLine className="me-1" />
                                  ROI: {project.successMetrics.clientROI}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>

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

                        <div className="d-flex gap-1 flex-wrap">
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
                            Details
                          </Button>
                          {project.liveUrl && (
                            <Button
                              variant="outline-success"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLiveDemo(project);
                              }}
                              title="View Live Demo"
                            >
                              <FaPlay />
                            </Button>
                          )}
                          <Button
                            variant="outline-warning"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              getQuoteForProject(project);
                            }}
                            title="Get Quote"
                          >
                            Quote
                          </Button>
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

      {/* Process & Methodology Section */}
      <section className="py-5 process-section position-relative">
        {/* Dynamic Background Elements */}
        <div className="process-bg-elements">
          <motion.div
            className="process-orb orb-1"
            animate={{
              x: [0, 120, 0],
              y: [0, -80, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="process-orb orb-2"
            animate={{
              x: [0, -100, 0],
              y: [0, 70, 0],
              scale: [1, 0.7, 1],
              rotate: [720, 360, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="process-orb orb-3"
            animate={{
              x: [0, 80, 0],
              y: [0, -100, 0],
              scale: [1, 1.6, 1],
              rotate: [0, -360, -720],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.4,
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 150,
              }}
              viewport={{ once: true }}
              className="d-inline-block mb-3"
            >
              <FaCog size={60} className="text-primary" />
            </motion.div>
            <motion.h2
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Our Proven Process
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            >
              From concept to launch, we follow a systematic approach that
              ensures your project's success.
            </motion.p>
          </motion.div>

          <Row className="g-4">
            {[
              {
                step: 1,
                title: "Discovery & Planning",
                description:
                  "We start by understanding your business goals, target audience, and technical requirements.",
                icon: FaHandshake,
                details: [
                  "Business requirements analysis",
                  "Technical architecture planning",
                  "Timeline and milestone definition",
                  "Resource allocation and team setup",
                ],
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                duration: "1-2 weeks",
              },
              {
                step: 2,
                title: "Design & Prototyping",
                description:
                  "Creating wireframes, mockups, and interactive prototypes to visualize your project.",
                icon: FaPalette,
                details: [
                  "User experience (UX) design",
                  "User interface (UI) design",
                  "Interactive prototyping",
                  "Design system creation",
                ],
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                duration: "2-3 weeks",
              },
              {
                step: 3,
                title: "Development & Integration",
                description:
                  "Building your application with modern technologies and Google Sheets integration.",
                icon: FaCode,
                details: [
                  "Frontend development",
                  "Backend API development",
                  "Google Sheets integration",
                  "Third-party service integration",
                ],
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                duration: "4-8 weeks",
              },
              {
                step: 4,
                title: "Testing & Quality Assurance",
                description:
                  "Comprehensive testing to ensure your application works flawlessly across all devices.",
                icon: FaShieldAlt,
                details: [
                  "Functional testing",
                  "Cross-browser compatibility",
                  "Mobile responsiveness testing",
                  "Performance optimization",
                ],
                gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                duration: "1-2 weeks",
              },
              {
                step: 5,
                title: "Deployment & Launch",
                description:
                  "Deploying your application to production with monitoring and backup systems.",
                icon: FaRocket,
                details: [
                  "Production deployment",
                  "Domain setup and SSL",
                  "Performance monitoring",
                  "Launch support and training",
                ],
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                duration: "3-5 days",
              },
              {
                step: 6,
                title: "Support & Maintenance",
                description:
                  "Ongoing support, updates, and maintenance to keep your application running smoothly.",
                icon: FaHeadset,
                details: [
                  "24/7 technical support",
                  "Regular security updates",
                  "Performance monitoring",
                  "Feature enhancements",
                ],
                gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                duration: "Ongoing",
              },
            ].map((process, index) => (
              <Col lg={4} md={6} key={process.step}>
                <motion.div
                  initial={{ opacity: 0, y: 60, rotateY: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.4 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="h-100"
                >
                  <Card className="h-100 border-0 shadow-lg process-card position-relative overflow-hidden">
                    <motion.div
                      className="process-header position-relative"
                      style={{ background: process.gradient }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated background overlay */}
                      <motion.div
                        className="process-header-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="d-flex align-items-center justify-content-between p-4 position-relative">
                        <div className="d-flex align-items-center">
                          <motion.div
                            className="process-step-number me-3"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.1 + 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                              transition: { duration: 0.6 },
                            }}
                          >
                            {process.step}
                          </motion.div>
                          <motion.div
                            className="text-white"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.8,
                              delay: index * 0.1 + 0.4,
                            }}
                            viewport={{ once: true }}
                          >
                            <motion.h6
                              className="mb-1 fw-bold"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {process.title}
                            </motion.h6>
                            <motion.small
                              className="opacity-75"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 0.75 }}
                              transition={{ delay: index * 0.1 + 0.6 }}
                              viewport={{ once: true }}
                            >
                              {process.duration}
                            </motion.small>
                          </motion.div>
                        </div>
                        <motion.div
                          className="process-icon"
                          initial={{ scale: 0, rotate: 180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.1 + 0.8,
                            type: "spring",
                            stiffness: 200,
                          }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.3,
                            rotate: 360,
                            transition: { duration: 0.6 },
                          }}
                        >
                          <process.icon size={24} className="text-white" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <Card.Body className="p-4">
                      <p className="text-muted mb-4">{process.description}</p>

                      <div className="process-details">
                        <h6 className="fw-bold mb-3">What's Included:</h6>
                        <ul className="list-unstyled">
                          {process.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: detailIndex * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="d-flex align-items-start mb-2"
                            >
                              <FaCheckCircle
                                className="text-success me-2 mt-1"
                                size={14}
                              />
                              <small className="text-muted">{detail}</small>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <Badge
                          bg="light"
                          text="dark"
                          className="w-100 p-2 text-center"
                        >
                          <FaClock className="me-2" />
                          Duration: {process.duration}
                        </Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-5"
          >
            <motion.div
              className="p-5 cta-section rounded-4 position-relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dynamic Background Elements */}
              <div className="cta-bg-elements">
                <motion.div
                  className="cta-orb orb-1"
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="cta-orb orb-2"
                  animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 0.8, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="cta-orb orb-3"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.5, 1],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <motion.h5
                className="fw-bold mb-3 cta-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Project?
              </motion.h5>
              <motion.p
                className="mb-4 cta-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Let's discuss your requirements and create a custom timeline for
                your project.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="cta-button"
                  onClick={() => (window.location.href = "/quote")}
                >
                  <FaHandshake className="me-2" />
                  Start Your Project
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

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

      {/* FAQ Section */}
      <section className="py-5 faq-section position-relative">
        {/* Dynamic Background Elements */}
        <div className="faq-bg-elements">
          <motion.div
            className="faq-orb orb-1"
            animate={{
              x: [0, 150, 0],
              y: [0, -60, 0],
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="faq-orb orb-2"
            animate={{
              x: [0, -120, 0],
              y: [0, 80, 0],
              scale: [1, 0.6, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="faq-orb orb-3"
            animate={{
              x: [0, 90, 0],
              y: [0, -120, 0],
              scale: [1, 1.8, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.7 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 60,
              damping: 25,
            }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
              className="d-inline-block mb-3"
            >
              <FaQuestionCircle size={60} className="text-info" />
            </motion.div>
            <motion.h2
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="lead text-muted"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Get answers to common questions about our web development services
              and process.
            </motion.p>
          </motion.div>

          <Row className="justify-content-center">
            <Col lg={8}>
              {[
                {
                  id: 1,
                  question: "How much does a custom website cost?",
                  answer:
                    "Our website costs range from $3,000 to $50,000+ depending on complexity, features, and requirements. We offer transparent pricing with no hidden fees. Use our cost calculator above to get an instant estimate, or contact us for a detailed quote tailored to your specific needs.",
                  category: "Pricing",
                },
                {
                  id: 2,
                  question: "How long does it take to build a website?",
                  answer:
                    "Project timelines vary based on complexity: Simple websites (2-4 weeks), Business websites (4-8 weeks), E-commerce platforms (8-16 weeks), Custom applications (12-24 weeks). We provide detailed timelines during the planning phase and keep you updated throughout development.",
                  category: "Timeline",
                },
                {
                  id: 3,
                  question: "Do you provide ongoing support and maintenance?",
                  answer:
                    "Yes! We offer comprehensive support packages including 24/7 technical support, regular security updates, performance monitoring, and feature enhancements. Our maintenance plans ensure your website stays secure, fast, and up-to-date with the latest technologies.",
                  category: "Support",
                },
                {
                  id: 4,
                  question: "What technologies do you use for development?",
                  answer:
                    "We use modern, proven technologies including React, Node.js, Google Sheets API, MongoDB, and more. Our tech stack is chosen based on your project requirements, ensuring optimal performance, scalability, and maintainability. We stay current with the latest industry standards.",
                  category: "Technology",
                },
                {
                  id: 5,
                  question: "Can you integrate with Google Sheets?",
                  answer:
                    "Absolutely! Google Sheets integration is one of our specialties. We can connect your website to Google Sheets for real-time data updates, form submissions, inventory management, and more. This allows non-technical users to easily manage website content through familiar spreadsheet interfaces.",
                  category: "Integration",
                },
                {
                  id: 6,
                  question: "Do you offer mobile-responsive design?",
                  answer:
                    "Yes, all our websites are built mobile-first and fully responsive. We ensure your website looks and functions perfectly on all devices - desktop, tablet, and mobile. We test across multiple devices and browsers to guarantee optimal user experience.",
                  category: "Design",
                },
                {
                  id: 7,
                  question: "What's included in your development process?",
                  answer:
                    "Our process includes: Discovery & Planning, Design & Prototyping, Development & Integration, Testing & QA, Deployment & Launch, and ongoing Support & Maintenance. We provide regular updates, milestone reviews, and ensure your vision is brought to life exactly as planned.",
                  category: "Process",
                },
                {
                  id: 8,
                  question: "Do you provide hosting and domain services?",
                  answer:
                    "We can help you set up hosting and domain services, or work with your existing provider. We recommend reliable hosting solutions that ensure fast loading times and high uptime. We handle all technical aspects of deployment and can manage your hosting if preferred.",
                  category: "Hosting",
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 40, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true }}
                  className="mb-3"
                >
                  <Card className="border-0 shadow-sm faq-card position-relative overflow-hidden">
                    <motion.div
                      className="faq-header position-relative"
                      onClick={() =>
                        setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)
                      }
                      style={{ cursor: "pointer" }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Animated background overlay */}
                      <motion.div
                        className="faq-header-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="d-flex align-items-center justify-content-between p-3 position-relative">
                        <div className="d-flex align-items-center">
                          <motion.div
                            initial={{ scale: 0, rotate: -90 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.05 + 0.2,
                              type: "spring",
                              stiffness: 200,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                              transition: { duration: 0.3 },
                            }}
                          >
                            <Badge
                              bg="primary"
                              className="me-3"
                              style={{
                                background:
                                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                border: "none",
                                backdropFilter: "blur(10px)",
                              }}
                            >
                              {faq.category}
                            </Badge>
                          </motion.div>
                          <motion.h6
                            className="mb-0 fw-bold"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: index * 0.05 + 0.4,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {faq.question}
                          </motion.h6>
                        </div>
                        <motion.div
                          animate={{
                            rotate: expandedFAQ === faq.id ? 180 : 0,
                            scale: expandedFAQ === faq.id ? 1.2 : 1,
                          }}
                          transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.3 }}
                        >
                          {expandedFAQ === faq.id ? (
                            <FaChevronUp className="text-primary" />
                          ) : (
                            <FaChevronDown className="text-primary" />
                          )}
                        </motion.div>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {expandedFAQ === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card.Body className="faq-body">
                            <p className="text-muted mb-0">{faq.answer}</p>
                          </Card.Body>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </Col>
          </Row>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-5"
          >
            <motion.div
              className="p-5 questions-section rounded-4 position-relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dynamic Background Elements */}
              <div className="questions-bg-elements">
                <motion.div
                  className="questions-orb orb-1"
                  animate={{
                    x: [0, 60, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="questions-orb orb-2"
                  animate={{
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                    scale: [1, 0.9, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="questions-orb orb-3"
                  animate={{
                    x: [0, 40, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.4, 1],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 19,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <motion.h5
                className="fw-bold mb-3 questions-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Still Have Questions?
              </motion.h5>
              <motion.p
                className="mb-4 questions-description"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our team is here to help! Contact us for personalized answers to
                your specific questions.
              </motion.p>
              <motion.div
                className="d-flex flex-wrap justify-content-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="questions-button"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <FaQuestionCircle className="me-2" />
                  Ask a Question
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="questions-button-outline"
                  onClick={() => (window.location.href = "/quote")}
                >
                  <FaCalculator className="me-2" />
                  Get a Quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

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
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      <Badge bg="secondary">{selectedProject.category}</Badge>
                      <Badge
                        bg={getDifficultyColor(selectedProject.difficulty)}
                      >
                        {selectedProject.difficulty}
                      </Badge>
                    </div>
                    <div className="text-muted small">
                      Popularity: ★ {selectedProject.popularity}/100
                    </div>
                    <div className="d-flex gap-3 mt-2">
                      <div className="small">
                        <strong>⏱️ Time:</strong>{" "}
                        {selectedProject.estimatedTime}
                      </div>
                      <div className="small">
                        <strong>💰 Price:</strong>{" "}
                        {selectedProject.startingPrice}
                      </div>
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

                  {/* Success Metrics */}
                  {selectedProject.successMetrics && (
                    <div className="mb-4 p-3 bg-success bg-opacity-10 rounded">
                      <h6 className="fw-bold mb-3 text-success">
                        <FaChartLine className="me-2" />
                        Client Success Metrics
                      </h6>
                      <Row className="g-2">
                        <Col xs={6}>
                          <div className="text-center p-2 bg-white rounded">
                            <div className="h5 mb-1 text-success fw-bold">
                              {selectedProject.successMetrics.clientROI}
                            </div>
                            <div className="small text-muted">ROI</div>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-center p-2 bg-white rounded">
                            <div className="h5 mb-1 text-primary fw-bold">
                              {selectedProject.successMetrics.trafficIncrease}
                            </div>
                            <div className="small text-muted">Traffic</div>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-center p-2 bg-white rounded">
                            <div className="h5 mb-1 text-warning fw-bold">
                              {selectedProject.successMetrics.conversionRate}
                            </div>
                            <div className="small text-muted">Conversion</div>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="text-center p-2 bg-white rounded">
                            <div className="h5 mb-1 text-info fw-bold">
                              {
                                selectedProject.successMetrics
                                  .clientSatisfaction
                              }
                              %
                            </div>
                            <div className="small text-muted">Satisfaction</div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {selectedProject.liveUrl && (
                      <Button
                        variant="success"
                        onClick={() => handleLiveDemo(selectedProject)}
                        className="flex-grow-1"
                      >
                        <FaPlay className="me-1" />
                        Live Demo
                      </Button>
                    )}
                    <Button
                      variant="warning"
                      onClick={() => getQuoteForProject(selectedProject)}
                      className="flex-grow-1"
                    >
                      <FaRocket className="me-1" />
                      Get Quote
                    </Button>
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

      {/* Project Comparison Modal */}
      <Modal
        show={showComparison}
        onHide={() => setShowComparison(false)}
        size="xl"
        centered
        className="comparison-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Comparison</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  {selectedForComparison.map((projectId) => {
                    const project = projects.find((p) => p.id === projectId);
                    return project ? (
                      <th key={projectId} className="text-center">
                        <div className="fw-bold">{project.title}</div>
                        <Badge bg="secondary" className="small">
                          {project.category}
                        </Badge>
                      </th>
                    ) : null;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Difficulty</strong>
                  </td>
                  {selectedForComparison.map((projectId) => {
                    const project = projects.find((p) => p.id === projectId);
                    return (
                      <td key={projectId} className="text-center">
                        <Badge
                          bg={getDifficultyColor(project?.difficulty || "")}
                        >
                          {project?.difficulty}
                        </Badge>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td>
                    <strong>Estimated Time</strong>
                  </td>
                  {selectedForComparison.map((projectId) => {
                    const project = projects.find((p) => p.id === projectId);
                    return (
                      <td key={projectId} className="text-center">
                        {project?.estimatedTime}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td>
                    <strong>Starting Price</strong>
                  </td>
                  {selectedForComparison.map((projectId) => {
                    const project = projects.find((p) => p.id === projectId);
                    return (
                      <td
                        key={projectId}
                        className="text-center fw-bold text-success"
                      >
                        {project?.startingPrice}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td>
                    <strong>Technologies</strong>
                  </td>
                  {selectedForComparison.map((projectId) => {
                    const project = projects.find((p) => p.id === projectId);
                    return (
                      <td key={projectId}>
                        <div className="d-flex flex-wrap gap-1 justify-content-center">
                          {project?.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              bg="light"
                              text="dark"
                              className="small"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project && project.technologies.length > 3 && (
                            <Badge bg="light" text="dark" className="small">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td>
                    <strong>Key Features</strong>
                  </td>
                  {selectedForComparison.map((projectId) => {
                    const project = projects.find((p) => p.id === projectId);
                    return (
                      <td key={projectId}>
                        <ul className="list-unstyled small">
                          {project?.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li key={index} className="mb-1">
                                • {feature}
                              </li>
                            ))}
                        </ul>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowComparison(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              // You can implement a multi-project quote system here
              window.location.href = "/quote?comparison=true";
            }}
          >
            Get Quote for Selected Projects
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Live Demo Modal */}
      <Modal
        show={showLiveDemo}
        onHide={() => setShowLiveDemo(false)}
        size="xl"
        centered
        className="live-demo-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaPlay className="me-2" />
            Live Demo Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="position-relative">
            <iframe
              src={demoUrl}
              width="100%"
              height="600"
              style={{ border: "none" }}
              title="Live Demo"
            />
            <div className="position-absolute top-0 end-0 p-2">
              <Button
                variant="light"
                size="sm"
                onClick={() => window.open(demoUrl, "_blank")}
                title="Open in new tab"
              >
                <FaExpand />
              </Button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLiveDemo(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            Open Full Site
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Interactive Cost Calculator Modal */}
      <Modal
        show={showCalculator}
        onHide={() => setShowCalculator(false)}
        size="lg"
        centered
        className="calculator-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaCalculator className="me-2" />
            Project Cost Calculator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <h6 className="fw-bold mb-3">Project Configuration</h6>

              <div className="mb-3">
                <label className="form-label">Project Type</label>
                <Form.Select
                  value={calculatorConfig.projectType}
                  onChange={(e) =>
                    setCalculatorConfig((prev) => ({
                      ...prev,
                      projectType: e.target.value,
                    }))
                  }
                >
                  <option value="">Select Project Type</option>
                  <option value="Business">Business Website</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Admin">Admin Dashboard</option>
                  <option value="Education">Education Platform</option>
                  <option value="eCommerce">E-commerce Store</option>
                  <option value="Restaurant">Restaurant Website</option>
                  <option value="Medical">Medical Platform</option>
                  <option value="Corporate">Corporate Website</option>
                  <option value="Agency">Agency Website</option>
                  <option value="Travel">Travel Agency</option>
                  <option value="Hotel">Hotel Website</option>
                  <option value="Events">Events Platform</option>
                  <option value="Photography">Photography Portfolio</option>
                  <option value="Personal">Personal Website</option>
                  <option value="Real Estate">Real Estate Portal</option>
                  <option value="Health">Health Platform</option>
                  <option value="Construction">Construction Website</option>
                  <option value="Transportation">Transportation Website</option>
                </Form.Select>
              </div>

              <div className="mb-3">
                <label className="form-label">Number of Pages</label>
                <Form.Control
                  type="number"
                  min="1"
                  max="50"
                  value={calculatorConfig.pages}
                  onChange={(e) =>
                    setCalculatorConfig((prev) => ({
                      ...prev,
                      pages: parseInt(e.target.value) || 1,
                    }))
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Features</label>
                {[
                  "Google Sheets Integration",
                  "Payment Gateway",
                  "User Authentication",
                  "Admin Dashboard",
                  "Mobile App",
                  "API Integration",
                  "E-commerce Features",
                  "Booking System",
                  "Real-time Chat",
                  "Analytics Dashboard",
                ].map((feature) => (
                  <Form.Check
                    key={feature}
                    type="checkbox"
                    id={`feature-${feature}`}
                    label={feature}
                    checked={calculatorConfig.features.includes(feature)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCalculatorConfig((prev) => ({
                          ...prev,
                          features: [...prev.features, feature],
                        }));
                      } else {
                        setCalculatorConfig((prev) => ({
                          ...prev,
                          features: prev.features.filter((f) => f !== feature),
                        }));
                      }
                    }}
                  />
                ))}
              </div>
            </Col>

            <Col md={6}>
              <h6 className="fw-bold mb-3">Pricing Breakdown</h6>

              <div className="p-3 bg-light rounded mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>Base Price:</span>
                  <span className="fw-bold">
                    $
                    {calculatorConfig.projectType
                      ? (() => {
                          const prices = {
                            Business: 8000,
                            Portfolio: 3000,
                            Admin: 10000,
                            Education: 12000,
                            eCommerce: 15000,
                            Restaurant: 6000,
                            Medical: 10000,
                            Corporate: 5000,
                            Agency: 8000,
                            Travel: 12000,
                            Hotel: 10000,
                            Events: 4000,
                            Photography: 4000,
                            Personal: 3000,
                            "Real Estate": 14000,
                            Health: 9000,
                            Construction: 7000,
                            Transportation: 8000,
                          };
                          return (
                            prices[
                              calculatorConfig.projectType as keyof typeof prices
                            ] || 5000
                          );
                        })()
                      : 0}
                  </span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>Additional Pages:</span>
                  <span>${(calculatorConfig.pages - 1) * 200}</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span>Features:</span>
                  <span>
                    $
                    {calculatorConfig.features.reduce((total, feature) => {
                      const prices = {
                        "Google Sheets Integration": 2000,
                        "Payment Gateway": 1500,
                        "User Authentication": 1000,
                        "Admin Dashboard": 2000,
                        "Mobile App": 3000,
                        "API Integration": 1500,
                        "E-commerce Features": 2500,
                        "Booking System": 1800,
                        "Real-time Chat": 1200,
                        "Analytics Dashboard": 1500,
                      };
                      return (
                        total + (prices[feature as keyof typeof prices] || 500)
                      );
                    }, 0)}
                  </span>
                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">Total Estimated Cost:</span>
                  <span className="h4 mb-0 text-success fw-bold">
                    ${calculateProjectPrice().toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="alert alert-info">
                <small>
                  <strong>Note:</strong> This is an estimated cost. Final
                  pricing may vary based on specific requirements and
                  complexity.
                </small>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCalculator(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const quoteUrl = `/quote?calculator=true&type=${
                calculatorConfig.projectType
              }&cost=${calculateProjectPrice()}`;
              window.location.href = quoteUrl;
            }}
            disabled={!calculatorConfig.projectType}
          >
            Get Detailed Quote
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        /* ===== EXISTING STYLES ===== */
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
        
        .comparison-bar {
          animation: slideUp 0.3s ease-out;
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .comparison-modal .modal-content {
          border-radius: 15px;
        }
        
        .comparison-modal .table th {
          background-color: #f8f9fa;
          border-bottom: 2px solid #dee2e6;
        }
        
        .live-demo-modal .modal-content {
          border-radius: 15px;
          overflow: hidden;
        }
        
        .live-demo-modal iframe {
          border-radius: 0;
        }
        
        /* Enhanced project card styles */
        .project-card .btn {
          transition: all 0.2s ease;
        }
        
        .project-card .btn:hover {
          transform: translateY(-1px);
        }
        
        .project-card .btn:active {
          transform: translateY(0);
        }
        
        /* Difficulty badges */
        .badge.bg-success {
          background-color: #28a745 !important;
        }
        
        .badge.bg-warning {
          background-color: #ffc107 !important;
          color: #212529 !important;
        }
        
        .badge.bg-danger {
          background-color: #dc3545 !important;
        }
        
        /* Project details styling */
        .project-details {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 8px;
          padding: 12px;
        }
        
        /* Comparison table enhancements */
        .comparison-table td {
          vertical-align: middle;
          padding: 12px 8px;
        }
        
        .comparison-table .badge {
          font-size: 0.75rem;
        }
        
        /* Live demo modal enhancements */
        .live-demo-modal .modal-body {
          padding: 0;
        }
        
        .live-demo-modal .position-absolute {
          background: rgba(0, 0, 0, 0.7);
          border-radius: 4px;
        }
        
        /* Smart recommendations styling */
        .recommendations-card {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
        }
        
        /* Calculator modal styling */
        .calculator-modal .modal-content {
          border-radius: 15px;
        }
        
        .calculator-modal .form-check {
          margin-bottom: 0.5rem;
        }
        
        /* Success metrics styling */
        .success-metrics {
          background: linear-gradient(135deg, rgba(40, 167, 69, 0.1) 0%, rgba(40, 167, 69, 0.05) 100%);
          border: 1px solid rgba(40, 167, 69, 0.2);
        }
        
        .metric-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-2px);
        }
        
        /* ROI badge styling */
        .roi-badge {
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: white;
          border: none;
        }
        
        /* Enhanced project card animations */
        .project-card .badge {
          transition: all 0.2s ease;
        }
        
        .project-card:hover .badge {
          transform: scale(1.05);
        }

        /* ===== NEW SECTIONS STYLES ===== */
        
        /* Client Success Stories Section */
        .client-success-section {
          background: linear-gradient(135deg, 
            #ffffff 0%, 
            #f8f9fa 25%,
            #e9ecef 50%,
            #f1f3f4 75%,
            #ffffff 100%
          );
          background-size: 500% 500%;
          animation: gradientShift 20s ease infinite;
          position: relative;
          overflow: hidden;
        }
        
        .client-success-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.03) 0%, 
            rgba(118, 75, 162, 0.03) 20%,
            rgba(79, 172, 254, 0.03) 40%,
            rgba(0, 242, 254, 0.03) 60%,
            rgba(240, 147, 251, 0.03) 80%,
            rgba(102, 126, 234, 0.03) 100%
          );
          background-size: 600% 600%;
          animation: gradientMove 25s ease infinite;
          z-index: 0;
        }
        
        .client-success-section .container {
          position: relative;
          z-index: 1;
        }
        
        .client-success-section h1,
        .client-success-section h2,
        .client-success-section h3,
        .client-success-section h4,
        .client-success-section h5,
        .client-success-section h6,
        .client-success-section p,
        .client-success-section .lead {
          color: #212529 !important;
        }
        
        /* Floating Orbs for Success Stories */
        .success-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0.6;
        }
        
        .floating-orb.orb-1 {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: 10%;
          left: 10%;
        }
        
        .floating-orb.orb-2 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          top: 60%;
          right: 15%;
        }
        
        .floating-orb.orb-3 {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          bottom: 20%;
          left: 20%;
        }
        
        .success-story-card {
          border-radius: 25px;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          backface-visibility: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          background: #ffffff;
        }
        
        .success-story-card .card-body {
          background: #ffffff;
        }
        
        .success-story-card .card-body h6,
        .success-story-card .card-body p,
        .success-story-card .card-body small,
        .success-story-card .card-body .h6 {
          color: #212529 !important;
        }
        
        .success-story-card .card-body .text-muted {
          color: #6c757d !important;
        }
        
        .success-story-card .card-body .text-primary {
          color: #0d6efd !important;
        }
        
        .success-story-card:hover {
          transform: translateY(-15px) scale(1.03) rotateY(5deg);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }
        
        .success-story-header {
          position: relative;
          overflow: hidden;
        }
        
        .success-story-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          background-size: 300% 300%;
          animation: gradientMove 12s ease infinite;
          z-index: 0;
        }
        
        .success-story-header > * {
          position: relative;
          z-index: 1;
        }
        
        .header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          z-index: 1;
        }
        
        /* Process & Methodology Section */
        .process-section {
          background: linear-gradient(135deg, 
            #f8f9fa 0%, 
            #e9ecef 25%,
            #f1f3f4 50%,
            #e3f2fd 75%,
            #f8f9fa 100%
          );
          background-size: 600% 600%;
          animation: gradientShift 25s ease infinite;
          position: relative;
          overflow: hidden;
        }
        
        .process-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.02) 0%, 
            rgba(240, 147, 251, 0.02) 15%,
            rgba(79, 172, 254, 0.02) 30%,
            rgba(67, 233, 123, 0.02) 45%,
            rgba(250, 112, 154, 0.02) 60%,
            rgba(168, 237, 234, 0.02) 75%,
            rgba(102, 126, 234, 0.02) 100%
          );
          background-size: 700% 700%;
          animation: gradientMove 30s ease infinite;
          z-index: 0;
        }
        
        .process-section .container {
          position: relative;
          z-index: 1;
        }
        
        .process-section h1,
        .process-section h2,
        .process-section h3,
        .process-section h4,
        .process-section h5,
        .process-section h6,
        .process-section p,
        .process-section .lead {
          color: #212529 !important;
        }
        
        /* Floating Orbs for Process Section */
        .process-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .process-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0.5;
        }
        
        .process-orb.orb-1 {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: 15%;
          left: 5%;
        }
        
        .process-orb.orb-2 {
          width: 140px;
          height: 140px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          top: 70%;
          right: 10%;
        }
        
        .process-orb.orb-3 {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          bottom: 15%;
          left: 25%;
        }
        
        .process-card {
          border-radius: 25px;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          backface-visibility: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          background: #ffffff;
        }
        
        .process-card .card-body {
          background: #ffffff;
        }
        
        .process-card .card-body h6,
        .process-card .card-body p,
        .process-card .card-body small,
        .process-card .card-body .h6,
        .process-card .card-body .fw-bold {
          color: #212529 !important;
        }
        
        .process-card .card-body .text-muted {
          color: #6c757d !important;
        }
        
        .process-card .card-body .text-primary {
          color: #0d6efd !important;
        }
        
        .process-card .card-body .text-white {
          color: #ffffff !important;
        }
        
        .process-card:hover {
          transform: translateY(-20px) scale(1.05) rotateY(5deg) rotateX(5deg);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.2);
        }
        
        .process-header {
          position: relative;
          overflow: hidden;
        }
        
        .process-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          z-index: 0;
        }
        
        .process-header > * {
          position: relative;
          z-index: 1;
        }
        
        .process-header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(15px);
          z-index: 1;
        }
        
        .process-step-number {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.3rem;
          backdrop-filter: blur(15px);
          border: 3px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .process-icon {
          width: 55px;
          height: 55px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(15px);
          border: 3px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        /* FAQ Section */
        .faq-section {
          background: linear-gradient(135deg, 
            #f8f9fa 0%, 
            #e9ecef 25%,
            #f1f3f4 50%,
            #e3f2fd 75%,
            #f8f9fa 100%
          );
          background-size: 700% 700%;
          animation: gradientShift 30s ease infinite;
          position: relative;
          overflow: hidden;
        }
        
        .faq-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.02) 0%, 
            rgba(118, 75, 162, 0.02) 25%,
            rgba(79, 172, 254, 0.02) 50%,
            rgba(102, 126, 234, 0.02) 75%,
            rgba(118, 75, 162, 0.02) 100%
          );
          background-size: 800% 800%;
          animation: gradientMove 35s ease infinite;
          z-index: 0;
        }
        
        .faq-section .container {
          position: relative;
          z-index: 1;
        }
        
        .faq-section h1,
        .faq-section h2,
        .faq-section h3,
        .faq-section h4,
        .faq-section h5,
        .faq-section h6,
        .faq-section p,
        .faq-section .lead {
          color: #212529 !important;
        }
        
        /* Floating Orbs for FAQ Section */
        .faq-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .faq-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(3px);
          opacity: 0.4;
        }
        
        .faq-orb.orb-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: 20%;
          left: 8%;
        }
        
        .faq-orb.orb-2 {
          width: 160px;
          height: 160px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          top: 65%;
          right: 12%;
        }
        
        .faq-orb.orb-3 {
          width: 110px;
          height: 110px;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          bottom: 25%;
          left: 30%;
        }
        
        .faq-card {
          border-radius: 20px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          backface-visibility: hidden;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          background: #ffffff;
        }
        
        .faq-header {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%) !important;
        }
        
        .faq-header h6,
        .faq-header .fw-bold,
        .faq-header .badge {
          color: #212529 !important;
        }
        
        .faq-header .badge {
          background: rgba(102, 126, 234, 0.1) !important;
          color: #667eea !important;
          border: 1px solid rgba(102, 126, 234, 0.2) !important;
        }
        
        .faq-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
        }
        
        .faq-header {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border: none;
          border-radius: 20px 20px 0 0;
          transition: all 0.4s ease;
          user-select: none;
        }
        
        .faq-header:hover {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .faq-header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.05) 0%, 
            rgba(102, 126, 234, 0.02) 100%
          );
          backdrop-filter: blur(8px);
          z-index: 1;
        }
        
        .faq-body {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 0 0 20px 20px;
          overflow: hidden;
        }
        
        .faq-body p,
        .faq-body div,
        .faq-body .text-muted,
        .faq-body .fst-italic {
          color: #212529 !important;
        }
        
        .faq-body .text-muted {
          color: #6c757d !important;
        }
        
        /* ===== CTA SECTIONS STYLES ===== */
        
        /* Ready to Start Your Project Section */
        .cta-section {
          background: linear-gradient(135deg, 
            #667eea 0%, 
            #764ba2 25%,
            #f093fb 50%,
            #f5576c 75%,
            #667eea 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
          color: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          z-index: 1;
        }
        
        .cta-section > * {
          position: relative;
          z-index: 2;
        }
        
        .cta-title,
        .cta-description {
          color: #ffffff !important;
        }
        
        .cta-button {
          background: rgba(255, 255, 255, 0.2) !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          color: #ffffff !important;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        /* Floating Orbs for CTA Section */
        .cta-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .cta-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0.6;
        }
        
        .cta-orb.orb-1 {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.3));
          top: 10%;
          left: 10%;
        }
        
        .cta-orb.orb-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), #ffffff);
          top: 60%;
          right: 15%;
        }
        
        .cta-orb.orb-3 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.2));
          bottom: 20%;
          left: 20%;
        }
        
        /* Still Have Questions Section */
        .questions-section {
          background: linear-gradient(135deg, 
            #4facfe 0%, 
            #00f2fe 25%,
            #43e97b 50%,
            #38f9d7 75%,
            #4facfe 100%
          );
          background-size: 500% 500%;
          animation: gradientShift 15s ease infinite;
          color: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .questions-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          z-index: 1;
        }
        
        .questions-section > * {
          position: relative;
          z-index: 2;
        }
        
        .questions-title,
        .questions-description {
          color: #ffffff !important;
        }
        
        .questions-button {
          background: rgba(255, 255, 255, 0.2) !important;
          border: 2px solid rgba(255, 255, 255, 0.3) !important;
          color: #ffffff !important;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .questions-button:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .questions-button-outline {
          background: transparent !important;
          border: 2px solid rgba(255, 255, 255, 0.5) !important;
          color: #ffffff !important;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .questions-button-outline:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        /* Floating Orbs for Questions Section */
        .questions-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }
        
        .questions-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0.6;
        }
        
        .questions-orb.orb-1 {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.3));
          top: 15%;
          left: 8%;
        }
        
        .questions-orb.orb-2 {
          width: 110px;
          height: 110px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4), #ffffff);
          top: 65%;
          right: 12%;
        }
        
        .questions-orb.orb-3 {
          width: 130px;
          height: 130px;
          background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.2));
          bottom: 15%;
          left: 25%;
        }
        
        /* ===== ANIMATIONS ===== */
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes gradientMove {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(1deg);
          }
          50% {
            transform: translateY(-25px) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) rotate(-1deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            background-position: 200% 0;
            opacity: 0.8;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
            filter: brightness(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.6);
            filter: brightness(1.1);
          }
        }
        
        @keyframes borderRotate {
          0% {
            border-color: #667eea;
            border-width: 2px;
          }
          25% {
            border-color: #764ba2;
            border-width: 3px;
          }
          50% {
            border-color: #f093fb;
            border-width: 2px;
          }
          75% {
            border-color: #f5576c;
            border-width: 3px;
          }
          100% {
            border-color: #667eea;
            border-width: 2px;
          }
        }
        
        @keyframes borderPulse {
          0%, 100% {
            border-width: 2px;
            transform: scale(1);
          }
          50% {
            border-width: 4px;
            transform: scale(1.02);
          }
        }
        
        @keyframes slideInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInScale {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes rotateIn {
          0% {
            transform: rotate(-180deg) scale(0.5);
            opacity: 0;
          }
          100% {
            transform: rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
          70% {
            transform: scale(0.9);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.1);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(1);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes morphing {
          0%, 100% {
            border-radius: 20px;
            transform: rotate(0deg);
          }
          25% {
            border-radius: 50px 20px 50px 20px;
            transform: rotate(1deg);
          }
          50% {
            border-radius: 20px 50px 20px 50px;
            transform: rotate(0deg);
          }
          75% {
            border-radius: 50px 20px 50px 20px;
            transform: rotate(-1deg);
          }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
          }
        }
        
        @keyframes iconSpin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        
        @keyframes cardFlip {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          50% {
            transform: perspective(1000px) rotateY(90deg);
          }
          100% {
            transform: perspective(1000px) rotateY(0deg);
          }
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) translateX(-5px) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-20px) translateX(-10px) rotate(270deg);
            opacity: 1;
          }
          100% {
            transform: translateY(0px) translateX(0px) rotate(360deg);
            opacity: 0.7;
          }
        }
        
        @keyframes liquidFlow {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(0deg);
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
            transform: rotate(90deg);
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
            transform: rotate(180deg);
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
            transform: rotate(270deg);
          }
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(360deg);
          }
        }
        
        /* ===== MICRO-INTERACTIONS & ENHANCED EFFECTS ===== */
        
        /* Enhanced Card Hover Effects */
        .success-story-card:hover {
          animation: morphing 2s ease-in-out infinite;
        }
        
        .process-card:hover {
          animation: liquidFlow 3s ease-in-out infinite;
        }
        
        .faq-card:hover {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        /* Enhanced Button Interactions */
        .btn:hover {
          animation: wiggle 0.5s ease-in-out;
        }
        
        .btn:active {
          animation: bounceIn 0.3s ease-in-out;
        }
        
        /* Enhanced Icon Animations */
        .fa-trophy:hover {
          animation: iconSpin 1s ease-in-out;
        }
        
        .fa-cogs:hover {
          animation: iconSpin 2s linear infinite;
        }
        
        .fa-question-circle:hover {
          animation: heartbeat 1s ease-in-out infinite;
        }
        
        /* Enhanced Text Effects */
        .display-4:hover {
          animation: textGlow 2s ease-in-out infinite;
        }
        
        /* Enhanced Badge Effects */
        .badge:hover {
          animation: pulse 1s ease-in-out infinite;
        }
        
        /* Enhanced Image Effects */
        .rounded-circle:hover {
          animation: cardFlip 1s ease-in-out;
        }
        
        /* Enhanced Background Orb Effects */
        .floating-orb:hover,
        .process-orb:hover,
        .faq-orb:hover {
          animation: particleFloat 4s ease-in-out infinite;
        }
        
        /* Enhanced Overlay Effects */
        .header-overlay:hover,
        .process-header-overlay:hover,
        .faq-header-overlay:hover {
          animation: ripple 1s ease-out;
        }
        
        /* Enhanced Step Number Effects */
        .process-step-number:hover {
          animation: bounceIn 0.6s ease-in-out;
        }
        
        /* Enhanced Feature Icon Effects */
        .pwa-feature-icon:hover {
          animation: iconSpin 1.5s ease-in-out;
        }
        
        /* Enhanced Chevron Effects */
        .fa-chevron-down:hover,
        .fa-chevron-up:hover {
          animation: wiggle 0.3s ease-in-out;
        }
        
        /* Enhanced Modal Effects */
        .modal-content:hover {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Enhanced Form Input Effects */
        .form-control:focus {
          animation: borderPulse 1s ease-in-out infinite;
        }
        
        .form-select:focus {
          animation: borderRotate 2s ease-in-out infinite;
        }
        
        /* Enhanced Progress Bar Effects */
        .progress-bar {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        /* Enhanced Card Border Effects */
        .success-story-card,
        .process-card,
        .faq-card {
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        
        .success-story-card:hover,
        .process-card:hover,
        .faq-card:hover {
          border: 2px solid;
          border-image: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c) 1;
          animation: borderRotate 3s linear infinite;
        }
        
        /* Enhanced Shadow Effects */
        .success-story-card::before,
        .process-card::before,
        .faq-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          border-radius: inherit;
          z-index: -1;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .success-story-card:hover::before,
        .process-card:hover::before,
        .faq-card:hover::before {
          opacity: 0.3;
        }
        
        /* Enhanced Loading States */
        .btn:disabled {
          animation: pulse 1s ease-in-out infinite;
        }
        
        /* Enhanced Focus States */
        .btn:focus,
        .form-control:focus,
        .form-select:focus {
          animation: glow 1s ease-in-out infinite;
        }
        
        /* Enhanced Scroll Animations */
        .fade-in-up {
          animation: slideInUp 0.8s ease-out;
        }
        
        .fade-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .fade-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        
        .fade-in-scale {
          animation: fadeInScale 0.6s ease-out;
        }
        
        .rotate-in {
          animation: rotateIn 1s ease-out;
        }
        
        .bounce-in {
          animation: bounceIn 0.8s ease-out;
        }
        
        /* ===== HARDWARE ACCELERATION ===== */
        
        .success-story-card,
        .process-card,
        .faq-card,
        .project-card {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }
        
        /* ===== ACCESSIBILITY ===== */
        
        .faq-header:focus {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }
        
        .success-story-card:focus-within,
        .process-card:focus-within,
        .faq-card:focus-within {
          outline: 2px solid #007bff;
          outline-offset: 2px;
        }
        
        /* ===== ENHANCED MOBILE RESPONSIVENESS ===== */
        
        @media (max-width: 768px) {
          /* Disable complex animations on mobile for performance */
          .success-story-card:hover,
          .process-card:hover,
          .faq-card:hover {
            animation: none;
            transform: translateY(-5px) scale(1.02);
          }
          
          .floating-orb,
          .process-orb,
          .faq-orb,
          .cta-orb,
          .questions-orb {
            display: none; /* Hide floating orbs on mobile for performance */
          }
          
          .btn:hover {
            animation: none;
            transform: scale(1.05);
          }
          
          .display-4:hover {
            animation: none;
            text-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
          }
          
          /* CTA Sections Mobile Optimization */
          .cta-section,
          .questions-section {
            padding: 2rem !important;
            margin: 1rem 0;
          }
          
          .cta-section h5,
          .questions-section h5 {
            font-size: 1.5rem !important;
          }
          
          .cta-section p,
          .questions-section p {
            font-size: 1rem !important;
          }
          
          .cta-button,
          .questions-button,
          .questions-button-outline {
            width: 100% !important;
            margin-bottom: 0.5rem !important;
          }
        }
        
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
          
          .display-3, .display-4 {
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
          
          /* Mobile comparison bar */
          .comparison-bar {
            padding: 10px !important;
          }
          
          .comparison-bar .d-flex {
            flex-direction: column;
            gap: 10px;
          }
          
          .comparison-bar .text-end {
            text-align: center !important;
          }
          
          /* Mobile project cards */
          .project-card .d-flex.gap-1 {
            gap: 0.25rem !important;
          }
          
          .project-card .btn {
            font-size: 0.75rem !important;
            padding: 4px 8px !important;
          }
          
          /* Mobile comparison modal */
          .comparison-modal .table {
            font-size: 0.8rem;
          }
          
          .comparison-modal .table td,
          .comparison-modal .table th {
            padding: 8px 4px;
          }
          
          /* Mobile live demo modal */
          .live-demo-modal iframe {
            height: 400px !important;
          }
          
          /* Mobile calculator modal */
          .calculator-modal .row {
            flex-direction: column;
          }
          
          .calculator-modal .col-md-6 {
            margin-bottom: 1rem;
          }
          
          /* Mobile success metrics */
          .success-metrics .row {
            flex-direction: column;
          }
          
          .success-metrics .col-xs-6 {
            margin-bottom: 0.5rem;
          }
          
          /* Mobile new sections */
          .success-story-card:hover,
          .process-card:hover,
          .faq-card:hover {
            transform: none;
          }
          
          .success-story-card,
          .process-card,
          .faq-card {
            margin-bottom: 1rem;
          }
          
          .process-step-number {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
          
          .process-icon {
            width: 40px;
            height: 40px;
          }
          
          .faq-header h6 {
            font-size: 0.9rem;
          }
          
          .faq-header .badge {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
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
          
          .display-3, .display-4 {
            font-size: 2.5rem !important;
          }
          
          .lead {
            font-size: 1.1rem !important;
          }
          
          .success-story-card:hover,
          .process-card:hover {
            transform: translateY(-5px) scale(1.01);
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
          
          .success-story-card:hover,
          .process-card:hover,
          .faq-card:hover {
            transform: translateY(-3px);
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
          
          .faq-header {
            min-height: 44px;
            display: flex;
            align-items: center;
          }
        }
        
        /* ===== PERFORMANCE OPTIMIZATIONS ===== */
        
        .client-success-section,
        .process-section,
        .faq-section {
          contain: layout style paint;
        }
        
        .success-story-card,
        .process-card,
        .faq-card {
          contain: layout style paint;
        }
        
        /* ===== REDUCED MOTION ===== */
        
        @media (prefers-reduced-motion: reduce) {
          .success-story-card,
          .process-card,
          .faq-card,
          .project-card {
            transition: none;
          }
          
          .client-success-section::before,
          .process-section::before,
          .faq-section::before,
          .success-story-header::before,
          .process-header::before {
            animation: none;
          }
          
          .success-story-card:hover,
          .process-card:hover,
          .faq-card:hover,
          .project-card:hover {
            transform: none;
          }
        }
        
        /* ===== PERFORMANCE OPTIMIZATIONS ===== */
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .floating-orb,
          .process-orb,
          .faq-orb {
            display: none;
          }
        }
        
        /* ===== HIGH CONTRAST MODE ===== */
        
        @media (prefers-contrast: high) {
          .success-story-card,
          .process-card,
          .faq-card {
            border: 2px solid #000;
          }
          
          .btn {
            border: 2px solid #000;
          }
        }
        
        /* ===== DARK MODE SUPPORT ===== */
        
        @media (prefers-color-scheme: dark) {
          .success-story-card,
          .process-card,
          .faq-card {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            color: #ffffff;
          }
          
          .success-story-card .card-body,
          .process-card .card-body,
          .faq-card .card-body {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          }
          
          .success-story-card .card-body h6,
          .success-story-card .card-body p,
          .success-story-card .card-body small,
          .success-story-card .card-body .h6,
          .process-card .card-body h6,
          .process-card .card-body p,
          .process-card .card-body small,
          .process-card .card-body .h6,
          .process-card .card-body .fw-bold,
          .faq-header h6,
          .faq-header .fw-bold,
          .faq-body p,
          .faq-body div,
          .faq-body .text-muted,
          .faq-body .fst-italic {
            color: #ffffff !important;
          }
          
          .success-story-card .card-body .text-muted,
          .process-card .card-body .text-muted,
          .faq-body .text-muted {
            color: #adb5bd !important;
          }
          
          .success-story-card .card-body .text-primary,
          .process-card .card-body .text-primary {
            color: #6ea8fe !important;
          }
          
          .faq-header {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
          }
          
          .faq-body {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          }
          
          .faq-header .badge {
            background: rgba(110, 168, 254, 0.2) !important;
            color: #6ea8fe !important;
            border: 1px solid rgba(110, 168, 254, 0.3) !important;
          }
          
          .client-success-section,
          .process-section,
          .faq-section {
            background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
          }
          
          .client-success-section h1,
          .client-success-section h2,
          .client-success-section h3,
          .client-success-section h4,
          .client-success-section h5,
          .client-success-section h6,
          .client-success-section p,
          .client-success-section .lead,
          .process-section h1,
          .process-section h2,
          .process-section h3,
          .process-section h4,
          .process-section h5,
          .process-section h6,
          .process-section p,
          .process-section .lead,
          .faq-section h1,
          .faq-section h2,
          .faq-section h3,
          .faq-section h4,
          .faq-section h5,
          .faq-section h6,
          .faq-section p,
          .faq-section .lead {
            color: #ffffff !important;
          }
          
          /* CTA Sections Dark Mode */
          .cta-section,
          .questions-section {
            background: linear-gradient(135deg, 
              #1a1a1a 0%, 
              #2d2d2d 25%,
              #3a3a3a 50%,
              #2d2d2d 75%,
              #1a1a1a 100%
            ) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          
          .cta-title,
          .cta-description,
          .questions-title,
          .questions-description {
            color: #ffffff !important;
          }
          
          .cta-button,
          .questions-button {
            background: rgba(255, 255, 255, 0.1) !important;
            border: 2px solid rgba(255, 255, 255, 0.2) !important;
            color: #ffffff !important;
          }
          
          .cta-button:hover,
          .questions-button:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            border-color: rgba(255, 255, 255, 0.4) !important;
          }
          
          .questions-button-outline {
            background: transparent !important;
            border: 2px solid rgba(255, 255, 255, 0.3) !important;
            color: #ffffff !important;
          }
          
          .questions-button-outline:hover {
            background: rgba(255, 255, 255, 0.1) !important;
            border-color: rgba(255, 255, 255, 0.5) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
