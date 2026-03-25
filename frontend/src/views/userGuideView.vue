<template>
  <div class="article-wrapper">
    <article class="privacy">
      <AnimatedTitle text="User Guide" />
      <p>Last updated: <time datetime="2026-3-25">March 25, 2026</time></p>
      <section>
        <h2>Navigating GameLib</h2>
        <p>
          Use the navigation bar at the top of the screen to move between pages.
          You can access the <strong>Home</strong> page,
          <strong>Games</strong> library, and this
          <strong>User Guide</strong> from anywhere in the app.
        </p>
      </section>
      <section>
        <h2>Browsing Your Library</h2>
        <p>
          Head to the <strong>Games</strong> page to see your collection. Games
          are displayed in a horizontally scrolling carousel that moves
          automatically. Hover over the carousel to pause it, and move your
          cursor away to resume scrolling.
        </p>
        <p>Each game card shows the following information:</p>
        <ul>
          <li>Game title</li>
          <li>Genre</li>
          <li>Release date</li>
        </ul>
      </section>
      <section>
        <h2>Adding a Game</h2>
        <p>
          On the <strong>Games</strong> page, click the
          <strong>Add Games</strong> button to open the add game form. Fill in
          all three fields — game name, genre, and release date — then click
          <strong>Add Game</strong> to save it. A notification will confirm
          whether the game was added successfully.
        </p>
      </section>
      <section>
        <h2>Deleting a Game</h2>
        <p>
          To remove a game from your library, use the delete option available on
          the <strong>Games</strong> page. The game will be permanently removed
          from your local database.
        </p>
      </section>
      <section>
        <h2>Data Storage</h2>
        <p>
          All your game data is stored locally in a MariaDB database on your own
          machine. Nothing is sent to external servers or third parties — your
          library stays entirely on your computer.
        </p>
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
.privacy section:first-of-type h2 {
  margin-top: 1rem;
}
.privacy time {
  font-style: italic;
}
</style>
