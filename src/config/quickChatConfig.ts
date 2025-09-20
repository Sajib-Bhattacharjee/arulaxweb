// Quick Chat Configuration
// Copy this file and rename to quickChatConfig.local.ts with your actual values

export const quickChatConfig = {
  // Contact Information
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "+1234567890",
  facebookPageId: import.meta.env.VITE_FACEBOOK_PAGE_ID || "arulaxweb",

  // Features
  enableAI: true,
  enableVoice: true,
  enableMultilingual: true,
  enableFileUpload: true,
  enableAnalytics: true,

  // Appearance
  theme: "auto" as "light" | "dark" | "auto",
  autoOpenDelay: 0, // Disabled - chat only opens when user clicks

  // Google Sheets Integration
  googleSheets: {
    apiKey: import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || "",
    spreadsheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID || "",
    range: "Leads!A:L",
  },

  // Email Integration (EmailJS)
  email: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
  },

  // CRM Integration
  crm: {
    type: "hubspot" as "hubspot" | "zoho" | "pipedrive" | "custom",
    apiKey: import.meta.env.VITE_HUBSPOT_API_KEY || "",
    endpoint: import.meta.env.VITE_CRM_ENDPOINT || "",
  },

  // Analytics
  analytics: {
    endpoint: import.meta.env.VITE_ANALYTICS_ENDPOINT || "",
    enableHeatmap: true,
    enableGoogleAnalytics: !!import.meta.env.VITE_GA_MEASUREMENT_ID,
    googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
    enableFacebookPixel: !!import.meta.env.VITE_FACEBOOK_PIXEL_ID,
    facebookPixelId: import.meta.env.VITE_FACEBOOK_PIXEL_ID || "",
  },

  // API Endpoints
  apiEndpoint: import.meta.env.VITE_API_ENDPOINT || "",

  // Security
  spamProtection: {
    enableHoneypot: true,
    enableRateLimit: true,
    maxSubmissionsPerMinute: 3,
    blockedKeywords: [
      "viagra",
      "casino",
      "lottery",
      "winner",
      "congratulations",
      "click here",
      "free money",
      "earn cash",
      "work from home",
      "bitcoin",
      "crypto",
      "investment",
      "forex",
      "trading",
    ],
  },

  // Customization
  branding: {
    companyName: "AruLax Web",
    primaryColor: "#667eea",
    secondaryColor: "#764ba2",
    accentColor: "#f093fb",
    logo: "/logo.png", // Path to your logo
  },

  // Messages and Content
  messages: {
    greeting: "Hi! Welcome to AruLax Web. How can we help you today? 😊",
    offlineMessage:
      "Thanks for your message! We'll get back to you within 24 hours.",
    quickReplies: {
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
    },
  },

  // File Upload Settings
  fileUpload: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    maxFiles: 5,
  },

  // Voice Recording Settings
  voiceRecording: {
    maxDuration: 60000, // 60 seconds
    format: "audio/wav",
    quality: "high",
  },

  // Localization
  languages: [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
  ],

  // Performance Settings
  performance: {
    enableLazyLoading: true,
    enableServiceWorker: true,
    cacheMessages: true,
    maxCachedMessages: 50,
  },
};

// Export individual configs for easier access
export const {
  whatsappNumber,
  facebookPageId,
  enableAI,
  enableVoice,
  enableMultilingual,
  theme,
  autoOpenDelay,
  googleSheets,
  email,
  crm,
  analytics,
  apiEndpoint,
  spamProtection,
  branding,
  messages,
  fileUpload,
  voiceRecording,
  languages,
  performance,
} = quickChatConfig;

export default quickChatConfig;
