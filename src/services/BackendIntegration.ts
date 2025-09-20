// Backend Integration Service for Quick Chat
// Handles Google Sheets integration, email notifications, and CRM connections

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot" | "system";
  timestamp: Date;
  type?: "text" | "quick-reply" | "form" | "file" | "audio";
  quickReplies?: string[];
  attachments?: File[];
  audioUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  files?: File[];
  source: "chat" | "form" | "external";
  utmParams?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
  };
}

export interface EmailNotification {
  to: string | string[];
  subject: string;
  template:
    | "new_lead"
    | "quote_request"
    | "project_inquiry"
    | "general_question";
  data: ContactFormData;
  attachments?: File[];
}

export interface CRMLead {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  leadSource: "website_chat";
  leadStatus: "new" | "contacted" | "qualified" | "proposal" | "closed";
  customFields?: Record<string, unknown>;
}

class BackendIntegration {
  private googleSheetsConfig: {
    apiKey: string;
    spreadsheetId: string;
    range: string;
  } | null = null;

  private emailConfig: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  } | null = null;

  private crmConfig: {
    type: "hubspot" | "zoho" | "pipedrive" | "custom";
    apiKey: string;
    endpoint?: string;
  } | null = null;

  constructor(config?: {
    googleSheets?: {
      apiKey: string;
      spreadsheetId: string;
      range: string;
    };
    email?: {
      serviceId: string;
      templateId: string;
      publicKey: string;
    };
    crm?: {
      type: "hubspot" | "zoho" | "pipedrive" | "custom";
      apiKey: string;
      endpoint?: string;
    };
  }) {
    if (config?.googleSheets) {
      this.googleSheetsConfig = config.googleSheets;
    }
    if (config?.email) {
      this.emailConfig = config.email;
    }
    if (config?.crm) {
      this.crmConfig = config.crm;
    }
  }

  // Google Sheets Integration
  public async saveToGoogleSheets(data: ContactFormData): Promise<boolean> {
    if (!this.googleSheetsConfig) {
      console.warn("Google Sheets not configured");
      return false;
    }

    try {
      const rowData = [
        new Date().toISOString(),
        data.name,
        data.email,
        data.phone || "",
        data.projectType || "",
        data.budget || "",
        data.timeline || "",
        data.message,
        data.source,
        JSON.stringify(data.utmParams || {}),
        window.location.href,
        navigator.userAgent,
      ];

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.googleSheetsConfig.spreadsheetId}/values/${this.googleSheetsConfig.range}:append?valueInputOption=USER_ENTERED&key=${this.googleSheetsConfig.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [rowData],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Google Sheets API error: ${response.statusText}`);
      }

      console.log("Successfully saved to Google Sheets");
      return true;
    } catch (error) {
      console.error("Error saving to Google Sheets:", error);
      return false;
    }
  }

  // Email Notifications
  public async sendEmailNotification(
    notification: EmailNotification
  ): Promise<boolean> {
    if (!this.emailConfig) {
      console.warn("Email service not configured");
      return false;
    }

    try {
      // Using EmailJS for email notifications
      const emailData = {
        service_id: this.emailConfig.serviceId,
        template_id: this.emailConfig.templateId,
        user_id: this.emailConfig.publicKey,
        template_params: {
          to_name: Array.isArray(notification.to)
            ? notification.to.join(", ")
            : notification.to,
          from_name: notification.data.name,
          from_email: notification.data.email,
          phone: notification.data.phone || "Not provided",
          project_type: notification.data.projectType || "Not specified",
          budget: notification.data.budget || "Not specified",
          timeline: notification.data.timeline || "Not specified",
          message: notification.data.message,
          source: notification.data.source,
          timestamp: new Date().toISOString(),
          website_url: window.location.href,
        },
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (!response.ok) {
        throw new Error(`EmailJS API error: ${response.statusText}`);
      }

      console.log("Email notification sent successfully");
      return true;
    } catch (error) {
      console.error("Error sending email notification:", error);
      return false;
    }
  }

  // CRM Integration
  public async createCRMLead(lead: CRMLead): Promise<boolean> {
    if (!this.crmConfig) {
      console.warn("CRM not configured");
      return false;
    }

    try {
      switch (this.crmConfig.type) {
        case "hubspot":
          return await this.createHubSpotLead(lead);
        case "zoho":
          return await this.createZohoLead(lead);
        case "pipedrive":
          return await this.createPipedriveLead(lead);
        case "custom":
          return await this.createCustomCRMLead(lead);
        default:
          throw new Error(`Unsupported CRM type: ${this.crmConfig.type}`);
      }
    } catch (error) {
      console.error("Error creating CRM lead:", error);
      return false;
    }
  }

  private async createHubSpotLead(lead: CRMLead): Promise<boolean> {
    const hubspotData = {
      properties: {
        firstname: lead.firstName,
        lastname: lead.lastName,
        email: lead.email,
        phone: lead.phone || "",
        lead_status: lead.leadStatus,
        lead_source: lead.leadSource,
        ...lead.customFields,
      },
    };

    const response = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.crmConfig!.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotData),
      }
    );

    return response.ok;
  }

  private async createZohoLead(lead: CRMLead): Promise<boolean> {
    const zohoData = {
      data: [
        {
          First_Name: lead.firstName,
          Last_Name: lead.lastName,
          Email: lead.email,
          Phone: lead.phone || "",
          Lead_Source: lead.leadSource,
          Lead_Status: lead.leadStatus,
          ...lead.customFields,
        },
      ],
    };

    const response = await fetch(`https://www.zohoapis.com/crm/v2/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${this.crmConfig!.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zohoData),
    });

    return response.ok;
  }

  private async createPipedriveLead(lead: CRMLead): Promise<boolean> {
    const pipedriveData = {
      name: `${lead.firstName} ${lead.lastName}`,
      email: [lead.email],
      phone: [lead.phone || ""],
      ...lead.customFields,
    };

    const response = await fetch(
      `https://api.pipedrive.com/v1/persons?api_token=${
        this.crmConfig!.apiKey
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipedriveData),
      }
    );

    return response.ok;
  }

  private async createCustomCRMLead(lead: CRMLead): Promise<boolean> {
    if (!this.crmConfig!.endpoint) {
      throw new Error("Custom CRM endpoint not configured");
    }

    const response = await fetch(this.crmConfig!.endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.crmConfig!.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    return response.ok;
  }

  // Comprehensive lead processing
  public async processLead(formData: ContactFormData): Promise<{
    googleSheets: boolean;
    email: boolean;
    crm: boolean;
  }> {
    const results = {
      googleSheets: false,
      email: false,
      crm: false,
    };

    // Save to Google Sheets
    if (this.googleSheetsConfig) {
      results.googleSheets = await this.saveToGoogleSheets(formData);
    }

    // Send email notification
    if (this.emailConfig) {
      const notification: EmailNotification = {
        to: "hello@arulaxweb.com", // Your email
        subject: `New Lead from ${formData.name} - ${
          formData.projectType || "General Inquiry"
        }`,
        template: this.getEmailTemplate(formData),
        data: formData,
      };

      results.email = await this.sendEmailNotification(notification);
    }

    // Create CRM lead
    if (this.crmConfig) {
      const lead: CRMLead = {
        firstName: formData.name.split(" ")[0] || formData.name,
        lastName: formData.name.split(" ").slice(1).join(" ") || "",
        email: formData.email,
        phone: formData.phone,
        leadSource: "website_chat",
        leadStatus: "new",
        customFields: {
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          utm_params: formData.utmParams,
          source_page: window.location.href,
        },
      };

      results.crm = await this.createCRMLead(lead);
    }

    return results;
  }

  private getEmailTemplate(
    formData: ContactFormData
  ): "new_lead" | "quote_request" | "project_inquiry" | "general_question" {
    if (formData.message.toLowerCase().includes("quote") || formData.budget) {
      return "quote_request";
    }
    if (formData.projectType) {
      return "project_inquiry";
    }
    return "general_question";
  }

  // File upload handling
  public async uploadFiles(files: File[]): Promise<string[]> {
    const uploadPromises = files.map(async (file) => {
      try {
        // Using a file upload service like Cloudinary, AWS S3, or your own server
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "your_upload_preset"); // For Cloudinary

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`File upload failed: ${response.statusText}`);
        }

        const result = await response.json();
        return result.secure_url;
      } catch (error) {
        console.error("Error uploading file:", error);
        return null;
      }
    });

    const results = await Promise.all(uploadPromises);
    return results.filter((url) => url !== null) as string[];
  }

  // Analytics data submission
  public async submitAnalyticsData(analyticsData: Record<string, unknown>): Promise<boolean> {
    try {
      const response = await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...analyticsData,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }),
      });

      return response.ok;
    } catch (error) {
      console.error("Error submitting analytics data:", error);
      return false;
    }
  }

  // Spam protection
  public validateSubmission(formData: ContactFormData): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    // Basic validation
    if (!formData.name || formData.name.length < 2) {
      errors.push("Name must be at least 2 characters long");
    }

    if (!formData.email || !this.isValidEmail(formData.email)) {
      errors.push("Please provide a valid email address");
    }

    if (!formData.message || formData.message.length < 10) {
      errors.push("Message must be at least 10 characters long");
    }

    // Spam detection
    if (this.detectSpam(formData.message)) {
      errors.push("Message appears to be spam");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private detectSpam(message: string): boolean {
    const spamKeywords = [
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
    ];

    const lowerMessage = message.toLowerCase();
    return spamKeywords.some((keyword) => lowerMessage.includes(keyword));
  }

  // Rate limiting
  private submissionCounts: { [key: string]: number } = {};
  private submissionTimes: { [key: string]: number } = {};

  public checkRateLimit(identifier: string = "default"): boolean {
    const now = Date.now();
    const timeWindow = 5 * 60 * 1000; // 5 minutes
    const maxSubmissions = 3;

    // Clean old entries
    if (
      this.submissionTimes[identifier] &&
      now - this.submissionTimes[identifier] > timeWindow
    ) {
      this.submissionCounts[identifier] = 0;
      this.submissionTimes[identifier] = now;
    }

    // Check rate limit
    if ((this.submissionCounts[identifier] || 0) >= maxSubmissions) {
      return false;
    }

    // Increment counter
    this.submissionCounts[identifier] =
      (this.submissionCounts[identifier] || 0) + 1;
    this.submissionTimes[identifier] = now;

    return true;
  }

  // Configuration methods
  public configureGoogleSheets(config: {
    apiKey: string;
    spreadsheetId: string;
    range: string;
  }): void {
    this.googleSheetsConfig = config;
  }

  public configureEmail(config: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  }): void {
    this.emailConfig = config;
  }

  public configureCRM(config: {
    type: "hubspot" | "zoho" | "pipedrive" | "custom";
    apiKey: string;
    endpoint?: string;
  }): void {
    this.crmConfig = config;
  }
}

// Singleton instance
let backendInstance: BackendIntegration | null = null;

export const initializeBackend = (config?: {
  googleSheets?: {
    apiKey: string;
    spreadsheetId: string;
    range: string;
  };
  email?: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  crm?: {
    type: "hubspot" | "zoho" | "pipedrive" | "custom";
    apiKey: string;
    endpoint?: string;
  };
}): BackendIntegration => {
  if (!backendInstance) {
    backendInstance = new BackendIntegration(config);
  }
  return backendInstance;
};

export const getBackend = (): BackendIntegration | null => {
  return backendInstance;
};

export default BackendIntegration;
