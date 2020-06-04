<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@/assets/logo.svg';

export default defineComponent({
  components: {
    Logo,
  },
});
</script>

<template>
  <header class="app-header">
    <router-link
      class="app-logo"
      to="/"
      exact
    >
      <Logo />
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
  color: var(--blue);
  background-blend-mode: overlay;
}

.app-logo__img {
  width: 100px;
  height: auto;
}
</style>
