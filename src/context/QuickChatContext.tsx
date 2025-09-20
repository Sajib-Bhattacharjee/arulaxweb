import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";

// Types
interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot" | "system";
  timestamp: Date;
  type?: "text" | "quick-reply" | "form" | "file" | "audio";
  quickReplies?: string[];
  attachments?: File[];
  audioUrl?: string;
}

interface ChatState {
  isOpen: boolean;
  isMinimized: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  unreadCount: number;
  currentUser?: {
    name: string;
    email: string;
    phone: string;
  };
  settings: {
    theme: "light" | "dark" | "auto";
    language: string;
    soundEnabled: boolean;
    notifications: boolean;
  };
}

interface QuickChatConfig {
  whatsappNumber?: string;
  facebookPageId?: string;
  enableAI?: boolean;
  enableVoice?: boolean;
  enableMultilingual?: boolean;
  theme?: "light" | "dark" | "auto";
  analytics?: boolean;
  apiEndpoint?: string;
  autoOpenDelay?: number;
}

// Actions
type ChatAction =
  | { type: "TOGGLE_CHAT" }
  | { type: "MINIMIZE_CHAT" }
  | { type: "ADD_MESSAGE"; payload: ChatMessage }
  | { type: "SET_TYPING"; payload: boolean }
  | { type: "SET_UNREAD_COUNT"; payload: number }
  | {
      type: "SET_USER";
      payload: { name: string; email: string; phone: string };
    }
  | { type: "UPDATE_SETTINGS"; payload: Partial<ChatState["settings"]> }
  | { type: "CLEAR_MESSAGES" }
  | { type: "LOAD_MESSAGES"; payload: ChatMessage[] };

// Initial State
const initialState: ChatState = {
  isOpen: false,
  isMinimized: false,
  messages: [],
  isTyping: false,
  unreadCount: 0,
  settings: {
    theme: "auto",
    language: "en",
    soundEnabled: true,
    notifications: true,
  },
};

// Reducer
const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case "TOGGLE_CHAT":
      return {
        ...state,
        isOpen: !state.isOpen,
        isMinimized: false,
        unreadCount: state.isOpen ? state.unreadCount : 0,
      };

    case "MINIMIZE_CHAT":
      return {
        ...state,
        isMinimized: !state.isMinimized,
      };

    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        unreadCount: state.isOpen ? state.unreadCount : state.unreadCount + 1,
      };

    case "SET_TYPING":
      return {
        ...state,
        isTyping: action.payload,
      };

    case "SET_UNREAD_COUNT":
      return {
        ...state,
        unreadCount: action.payload,
      };

    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    case "UPDATE_SETTINGS":
      return {
        ...state,
        settings: { ...state.settings, ...action.payload },
      };

    case "CLEAR_MESSAGES":
      return {
        ...state,
        messages: [],
      };

    case "LOAD_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };

    default:
      return state;
  }
};

// Context
interface QuickChatContextType {
  state: ChatState;
  dispatch: React.Dispatch<ChatAction>;
  config: QuickChatConfig;
  trackEvent: (event: string, data?: Record<string, unknown>) => void;
  sendMessage: (text: string) => void;
  sendQuickReply: (reply: string) => void;
  openExternalChat: (platform: "whatsapp" | "messenger") => void;
}

const QuickChatContext = createContext<QuickChatContextType | undefined>(
  undefined
);

// Provider Component
interface QuickChatProviderProps {
  children: React.ReactNode;
  config?: QuickChatConfig;
}

export const QuickChatProvider: React.FC<QuickChatProviderProps> = ({
  children,
  config = {},
}) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Analytics tracking
  const trackEvent = useCallback(
    (event: string, data?: Record<string, unknown>) => {
      if (config.analytics) {
        console.log(`Analytics Event: ${event}`, data);

        // Google Analytics 4
        if (
          typeof window !== "undefined" &&
          (window as unknown as Record<string, unknown>).gtag
        ) {
          (
            (window as unknown as Record<string, unknown>).gtag as (
              event: string,
              action: string,
              params: Record<string, unknown>
            ) => void
          )("event", event, {
            event_category: "Quick Chat",
            event_label:
              (data as Record<string, unknown>)?.action || "interaction",
            value: (data as Record<string, unknown>)?.value || 1,
            ...data,
          });
        }

        // Facebook Pixel
        if (
          typeof window !== "undefined" &&
          (window as unknown as Record<string, unknown>).fbq
        ) {
          (
            (window as unknown as Record<string, unknown>).fbq as (
              action: string,
              event: string,
              data?: Record<string, unknown>
            ) => void
          )("track", event, data);
        }

        // Custom analytics endpoint
        if (config.apiEndpoint) {
          fetch(`${config.apiEndpoint}/analytics`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              event,
              data,
              timestamp: new Date().toISOString(),
              userAgent: navigator.userAgent,
              url: window.location.href,
            }),
          }).catch((error) =>
            console.error("Analytics tracking error:", error)
          );
        }
      }
    },
    [config.analytics, config.apiEndpoint]
  );

  // Send message function
  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    dispatch({ type: "ADD_MESSAGE", payload: userMessage });
    dispatch({ type: "SET_TYPING", payload: true });

    trackEvent("message_sent", {
      messageLength: text.length,
      hasUser: !!state.currentUser,
    });

    // Simulate AI response or send to backend
    setTimeout(() => {
      // This would typically call your AI service or backend
      const botResponse = generateBotResponse(text);

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: botResponse.text,
        sender: "bot",
        timestamp: new Date(),
        quickReplies: botResponse.quickReplies,
      };

      dispatch({ type: "ADD_MESSAGE", payload: botMessage });
      dispatch({ type: "SET_TYPING", payload: false });
    }, 1000 + Math.random() * 1000); // Random delay for realism
  };

  // Send quick reply
  const sendQuickReply = (reply: string) => {
    sendMessage(reply);
    trackEvent("quick_reply_click", { reply });
  };

  // Open external chat
  const openExternalChat = (platform: "whatsapp" | "messenger") => {
    let url = "";

    if (platform === "whatsapp" && config.whatsappNumber) {
      url = `https://wa.me/${config.whatsappNumber.replace(
        /[^\d]/g,
        ""
      )}?text=Hi, I'm interested in your web development services.`;
    } else if (platform === "messenger" && config.facebookPageId) {
      url = `https://m.me/${config.facebookPageId}`;
    }

    if (url) {
      window.open(url, "_blank");
      trackEvent("external_chat_click", { platform });
    }
  };

  // Auto-open chat after delay
  useEffect(() => {
    if (config.autoOpenDelay && config.autoOpenDelay > 0) {
      const timer = setTimeout(() => {
        if (!state.isOpen && state.unreadCount === 0) {
          dispatch({ type: "TOGGLE_CHAT" });
          trackEvent("auto_open", { delay: config.autoOpenDelay });
        }
      }, config.autoOpenDelay);

      return () => clearTimeout(timer);
    }
  }, [config.autoOpenDelay, state.isOpen, state.unreadCount, trackEvent]);

  // Load saved messages from localStorage
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem("quickChatMessages");
      if (savedMessages) {
        const messages = JSON.parse(savedMessages).map(
          (msg: Record<string, unknown>) => ({
            ...msg,
            timestamp: new Date(msg.timestamp as string),
          })
        );
        dispatch({ type: "LOAD_MESSAGES", payload: messages });
      }

      const savedSettings = localStorage.getItem("quickChatSettings");
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        dispatch({ type: "UPDATE_SETTINGS", payload: settings });
      }
    } catch (error) {
      console.error("Error loading saved chat data:", error);
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("quickChatMessages", JSON.stringify(state.messages));
    } catch (error) {
      console.error("Error saving messages:", error);
    }
  }, [state.messages]);

  // Save settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("quickChatSettings", JSON.stringify(state.settings));
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  }, [state.settings]);

  const contextValue: QuickChatContextType = {
    state,
    dispatch,
    config,
    trackEvent,
    sendMessage,
    sendQuickReply,
    openExternalChat,
  };

  return (
    <QuickChatContext.Provider value={contextValue}>
      {children}
    </QuickChatContext.Provider>
  );
};

// Hook to use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useQuickChat = () => {
  const context = useContext(QuickChatContext);
  if (context === undefined) {
    throw new Error("useQuickChat must be used within a QuickChatProvider");
  }
  return context;
};

// Simple bot response generator (replace with your AI service)
const generateBotResponse = (userMessage: string) => {
  const lowerMessage = userMessage.toLowerCase();

  // Service-related queries
  if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("develop") ||
    lowerMessage.includes("website")
  ) {
    return {
      text: "We offer comprehensive web development services including:\n• Custom Website Design\n• E-commerce Development\n• SEO Optimization\n• Google Sheets Integration\n• Mobile App Development\n\nWould you like to know more about any specific service?",
      quickReplies: [
        "Web Design",
        "E-commerce",
        "SEO",
        "Mobile Apps",
        "Get Quote",
      ],
    };
  }

  // Pricing queries
  if (
    lowerMessage.includes("price") ||
    lowerMessage.includes("cost") ||
    lowerMessage.includes("quote")
  ) {
    return {
      text: "Our pricing varies based on project complexity:\n• Basic Website: $500-1000\n• Professional Website: $1000-2500\n• E-commerce Store: $2500-5000\n• Custom Development: $5000+\n\nWould you like a detailed quote for your project?",
      quickReplies: [
        "Yes, get quote",
        "See portfolio",
        "Contact sales",
        "Schedule call",
      ],
    };
  }

  // Contact queries
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("reach") ||
    lowerMessage.includes("phone")
  ) {
    return {
      text: "You can reach us through multiple channels:\n• Email: hello@arulaxweb.com\n• Phone: +1 (555) 123-4567\n• WhatsApp: Available 24/7\n• Schedule a call for detailed discussion\n\nWhat's your preferred contact method?",
      quickReplies: ["Email", "Phone call", "WhatsApp", "Schedule call"],
    };
  }

  // Portfolio queries
  if (
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("work") ||
    lowerMessage.includes("example")
  ) {
    return {
      text: "Check out our latest projects and client success stories! Our portfolio showcases various industries and project types.\n\nWould you like to see specific examples?",
      quickReplies: [
        "E-commerce sites",
        "Corporate websites",
        "Mobile apps",
        "All projects",
      ],
    };
  }

  // Default response
  return {
    text: "That's a great question! Let me connect you with our team for a detailed response. Would you like to share your contact information so we can provide personalized assistance?",
    quickReplies: [
      "Yes, share contact info",
      "Continue chatting",
      "Schedule a call",
      "View services",
    ],
  };
};

// Export types for use in other components
export type { ChatMessage, ChatState, QuickChatConfig, QuickChatContextType };

// Export the generateBotResponse function for testing purposes
// eslint-disable-next-line react-refresh/only-export-components
export { generateBotResponse };
