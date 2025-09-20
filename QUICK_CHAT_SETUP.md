# AruLax Web Quick Chat System - Setup Guide

## 🚀 Overview

The AruLax Web Quick Chat is a comprehensive, feature-rich chat widget that provides:

- **Sticky floating chat bubble** with animated pulse effects
- **Expandable chat window** with smooth animations
- **AI-powered responses** with intelligent conversation flow
- **Multiple integrations**: WhatsApp, Facebook Messenger, Google Sheets, Email, CRM
- **Advanced features**: Voice messages, file uploads, multilingual support
- **Analytics & tracking** for engagement metrics
- **Security features**: Spam protection, rate limiting, honeypot fields

## 📁 File Structure

```
src/
├── components/
│   ├── QuickChat.tsx              # Basic chat component
│   └── QuickChatEnhanced.tsx      # Enhanced chat with all features
├── context/
│   └── QuickChatContext.tsx       # Global state management
├── services/
│   ├── QuickChatAnalytics.ts      # Analytics and tracking
│   └── BackendIntegration.ts      # Backend integrations
├── config/
│   └── quickChatConfig.ts         # Configuration settings
└── App.tsx                        # Main app with chat integration
```

## ⚙️ Configuration

### 1. Environment Variables

Create a `.env` file in your project root:

```env
# Contact Information
VITE_WHATSAPP_NUMBER=+1234567890
VITE_FACEBOOK_PAGE_ID=arulaxweb

# Google Sheets Integration
VITE_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key
VITE_GOOGLE_SHEETS_ID=your_spreadsheet_id

# Email Integration (EmailJS)
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# CRM Integration
VITE_HUBSPOT_API_KEY=your_hubspot_api_key
VITE_CRM_ENDPOINT=your_crm_endpoint

# Analytics
VITE_ANALYTICS_ENDPOINT=https://your-api.com/analytics
VITE_API_ENDPOINT=https://your-api.com

# Optional: Google Analytics & Facebook Pixel
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_FACEBOOK_PIXEL_ID=your_facebook_pixel_id

# Note: All environment variables must be prefixed with VITE_ to be accessible in the browser
# For security, never commit your .env file with actual API keys
```

### 2. Google Sheets Setup

1. Create a new Google Sheet
2. Add headers in row 1:
   ```
   Timestamp | Name | Email | Phone | Project Type | Budget | Timeline | Message | Source | UTM Params | URL | User Agent
   ```
3. Enable Google Sheets API
4. Create API key and add to environment variables

### 3. EmailJS Setup

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service (Gmail, Outlook, etc.)
3. Create email template
4. Get your credentials and add to environment variables

### 4. CRM Setup (Optional)

#### HubSpot:

1. Create HubSpot account
2. Generate API key
3. Add to environment variables

#### Zoho:

1. Create Zoho CRM account
2. Generate API key
3. Add to environment variables

#### Pipedrive:

1. Create Pipedrive account
2. Generate API token
3. Add to environment variables

## 🎨 Features

### Core Features

#### 1. Chat Bubble

- **Sticky positioning**: Bottom-right corner
- **Animated pulse**: Attracts attention
- **Notification badge**: Shows unread message count
- **Responsive design**: Works on all devices

#### 2. Chat Window

- **Smooth animations**: Slide-in/out with spring physics
- **Message bubbles**: User and bot messages with timestamps
- **Quick replies**: Predefined response buttons
- **Typing indicator**: Shows when bot is responding

#### 3. Quick Actions

- **Get a Quote**: Instant pricing inquiry
- **Project Inquiry**: Detailed project discussion
- **General Question**: Quick answers
- **Schedule a Call**: Free consultation booking

### Advanced Features

#### 1. AI Integration

- **Smart responses**: Context-aware replies
- **Service recommendations**: Based on user queries
- **Pricing information**: Automatic quote generation
- **Lead qualification**: Identifies potential customers

#### 2. Multilingual Support

- **English**: Default language
- **Dutch**: Nederlands support
- **Bengali**: বাংলা support
- **Easy to extend**: Add more languages

#### 3. Voice & File Features

- **Voice messages**: Record and send audio
- **File uploads**: Images, documents, PDFs
- **Drag & drop**: Easy file sharing
- **Progress indicators**: Upload status

#### 4. External Integrations

- **WhatsApp**: Direct message integration
- **Facebook Messenger**: Social media chat
- **Google Sheets**: Lead storage
- **Email notifications**: Instant alerts
- **CRM systems**: Lead management

### Security Features

#### 1. Spam Protection

- **Honeypot fields**: Hidden anti-spam fields
- **Rate limiting**: Max 3 submissions per 5 minutes
- **Keyword filtering**: Blocks spam content
- **Input validation**: Sanitizes user input

#### 2. Data Security

- **Encrypted messages**: Secure data transmission
- **No data storage**: Messages not permanently stored
- **Privacy compliance**: GDPR/CCPA ready
- **Secure APIs**: HTTPS only

### Analytics & Tracking

#### 1. Engagement Metrics

- **Message count**: Total messages sent
- **Quick action usage**: Most popular actions
- **Conversion tracking**: Quote requests, form submissions
- **Time spent**: Chat engagement duration

#### 2. Heatmap Integration

- **Click tracking**: User interaction points
- **Hover tracking**: Element attention
- **Scroll depth**: Page engagement
- **User journey**: Complete interaction flow

#### 3. External Analytics

- **Google Analytics**: Event tracking
- **Facebook Pixel**: Conversion tracking
- **Custom endpoints**: Your own analytics
- **Local storage**: Offline analytics

## 🎯 Usage Examples

### Basic Implementation

```tsx
import { QuickChatProvider } from "./context/QuickChatContext";
import QuickChatEnhanced from "./components/QuickChatEnhanced";

function App() {
  return (
    <QuickChatProvider
      config={{
        whatsappNumber: "+1234567890",
        facebookPageId: "arulaxweb",
        enableAI: true,
        enableVoice: true,
        enableMultilingual: true,
        theme: "auto",
        analytics: true,
      }}
    >
      <div className="app">
        {/* Your app content */}
        <QuickChatEnhanced />
      </div>
    </QuickChatProvider>
  );
}
```

### Custom Configuration

```tsx
import { quickChatConfig } from "./config/quickChatConfig";

// Modify configuration
quickChatConfig.messages.greeting = "Welcome to our website!";
quickChatConfig.branding.companyName = "Your Company";
quickChatConfig.theme = "dark";
```

### Analytics Integration

```tsx
import { getAnalytics } from "./services/QuickChatAnalytics";

// Track custom events
const analytics = getAnalytics();
analytics?.trackEvent("custom_event", { data: "value" });

// Get session analytics
const sessionData = analytics?.getSessionAnalytics();
console.log("Conversion rate:", analytics?.getConversionRate());
```

## 🔧 Customization

### Styling

The chat widget uses CSS-in-JS with Framer Motion for animations. You can customize:

- **Colors**: Primary, secondary, accent colors
- **Animations**: Duration, easing, effects
- **Layout**: Size, position, spacing
- **Typography**: Fonts, sizes, weights

### Content

Modify messages and responses in `quickChatConfig.ts`:

```typescript
messages: {
  greeting: "Your custom greeting message",
  quickReplies: {
    services: ["Your service 1", "Your service 2"],
    pricing: ["Your pricing tier 1", "Your pricing tier 2"],
  },
}
```

### AI Responses

Customize AI responses in the context file:

```typescript
const generateBotResponse = (userMessage: string) => {
  // Your custom logic here
  return {
    text: "Custom response",
    quickReplies: ["Option 1", "Option 2"],
  };
};
```

## 📊 Analytics Dashboard

### Key Metrics

1. **Engagement Rate**: Messages per session
2. **Conversion Rate**: Leads per chat session
3. **Popular Actions**: Most used quick actions
4. **Response Time**: Average bot response time
5. **User Journey**: Complete interaction flow

### Reports

- **Daily/Weekly/Monthly**: Engagement trends
- **Device Analytics**: Mobile vs desktop usage
- **Geographic Data**: User location insights
- **Conversion Funnel**: Lead progression analysis

## 🚀 Deployment

### Production Checklist

- [ ] Environment variables configured
- [ ] Google Sheets API enabled
- [ ] EmailJS service configured
- [ ] CRM integration tested
- [ ] Analytics tracking verified
- [ ] SSL certificate installed
- [ ] Performance optimized
- [ ] Error handling implemented

### Performance Optimization

- **Lazy loading**: Components load on demand
- **Service worker**: Offline functionality
- **Message caching**: Local storage
- **Image optimization**: Compressed assets
- **Bundle splitting**: Reduced initial load

## 🐛 Troubleshooting

### Common Issues

#### 1. Chat Not Appearing

- Check if QuickChatProvider is wrapping your app
- Verify environment variables are set
- Check browser console for errors

#### 2. Messages Not Sending

- Verify Google Sheets API key
- Check EmailJS configuration
- Ensure network connectivity

#### 3. Analytics Not Tracking

- Verify Google Analytics ID
- Check Facebook Pixel configuration
- Ensure custom endpoints are accessible

#### 4. Voice Recording Issues

- Check microphone permissions
- Verify HTTPS connection
- Test in different browsers

### Debug Mode

Enable debug mode in configuration:

```typescript
const config = {
  debug: true,
  // ... other config
};
```

## 📞 Support

For technical support or customization requests:

- **Email**: hello@arulaxweb.com
- **WhatsApp**: Available 24/7
- **Documentation**: This setup guide
- **GitHub Issues**: Report bugs and feature requests

## 🔄 Updates

The Quick Chat system is regularly updated with:

- New features and integrations
- Performance improvements
- Security enhancements
- Bug fixes and optimizations

Check for updates regularly and follow the changelog for new features.

---

**Built with ❤️ by AruLax Web**

_Professional web development services with cutting-edge technology_
