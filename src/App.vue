<template>
  <div id="app">
    <Header />
    <MapContainer />
  </div>
</template>

<script>
import MapContainer from "./components/MapContainer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    MapContainer,
    Header,
  },
};
</script>
