<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  props: {
    src: {
      type: String,
      default: '@/assets/default-album-cover.png',
    },
    alt: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isHovering = ref(false);
    const imgContainer:{ value:HTMLDivElement|null } = ref(null);
    const imgBounds:{ value:ClientRect|null } = ref(null);
    const rx = ref(3);
    const ry = ref(2);
    const tz = ref(0);

    const onMouseOver = () => {
      isHovering.value = true;
      imgBounds.value = imgContainer.value && imgContainer.value.getBoundingClientRect();
    };

    const onMouseOut = () => {
      isHovering.value = false;
      imgBounds.value = null;
      rx.value = 0;
      ry.value = 0;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (imgBounds.value) {
        const x = e.clientX - imgBounds.value.left;
        const y = e.clientY - imgBounds.value.top;

        const xc = imgBounds.value.width / 2;
        const yc = imgBounds.value.height / 2;

        const dx = x - xc;
        const dy = y - yc;

        rx.value = dy / -7;
        ry.value = dx / 7;
      }
    };

    const onMouseDown = () => {
      tz.value = -25;
    };
    const onMouseUp = () => {
      tz.value = 0;
    };

    const calculatedStyles = computed(() => ({
      '--rx': `${rx.value}`,
      '--ry': `${ry.value}`,
      '--tz': `${tz.value}px`,
    }));

    return {
      calculatedStyles,
      imgContainer,
      isHovering,
      onMouseDown,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
    };
  },
});
</script>

<template>
  <div
    ref="imgContainer"
    class="album-art"
    :style="calculatedStyles"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    @mousemove="onMouseMove"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <div class="album-art__backdrop" />
    <img
      class="album-art__img"
      :src="src"
      :alt="alt"
    >
  </div>
</template>

<style lang="scss" scoped>

.album-art {
  --rx-deg: calc(var(--rx) * 1deg);
  --ry-deg: calc(var(--ry) * 1deg);
  --rx-px: calc(var(--rx) * 1px);
  --ry-px: calc(var(--ry) * -1px);
  margin-bottom: 16px;
  position: relative;
  user-select: none;
  transform: rotateX(var(--rx-deg)) rotateY(var(--ry-deg)) translateZ(var(--tz));
  transition: transform var(--d-very-fast);
  will-change: transform;
}

.album-art__backdrop {
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: transform var(--d-very-fast);
  transform: scale(0.9) translate3d(var(--ry-px), var(--rx-px), var(--tz));
  background: rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 16px 16px rgba(0, 0, 0, 0.17);
  z-index: -1;
}

.album-art__img {
  width: 100%;
  border-radius: 6px;
}
</style>
