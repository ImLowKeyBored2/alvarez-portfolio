<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import "@/assets/scss/variables.scss";

html {
  font-family: "Arvo", serif;
  font-size: 1.3em;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: $main-bg-color;
  color: $main-font-color;

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

.icon {
  font-size: 2em;
  color: darken($main-font-color, 10%);

  &:hover {
    color: $main-font-color;
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
  margin: 2rem 0;
}
</style>
