# Map explorer

A modern Vue.js application that displays spatial data on an interactive map using Leaflet. This application demonstrates how to work with different types of spatial data including Points, Polygons, and MultiPolygons.

## ✨ Features

### 🗺️ Map Functionality

- **Interactive Map Container**: Built with Leaflet.js for smooth map interactions
- **Multiple Layer Support**: Toggle between Point, Polygon, and MultiPolygon layers
- **Real-time Layer Control**: Show/hide different spatial data layers dynamically

### 📍 Spatial Data Types

1. **Point Data**: Geo markers with custom popups showing location information
2. **Polygon Data**: Area boundaries with interactive click events
3. **MultiPolygon Data**: Complex spatial features with multiple polygon areas

### 🎯 Interactive Features

- **Map Events**: Click on any spatial feature to view detailed information
- **Feature Information Cards**: Display comprehensive data about selected features
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### 🎨 Modern UI/UX

- **Beautiful Interface**: Modern gradient background with glass-morphism effects
- **Intuitive Controls**: Easy-to-use layer toggles and feature selection
- **Responsive Layout**: Adaptive design that works on all screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**

   ```bash
   # If you have the project files, navigate to the project directory
   cd vue-spatial-mapping
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
```

## 🛠️ Technology Stack

- **Frontend Framework**: Vue.js 3 with Options API
- **Build Tool**: Vite
- **Mapping Library**: Leaflet.js
- **Styling**: Modern CSS with CSS Variables and Flexbox/Grid
- **Configuration**: Centralized config system with CSS variable generation
- **HTTP Client**: Axios (for future API integration)

## 📊 Sample Data Structure

The application includes sample spatial data that simulates a real API response:

### Point Data

```javascript
{
  id: 'point-1',
  type: 'Point',
  name: 'Central Park',
  coordinates: [40.7829, -73.9654],
  properties: {
    category: 'Park',
    area: '843 acres',
    established: 1857
  }
}
```

### Polygon Data

```javascript
{
  id: 'polygon-1',
  type: 'Polygon',
  name: 'Manhattan Island',
  coordinates: [[[lat1, lng1], [lat2, lng2], ...]],
  properties: {
    borough: 'Manhattan',
    population: '1.6 million',
    area: '22.8 sq mi'
  }
}
```

## 🎯 Assessment Requirements Fulfilled

✅ **Map Container with Point Data**: Multiple geo markers with custom popups  
✅ **Map Container with Polygon Layer**: Interactive polygon areas  
✅ **Map Interactions**: Click events to display feature data in UI cards  
✅ **Map SDK Integration**: Leaflet.js for robust mapping functionality  
✅ **Modern UI**: Beautiful, responsive interface with layer controls  
✅ **Vue.js Options API**: All components use the traditional Options API pattern

## 🔧 Customization

### Configuration System
The application uses a centralized configuration system located in `src/config/index.js`:

- **APP_CONFIG**: Application title, description, and version
- **MAP_CONFIG**: Map center, zoom, tile layers, and popup settings
- **LAYER_CONFIG**: Layer colors, weights, opacity, and icons
- **SAMPLE_DATA**: All spatial data (points, polygons, multipolygons)
- **UI_CONFIG**: Colors, spacing, border radius, and shadows

### Adding New Spatial Data
1. Modify the `mapData` object in `src/config/mapData.js`
2. Add new features following the existing data structure
3. The application will automatically render new features
