// Quick Chat Analytics Service
// Tracks engagement metrics, conversion rates, and user behavior

export interface ChatAnalytics {
  sessionId: string;
  userId?: string;
  startTime: Date;
  endTime?: Date;
  messagesSent: number;
  quickActionsUsed: string[];
  externalChatClicks: string[];
  formsSubmitted: number;
  filesUploaded: number;
  voiceMessagesSent: number;
  timeSpentInChat: number;
  pagesVisited: string[];
  conversionEvents: ConversionEvent[];
  deviceInfo: DeviceInfo;
  userAgent: string;
  referrer?: string;
  utmParams?: UTMParams;
}

export interface ConversionEvent {
  eventType:
    | "quote_request"
    | "contact_form"
    | "external_chat"
    | "file_upload"
    | "voice_message";
  timestamp: Date;
  data: Record<string, unknown>;
  value?: number;
}

export interface DeviceInfo {
  type: "desktop" | "mobile" | "tablet";
  os: string;
  browser: string;
  screenResolution: string;
  language: string;
}

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface HeatmapData {
  x: number;
  y: number;
  timestamp: Date;
  action: "click" | "hover" | "scroll";
  element: string;
}

class QuickChatAnalytics {
  private sessionId: string;
  private sessionStartTime: Date;
  private analytics: ChatAnalytics;
  private heatmapData: HeatmapData[] = [];
  private apiEndpoint: string;
  private isEnabled: boolean;

  constructor(
    config: {
      apiEndpoint?: string;
      userId?: string;
      enableHeatmap?: boolean;
      enableAnalytics?: boolean;
    } = {}
  ) {
    this.sessionId = this.generateSessionId();
    this.sessionStartTime = new Date();
    this.apiEndpoint = config.apiEndpoint || "";
    this.isEnabled = config.enableAnalytics !== false;

    this.analytics = {
      sessionId: this.sessionId,
      userId: config.userId,
      startTime: this.sessionStartTime,
      messagesSent: 0,
      quickActionsUsed: [],
      externalChatClicks: [],
      formsSubmitted: 0,
      filesUploaded: 0,
      voiceMessagesSent: 0,
      timeSpentInChat: 0,
      pagesVisited: [window.location.pathname],
      conversionEvents: [],
      deviceInfo: this.getDeviceInfo(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || undefined,
      utmParams: this.getUTMParams(),
    };

    if (this.isEnabled) {
      this.initializeTracking();
    }
  }

  private generateSessionId(): string {
    return `chat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getDeviceInfo(): DeviceInfo {
    const userAgent = navigator.userAgent;
    const screenInfo = `${window.screen.width}x${window.screen.height}`;
    const language = navigator.language;

    // Detect device type
    let type: "desktop" | "mobile" | "tablet" = "desktop";
    if (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    ) {
      type = /iPad/i.test(userAgent) ? "tablet" : "mobile";
    }

    // Detect OS
    let os = "Unknown";
    if (/Windows/i.test(userAgent)) os = "Windows";
    else if (/Mac/i.test(userAgent)) os = "macOS";
    else if (/Linux/i.test(userAgent)) os = "Linux";
    else if (/Android/i.test(userAgent)) os = "Android";
    else if (/iPhone|iPad|iPod/i.test(userAgent)) os = "iOS";

    // Detect browser
    let browser = "Unknown";
    if (/Chrome/i.test(userAgent)) browser = "Chrome";
    else if (/Firefox/i.test(userAgent)) browser = "Firefox";
    else if (/Safari/i.test(userAgent)) browser = "Safari";
    else if (/Edge/i.test(userAgent)) browser = "Edge";
    else if (/Opera/i.test(userAgent)) browser = "Opera";

    return {
      type,
      os,
      browser,
      screenResolution: screenInfo,
      language,
    };
  }

  private getUTMParams(): UTMParams {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get("utm_source") || undefined,
      utm_medium: urlParams.get("utm_medium") || undefined,
      utm_campaign: urlParams.get("utm_campaign") || undefined,
      utm_term: urlParams.get("utm_term") || undefined,
      utm_content: urlParams.get("utm_content") || undefined,
    };
  }

  private initializeTracking(): void {
    // Track page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        this.trackEvent("page_hidden");
      } else {
        this.trackEvent("page_visible");
      }
    });

    // Track beforeunload to save session data
    window.addEventListener("beforeunload", () => {
      this.endSession();
    });

    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener("scroll", () => {
      const scrollDepth = Math.round(
        ((window.scrollY + window.innerHeight) / document.body.scrollHeight) *
          100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.trackEvent("scroll_depth", { depth: scrollDepth });
      }
    });

    // Track time on page
    setInterval(() => {
      this.trackEvent("time_on_page", {
        timeSpent: Date.now() - this.sessionStartTime.getTime(),
      });
    }, 30000); // Every 30 seconds
  }

  // Core tracking methods
  public trackEvent(
    eventName: string,
    data: Record<string, unknown> = {}
  ): void {
    if (!this.isEnabled) return;

    console.log(`Analytics Event: ${eventName}`, data);

    // Send to multiple analytics services
    this.sendToGoogleAnalytics(eventName, data);
    this.sendToFacebookPixel(eventName, data);
    this.sendToCustomEndpoint(eventName, data);
    this.storeLocally(eventName, data);
  }

  public trackChatOpen(): void {
    this.trackEvent("chat_opened", {
      timestamp: new Date(),
      page: window.location.pathname,
    });
  }

  public trackChatClose(): void {
    this.analytics.timeSpentInChat =
      Date.now() - this.sessionStartTime.getTime();
    this.trackEvent("chat_closed", {
      timeSpent: this.analytics.timeSpentInChat,
      messagesSent: this.analytics.messagesSent,
    });
  }

  public trackMessageSent(
    message: string,
    messageType: "text" | "voice" | "file" = "text"
  ): void {
    this.analytics.messagesSent++;

    if (messageType === "voice") {
      this.analytics.voiceMessagesSent++;
    } else if (messageType === "file") {
      this.analytics.filesUploaded++;
    }

    this.trackEvent("message_sent", {
      messageLength: message.length,
      messageType,
      totalMessages: this.analytics.messagesSent,
    });
  }

  public trackQuickAction(actionId: string): void {
    this.analytics.quickActionsUsed.push(actionId);

    this.trackEvent("quick_action_used", {
      actionId,
      totalActions: this.analytics.quickActionsUsed.length,
    });
  }

  public trackExternalChat(platform: "whatsapp" | "messenger"): void {
    this.analytics.externalChatClicks.push(platform);

    const conversionEvent: ConversionEvent = {
      eventType: "external_chat",
      timestamp: new Date(),
      data: { platform },
      value: 10, // Estimated value for external chat engagement
    };

    this.analytics.conversionEvents.push(conversionEvent);

    this.trackEvent("external_chat_click", {
      platform,
      totalClicks: this.analytics.externalChatClicks.length,
    });
  }

  public trackFormSubmission(formData: Record<string, unknown>): void {
    this.analytics.formsSubmitted++;

    const conversionEvent: ConversionEvent = {
      eventType: "contact_form",
      timestamp: new Date(),
      data: formData,
      value: 50, // Higher value for form submission
    };

    this.analytics.conversionEvents.push(conversionEvent);

    this.trackEvent("form_submitted", {
      formType: "contact",
      totalForms: this.analytics.formsSubmitted,
    });
  }

  public trackQuoteRequest(): void {
    const conversionEvent: ConversionEvent = {
      eventType: "quote_request",
      timestamp: new Date(),
      data: {},
      value: 100, // Highest value for quote request
    };

    this.analytics.conversionEvents.push(conversionEvent);

    this.trackEvent("quote_requested", {
      timestamp: new Date(),
    });
  }

  public trackHeatmapClick(x: number, y: number, element: string): void {
    if (!this.isEnabled) return;

    const heatmapPoint: HeatmapData = {
      x,
      y,
      timestamp: new Date(),
      action: "click",
      element,
    };

    this.heatmapData.push(heatmapPoint);

    // Send heatmap data in batches
    if (this.heatmapData.length >= 10) {
      this.sendHeatmapData();
    }
  }

  public trackHeatmapHover(x: number, y: number, element: string): void {
    if (!this.isEnabled) return;

    const heatmapPoint: HeatmapData = {
      x,
      y,
      timestamp: new Date(),
      action: "hover",
      element,
    };

    this.heatmapData.push(heatmapPoint);
  }

  // Analytics service integrations
  private sendToGoogleAnalytics(
    eventName: string,
    data: Record<string, unknown>
  ): void {
    if (
      typeof window !== "undefined" &&
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag
    ) {
      (
        window as unknown as Window & { gtag: (...args: unknown[]) => void }
      ).gtag("event", eventName, {
        event_category: "Quick Chat",
        event_label: data?.action || "interaction",
        value: data?.value || 1,
        custom_map: {
          dimension1: this.analytics.sessionId,
          dimension2: this.analytics.deviceInfo.type,
        },
        ...data,
      });
    }
  }

  private sendToFacebookPixel(
    eventName: string,
    data: Record<string, unknown>
  ): void {
    if (
      typeof window !== "undefined" &&
      (window as Window & { fbq?: (...args: unknown[]) => void }).fbq
    ) {
      (window as unknown as Window & { fbq: (...args: unknown[]) => void }).fbq(
        "track",
        eventName,
        {
          content_category: "Quick Chat",
          ...data,
        }
      );
    }
  }

  private sendToCustomEndpoint(
    eventName: string,
    data: Record<string, unknown>
  ): void {
    if (!this.apiEndpoint) return;

    fetch(`${this.apiEndpoint}/analytics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: eventName,
        data,
        sessionId: this.analytics.sessionId,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    }).catch((error) => console.error("Analytics tracking error:", error));
  }

  private storeLocally(eventName: string, data: Record<string, unknown>): void {
    try {
      const stored = localStorage.getItem("quickChatAnalytics");
      const events = stored ? JSON.parse(stored) : [];

      events.push({
        event: eventName,
        data,
        timestamp: new Date().toISOString(),
        sessionId: this.analytics.sessionId,
      });

      // Keep only last 100 events
      if (events.length > 100) {
        events.splice(0, events.length - 100);
      }

      localStorage.setItem("quickChatAnalytics", JSON.stringify(events));
    } catch (error) {
      console.error("Error storing analytics locally:", error);
    }
  }

  private sendHeatmapData(): void {
    if (this.heatmapData.length === 0) return;

    const dataToSend = [...this.heatmapData];
    this.heatmapData = [];

    if (this.apiEndpoint) {
      fetch(`${this.apiEndpoint}/heatmap`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: this.analytics.sessionId,
          page: window.location.pathname,
          heatmapData: dataToSend,
          timestamp: new Date().toISOString(),
        }),
      }).catch((error) => console.error("Heatmap tracking error:", error));
    }
  }

  // Session management
  public endSession(): void {
    this.analytics.endTime = new Date();
    this.analytics.timeSpentInChat =
      this.analytics.endTime.getTime() - this.sessionStartTime.getTime();

    if (this.isEnabled) {
      this.trackEvent("session_ended", {
        duration: this.analytics.timeSpentInChat,
        messagesSent: this.analytics.messagesSent,
        conversions: this.analytics.conversionEvents.length,
      });

      // Send final session data
      if (this.apiEndpoint) {
        fetch(`${this.apiEndpoint}/session`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.analytics),
        }).catch((error) => console.error("Session tracking error:", error));
      }
    }
  }

  // Analytics retrieval methods
  public getSessionAnalytics(): ChatAnalytics {
    return { ...this.analytics };
  }

  public getConversionRate(): number {
    return (
      (this.analytics.conversionEvents.length /
        Math.max(this.analytics.messagesSent, 1)) *
      100
    );
  }

  public getAverageResponseTime(): number {
    // This would need to be calculated based on actual response times
    return 0;
  }

  public getPopularQuickActions(): { action: string; count: number }[] {
    const actionCounts: { [key: string]: number } = {};
    this.analytics.quickActionsUsed.forEach((action) => {
      actionCounts[action] = (actionCounts[action] || 0) + 1;
    });

    return Object.entries(actionCounts)
      .map(([action, count]) => ({ action, count }))
      .sort((a, b) => b.count - a.count);
  }

  // Export analytics data
  public exportAnalytics(): string {
    return JSON.stringify(
      {
        session: this.analytics,
        heatmap: this.heatmapData,
        timestamp: new Date().toISOString(),
      },
      null,
      2
    );
  }

  // Import analytics data (for debugging/testing)
  public importAnalytics(data: string): void {
    try {
      const imported = JSON.parse(data);
      if (imported.session) {
        this.analytics = { ...this.analytics, ...imported.session };
      }
      if (imported.heatmap) {
        this.heatmapData = imported.heatmap;
      }
    } catch (error) {
      console.error("Error importing analytics data:", error);
    }
  }
}

// Singleton instance
let analyticsInstance: QuickChatAnalytics | null = null;

export const initializeAnalytics = (config?: {
  apiEndpoint?: string;
  userId?: string;
  enableHeatmap?: boolean;
  enableAnalytics?: boolean;
}): QuickChatAnalytics => {
  if (!analyticsInstance) {
    analyticsInstance = new QuickChatAnalytics(config);
  }
  return analyticsInstance;
};

export const getAnalytics = (): QuickChatAnalytics | null => {
  return analyticsInstance;
};

export default QuickChatAnalytics;
