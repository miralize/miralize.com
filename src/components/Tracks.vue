<template>
  <div class="latest-tracks">
    <h2>Heavy Rotation</h2>
    <div class="latest-tracks__list">
      <track-item
        v-for="track in tracks"
        :key="track.name"
        :track="track"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import Axios from 'axios';
import TrackItem from './Track.vue';

export default {
  components: {
    TrackItem,
  },
  data() {
    return {
      tracks: null,
    };
  },
  async created() {
    const { data: { topalbums: { album } } } = await Axios.get('.netlify/functions/lastfm', {
      params: {
        method: 'user.gettopalbums',
        period: '7day', // overall | 7day | 1month | 3month | 6month | 12month
      },
    });
    this.tracks = album.slice(0, 10);
  },
};
</script>

<style lang="scss" scoped>
.latest-tracks {
  grid-column: 1 / -1;
  display: grid;
  grid-template: auto 1fr / repeat(5, 1fr);
  width: 100%;

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 40px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1;
    font-size: 22px;

    &::after {
      margin-top: 16px;
      display: block;
      content: " ";
      height: 4px;
      width: 100%;
      background: $main-gradient;
      background-size: 300% 100%;
    }
  }
}

.latest-tracks__list {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
}
</style>
