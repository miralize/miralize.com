<script lang="ts">
/* eslint-disable import/no-dynamic-require, global-require */
import { socialLinks } from '@/utils/constants/socialLinks';
import Dribbble from '@/assets/social-icons/dribbble.svg';
import Github from '@/assets/social-icons/github.svg';
import Twitter from '@/assets/social-icons/twitter.svg';
import { defineComponent, computed } from 'vue';
import Tracks from '@/components/Tracks.vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    Dribbble,
    Github,
    Twitter,
    Tracks,
  },
  setup() {
    const store = useStore();
    const recentTracks = computed(() => store.getters['recentTracks/list'].slice(0, 6));
    const topAlbums = computed(() => store.getters['topAlbums/list'].slice(0, 12));

    const fetchRecentTracks = () => {
      store.dispatch('recentTracks/fetchList', {
        config: {
          params: {
            limit: 6,
            period: '1month',
          },
        },
      });
    };

    const fetchAlbums = () => {
      store.dispatch('topAlbums/fetchList', {
        config: {
          params: {
            limit: 12,
            period: '3month',
          },
        },
      });
    };

    const fetchData = () => (Promise.all([fetchRecentTracks(), fetchAlbums()]));
    document.title = 'Home - Miralize.com';

    fetchData();

    return {
      recentTracks,
      socialLinks,
      topAlbums,
    };
  },
});
</script>

<template>
  <div class="home">
    <section class="intro">
      <h1>I’m Seán O’Grady.</h1>
      <p>
        I’m a software developer, currently working at
        <a
          href="https://teamwork.com"
          target="_blank"
          rel="noopener noreferrer"
          v-text="'Teamwork'"
        />, working on our <a
          href="https://teamwork.com/crm"
          target="_blank"
          rel="noopener noreferrer"
          v-text="'CRM product'"
        /> in Cork!.
      </p>
      <p>
        If you'd like to get in touch, please reach out to me using the links below.
      </p>

      <nav class="social-links">
        <a
          v-for="link in socialLinks"
          :key="link.title"
          :title="link.title"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
        >
          <component
            :is="link.icon"
            :key="link.icon"
          />
        </a>
      </nav>
    </section>
    <Tracks
      :tracks="recentTracks"
      link="https://www.last.fm/user/miralize/library"
      title="Recently played"
    />
    <Tracks
      :tracks="topAlbums"
      link="https://www.last.fm/user/miralize/library/albums"
      title="Albums I'm listening to"
    />
  </div>
</template>

<style lang="scss" scoped>
.intro {
  margin-bottom: 40px;

  h1 {
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: var(--text-light);
    text-align: center;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 60px;
    }

    p {
      font-size: 20px;
      grid-column: 3 / -3;
    }
  }
}

.social-links {
  font-size: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.social-link {
  margin: 0 8px;

  svg {
    height: 32px;
    width: auto;
  }
}
</style>
