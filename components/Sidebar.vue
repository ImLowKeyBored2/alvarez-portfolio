<template>
  <section>
    <section
      class="menu-button"
      v-on:click="handleMenu"
      :class="{change: showMenu === true}"
    >
      <section class="bar1"></section>
      <section class="bar2"></section>
      <section class="bar3"></section>
    </section>
    <section v-if="showMenu" id="sidebar">
      <section class="me-container">
        <img src="@/assets/img/luis.jpg" alt="Luis Alvarez" />
        <h1>Luis Alvarez</h1>
        <h2>Full Stack Developer</h2>
      </section>
      <section class="nav">
        <a href="#">About Me</a>
        <a href="#">Things I Can Do</a>
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
        <font-awesome-icon
          class="icon"
          :icon="['fab', 'hackerrank']"
        />
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        showMenu: false
      }
    },
    methods: {
      handleMenu: function() {
        this.showMenu = !this.showMenu;
      }
    }
  }
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.menu-button {
  display: inline-block;
  cursor: pointer;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  margin: 1rem;

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: $main-accent-color;
    margin: 6px 0;
    transition: 0.4s;
  }
}

/* Rotate first bar */
.change .bar1 {
  background-color: white;
  -webkit-transform: rotate(-45deg) translate(-9px, 6px) ;
  transform: rotate(-45deg) translate(-9px, 6px) ;
}

/* Fade out the second bar */
.change .bar2 {
  opacity: 0;
}

/* Rotate last bar */
.change .bar3 {
  background-color: white;
  -webkit-transform: rotate(45deg) translate(-8px, -8px) ;
  transform: rotate(45deg) translate(-8px, -8px) ;
}

#sidebar {
  height: 100%;
  width: 25%;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding: 1rem;
  background-color: $main-accent-color;
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
  }
}

</style>
