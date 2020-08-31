<template>
  <section id="skills-container">
    <section class="content-container">
      <h2>Things I Can Do</h2>
      <p>
        I am a dynamic, quick thinking creative professional that loves to
        develop beautiful and easy to use websites and web apps. One thing I'm
        most passionate about is immersing myself into a topic like machine
        learning just for fun. I'm also a pretty easy person to work with. The
        following is a rough overview of my skillset.
      </p>
      <section class="skill-container">
        <section class="skill">
          <v-icon class="skill-icon">fas fa-code</v-icon>
          <p>
            Experience on Full Stack technologies like React, Vue, NodeJS and
            GraphQL
          </p>
        </section>
        <section class="skill">
          <v-icon class="skill-icon">fas fa-terminal</v-icon>
          <p>
            Daily user of Linux/Unix systems having a basic understanding on how
            it operates
          </p>
        </section>
        <section class="skill">
          <v-icon class="skill-icon">fas fa-code-branch</v-icon>
          <p>Managed projects using Git for version control</p>
        </section>
        <section class="skill">
          <v-icon class="skill-icon">fas fa-bug</v-icon>
          <p>Always willing to get into the weeds to analyze and solve bugs</p>
        </section>
        <section class="skill">
          <v-icon class="skill-icon">fas fa-server</v-icon>
          <p>Expertise in both relational and non-relational databases</p>
        </section>
        <section class="skill">
          <v-icon class="skill-icon">fas fa-book</v-icon>
          <p>
            Capable of learning new technologies on the job or outside to meet
            work or personal goals
          </p>
        </section>
      </section>
    </section>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.skill-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .skill {
    display: flex;
    align-items: center;
    width: 50%;

    @media (max-width: $tablet-lg) {
      width: 100%;
    }

    .skill-icon {
      font-size: 0.8rem;
      background-color: $main-accent-color;
      border-radius: 50%;
      padding: 1rem;
      color: $main-font-color;
    }
  }

  .skill > * {
    margin: 1rem;
  }
}
</style>
