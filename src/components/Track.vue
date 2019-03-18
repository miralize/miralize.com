<template>
  <div class="track">
    <div
      ref="imageContainer"
      :class="{'track-img__container--hovered': hovered}"
      class="track-img__container"
      @mouseover="startHover"
      @mouseout="endHover"
      @mousemove="calculateHover"
      @mousedown="clickIn"
      @mouseup="clickOut"
    >
      <div
        :style="calculatedStyles"
        class="track-img"
      >
        <img
          :src="track.image[3]['#text']"
          :alt="track.name"
        >
      </div>
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
  </div>
</template>

<script>
export default {
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hovered: false,
      imgBounds: null,
      rx: 0,
      ry: 0,
      tz: 0,
    };
  },

  computed: {
    calculatedStyles() {
      return [
        { '--rx': `${this.rx}` },
        { '--ry': `${this.ry}` },
        { '--tz': `${this.tz}px` },
      ];
    },
  },

  methods: {
    startHover() {
      this.hovered = true;
      this.imgBounds = this.$refs.imageContainer.getBoundingClientRect();
    },
    clickIn() {
      this.tz = -25;
    },
    clickOut() {
      this.tz = 0;
    },
    endHover() {
      this.hovered = false;
      this.imgBounds = null;
      this.rx = 0;
      this.ry = 0;
    },
    calculateHover(e) {
      if (this.imgBounds) {
        const x = e.clientX - this.imgBounds.left;
        const y = e.clientY - this.imgBounds.top;

        const xc = this.imgBounds.width / 2;
        const yc = this.imgBounds.height / 2;

        const dx = x - xc;
        const dy = y - yc;

        this.rx = dy / -7;
        this.ry = dx / 7;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.track {
  min-width: 0;
  transform-style: preserve-3d;
  transform: perspective(800px);
  backface-visibility: hidden;
  user-select: none;
}

.track-img {
  --rx-deg: calc(var(--rx) * 1deg);
  --ry-deg: calc(var(--ry) * 1deg);
  --rx-px: calc(var(--rx) * 1px);
  --ry-px: calc(var(--ry) * -1px);
  margin-bottom: 16px;
  position: relative;

  img {
    vertical-align: middle;
    max-width: 100%;
    transform: rotateX(var(--rx-deg)) rotateY(var(--ry-deg))
      translateZ(var(--tz));
    transition: transform 0.1s ease;
    will-change: transform;
    border-radius: 6px;
  }

  &::before {
    border-radius: 6px;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: transform;
    transition: transform 0.1s ease;
    transform: scale(0.9) translate3d(var(--ry-px), var(--rx-px), var(--tz));
    background: rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
    z-index: -1;
  }
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
