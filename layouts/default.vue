<template>
  <v-app :dark="isDark">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import "@/assets/scss/variables.scss";

.v-application {
  font-family: "Arvo", serif;
}

html {
  font-size: 1.3em;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  @media (max-width: $desktop-sm) {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
  }
}

a {
  color: $main-font-color;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.4em;
}

h4 {
  font-size: 1em;
}

h5 {
  font-size: 0.86em;
}

h6 {
  font-size: 0.67em;
}

.link-icon {
  font-size: 2em !important;
  color: darken($main-font-color, 10%) !important;

  &:hover {
    color: $main-font-color !important;
    cursor: pointer;
  }
}

.content-container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content-container > * {
  margin: 1rem 0;
}
</style>
