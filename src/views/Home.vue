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

      <nav class="social-links">
        <a
          v-for="link in socialLinks"
          :key="link.title"
          :title="link.title"
          :href="link.url"
          target="_blank"
          class="social-link"
        >
          <component :is="link.icon" />
        </a>
      </nav>
    </section>
    <tracks
      resource="recentTracks"
      title="Recently played"
    />
    <tracks
      resource="topAlbums"
      :params="{ period: '7day', limit: 12 }"
      title="Albums I'm listening to"
    />
  </div>
</template>

<script>
// Components
import Tracks from '@/components/Tracks';

// Constants
import socialLinks from '@/utils/constants/socialLinks';

export default {
  components: {
    Tracks,
  },
  data() {
    return {
      socialLinks,
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

.social-links {
  grid-column: 1 / -1;
  justify-self: center;
  display: grid;
  font-size: 15px;
  justify-content: space-between;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
}

.social-link {
    display: flex;
    align-content: center;

    svg {
      height: 32px;
      width: auto;
    }
}
</style>
