<template>
  <header class="header">
    <h1>{{ appConfig.title }}</h1>
    <p v-if="appConfig.description">{{ appConfig.description }}</p>
  </header>
</template>

<script>
import { APP_CONFIG } from "../config/index.js";
export default {
  name: "Header",
  data() {
    return {
      appConfig: APP_CONFIG,
    };
  },
};
</script>
