<template>
  <header class="app-header">
    <router-link
      class="app-logo"
      to="/"
      exact
    >
      <logo class="app-logo__img" />
    </router-link>
  </header>
</template>

<script>
import Logo from '@/assets/logo.svg';

export default {
  components: {
    Logo,
  },
};
</script>

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
