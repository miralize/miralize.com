<template>
  <div
    :class="loadingClasses"
    class="loading-indicator"
  />
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  computed: {
    loadingClasses() {
      return [
        {
          'loading-indicator--is-loading': this.loading,
        },
      ];
    },
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-indicator {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 5px;
  background: $main-gradient;
  background-size: 300% 100%;

  &--is-loading {
    background-position: right;
  }
}
</style>
