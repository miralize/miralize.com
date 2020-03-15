<template>
  <div>
    <section class="intro">
      <h1>I’m Seán O’Grady.</h1>
      <p>
        I’m a software developer, currently working at
        <a
          href="https://teamwork.com"
          target="_blank"
          v-text="'Teamwork'"
        />, working on our <a
          href="https://teamwork.com/crm"
          target="_blank"
          v-text="'CRM product'"
        /> in Cork!.
      </p>
      <p>
        If you'd like to get in touch, please reach out to me using the links below.
      </p>

      <nav class="profile-links">
        <a
          v-for="link in socialLinks"
          :key="link.title"
          :title="link.title"
          :href="link.url"
          target="_blank"
        >
          <component :is="link.icon" />
        </a>
      </nav>
    </section>
    <tracks
      :params="latestTracksParams"
      title="Latest tracks listened to"
    />
    <tracks
      :params="topAlbumParams"
      title="Heavy rotation"
    />
  </div>
</template>

<script>
// Components
import Tracks from '@/components/Tracks.vue';

// Constants
import socialLinks from '@/utils/constants/socialLinks';

// Social icons
import Dribbble from '@/assets/social-icons/dribbble.svg';
import Github from '@/assets/social-icons/github.svg';
import Twitter from '@/assets/social-icons/twitter.svg';

export default {
  components: {
    Dribbble,
    Github,
    Twitter,
    Tracks,
  },
  data() {
    return {
      latestTracksParams: {
        method: 'user.getrecenttracks',
      },
      socialLinks,
      topAlbumParams: {
        method: 'user.gettopalbums',
        period: '7day', // overall | 7day | 1month | 3month | 6month | 12month
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.intro {
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 16px;
  grid-row-gap: 16px;
  align-items: center;
  align-content: center;
  justify-content: center;

  h1 {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 42px;
    font-weight: 700;
  }

  p {
    grid-column: 1 / -1;
    font-size: 16px;
    color: var(--text-light);
    text-align: center;
    line-height: 1.5;
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

.profile-links {
  grid-column: 1 / -1;
  justify-self: center;
  display: grid;
  font-size: 15px;
  justify-content: space-between;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;

  a {
    display: flex;
    align-content: center;
  }
}
</style>
