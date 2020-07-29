<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import AppHeader from '/@/components/AppHeader.vue';

export default defineComponent({
  components: {
    AppHeader,
    RouterView,
  },
});
</script>

<template>
  <AppHeader />
  <RouterView class="container" />
  <footer class="app-footer" />
</template>

<style lang="scss" src="/@/styles/root.scss"></style>

<style lang="scss" scoped>
@import './styles/vars.scss';

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

.app-footer {
  margin: 40px 0;
}
</style>
