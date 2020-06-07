<script lang="ts">
import { defineComponent } from 'vue';
import Album from '@/components/Album.vue';

export default defineComponent({
  components: {
    Album, // <track> is reserved
  },
  props: {
    albums: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="albums">
    <div class="albums__header">
      <h2 class="albums__title">
        {{ title }}
      </h2>
      <a
        :href="link"
        class="albums__link"
        rel="noopener noreferrer"
        target="_blank"
      >View more</a>
    </div>
    <div
      v-if="albums.length"
      class="albums__list"
    >
      <Album
        v-for="album in albums"
        :key="album.id"
        :album="album"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.albums {
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  padding: 32px 16px 48px;
}

.albums__header {
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

.albums__title {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1;
  display: inline;
  font-size: 22px;
}

.albums__link {
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1;
  font-size: 22px;
  font-size: 16px;
  margin-left: auto;
}

.albums__list {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  grid-gap: 30px;
}
</style>
