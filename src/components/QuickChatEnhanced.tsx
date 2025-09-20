import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCommentDots,
  FaTimes,
  FaPaperPlane,
  FaWhatsapp,
  FaFacebookMessenger,
  FaRobot,
  FaQuoteLeft,
  FaProjectDiagram,
  FaQuestionCircle,
  FaCalendarAlt,
  FaFileUpload,
  FaMicrophone,
  FaVolumeUp,
  FaVolumeMute,
  FaGlobe,
  FaMoon,
  FaSun,
  FaHeart,
  FaTrash,
} from "react-icons/fa";
import { useQuickChat } from "../context/QuickChatContext";

const QuickChatEnhanced: React.FC = () => {
  const {
    state,
    dispatch,
    config,
    trackEvent,
    sendMessage,
    sendQuickReply,
    openExternalChat,
  } = useQuickChat();

  const navigate = useNavigate();

  const [currentMessage, setCurrentMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Determine if dark mode is active
  const isDarkMode =
    state.settings.theme === "dark" ||
    (state.settings.theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Quick action buttons with enhanced styling
  const quickActions = [
    {
      id: "quote",
      label: "Get a Quote",
      icon: FaQuoteLeft,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      description: "Instant pricing",
    },
    {
      id: "project",
      label: "Project Inquiry",
      icon: FaProjectDiagram,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      description: "Detailed discussion",
    },
    {
      id: "question",
      label: "General Question",
      icon: FaQuestionCircle,
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      description: "Quick answers",
    },
    {
      id: "call",
      label: "Schedule a Call",
      icon: FaCalendarAlt,
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      description: "Free consultation",
    },
  ];

  // Enhanced quick replies with categories
  const quickRepliesData = {
    services: [
      "🌐 Web Design & Development",
      "🛒 E-commerce Solutions",
      "📈 SEO & Digital Marketing",
      "📱 Mobile App Development",
      "📊 Google Sheets Integration",
    ],
    pricing: [
      "💰 Basic Website ($500-1000)",
      "💼 Professional ($1000-2500)",
      "🏪 E-commerce Store ($2500-5000)",
      "⚡ Custom Development ($5000+)",
    ],
    contact: [
      "📧 Email: hello@arulaxweb.com",
      "📞 Phone: +1 (555) 123-4567",
      "💬 WhatsApp: Available 24/7",
      "📅 Schedule a call",
    ],
    portfolio: [
      "🎨 View Design Portfolio",
      "🛒 E-commerce Examples",
      "📱 Mobile App Showcase",
      "🏢 Corporate Websites",
    ],
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages]);

  // Handle chat toggle
  const toggleChat = () => {
    dispatch({ type: "TOGGLE_CHAT" });
    trackEvent("chat_toggle", { isOpen: !state.isOpen });
  };

  // Handle quick action click
  const handleQuickAction = (actionId: string) => {
    let message = "";
    let quickReplies: string[] = [];

    switch (actionId) {
      case "quote":
        // Navigate to quote page
        navigate("/quote");
        message =
          "🎯 I've opened our quote page for you! Fill out the form to get your personalized quote.";
        quickReplies = ["Fill Quote Form", "Ask Questions", "Schedule Call"];
        break;
      case "project":
        message =
          "🚀 Great! Let's discuss your project requirements. What type of project are you working on?";
        quickReplies = quickRepliesData.services;
        break;
      case "question":
        message =
          "🤔 I'm here to help! What would you like to know about our services?";
        quickReplies = ["Services", "Pricing", "Contact", "Portfolio"];
        break;
      case "call":
        message =
          "📅 I'd be happy to schedule a call with you. What's the best time for you?";
        quickReplies = [
          "Morning (9-12)",
          "Afternoon (12-5)",
          "Evening (5-8)",
          "Weekend",
        ];
        break;
    }

    const botMessage = {
      id: `action-${Date.now()}`,
      text: message,
      sender: "bot" as const,
      timestamp: new Date(),
      quickReplies,
    };

    dispatch({ type: "ADD_MESSAGE", payload: botMessage });
    dispatch({ type: "SET_TYPING", payload: false });

    trackEvent("quick_action_click", { actionId });
  };

  // Handle message send
  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    sendMessage(currentMessage);
    setCurrentMessage("");
  };

  // Handle quick reply click
  const handleQuickReply = (reply: string) => {
    sendQuickReply(reply);
  };

  // Voice recording functionality
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        const audioUrl = URL.createObjectURL(audioBlob);

        const audioMessage = {
          id: `audio-${Date.now()}`,
          text: "🎤 Voice message",
          sender: "user" as const,
          timestamp: new Date(),
          type: "audio" as const,
          audioUrl,
        };

        dispatch({ type: "ADD_MESSAGE", payload: audioMessage });
        trackEvent("voice_message_sent");
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // File upload handler
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileMessage = {
        id: `file-${Date.now()}`,
        text: `📎 Uploaded ${files[0].name}`,
        sender: "user" as const,
        timestamp: new Date(),
        type: "file" as const,
        attachments: Array.from(files),
      };

      dispatch({ type: "ADD_MESSAGE", payload: fileMessage });
      trackEvent("file_upload", { fileCount: files.length });
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = state.settings.theme === "light" ? "dark" : "light";
    dispatch({ type: "UPDATE_SETTINGS", payload: { theme: newTheme } });
  };

  // Toggle notifications
  const toggleNotifications = () => {
    dispatch({
      type: "UPDATE_SETTINGS",
      payload: { notifications: !state.settings.notifications },
    });
  };

  return (
    <>
      {/* Enhanced Chat Bubble */}
      <motion.div
        className="quick-chat-bubble-enhanced"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
          boxShadow:
            "0 10px 40px rgba(102, 126, 234, 0.4), 0 0 0 0 rgba(102, 126, 234, 0.4)",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        whileHover={{
          scale: 1.1,
          boxShadow:
            "0 15px 50px rgba(102, 126, 234, 0.6), 0 0 0 10px rgba(102, 126, 234, 0.1)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {!state.isOpen ? (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaCommentDots size={26} color="white" />
            </motion.div>
          ) : (
            <motion.div
              key="close-icon"
              initial={{ rotate: 180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes size={26} color="white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced Notification Badge */}
        {state.unreadCount > 0 && (
          <motion.div
            className="notification-badge-enhanced"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ff4757 0%, #ff3838 100%)",
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 10px rgba(255, 71, 87, 0.4)",
            }}
          >
            {state.unreadCount > 9 ? "9+" : state.unreadCount}
          </motion.div>
        )}

        {/* Enhanced Pulse Animation */}
        <motion.div
          className="pulse-ring-enhanced"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "3px solid rgba(255, 255, 255, 0.3)",
            pointerEvents: "none",
          }}
        />

        {/* Floating Icons */}
        <motion.div
          className="floating-icons"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <FaHeart size={12} color="rgba(255, 255, 255, 0.6)" />
        </motion.div>
      </motion.div>

      {/* Enhanced Chat Window */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            ref={chatWindowRef}
            className="chat-window-enhanced"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring" }}
            style={{
              position: "fixed",
              bottom: "95px",
              right: "20px",
              width: "400px",
              height: "650px",
              maxHeight: "80vh",
              background: isDarkMode
                ? "linear-gradient(145deg, #1a1a2e 0%, #16213e 100%)"
                : "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              borderRadius: "25px",
              boxShadow:
                "0 25px 80px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Enhanced Chat Header */}
            <div
              className="chat-header-enhanced"
              style={{
                padding: "25px",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "25px 25px 0 0",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Animated Background Pattern */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "200%",
                  height: "200%",
                  background:
                    "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
                  zIndex: 1,
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  zIndex: 2,
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <FaRobot size={22} />
                </motion.div>
                <div>
                  <h4
                    style={{ margin: 0, fontSize: "18px", fontWeight: "700" }}
                  >
                    AruLax Web Assistant
                  </h4>
                  <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
                    {config.enableAI
                      ? "🤖 AI + Human Support"
                      : "👨‍💻 Human Support"}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", zIndex: 2 }}>
                {config.enableMultilingual && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowSettings(!showSettings)}
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px",
                      color: "white",
                      cursor: "pointer",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <FaGlobe size={16} />
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px",
                    color: "white",
                    cursor: "pointer",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {isDarkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
                </motion.button>
              </div>
            </div>

            {/* Enhanced Settings Panel */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    padding: "20px",
                    background: "rgba(102, 126, 234, 0.1)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ marginBottom: "15px" }}>
                    <h5
                      style={{
                        margin: "0 0 10px 0",
                        color: isDarkMode ? "white" : "#333",
                      }}
                    >
                      Language / Language / ভাষা
                    </h5>
                    <div
                      style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                    >
                      {[
                        { code: "en", name: "English", flag: "🇺🇸" },
                        { code: "nl", name: "Nederlands", flag: "🇳🇱" },
                        { code: "bn", name: "বাংলা", flag: "🇧🇩" },
                      ].map((lang) => (
                        <motion.button
                          key={lang.code}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            dispatch({
                              type: "UPDATE_SETTINGS",
                              payload: { language: lang.code },
                            })
                          }
                          style={{
                            background:
                              state.settings.language === lang.code
                                ? "#667eea"
                                : "rgba(255, 255, 255, 0.2)",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            padding: "8px 16px",
                            fontSize: "12px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <span>{lang.flag}</span>
                          {lang.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={toggleNotifications}
                      style={{
                        background: state.settings.notifications
                          ? "#28a745"
                          : "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {state.settings.notifications ? (
                        <FaVolumeUp size={12} />
                      ) : (
                        <FaVolumeMute size={12} />
                      )}
                      Notifications
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => dispatch({ type: "CLEAR_MESSAGES" })}
                      style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <FaTrash size={12} />
                      Clear Chat
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced Messages Container */}
            <div
              className="messages-container-enhanced"
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {state.messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    display: "flex",
                    justifyContent:
                      message.sender === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "15px 20px",
                      borderRadius:
                        message.sender === "user"
                          ? "25px 25px 8px 25px"
                          : "25px 25px 25px 8px",
                      background:
                        message.sender === "user"
                          ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          : isDarkMode
                          ? "rgba(255, 255, 255, 0.1)"
                          : "rgba(0, 0, 0, 0.05)",
                      color:
                        message.sender === "user"
                          ? "white"
                          : isDarkMode
                          ? "white"
                          : "#333",
                      fontSize: "15px",
                      lineHeight: "1.5",
                      boxShadow:
                        message.sender === "user"
                          ? "0 8px 25px rgba(102, 126, 234, 0.3)"
                          : "0 4px 15px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                      border:
                        message.sender === "bot"
                          ? "1px solid rgba(255, 255, 255, 0.1)"
                          : "none",
                    }}
                  >
                    {message.text}

                    {/* Audio Message */}
                    {message.type === "audio" && message.audioUrl && (
                      <div style={{ marginTop: "12px" }}>
                        <audio controls style={{ width: "100%" }}>
                          <source src={message.audioUrl} type="audio/wav" />
                        </audio>
                      </div>
                    )}

                    {/* File Attachments */}
                    {message.type === "file" && message.attachments && (
                      <div style={{ marginTop: "12px" }}>
                        {message.attachments.map((file, fileIndex) => (
                          <div
                            key={fileIndex}
                            style={{
                              padding: "10px",
                              background: "rgba(255, 255, 255, 0.1)",
                              borderRadius: "10px",
                              fontSize: "13px",
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            <FaFileUpload size={14} />
                            {file.name}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Timestamp */}
                    <div
                      style={{
                        fontSize: "11px",
                        opacity: 0.7,
                        marginTop: "8px",
                        textAlign: message.sender === "user" ? "right" : "left",
                      }}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Enhanced Quick Replies */}
              {state.messages.length > 0 &&
                state.messages[state.messages.length - 1].quickReplies && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      marginTop: "15px",
                    }}
                  >
                    {state.messages[
                      state.messages.length - 1
                    ].quickReplies?.map((reply, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleQuickReply(reply)}
                        style={{
                          background: "rgba(102, 126, 234, 0.1)",
                          border: "2px solid rgba(102, 126, 234, 0.3)",
                          borderRadius: "25px",
                          padding: "10px 18px",
                          fontSize: "13px",
                          color: isDarkMode ? "white" : "#667eea",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          backdropFilter: "blur(10px)",
                          fontWeight: "500",
                        }}
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </motion.div>
                )}

              {/* Enhanced Typing Indicator */}
              {state.isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: isDarkMode
                      ? "rgba(255, 255, 255, 0.6)"
                      : "rgba(0, 0, 0, 0.6)",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: isDarkMode ? "white" : "#667eea",
                        }}
                      />
                    ))}
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: "500" }}>
                    Assistant is typing...
                  </span>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Quick Actions */}
            <div
              style={{
                padding: "20px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(0, 0, 0, 0.02)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginBottom: "15px",
                }}
              >
                {quickActions.map((action) => (
                  <motion.button
                    key={action.id}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleQuickAction(action.id)}
                    style={{
                      background: action.color,
                      border: "none",
                      borderRadius: "15px",
                      padding: "15px 12px",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <action.icon size={18} />
                    <div style={{ textAlign: "center" }}>
                      <div>{action.label}</div>
                      <div style={{ fontSize: "10px", opacity: 0.8 }}>
                        {action.description}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Message Input */}
              <div
                style={{ display: "flex", gap: "10px", alignItems: "flex-end" }}
              >
                <div style={{ position: "relative", flex: 1 }}>
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    style={{
                      width: "100%",
                      padding: "15px 50px 15px 20px",
                      borderRadius: "30px",
                      border: "2px solid rgba(102, 126, 234, 0.3)",
                      background: isDarkMode
                        ? "rgba(255, 255, 255, 0.1)"
                        : "white",
                      color: isDarkMode ? "white" : "#333",
                      fontSize: "15px",
                      outline: "none",
                      backdropFilter: "blur(10px)",
                    }}
                  />

                  {/* File Upload Button */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                    accept="image/*,.pdf,.doc,.docx,.txt"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      position: "absolute",
                      right: "50px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: isDarkMode
                        ? "rgba(255, 255, 255, 0.6)"
                        : "rgba(0, 0, 0, 0.6)",
                      cursor: "pointer",
                      padding: "8px",
                      borderRadius: "50%",
                    }}
                  >
                    <FaFileUpload size={16} />
                  </motion.button>
                </div>

                {/* Voice Recording Button */}
                {config.enableVoice && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}
                    onMouseLeave={stopRecording}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      border: "none",
                      background: isRecording
                        ? "linear-gradient(135deg, #ff4757 0%, #ff3838 100%)"
                        : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <FaMicrophone size={18} />
                  </motion.button>
                )}

                {/* Send Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim()}
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    border: "none",
                    background: currentMessage.trim()
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "rgba(102, 126, 234, 0.3)",
                    color: "white",
                    cursor: currentMessage.trim() ? "pointer" : "not-allowed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: currentMessage.trim()
                      ? "0 4px 15px rgba(102, 126, 234, 0.4)"
                      : "none",
                  }}
                >
                  <FaPaperPlane size={18} />
                </motion.button>
              </div>

              {/* Enhanced External Chat Options */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "15px",
                  justifyContent: "center",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openExternalChat("whatsapp")}
                  style={{
                    background:
                      "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
                    border: "none",
                    borderRadius: "25px",
                    padding: "12px 20px",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                  }}
                >
                  <FaWhatsapp size={16} />
                  WhatsApp
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openExternalChat("messenger")}
                  style={{
                    background:
                      "linear-gradient(135deg, #0084ff 0%, #0066cc 100%)",
                    border: "none",
                    borderRadius: "25px",
                    padding: "12px 20px",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 4px 15px rgba(0, 132, 255, 0.3)",
                  }}
                >
                  <FaFacebookMessenger size={16} />
                  Messenger
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CSS */}
      <style>{`
        .quick-chat-bubble-enhanced {
          will-change: transform;
        }

        .chat-window-enhanced {
          backdrop-filter: blur(25px);
          will-change: transform, opacity;
        }

        .messages-container-enhanced::-webkit-scrollbar {
          width: 6px;
        }

        .messages-container-enhanced::-webkit-scrollbar-track {
          background: transparent;
        }

        .messages-container-enhanced::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          border-radius: 3px;
        }

        .messages-container-enhanced::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5));
        }

        /* Mobile-first QuickChat responsive design */
        @media (max-width: 480px) {
          .chat-window-enhanced {
            width: calc(100vw - 20px) !important;
            right: 10px !important;
            left: 10px !important;
            height: 80vh !important;
            bottom: 90px !important;
            border-radius: 20px !important;
          }
          
          .quick-chat-bubble-enhanced {
            width: 60px !important;
            height: 60px !important;
            bottom: 20px !important;
            right: 20px !important;
          }
          
          .chat-header-enhanced {
            padding: 20px !important;
          }
          
          .chat-header-enhanced h4 {
            font-size: 16px !important;
          }
          
          .chat-header-enhanced p {
            font-size: 12px !important;
          }
          
          .messages-container-enhanced {
            padding: 20px !important;
          }
          
          .quick-actions {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          
          .quick-actions button {
            padding: 12px 8px !important;
            font-size: 11px !important;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .chat-window-enhanced {
            width: calc(100vw - 40px) !important;
            right: 20px !important;
            left: 20px !important;
            height: 75vh !important;
            bottom: 95px !important;
          }
          
          .quick-chat-bubble-enhanced {
            width: 65px !important;
            height: 65px !important;
          }
        }

        @media (max-height: 700px) {
          .chat-window-enhanced {
            height: 65vh !important;
          }
        }
        
        @media (max-height: 600px) {
          .chat-window-enhanced {
            height: 60vh !important;
          }
          
          .chat-header-enhanced {
            padding: 15px !important;
          }
          
          .messages-container-enhanced {
            padding: 15px !important;
          }
        }
        
        /* Touch-friendly adjustments */
        @media (max-width: 768px) {
          .quick-chat-bubble-enhanced,
          .chat-window-enhanced button,
          .chat-window-enhanced input {
            touch-action: manipulation;
          }
          
          .quick-chat-bubble-enhanced:active {
            transform: scale(0.95);
          }
          
          .chat-window-enhanced input {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
        }
        
        /* Landscape mobile adjustments */
        @media (max-width: 768px) and (orientation: landscape) {
          .chat-window-enhanced {
            height: 85vh !important;
            bottom: 80px !important;
          }
          
          .chat-header-enhanced {
            padding: 15px 20px !important;
          }
          
          .messages-container-enhanced {
            padding: 15px 20px !important;
          }
        }

        /* Enhanced animations */
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.4); }
          50% { box-shadow: 0 0 30px rgba(102, 126, 234, 0.6); }
        }

        .quick-chat-bubble-enhanced:hover {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default QuickChatEnhanced;
