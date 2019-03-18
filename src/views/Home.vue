<template>
  <div>
    <section
      class="intro"
    >
      <h1>Hi, I’m Seán O’Grady.</h1>
      <p>
        I’m a software developer, currently working at
        <a
          href="https://teamwork.com"
          target="_blank"
        >
          Teamwork
        </a> in Cork!.
      </p>
      <p>
        If you'd like to get in touch, please follow me below.
      </p>

      <nav class="profile-links">
        <a
          v-for="item in socialLinks"
          :key="item.title"
          :title="item.title"
          :href="item.url"
          target="_blank"
        >
          <component :is="item.icon" />
        </a>
      </nav>
    </section>
    <tracks />
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
