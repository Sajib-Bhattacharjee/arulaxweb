#!/usr/bin/env node

/**
 * PWA Icon Generator Script
 * This script helps generate the required PWA icons
 * Run with: node scripts/generate-pwa-icons.js
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Icon sizes required for PWA
const ICON_SIZES = [
  { size: 16, name: "icon-16x16.png" },
  { size: 32, name: "icon-32x32.png" },
  { size: 48, name: "icon-48x48.png" },
  { size: 72, name: "icon-72x72.png" },
  { size: 96, name: "icon-96x96.png" },
  { size: 128, name: "icon-128x128.png" },
  { size: 144, name: "icon-144x144.png" },
  { size: 152, name: "icon-152x152.png" },
  { size: 167, name: "icon-167x167.png" },
  { size: 180, name: "icon-180x180.png" },
  { size: 192, name: "icon-192x192.png" },
  { size: 384, name: "icon-384x384.png" },
  { size: 512, name: "icon-512x512.png" },
];

// Splash screen sizes for iOS
const SPLASH_SIZES = [
  { width: 2048, height: 2732, name: "apple-splash-2048-2732.jpg" }, // iPad Pro 12.9"
  { width: 1668, height: 2388, name: "apple-splash-1668-2388.jpg" }, // iPad Pro 11"
  { width: 1536, height: 2048, name: "apple-splash-1536-2048.jpg" }, // iPad
  { width: 1125, height: 2436, name: "apple-splash-1125-2436.jpg" }, // iPhone X/XS/11 Pro
  { width: 1242, height: 2208, name: "apple-splash-1242-2208.jpg" }, // iPhone 6/7/8 Plus
  { width: 750, height: 1334, name: "apple-splash-750-1334.jpg" }, // iPhone 6/7/8
  { width: 640, height: 1136, name: "apple-splash-640-1136.jpg" }, // iPhone 5/5S/5C
];

// Shortcut icons
const SHORTCUT_ICONS = [
  { name: "shortcut-quote.png", size: 96 },
  { name: "shortcut-contact.png", size: 96 },
  { name: "shortcut-portfolio.png", size: 96 },
];

// Windows tile sizes
const WINDOWS_TILE_SIZES = [
  { size: 70, name: "icon-70x70.png" },
  { size: 150, name: "icon-150x150.png" },
  { size: 310, name: "icon-310x310.png" },
];

function createDirectories() {
  const iconsDir = path.join(__dirname, "../public/icons");
  const screenshotsDir = path.join(__dirname, "../public/screenshots");

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
    console.log("✅ Created icons directory");
  }

  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
    console.log("✅ Created screenshots directory");
  }
}

function generateSVGIcon(size) {
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="${
    size * 0.4
  }" font-weight="bold">A</text>
</svg>`;
}

function generatePlaceholderIcon(size, text = "A") {
  const svg = generateSVGIcon(size);
  const iconsDir = path.join(__dirname, "../public/icons");

  // For now, we'll create SVG files that can be converted to PNG
  const svgPath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  fs.writeFileSync(svgPath, svg);

  console.log(`📱 Generated icon-${size}x${size}.svg`);

  // Create a simple HTML file for conversion instructions
  return {
    svg: svgPath,
    instructions: `Convert ${svgPath} to PNG format using an online converter or ImageMagick`,
  };
}

function generateSplashScreen(width, height, name) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e3c72;stop-opacity:1" />
      <stop offset="25%" style="stop-color:#2a5298;stop-opacity:1" />
      <stop offset="75%" style="stop-color:#00b09b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#96c93d;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#splashGrad)"/>
  <circle cx="${width / 2}" cy="${
    height / 2 - 50
  }" r="80" fill="rgba(255,255,255,0.1)"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">AruLax Web</text>
  <text x="50%" y="60%" text-anchor="middle" dy=".3em" fill="rgba(255,255,255,0.8)" font-family="Arial, sans-serif" font-size="24">Professional Web Development</text>
</svg>`;

  const iconsDir = path.join(__dirname, "../public/icons");
  const svgPath = path.join(iconsDir, `${name.replace(".jpg", ".svg")}`);
  fs.writeFileSync(svgPath, svg);

  console.log(`📱 Generated ${name.replace(".jpg", ".svg")}`);
  return svgPath;
}

function generateInstructions() {
  const instructions = `
# PWA Icon Generation Instructions

## Required Icons
You need to create the following icon files in the \`public/icons/\` directory:

### Standard PWA Icons (PNG format)
${ICON_SIZES.map((icon) => `- ${icon.name} (${icon.size}x${icon.size}px)`).join(
  "\n"
)}

### iOS Splash Screens (JPG format)
${SPLASH_SIZES.map(
  (splash) => `- ${splash.name} (${splash.width}x${splash.height}px)`
).join("\n")}

### Shortcut Icons (PNG format)
${SHORTCUT_ICONS.map(
  (icon) => `- ${icon.name} (${icon.size}x${icon.size}px)`
).join("\n")}

### Windows Tiles (PNG format)
${WINDOWS_TILE_SIZES.map(
  (tile) => `- ${tile.name} (${tile.size}x${tile.size}px)`
).join("\n")}

### Screenshots (PNG format)
- desktop-screenshot.png (1280x720px) - Desktop view
- mobile-screenshot.png (390x844px) - Mobile view

## Generation Methods

### Method 1: Online Icon Generators
1. Visit https://realfavicongenerator.net/
2. Upload your base icon (512x512px recommended)
3. Generate all required sizes
4. Download and place in \`public/icons/\`

### Method 2: Using ImageMagick
\`\`\`bash
# Install ImageMagick first
# Convert SVG to PNG for each size
convert icon-192x192.svg icon-192x192.png
convert icon-512x512.svg icon-512x512.png
# ... repeat for all sizes
\`\`\`

### Method 3: Using Online SVG to PNG Converter
1. Use https://convertio.co/svg-png/ or similar
2. Convert each SVG file to PNG
3. Ensure proper dimensions

## Icon Design Guidelines

### Design Requirements
- **Size**: Minimum 192x192px, maximum 512x512px for main icon
- **Format**: PNG with transparency support
- **Style**: Simple, recognizable, works at small sizes
- **Colors**: Match your brand colors (#667eea, #764ba2)
- **Background**: Can be transparent or solid

### Best Practices
- Use simple, bold designs
- Avoid fine details that won't show at small sizes
- Test readability at 16x16px
- Use consistent branding across all sizes
- Ensure good contrast

## Verification
After adding all icons, test your PWA by:
1. Opening in Chrome DevTools
2. Going to Application tab
3. Checking Manifest section
4. Verifying all icons load correctly
5. Testing install prompt

## Next Steps
1. Create your base icon design (512x512px)
2. Generate all required sizes
3. Update manifest.json if needed
4. Test PWA installation
5. Verify offline functionality
`;

  const instructionsPath = path.join(__dirname, "../PWA-ICONS-GUIDE.md");
  fs.writeFileSync(instructionsPath, instructions);
  console.log("📖 Generated PWA-ICONS-GUIDE.md with detailed instructions");
}

function main() {
  console.log("🚀 Starting PWA Icon Generation...\n");

  createDirectories();

  console.log("📱 Generating placeholder icons...");

  // Generate placeholder icons
  const generatedIcons = [];
  [...ICON_SIZES, ...WINDOWS_TILE_SIZES].forEach((icon) => {
    const result = generatePlaceholderIcon(icon.size);
    generatedIcons.push(result);
  });

  // Generate placeholder splash screens
  console.log("📱 Generating placeholder splash screens...");
  SPLASH_SIZES.forEach((splash) => {
    generateSplashScreen(splash.width, splash.height, splash.name);
  });

  // Generate instructions
  generateInstructions();

  console.log("\n✅ PWA icon generation complete!");
  console.log("\n📋 Next Steps:");
  console.log("1. Review the generated SVG files in public/icons/");
  console.log("2. Convert SVG files to PNG using an online converter");
  console.log("3. Read PWA-ICONS-GUIDE.md for detailed instructions");
  console.log("4. Create your custom icon design and replace placeholders");
  console.log("5. Test PWA installation in browser");

  console.log("\n🔗 Useful Resources:");
  console.log("- Online Icon Generator: https://realfavicongenerator.net/");
  console.log("- SVG to PNG Converter: https://convertio.co/svg-png/");
  console.log("- PWA Icon Guidelines: https://web.dev/app-icon-guidelines/");
}

// Run the script
main();

export {
  ICON_SIZES,
  SPLASH_SIZES,
  SHORTCUT_ICONS,
  WINDOWS_TILE_SIZES,
  generateSVGIcon,
  generatePlaceholderIcon,
  generateSplashScreen,
};
