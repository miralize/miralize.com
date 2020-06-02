<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<template>
  <header class="app-header">
    <router-link
      class="app-logo"
      to="/"
      exact
    >
      <img
        src="@/assets/logo.svg"
        class="app-logo__img"
      >
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  display: grid;
  grid-template: 100px auto / repeat(12, 1fr);
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
}

.app-logo {
  grid-column: 1 / -1;
  display: grid;
  align-content: center;
  justify-items: center;
  color: c(blue);
  background-blend-mode: overlay;
}

.app-logo__img {
  width: 100px;
  height: auto;
}
</style>
