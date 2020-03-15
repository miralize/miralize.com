<template>
  <div class="tracks">
    <h2 class="tracks__title">
      {{ isLoading ? 'Loading' : title }}
    </h2>
    <div
      v-if="!isLoading"
      class="tracks__list"
    >
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
import TrackItem from '@/components/TrackItem';

export default {
  components: {
    TrackItem,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    params: {
      type: Object,
      default: () => ({}),
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
    isLoading() {
      return this.$store.getters[`${this.resource}/isLoading`];
    },
    items() {
      return this.$store.getters[`${this.resource}/list`];
    },
  },
  created() {
    this.getTopAlbums();
  },
  methods: {
    getTopAlbums() {
      this.$store.dispatch(`${this.resource}/fetchList`, {
        config: {
          params: {
            limit: 6,
            ...this.params,
          },
        },
      });
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
