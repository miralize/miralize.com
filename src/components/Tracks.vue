<template>
  <div class="tracks">
    <h2 class="tracks__title">
      Heavy Rotation
    </h2>
    <div class="tracks__list">
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
import axios from 'axios';
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
    const response = await axios.get('.netlify/functions/lastfm', {
      params: {
        method: 'user.gettopalbums',
        period: '7day', // overall | 7day | 1month | 3month | 6month | 12month
      },
    });
    const albums = response.data.topalbums.album;
    this.tracks = albums.slice(0, 6);
  },
};
</script>

<style lang="scss" scoped>
.tracks {
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  padding: 32px 16px 48px;
}

.tracks__title {
  width: 100%;
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

.tracks__list {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  grid-gap: 30px;
}
</style>
