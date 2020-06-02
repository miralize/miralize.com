<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <div
    class="loading-indicator"
    :class="{ 'loading-indicator--is-loading': loading }"
  />
</template>

<style lang="scss" scoped>
.loading-indicator {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5px;
  background: $main-gradient;
  background-size: 300% 100%;
}

.loading-indicator--is-loading {
  background-position: right;
}
</style>
