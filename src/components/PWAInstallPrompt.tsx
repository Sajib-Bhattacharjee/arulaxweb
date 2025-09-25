import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload,
  FaTimes,
  FaMobile,
  FaDesktop,
  FaRocket,
  FaHome,
  FaStar,
} from "react-icons/fa";

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

      // Check if running in PWA mode (additional check)
      if (
        window.location.search.includes("source=pwa") ||
        window.location.search.includes("utm_source=pwa")
      ) {
        setIsInstalled(true);
        return;
      }
    };

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Show banner after a delay (reduced for better UX)
      setTimeout(() => {
        setShowBanner(true);
      }, 1500);
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
      {/* Dynamic PWA Install Prompt */}
      <AnimatePresence>
        {showBanner && deferredPrompt && (
          <motion.div
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.5,
            }}
            className="pwa-install-prompt"
          >
            <div className="pwa-prompt-container">
              {/* Logo Section */}
              <div className="pwa-logo-section">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="pwa-logo-wrapper"
                >
                  <img
                    src="/logo.png"
                    alt="AruLax Web"
                    className="pwa-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className="pwa-logo-fallback"
                    style={{ display: "none" }}
                  >
                    <FaRocket size={32} />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="pwa-pulse-ring"
                />
              </div>

              {/* Content Section */}
              <div className="pwa-content-section">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="pwa-title"
                >
                  Install AruLax Web
                </motion.h3>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pwa-description"
                >
                  Install this app on your home screen for a better experience
                </motion.p>

                {/* Feature Icons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pwa-features"
                >
                  <div className="pwa-feature-item">
                    <FaHome size={16} />
                    <span>Quick Access</span>
                  </div>
                  <div className="pwa-feature-item">
                    <FaMobile size={16} />
                    <span>Mobile Optimized</span>
                  </div>
                  <div className="pwa-feature-item">
                    <FaStar size={16} />
                    <span>Offline Support</span>
                  </div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pwa-actions"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="pwa-install-btn"
                  onClick={handleInstallClick}
                >
                  <FaDownload size={18} />
                  <span>Install</span>
                  <motion.div
                    className="pwa-btn-glow"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="pwa-cancel-btn"
                  onClick={handleDismiss}
                >
                  <FaTimes size={16} />
                  <span>Cancel</span>
                </motion.button>
              </motion.div>

              {/* Background Effects */}
              <div className="pwa-background-effects">
                <motion.div
                  className="pwa-gradient-orb pwa-orb-1"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="pwa-gradient-orb pwa-orb-2"
                  animate={{
                    x: [0, -25, 0],
                    y: [0, 15, 0],
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="pwa-gradient-orb pwa-orb-3"
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -25, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced CSS Styles */}
      <style>{`
        .pwa-install-prompt {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10000;
          max-width: 400px;
          width: 90%;
          pointer-events: none;
        }

        .pwa-prompt-container {
          position: relative;
          background: linear-gradient(135deg, 
            #19083A 0%, 
            #2A0D6B 25%,
            #301A18 50%,
            #200C59 75%,
            #230956 100%
          );
          background-size: 300% 300%;
          animation: gradientShift 8s ease infinite;
          border-radius: 20px;
          padding: 25px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.15),
            0 10px 20px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          pointer-events: all;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .pwa-logo-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .pwa-logo-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pwa-logo {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          object-fit: cover;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .pwa-logo-fallback {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #19083A, #2A0D6B);
          border-radius: 12px;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .pwa-pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80px;
          height: 80px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
        }

        .pwa-content-section {
          text-align: center;
          margin-bottom: 25px;
        }

        .pwa-title {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 8px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .pwa-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          margin-bottom: 20px;
          line-height: 1.4;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }

        .pwa-features {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .pwa-feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .pwa-feature-item svg {
          color: rgba(255, 255, 255, 0.9);
        }

        .pwa-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .pwa-install-btn, .pwa-cancel-btn {
          position: relative;
          border: none;
          border-radius: 12px;
          padding: 12px 24px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          overflow: hidden;
          min-width: 120px;
          justify-content: center;
        }

        .pwa-install-btn {
          background: linear-gradient(135deg, #4CAF50, #45a049);
          color: white;
          box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
        }

        .pwa-install-btn:hover {
          box-shadow: 0 12px 25px rgba(76, 175, 80, 0.4);
          transform: translateY(-2px);
        }

        .pwa-cancel-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .pwa-cancel-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .pwa-btn-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
          border-radius: 12px;
          pointer-events: none;
        }

        .pwa-background-effects {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 20px;
        }

        .pwa-gradient-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
        }

        .pwa-orb-1 {
          width: 100px;
          height: 100px;
          top: -50px;
          right: -50px;
        }

        .pwa-orb-2 {
          width: 80px;
          height: 80px;
          bottom: -40px;
          left: -40px;
        }

        .pwa-orb-3 {
          width: 60px;
          height: 60px;
          top: 50%;
          left: -30px;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .pwa-install-prompt {
            bottom: 15px;
            left: 15px;
            right: 15px;
            transform: none;
            max-width: none;
            width: auto;
          }

          .pwa-prompt-container {
            padding: 20px;
            border-radius: 16px;
          }

          .pwa-title {
            font-size: 1.3rem;
          }

          .pwa-description {
            font-size: 0.9rem;
          }

          .pwa-features {
            gap: 15px;
          }

          .pwa-feature-item {
            font-size: 0.8rem;
          }

          .pwa-install-btn, .pwa-cancel-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
            min-width: 100px;
          }

          .pwa-actions {
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .pwa-prompt-container {
            padding: 18px;
          }

          .pwa-logo-wrapper {
            width: 50px;
            height: 50px;
          }

          .pwa-logo {
            width: 40px;
            height: 40px;
          }

          .pwa-logo-fallback {
            width: 40px;
            height: 40px;
          }

          .pwa-title {
            font-size: 1.2rem;
          }

          .pwa-description {
            font-size: 0.85rem;
          }

          .pwa-features {
            flex-direction: column;
            gap: 10px;
          }

          .pwa-feature-item {
            flex-direction: row;
            gap: 8px;
          }

          .pwa-actions {
            flex-direction: column;
            gap: 8px;
          }

          .pwa-install-btn, .pwa-cancel-btn {
            width: 100%;
            min-width: auto;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .pwa-install-btn:hover, .pwa-cancel-btn:hover {
            transform: none;
          }

          .pwa-install-btn:active, .pwa-cancel-btn:active {
            transform: scale(0.95);
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .pwa-prompt-container {
            box-shadow: 
              0 20px 40px rgba(0, 0, 0, 0.3),
              0 10px 20px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .pwa-prompt-container {
            animation: none;
          }

          .pwa-pulse-ring {
            animation: none;
          }

          .pwa-gradient-orb {
            animation: none;
          }

          .pwa-btn-glow {
            animation: none;
          }
        }
      `}</style>

      {/* Enhanced Install Modal */}
      <Modal
        show={showInstallModal}
        onHide={handleDismiss}
        centered
        backdrop="static"
        size="lg"
        className="pwa-install-modal"
      >
        <Modal.Header
          closeButton
          className="pwa-modal-header"
          style={{
            background: "linear-gradient(135deg, #19083A 0%, #2A0D6B 100%)",
            color: "white",
            border: "none",
            borderRadius: "10px 10px 0 0",
          }}
        >
          <Modal.Title className="pwa-modal-title">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ display: "inline-block", marginRight: "10px" }}
            >
              <FaDownload size={20} />
            </motion.div>
            Install AruLax Web
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pwa-modal-body">
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="pwa-modal-logo"
            >
              <img
                src="/logo.png"
                alt="AruLax Web"
                className="pwa-modal-logo-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div
                className="pwa-modal-logo-fallback"
                style={{ display: "none" }}
              >
                <FaRocket size={40} />
              </div>
            </motion.div>

            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pwa-modal-main-title"
            >
              Install AruLax Web App
            </motion.h4>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pwa-modal-description"
            >
              Install this app on your home screen for a better experience
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="row g-3 mb-4"
          >
            <div className="col-md-6">
              <div className="pwa-feature-card">
                <FaMobile size={24} className="pwa-feature-icon" />
                <div>
                  <h6 className="pwa-feature-title">Mobile Experience</h6>
                  <small className="pwa-feature-desc">
                    Native app feel on your phone
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pwa-feature-card">
                <FaDesktop size={24} className="pwa-feature-icon" />
                <div>
                  <h6 className="pwa-feature-title">Desktop Access</h6>
                  <small className="pwa-feature-desc">
                    Quick access from your desktop
                  </small>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pwa-instructions"
          >
            <h6 className="pwa-instructions-title">
              <FaStar className="me-2" />
              Installation Instructions
            </h6>
            <div className="pwa-instructions-list">
              <div className="pwa-instruction-item">
                <strong>Chrome/Edge:</strong> Click the install button in the
                address bar
              </div>
              <div className="pwa-instruction-item">
                <strong>Firefox:</strong> Click the install button in the
                address bar
              </div>
              <div className="pwa-instruction-item">
                <strong>Safari (iOS):</strong> Tap Share → Add to Home Screen
              </div>
              <div className="pwa-instruction-item">
                <strong>Samsung Internet:</strong> Tap Menu → Add page to → Home
                screen
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="d-grid gap-2 pwa-modal-actions"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pwa-modal-install-btn"
              onClick={handleInstallClick}
            >
              <FaDownload className="me-2" />
              Install App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="pwa-modal-cancel-btn"
              onClick={handleDismiss}
            >
              Maybe Later
            </motion.button>
          </motion.div>
        </Modal.Body>

        {/* Modal CSS Styles */}
        <style>{`
          .pwa-install-modal .modal-content {
            border-radius: 15px;
            border: none;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            overflow: hidden;
          }

          .pwa-modal-header {
            background: linear-gradient(135deg, #19083A 0%, #2A0D6B 100%) !important;
            border: none !important;
            padding: 20px 25px;
          }

          .pwa-modal-title {
            font-weight: 700;
            font-size: 1.4rem;
            display: flex;
            align-items: center;
          }

          .pwa-modal-body {
            padding: 30px 25px;
            background: linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%);
          }

          .pwa-modal-logo {
            width: 100px;
            height: 100px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #19083A 0%, #2A0D6B 100%);
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(25, 8, 58, 0.3);
          }

          .pwa-modal-logo-img {
            width: 80px;
            height: 80px;
            border-radius: 15px;
            object-fit: cover;
          }

          .pwa-modal-logo-fallback {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #19083A, #2A0D6B);
            border-radius: 15px;
            align-items: center;
            justify-content: center;
            color: white;
          }

          .pwa-modal-main-title {
            color: #333;
            font-weight: 700;
            margin-bottom: 10px;
          }

          .pwa-modal-description {
            color: #666;
            font-size: 1.1rem;
            line-height: 1.5;
          }

          .pwa-feature-card {
            display: flex;
            align-items: center;
            padding: 20px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(42, 13, 107, 0.1);
            transition: all 0.3s ease;
          }

          .pwa-feature-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          }

          .pwa-feature-icon {
            color: #2A0D6B;
            margin-right: 15px;
          }

          .pwa-feature-title {
            color: #333;
            font-weight: 600;
            margin-bottom: 5px;
          }

          .pwa-feature-desc {
            color: #666;
          }

          .pwa-instructions {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(42, 13, 107, 0.1);
            margin-bottom: 25px;
          }

          .pwa-instructions-title {
            color: #333;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
          }

          .pwa-instructions-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .pwa-instruction-item {
            color: #555;
            font-size: 0.95rem;
            line-height: 1.4;
          }

          .pwa-modal-actions {
            margin-top: 20px;
          }

          .pwa-modal-install-btn, .pwa-modal-cancel-btn {
            border: none;
            border-radius: 12px;
            padding: 15px 25px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .pwa-modal-install-btn {
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
            box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
          }

          .pwa-modal-install-btn:hover {
            box-shadow: 0 12px 25px rgba(76, 175, 80, 0.4);
          }

          .pwa-modal-cancel-btn {
            background: rgba(108, 117, 125, 0.1);
            color: #6c757d;
            border: 1px solid rgba(108, 117, 125, 0.2);
          }

          .pwa-modal-cancel-btn:hover {
            background: rgba(108, 117, 125, 0.15);
            color: #495057;
          }

          /* Mobile responsiveness for modal */
          @media (max-width: 768px) {
            .pwa-modal-body {
              padding: 20px 15px;
            }

            .pwa-modal-header {
              padding: 15px 20px;
            }

            .pwa-modal-title {
              font-size: 1.2rem;
            }

            .pwa-modal-logo {
              width: 80px;
              height: 80px;
            }

            .pwa-modal-logo-img, .pwa-modal-logo-fallback {
              width: 60px;
              height: 60px;
            }

            .pwa-feature-card {
              padding: 15px;
              margin-bottom: 10px;
            }

            .pwa-instructions {
              padding: 15px;
            }
          }
        `}</style>
      </Modal>
    </>
  );
};

export default PWAInstallPrompt;
