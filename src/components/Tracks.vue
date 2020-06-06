<script lang="ts">
import { defineComponent } from 'vue';
import TrackItem from '@/components/TrackItem.vue';

export default defineComponent({
  components: {
    TrackItem, // <track> is reserved
  },
  props: {
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tracks: {
      type: Array,
      required: true,
    },
  },
});
</script>

<template>
  <div class="tracks">
    <div class="tracks__header">
      <h2 class="tracks__title">
        {{ title }}
      </h2>
      <a
        :href="link"
        class="tracks__link"
        rel="noopener noreferrer"
        target="_blank"
      >View more</a>
    </div>
    <div
      v-if="tracks.length"
      class="tracks__list"
    >
      <TrackItem
        v-for="track in tracks"
        :key="track.id"
        :track="track"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tracks {
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  padding: 32px 16px 48px;
}

.tracks__header {
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 24px;

  &::after {
    position: absolute;
    bottom: 0;
    display: block;
    content: " ";
    height: 4px;
    width: 100%;
    background: $main-gradient;
    background-size: 300% 100%;
  }
}

.tracks__title {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1;
  display: inline;
  font-size: 22px;
}

.tracks__link {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1;
  font-size: 22px;
  font-size: 16px;
  margin-left: auto;
}

.tracks__list {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  grid-gap: 30px;
}
</style>
