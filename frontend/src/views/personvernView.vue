<template>
  <div class="article-wrapper">
    <article class="personvern">
      <AnimatedTitle text="Personvern" />
      <p>Sist oppdatert: <time datetime="2026-03-24">24. mars 2026</time></p>
      <section>
        <h2>Innledning</h2>
        <p>
          GameLib er en lokal spillbibliotek-applikasjon som lar deg lagre og
          bla gjennom en samling av videospill. Denne personvernerklæringen
          beskriver hvordan applikasjonen håndterer data.
        </p>
      </section>
      <section>
        <h2>Personopplysninger</h2>
        <p>
          GameLib samler ikke inn noen personopplysninger. Applikasjonen har
          ingen brukerkontoer, ingen innlogging, og krever ingen personlig
          informasjon som navn, e-post eller passord for å brukes.
        </p>
      </section>
      <section>
        <h2>Informasjonskapsler</h2>
        <p>
          GameLib bruker ingen informasjonskapsler (cookies). Det lagres ingen
          data i nettleseren din.
        </p>
      </section>
      <section>
        <h2>Sporing og analyse</h2>
        <p>
          GameLib bruker ingen sporings- eller analyseverktøy. Det sendes ingen
          data til tredjeparter, og ingen brukeratferd blir registrert eller
          overvåket.
        </p>
      </section>
      <section>
        <h2>Lagring av data</h2>
        <p>
          Applikasjonen lagrer kun spillrelatert informasjon i en lokal
          MariaDB-database på din egen maskin. Følgende data lagres per spill:
        </p>
        <ul>
          <li>Spillnavn</li>
          <li>Sjanger</li>
          <li>Utgivelsesdato</li>
        </ul>
        <p>
          Denne dataen inneholder ingen personopplysninger og forlater aldri din
          lokale maskin.
        </p>
      </section>
      <section>
        <h2>Tredjepartstjenester</h2>
        <p>
          GameLib kommuniserer ikke med noen eksterne tjenester eller APIer. All
          funksjonalitet kjører lokalt mellom nettleseren og din egen server.
        </p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <address>
          Har du spørsmål om personvern kan du ta kontakt via
          <a href="https://github.com/magnushsundby/gamelib"
            >prosjektets GitHub-side</a
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

.personvern {
  text-align: left;
}

.personvern h2 {
  color: #e0e0e0;
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 0.4rem;
}

.personvern p {
  font-weight: normal;
  line-height: 1.7;
  color: rgba(245, 245, 245, 0.85);
  margin: 0.6rem 0;
}

.personvern time {
  font-style: italic;
}

.personvern ul {
  display: inline-block;
  text-align: left;
  list-style-position: inside;
  padding: 0;
  margin: 0.5rem 0 0.5rem 1rem;
}

.personvern li {
  font-weight: normal;
  color: rgba(245, 245, 245, 0.85);
  line-height: 1.8;
}

.personvern a {
  color: #90caf9;
  text-decoration: none;
  transition: color 0.2s;
}

.personvern a:hover {
  color: #bbdefb;
  text-decoration: underline;
}

.personvern address {
  font-style: normal;
  font-weight: normal;
  color: rgba(245, 245, 245, 0.85);
}

.personvern section:first-of-type h2 {
  margin-top: 1rem;
}
</style>
