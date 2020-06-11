<script lang="ts">
import { defineComponent } from 'vue';
import RecentTrack from '@/components/RecentTrack.vue';

export default defineComponent({
  components: {
    RecentTrack,
  },
  props: {
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
        Recent tracks
      </h2>
      <a
        href="https://www.last.fm/user/miralize/library"
        class="tracks__link"
        rel="noopener noreferrer"
        target="_blank"
      >
        View more
      </a>
    </div>
    <div
      v-if="tracks.length"
      class="tracks__list"
    >
      <RecentTrack
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
  padding: 32px 16px 48px;
}

.tracks__header {
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 24px;
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
  font-size: 16px;
}

.tracks__link {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1;
  font-size: 13px;
  margin-left: auto;
}

</style>
