// PWA Service for handling service worker registration and PWA features
class PWAService {
  private static instance: PWAService;
  private registration: ServiceWorkerRegistration | null = null;
  private isOnline = navigator.onLine;

  private constructor() {
    this.setupEventListeners();
  }

  public static getInstance(): PWAService {
    if (!PWAService.instance) {
      PWAService.instance = new PWAService();
    }
    return PWAService.instance;
  }

  private setupEventListeners(): void {
    // Online/Offline status
    window.addEventListener("online", () => {
      this.isOnline = true;
      this.onOnline();
    });

    window.addEventListener("offline", () => {
      this.isOnline = false;
      this.onOffline();
    });

    // Service worker updates
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        this.onServiceWorkerUpdate();
      });
    }
  }

  public async registerServiceWorker(): Promise<void> {
    if (!("serviceWorker" in navigator)) {
      console.log("Service Worker not supported");
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
      });

      this.registration = registration;
      console.log("Service Worker registered successfully:", registration);

      // Check for updates
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              this.showUpdateAvailable();
            }
          });
        }
      });

      // Handle messages from service worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        this.handleServiceWorkerMessage(event);
      });
    } catch (error) {
      console.error("Service Worker registration failed:", error);
    }
  }

  public async unregisterServiceWorker(): Promise<void> {
    if (this.registration) {
      await this.registration.unregister();
      this.registration = null;
      console.log("Service Worker unregistered");
    }
  }

  public async updateServiceWorker(): Promise<void> {
    if (this.registration) {
      await this.registration.update();
    }
  }

  public async skipWaiting(): Promise<void> {
    if (this.registration && this.registration.waiting) {
      this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  }

  public isServiceWorkerSupported(): boolean {
    return "serviceWorker" in navigator;
  }

  public isOnlineStatus(): boolean {
    return this.isOnline;
  }

  public async requestNotificationPermission(): Promise<NotificationPermission> {
    if (!("Notification" in window)) {
      return "denied";
    }

    if (Notification.permission === "granted") {
      return "granted";
    }

    if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      return permission;
    }

    return "denied";
  }

  public async showNotification(
    title: string,
    options?: NotificationOptions
  ): Promise<void> {
    if (!this.registration) {
      console.error("Service Worker not registered");
      return;
    }

    const permission = await this.requestNotificationPermission();
    if (permission === "granted") {
      await this.registration.showNotification(title, {
        icon: "/icons/icon-192x192.png",
        badge: "/icons/icon-72x72.png",
        ...((options as Record<string, unknown>).vibrate
          ? { vibrate: (options as Record<string, unknown>).vibrate }
          : {}),
        ...options,
      });
    }
  }

  public async subscribeToPush(): Promise<PushSubscription | null> {
    if (!this.registration) {
      console.error("Service Worker not registered");
      return null;
    }

    try {
      const subscription = await this.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: this.urlBase64ToUint8Array(
          import.meta.env.VITE_VAPID_PUBLIC_KEY || ""
        ) as BufferSource,
      });

      console.log("Push subscription:", subscription);
      return subscription;
    } catch (error) {
      console.error("Push subscription failed:", error);
      return null;
    }
  }

  public async unsubscribeFromPush(): Promise<void> {
    if (!this.registration) {
      return;
    }

    try {
      const subscription =
        await this.registration.pushManager.getSubscription();
      if (subscription) {
        await subscription.unsubscribe();
        console.log("Push unsubscribed");
      }
    } catch (error) {
      console.error("Push unsubscribe failed:", error);
    }
  }

  public async getPushSubscription(): Promise<PushSubscription | null> {
    if (!this.registration) {
      return null;
    }

    try {
      return await this.registration.pushManager.getSubscription();
    } catch (error) {
      console.error("Get push subscription failed:", error);
      return null;
    }
  }

  public async cacheData(key: string, data: unknown): Promise<void> {
    if (!this.registration) {
      return;
    }

    try {
      const cache = await caches.open("arulax-data-v1");
      await cache.put(key, new Response(JSON.stringify(data)));
    } catch (error) {
      console.error("Cache data failed:", error);
    }
  }

  public async getCachedData(key: string): Promise<unknown> {
    if (!this.registration) {
      return null;
    }

    try {
      const cache = await caches.open("arulax-data-v1");
      const response = await cache.match(key);
      if (response) {
        return await response.json();
      }
    } catch (error) {
      console.error("Get cached data failed:", error);
    }

    return null;
  }

  private urlBase64ToUint8Array(base64String: string): Uint8Array {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray as Uint8Array;
  }

  private onOnline(): void {
    console.log("App is online");
    // Sync any offline data
    this.syncOfflineData();
  }

  private onOffline(): void {
    console.log("App is offline");
    // Show offline indicator
    this.showOfflineIndicator();
  }

  private async syncOfflineData(): Promise<void> {
    // Implement offline data synchronization
    console.log("Syncing offline data...");
  }

  private showOfflineIndicator(): void {
    // Create or show offline indicator
    const indicator = document.getElementById("offline-indicator");
    if (!indicator) {
      const offlineDiv = document.createElement("div");
      offlineDiv.id = "offline-indicator";
      offlineDiv.innerHTML = `
        <div style="
          position: fixed;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          background: #ff6b6b;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 14px;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        ">
          📡 You're offline - Some features may be limited
        </div>
      `;
      document.body.appendChild(offlineDiv);
    }
  }

  private onServiceWorkerUpdate(): void {
    console.log("Service Worker updated");
    // Reload the page to use the new service worker
    window.location.reload();
  }

  private showUpdateAvailable(): void {
    // Show update available notification
    const updateNotification = document.createElement("div");
    updateNotification.innerHTML = `
      <div style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        max-width: 300px;
      ">
        <div style="margin-bottom: 10px;">
          <strong>Update Available!</strong>
        </div>
        <div style="font-size: 14px; margin-bottom: 15px; opacity: 0.9;">
          A new version of AruLax Web is available.
        </div>
        <div style="display: flex; gap: 10px;">
          <button onclick="this.parentElement.parentElement.parentElement.remove(); window.location.reload();" 
                  style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 16px; border-radius: 5px; cursor: pointer;">
            Update
          </button>
          <button onclick="this.parentElement.parentElement.parentElement.remove();" 
                  style="background: transparent; border: 1px solid rgba(255,255,255,0.3); color: white; padding: 8px 16px; border-radius: 5px; cursor: pointer;">
            Later
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(updateNotification);
  }

  private handleServiceWorkerMessage(event: MessageEvent): void {
    const { type, data } = event.data;

    switch (type) {
      case "CACHE_UPDATED":
        console.log("Cache updated:", data);
        break;
      case "OFFLINE_DATA_SYNC":
        console.log("Offline data sync:", data);
        break;
      default:
        console.log("Unknown message from service worker:", event.data);
    }
  }
}

export default PWAService;
