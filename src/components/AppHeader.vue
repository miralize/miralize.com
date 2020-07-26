<script lang="ts">
import { defineComponent } from 'vue';
import { VueComponent as Logo } from '/@/assets/logo.svg';

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
      title="Home"
    >
      <Logo />
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.app-header {
  display: flex;
  align-content: center;
  justify-content: center;
}

.app-logo {
  margin: 60px 0;
  color: var(--blue);
  background-blend-mode: overlay;
}

.app-logo__img {
  width: 100px;
  height: auto;
}
</style>
