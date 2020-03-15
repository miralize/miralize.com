<template>
  <div class="tracks">
    <h2 class="tracks__title">
      {{ title }}
    </h2>
    <div class="tracks__list">
      <TrackItem
        v-for="track in items"
        :key="track.id"
        :track="track"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import TrackItem from './Track.vue';

export default {
  components: {
    TrackItem,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    resource: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tracks: null,
    };
  },
  computed: {
    items() {
      return this.$store.getters[`${this.resource}/list`];
    },
  },
  created() {
    this.getTopAlbums();
  },
  methods: {
    async getTopAlbums() {
      console.log('this.resource/fetchList', `${this.resource}/fetchList`);
      const response = await this.$store.dispatch(`${this.resource}/fetchList`);
      console.log('response:', response);
    },
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
