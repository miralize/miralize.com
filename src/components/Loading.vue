<template>
  <div
    :class="{ 'loading-indicator--is-loading': loading }"
    class="loading-indicator"
  />
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

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
