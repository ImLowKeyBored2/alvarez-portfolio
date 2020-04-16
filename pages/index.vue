<template>
  <div>
    <div class="main-container">
      <section class="about-container">
        <h2>About Me</h2>
      </section>
      <section class="skills-container">
        <h2>Things I Do</h2>
      </section>
      <section class="portfolio-container">
        <h2>Portfolio</h2>
      </section>
      <section class="contact-container">
        <h2>Contact Me</h2>
      </section>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
.main-container {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  section {
    margin: 2rem 0;
    padding: 1rem;

    h2 {
      text-align: center;
    }
  }
}
</style>
