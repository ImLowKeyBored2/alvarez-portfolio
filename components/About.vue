<template>
  <header id="about-container">
    <section id="jumbotron" />
    <section class="content-container">
      <h1 id="title">{{ author.fields.name }}</h1>
      <h2>About Me</h2>
      <p>
        I'm a Full Stack Engineer and tech enthusiast. My passion for tech
        started when I was a little kid playing videogames. That passion for how
        videogames are made led me to learn to program and make a few
        videogames. Later along I decided to learn web development and started
        an amazing journey building web apps for some clients and landing my
        dream job. My goal is to make people's lives easier by making tools to
        assist them in their day to day operations. This drive reflects on my
        work as I build applications and contribute to open source projects
        fostering a better community. One of my core beliefs is that every
        person has the potential to do great things.
      </p>
    </section>
  </header>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default: function () {
        return {
          fields: {
            id: "",
            name: "",
            authorImage: "",
            email: "",
          },
        };
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

#about-container {
  margin-top: 0;
  padding-top: 0;

  #jumbotron {
    margin-top: 0;
    padding-top: 0;
    height: 20rem;
    background-image: url("../assets/img/spiral.jpg");
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: $mobile-lg) {
      height: 10rem;
    }
  }

  #title {
    color: $main-accent-color;
    font-size: 4rem;
  }
}
</style>
