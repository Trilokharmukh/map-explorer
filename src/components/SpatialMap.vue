<template>
  <div></div>
</template>

<script>
import L from "leaflet";
import { MAP_CONFIG, LAYER_CONFIG } from "../config/index.js";
import { MAP_DATA } from "../config/mapData.js";

export default {
  name: "SpatialMap",
  props: {
    layers: {
      type: Object,
      default: () => ({
        points: LAYER_CONFIG.points.enabled,
        polygons: LAYER_CONFIG.polygons.enabled,
        multipolygons: LAYER_CONFIG.multipolygons.enabled,
      }),
    },
  },
  emits: ["feature-select"],
  data() {
    return {
      map: null,
      mapLayers: {
        points: null,
        polygons: null,
        multipolygons: null,
      },
      loading: false,
      mapConfig: MAP_CONFIG,
      layerConfig: LAYER_CONFIG,
      // Sample spatial data - simulating API response
      spatialData: MAP_DATA,
    };
  },
  watch: {
    layers: {
      handler(newLayers) {
        this.toggleLayer("points");
        this.toggleLayer("polygons");
        this.toggleLayer("multipolygons");
      },
      deep: true,
    },
  },
  mounted() {
    this.initializeMap();
    this.createPointLayer();
    this.createPolygonLayer();
    this.createMultiPolygonLayer();

    // Make selectFeature available globally for popup buttons
    window.selectFeature = (featureId) => {
      const allFeatures = [
        ...this.spatialData.points,
        ...this.spatialData.polygons,
        ...this.spatialData.multipolygons,
      ];
      const feature = allFeatures.find((f) => f.id === featureId);
      if (feature) {
        this.$emit("feature-select", feature);
      }
    };
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
    delete window.selectFeature;
  },
  methods: {
    initializeMap() {
      // Initialize the map
      this.map = L.map("map").setView(
        this.mapConfig.defaultCenter,
        this.mapConfig.defaultZoom
      );

      // Add OpenStreetMap tiles
      L.tileLayer(this.mapConfig.tileLayer.url, {
        attribution: this.mapConfig.tileLayer.attribution,
      }).addTo(this.map);

      // Add map click event
      this.map.on("click", (e) => {
        // Clear any existing popups
        this.map.closePopup();
      });
    },

    createPointLayer() {
      if (this.mapLayers.points) {
        this.map.removeLayer(this.mapLayers.points);
      }

      this.mapLayers.points = L.layerGroup();

      this.spatialData.points.forEach((point) => {
        const marker = L.marker(point.coordinates).bindPopup(`
            <div style="min-width: ${this.mapConfig.popup.minWidth};">
              <h4 style="margin: 0 0 10px 0; color: #333;">${point.name}</h4>
              <p style="margin: 5px 0;"><strong>Type:</strong> ${point.type}</p>
              <p style="margin: 5px 0;"><strong>ID:</strong> ${point.id}</p>
              <p style="margin: 5px 0;"><strong>Coordinates:</strong> ${point.coordinates[0].toFixed(
                4
              )}, ${point.coordinates[1].toFixed(4)}</p>
            </div>
          `);

        marker.on("click", () => {
          this.$emit("feature-select", point);
        });

        this.mapLayers.points.addLayer(marker);
      });

      if (this.layers.points) {
        this.mapLayers.points.addTo(this.map);
      }
    },

    createPolygonLayer() {
      if (this.mapLayers.polygons) {
        this.map.removeLayer(this.mapLayers.polygons);
      }

      this.mapLayers.polygons = L.layerGroup();

      this.spatialData.polygons.forEach((polygon) => {
        const leafletPolygon = L.polygon(polygon.coordinates, {
          color: this.layerConfig.polygons.color,
          weight: this.layerConfig.polygons.weight,
          fillColor: this.layerConfig.polygons.color,
          fillOpacity: this.layerConfig.polygons.fillOpacity,
        }).bindPopup(`
          <div style="min-width: ${this.mapConfig.popup.minWidth};">
            <h4 style="margin: 0 0 10px 0; color: #333;">${polygon.name}</h4>
            <p style="margin: 5px 0;"><strong>Type:</strong> ${polygon.type}</p>
            <p style="margin: 5px 0;"><strong>ID:</strong> ${polygon.id}</p>
          </div>
        `);

        leafletPolygon.on("click", () => {
          this.$emit("feature-select", polygon);
        });

        this.mapLayers.polygons.addLayer(leafletPolygon);
      });

      if (this.layers.polygons) {
        this.mapLayers.polygons.addTo(this.map);
      }
    },

    createMultiPolygonLayer() {
      if (this.mapLayers.multipolygons) {
        this.map.removeLayer(this.mapLayers.multipolygons);
      }

      this.mapLayers.multipolygons = L.layerGroup();

      this.spatialData.multipolygons.forEach((multipolygon) => {
        const leafletMultiPolygon = L.polygon(multipolygon.coordinates, {
          color: this.layerConfig.multipolygons.color,
          weight: this.layerConfig.multipolygons.weight,
          fillColor: this.layerConfig.multipolygons.color,
          fillOpacity: this.layerConfig.multipolygons.fillOpacity,
        }).bindPopup(`
          <div style="min-width: ${this.mapConfig.popup.minWidth};">
            <h4 style="margin: 0 0 10px 0; color: #333;">${multipolygon.name}</h4>
            <p style="margin: 5px 0;"><strong>Type:</strong> ${multipolygon.type}</p>
            <p style="margin: 5px 0;"><strong>ID:</strong> ${multipolygon.id}</p>
          </div>
        `);

        leafletMultiPolygon.on("click", () => {
          this.$emit("feature-select", multipolygon);
        });

        this.mapLayers.multipolygons.addLayer(leafletMultiPolygon);
      });

      if (this.layers.multipolygons) {
        this.mapLayers.multipolygons.addTo(this.map);
      }
    },

    toggleLayer(layerType) {
      if (!this.map) return;

      switch (layerType) {
        case "points":
          if (this.layers.points) {
            this.mapLayers.points.addTo(this.map);
          } else {
            this.map.removeLayer(this.mapLayers.points);
          }
          break;
        case "polygons":
          if (this.layers.polygons) {
            this.mapLayers.polygons.addTo(this.map);
          } else {
            this.map.removeLayer(this.mapLayers.polygons);
          }
          break;
        case "multipolygons":
          if (this.layers.multipolygons) {
            this.mapLayers.multipolygons.addTo(this.map);
          } else {
            this.map.removeLayer(this.mapLayers.multipolygons);
          }
          break;
      }
    },
  },
};
</script>
