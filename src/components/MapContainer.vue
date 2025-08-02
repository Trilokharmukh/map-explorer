<template>
  <div class="container">
    <div class="map-container">
      <div id="map"></div>
      <SpatialMap :layers="layers" @feature-select="onFeatureSelect" />
    </div>

    <div class="sidebar">
      <div class="controls">
        <h3>Layer Controls</h3>
        <div class="layer-controls">
          <div
            v-for="(layer, key) in layerConfig"
            :key="key"
            class="layer-toggle"
          >
            <input type="checkbox" :id="`${key}-layer`" v-model="layers[key]" />
            <label :for="`${key}-layer`"
              >{{ layer.icon }} {{ layer.label }}</label
            >
          </div>
        </div>
      </div>

      <div class="feature-info">
        <h3>Feature Information</h3>
        <div v-if="loading" class="loading">Loading spatial data...</div>
        <div v-else-if="selectedFeature" class="feature-card">
          <h4>{{ selectedFeature.name || "Spatial Feature" }}</h4>
          <p><strong>Type:</strong> {{ selectedFeature.type }}</p>
          <p><strong>ID:</strong> {{ selectedFeature.id }}</p>

          <div v-if="selectedFeature.properties" class="properties-section">
            <strong>Details:</strong>
            <div class="property-list">
              <div
                v-for="(value, key) in selectedFeature.properties"
                :key="key"
                class="property-item"
              >
                <span class="property-key">{{ formatPropertyKey(key) }}:</span>
                <span class="property-value">{{
                  formatPropertyValue(value)
                }}</span>
              </div>
            </div>
          </div>

          <div v-if="selectedFeature.coordinates" class="coordinates-section">
            <strong>Coordinates:</strong>
            <div class="coordinates-display">
              <span class="coordinates-text">{{
                formatCoordinates(selectedFeature.coordinates)
              }}</span>
              <button
                @click="copyCoordinates(selectedFeature.coordinates)"
                class="copy-btn"
                :title="copyStatus"
              >
                {{ copyStatus === "Copied!" ? "✓" : "📋" }}
              </button>
            </div>
          </div>
        </div>
        <div v-else class="no-feature">
          Click on a map feature to view details
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpatialMap from "./SpatialMap.vue";
import { APP_CONFIG, LAYER_CONFIG } from "../config/index.js";
import {
  formatPropertyKey,
  formatPropertyValue,
  formatCoordinates,
} from "../utils/index.js";

export default {
  name: "MapContainer",
  components: {
    SpatialMap,
  },
  data() {
    return {
      loading: false,
      selectedFeature: null,
      appConfig: APP_CONFIG,
      layerConfig: LAYER_CONFIG,
      copyStatus: "Copy coordinates",
      layers: {
        points: LAYER_CONFIG.points.enabled,
        polygons: LAYER_CONFIG.polygons.enabled,
        multipolygons: LAYER_CONFIG.multipolygons.enabled,
      },
    };
  },
  methods: {
    onFeatureSelect(feature) {
      this.selectedFeature = feature;
    },

    formatPropertyKey(key) {
      return formatPropertyKey(key);
    },

    formatPropertyValue(value) {
      return formatPropertyValue(value);
    },

    formatCoordinates(coordinates) {
      return formatCoordinates(coordinates);
    },

    async copyCoordinates(coordinates) {
      try {
        let coordText;
        if (Array.isArray(coordinates[0])) {
          coordText = JSON.stringify(coordinates);
        } else {
          coordText = `${coordinates[0]}, ${coordinates[1]}`;
        }

        await navigator.clipboard.writeText(coordText);
        this.copyStatus = "Copied!";
        setTimeout(() => {
          this.copyStatus = "Copy coordinates";
        }, 2000);
      } catch (err) {
        console.error("Failed to copy coordinates:", err);
        this.copyStatus = "Failed to copy";
        setTimeout(() => {
          this.copyStatus = "Copy coordinates";
        }, 2000);
      }
    },
  },
};
</script>
