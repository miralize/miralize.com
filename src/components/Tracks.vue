<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import TrackItem from '@/components/TrackItem.vue';

export default defineComponent({
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
  setup(props) {
    const store = useStore();
    const isLoading = computed(
      () => store.getters[`${props.resource}/isLoading`],
    );
    const tracks = computed(
      () => store.getters[`${props.resource}/list`],
    );

    const getTopAlbums = async () => {
      await store.dispatch(`${props.resource}/fetchList`, {
        config: {
          params: {
            limit: 6,
            ...props.params,
          },
        },
      });
    };

    getTopAlbums();

    return {
      tracks,
      isLoading,
    };
  },
});
</script>

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
