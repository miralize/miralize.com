<script lang="ts">
import { defineComponent, computed } from 'vue';
import { fromUnixTime, formatDistance } from 'date-fns';
import AlbumArt from '@/components/AlbumArt.vue';

export default defineComponent({
  components: {
    AlbumArt,
  },
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isUsingAlbumImage = computed(() => {
      const defaultImageId = '2a96cbd8b46e442fc41c2b86b821562f';
      return props.track.artist.image[0]['#text'].includes(defaultImageId);
    });
    const imageToUse = computed(() => {
      if (isUsingAlbumImage) {
        return props.track.image[3];
      }
      return props.track.artist.image[3];
    });
    const formattedDate = computed(() => {
      // if ()
      const date = fromUnixTime(props.track.date.uts);
      return formatDistance(date, Date.now(), { addSuffix: true });
    });
    return { imageToUse, formattedDate, isUsingAlbumImage };
  },
});
</script>

<template>
  <div class="track">
    <AlbumArt
      :src="imageToUse['#text']"
      :alt="imageToUse.name"
      :border-radius="!isUsingAlbumImage ? '50%' : '3px'"
    />
    <div class="track__content">
      <div class="track__name">
        {{ track.name }}
      </div>
      <div class="track__artist">
        {{ track.artist.name }}
      </div>
    </div>
    <div class="track__date">
      {{ formattedDate }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.track {
  display: flex;
  align-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.track__content {
  flex: 1;
}

.track__name {
  font-size: 15px;
  line-height: 1.3;
  margin-bottom: 4px;
}

.track__artist {
  font-size: 12px;
  color: var(--text-light);
}

.track__date {
  margin-left: 16px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1;
  color: var(--text-light);
}

.album-art {
  flex: 0 0 30px;
  margin-right: 16px;

  &::v-deep(.album-art__backdrop) {
    display: none;
  }
}
</style>
