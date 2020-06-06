<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';

export default defineComponent({
  components: {
    AppHeader,
  },
});
</script>

<template>
  <div class="app">
    <AppHeader />
    <RouterView class="container" />
  </div>
</template>

<style lang="scss" src="@/styles/root.scss"></style>

<style lang="scss" scoped>
.app {
  display: grid;
  grid-gap: 16px;
  background: var(--bg);
  min-height: calc(100vh);
  box-shadow: 0 4px 4px rgba(var(--blue), 0.4);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: calc(100% - 16px);
}
</style>
