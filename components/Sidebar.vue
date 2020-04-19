<template>
  <section id="sidebar">
    <section class="me-container">
      <img src="@/assets/img/luis.jpg" alt="Luis Alvarez" />
      <h1>Luis Alvarez</h1>
      <h2>Full Stack Developer</h2>
    </section>
    <section class="nav">
      <a href="#">About Me</a>
      <a href="#">Things I Do</a>
      <a href="#">Portfolio</a>
      <a href="#">Contact Me</a>
    </section>
    <section class="social">
      <font-awesome-icon
        class="icon"
        :icon="['fab', 'linkedin']"
      />
      <font-awesome-icon
        class="icon"
        :icon="['fab', 'github']"
      />
      <font-awesome-icon
        class="icon"
        :icon="['fab', 'facebook']"
      />
      <font-awesome-icon
        class="icon"
        :icon="['fab', 'twitter']"
      />
    </section>
  </section>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

#sidebar {
  height: 100%;
  width: 25%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding: 1rem;
  background-color: #21c6ce;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .me-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40%;

    img, h1, h2 {
      padding: 1rem;
    }

    img {
      border-radius: 50%;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    margin: 2rem 0;

    a {
      padding: 1rem;
      font-size: 1.5em;
      text-decoration: none;
      border-bottom: 0.1rem solid $main-font-color;

      &:hover {
        background-color: $main-hover-color;
        color: $main-font-color-dark;
      }
    }
  }

  .social {
    height: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .icon {
      font-size: 2em;
      color: darken($main-font-color, 15%);

      &:hover {
        color: $main-font-color;
        cursor: pointer;
      }
    }
  }
}

</style>
