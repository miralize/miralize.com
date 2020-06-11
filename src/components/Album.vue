<script lang="ts">
import { defineComponent, computed } from 'vue';
import AlbumArt from '@/components/AlbumArt.vue';

export default defineComponent({
  components: {
    AlbumArt,
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const albumPlayCount = computed(() => {
      if (props.album.playcount) {
        return props.album.playcount;
      }
      return null;
    });

    return {
      albumPlayCount,
    };
  },
});
</script>

<template>
  <a
    class="album"
    :href="album.url"
    rel="noopener noreferrer"
    target="_blank"
  >
    <AlbumArt
      :src="album.image[3]['#text']"
      :alt="album.image[3].name"
    />
    <div class="album__data">
      <div class="album__name">
        {{ album.name }}
      </div>
      <div class="album__artist">
        {{ album.artist.name }}
      </div>
      <div
        v-if="albumPlayCount"
        class="album__meta"
      >
        {{ albumPlayCount }}
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.album {
  transform-style: preserve-3d;
  transform: perspective(800px);
  will-change: transform;

  &:hover {
    .album__name {
      color: var(--purple);
    }
  }
}

.album__data {
  display: grid;
  grid-template-columns: auto min-content;
}

.album__name {
  grid-column: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 4px;
  transition: color var(--d-fast);
}

.album-art {
  margin-bottom: 16px;
}

.album__artist {
  grid-column: 1;
  font-weight: 400;
  font-size: 13px;
  color: var(--text-light);
}

.album__meta {
  grid-row: 1 / span 2;
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}
</style>
