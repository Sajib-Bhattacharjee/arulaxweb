import React, { useState, useEffect } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes, FaMobile, FaDesktop } from "react-icons/fa";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkInstalled = () => {
      // Check if running in standalone mode
      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;
      const isIOSStandalone = (
        window.navigator as Navigator & { standalone?: boolean }
      ).standalone;

      if (isStandalone || isIOSStandalone) {
        setIsInstalled(true);
        return;
      }

      // Check if app was previously installed
      const installed = localStorage.getItem("pwa-installed");
      if (installed === "true") {
        setIsInstalled(true);
        return;
      }
    };

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Show banner after a delay
      setTimeout(() => {
        setShowBanner(true);
      }, 3000);
    };

    // Listen for app installed event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallModal(false);
      setShowBanner(false);
      localStorage.setItem("pwa-installed", "true");

      // Show success message
      showInstallSuccess();
    };

    // Check installation status
    checkInstalled();

    // Add event listeners
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Cleanup
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const showInstallSuccess = () => {
    // Create a temporary success notification
    const notification = document.createElement("div");
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
      ">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="font-size: 24px;">🎉</div>
          <div>
            <div style="font-weight: bold; margin-bottom: 5px;">App Installed!</div>
            <div style="font-size: 14px; opacity: 0.9;">AruLax Web is now available on your device</div>
          </div>
        </div>
      </div>
      <style>
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      </style>
    `;

    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.remove();
    }, 5000);
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      setShowInstallModal(true);
      return;
    }

    try {
      // Show the install prompt
      await deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }

      // Clear the deferredPrompt
      setDeferredPrompt(null);
      setShowBanner(false);
    } catch (error) {
      console.error("Error showing install prompt:", error);
      setShowInstallModal(true);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setShowInstallModal(false);

    // Don't show again for this session
    sessionStorage.setItem("pwa-prompt-dismissed", "true");
  };

  // Don't show if already installed or dismissed
  if (isInstalled || sessionStorage.getItem("pwa-prompt-dismissed")) {
    return null;
  }

  return (
    <>
      {/* Install Banner */}
      <AnimatePresence>
        {showBanner && deferredPrompt && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "15px 20px",
              zIndex: 1000,
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            }}
          >
            <div className="container d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <FaMobile className="me-3" size={20} />
                <div>
                  <strong>Install AruLax Web</strong>
                  <div style={{ fontSize: "14px", opacity: 0.9 }}>
                    Get quick access and offline support
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <Button
                  variant="light"
                  size="sm"
                  onClick={handleInstallClick}
                  className="px-3"
                >
                  <FaDownload className="me-1" />
                  Install
                </Button>
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={handleDismiss}
                  className="px-2"
                >
                  <FaTimes />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Install Modal */}
      <Modal
        show={showInstallModal}
        onHide={handleDismiss}
        centered
        backdrop="static"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FaDownload className="me-2" />
            Install AruLax Web
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                width: "100px",
                height: "100px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                color: "white",
                fontSize: "40px",
              }}
            >
              📱
            </motion.div>

            <h4>Install AruLax Web App</h4>
            <p className="text-muted">
              Get the full app experience with offline support and quick access
            </p>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center p-3 border rounded">
                <FaMobile size={24} className="me-3 text-primary" />
                <div>
                  <h6 className="mb-1">Mobile Experience</h6>
                  <small className="text-muted">
                    Native app feel on your phone
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center p-3 border rounded">
                <FaDesktop size={24} className="me-3 text-primary" />
                <div>
                  <h6 className="mb-1">Desktop Access</h6>
                  <small className="text-muted">
                    Quick access from your desktop
                  </small>
                </div>
              </div>
            </div>
          </div>

          <Alert variant="info" className="mb-3">
            <strong>Installation Instructions:</strong>
            <ul className="mb-0 mt-2">
              <li>
                <strong>Chrome/Edge:</strong> Click the install button in the
                address bar
              </li>
              <li>
                <strong>Firefox:</strong> Click the install button in the
                address bar
              </li>
              <li>
                <strong>Safari (iOS):</strong> Tap Share → Add to Home Screen
              </li>
              <li>
                <strong>Samsung Internet:</strong> Tap Menu → Add page to → Home
                screen
              </li>
            </ul>
          </Alert>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              size="lg"
              onClick={handleInstallClick}
              className="mb-2"
            >
              <FaDownload className="me-2" />
              Install App
            </Button>
            <Button variant="outline-secondary" onClick={handleDismiss}>
              Maybe Later
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PWAInstallPrompt;
