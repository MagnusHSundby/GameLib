<template>
  <div class="article-wrapper">
    <article class="privacy">
      <AnimatedTitle text="Privacy Policy" />
      <p>Last updated: <time datetime="2026-03-24">March 24, 2026</time></p>
      <section>
        <h2>Introduction</h2>
        <p>
          GameLib is a local game library application that allows you to store
          and browse a collection of video games. This privacy policy describes
          how the application handles data.
        </p>
      </section>
      <section>
        <h2>Personal Data</h2>
        <p>
          GameLib does not collect any personal data. The application has no
          user accounts, no login, and does not require any personal information
          such as name, email, or password to be used.
        </p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>GameLib does not use cookies. No data is stored in your browser.</p>
      </section>
      <section>
        <h2>Tracking and Analytics</h2>
        <p>
          GameLib does not use any tracking or analytics tools. No data is sent
          to third parties, and no user behavior is recorded or monitored.
        </p>
      </section>
      <section>
        <h2>Data Storage</h2>
        <p>
          The application only stores game-related information in a local
          MariaDB database on your own machine. The following data is stored per
          game:
        </p>
        <ul>
          <li>Game title</li>
          <li>Genre</li>
          <li>Release date</li>
        </ul>
        <p>
          This data contains no personal information and never leaves your local
          machine.
        </p>
      </section>
      <section>
        <h2>Third-Party Services</h2>
        <p>
          GameLib does not communicate with any external services or APIs. All
          functionality runs locally between your browser and your own server.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <address>
          If you have any questions about privacy, you can get in touch via
          <a href="https://github.com/magnushsundby/gamelib">
            the project's GitHub page </a
          >.
        </address>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
import AnimatedTitle from "@/components/AnimatedTitle.vue";
</script>

<style scoped>
.article-wrapper {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: whitesmoke;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.privacy {
  text-align: left;
}

.privacy h2 {
  color: #e0e0e0;
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 0.4rem;
}

.privacy p {
  font-weight: normal;
  line-height: 1.7;
  color: rgba(245, 245, 245, 0.85);
  margin: 0.6rem 0;
}

.privacy time {
  font-style: italic;
}

.privacy ul {
  display: inline-block;
  text-align: left;
  list-style-position: inside;
  padding: 0;
  margin: 0.5rem 0 0.5rem 1rem;
}

.privacy li {
  font-weight: normal;
  color: rgba(245, 245, 245, 0.85);
  line-height: 1.8;
}

.privacy a {
  color: #90caf9;
  text-decoration: none;
  transition: color 0.2s;
}

.privacy a:hover {
  color: #bbdefb;
  text-decoration: underline;
}

.privacy address {
  font-style: normal;
  font-weight: normal;
  color: rgba(245, 245, 245, 0.85);
}

.privacy section:first-of-type h2 {
  margin-top: 1rem;
}
</style>
