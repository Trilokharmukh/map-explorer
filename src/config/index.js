// Application Configuration
export const APP_CONFIG = {
  title: "🇮🇳 India Map Explorer",
  description:
    "Interactive map showcasing Indian landmarks, cities, and natural wonders",
  version: "1.0.0",
};

// Map Configuration
export const MAP_CONFIG = {
  defaultCenter: [20.5937, 78.9629], // India center coordinates
  defaultZoom: 5, // Zoom out to show more of India
  tileLayer: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    // attribution: "© OpenStreetMap contributors",
  },
  popup: {
    minWidth: "200px",
    buttonStyle:
      "margin-top: 10px; padding: 5px 10px; background: #667eea; color: white; border: none; border-radius: 4px; cursor: pointer;",
  },
};

// Layer Configuration
export const LAYER_CONFIG = {
  points: {
    enabled: true,
    color: "#667eea",
    icon: "🏛️",
    label: "Indian Landmarks",
  },
  polygons: {
    enabled: true,
    color: "#667eea",
    weight: 2,
    fillOpacity: 0.3,
    icon: "🏙️",
    label: "Major Cities",
  },
  multipolygons: {
    enabled: true,
    color: "#e74c3c",
    weight: 2,
    fillOpacity: 0.3,
    icon: "🌳",
    label: "National Parks",
  },
};

// UI Configuration
export const UI_CONFIG = {
  colors: {
    primary: "#667eea",
    secondary: "#e74c3c",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    card: "#f8f9fa",
    text: {
      primary: "#333",
      secondary: "#666",
    },
  },
  spacing: {
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  shadows: {
    light: "0 2px 20px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 20px rgba(0, 0, 0, 0.1)",
    heavy: "0 4px 15px rgba(0, 0, 0, 0.1)",
  },
};

// API Configuration (for future use)
export const API_CONFIG = {
  baseUrl: "https://api.example.com",
  endpoints: {
    spatialData: "/spatial-data",
    features: "/features",
  },
  timeout: 5000,
  retries: 3,
};

// Development Configuration
export const DEV_CONFIG = {
  debug: true,
  logLevel: "info",
  enableHotReload: true,
};

// Utility function to generate CSS variables
export const generateCSSVariables = () => {
  const root = document.documentElement;
  const colors = UI_CONFIG.colors;
  const spacing = UI_CONFIG.spacing;
  const borderRadius = UI_CONFIG.borderRadius;
  const shadows = UI_CONFIG.shadows;

  // Set CSS custom properties
  root.style.setProperty("--color-primary", colors.primary);
  root.style.setProperty("--color-secondary", colors.secondary);
  root.style.setProperty("--color-background", colors.background);
  root.style.setProperty("--color-card", colors.card);
  root.style.setProperty("--color-text-primary", colors.text.primary);
  root.style.setProperty("--color-text-secondary", colors.text.secondary);

  root.style.setProperty("--spacing-small", spacing.small);
  root.style.setProperty("--spacing-medium", spacing.medium);
  root.style.setProperty("--spacing-large", spacing.large);

  root.style.setProperty("--border-radius-small", borderRadius.small);
  root.style.setProperty("--border-radius-medium", borderRadius.medium);
  root.style.setProperty("--border-radius-large", borderRadius.large);

  root.style.setProperty("--shadow-light", shadows.light);
  root.style.setProperty("--shadow-medium", shadows.medium);
  root.style.setProperty("--shadow-heavy", shadows.heavy);
};
