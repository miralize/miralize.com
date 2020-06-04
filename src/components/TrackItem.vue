<script lang="ts">
import {
  defineComponent, ref, computed,
} from 'vue';

export default defineComponent({
  props: {
    track: {
      type: Object,
      required: true,
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
  <a
    class="track"
    :style="calculatedStyles"
    :href="track.url"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div
      ref="imgContainer"
      class="track-img__container"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      @mousemove="onMouseMove"
      @mousedown="onMouseDown"
      @mouseup="onMouseUp"
    >
      <div
        class="track-img__backdrop"
      />
      <img
        v-if="track.image[3]['#text']"
        class="track-img"
        :src="track.image[3]['#text']"
        :alt="track.name"
      >
      <img
        v-else
        src="@/assets/default-album-cover.png"
        :alt="track.name"
      >
    </div>
    <div class="track__meta">
      <div class="track__name">
        {{ track.name }}
      </div>
      <div class="track__artist">
        {{ track.artist.name }}
      </div>
      <div class="track__plays">
        {{ track.playcount }}
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.track {
  transform-style: preserve-3d;
  transform: perspective(800px);
  will-change: transform;

  &:hover {
    .track__name {
      color: var(--purple);
    }
  }
}

.track-img__container {
  --rx-deg: calc(var(--rx) * 1deg);
  --ry-deg: calc(var(--ry) * 1deg);
  --rx-px: calc(var(--rx) * 1px);
  --ry-px: calc(var(--ry) * -1px);
  margin-bottom: 16px;
  position: relative;
  user-select: none;
}

.track-img__backdrop {
  border-radius: 6px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: transform var(--d-very-fast);
  transform: scale(0.9) translate3d(var(--ry-px), var(--rx-px), var(calc(--tz + 50px)));
  background: rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
}

.track-img {
  width: 100%;
  transform: rotateX(var(--rx-deg)) rotateY(var(--ry-deg)) translateZ(var(--tz));
  transition: transform var(--d-very-fast);
  will-change: transform;
  border-radius: 6px;
}

.track__meta {
  display: grid;
  grid-template-columns: auto minmax(auto, 30px);
}

.track__name {
  grid-column: 1;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  transition: color var(--d-fast);
}

.track__artist {
  grid-column: 1;
  font-weight: 400;
  font-size: 13px;
  color: var(--text-light);
}

.track__plays {
  grid-row: 1 / span 2;
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>
