<template>
  <div>
    <div class="main-container">
      <section class="child-container about-container">
        <section id="jumbotron" />
        <section class="content-container">
          <h1 id="title">Luis Alvarez</h1>
          <h2>About Me</h2>
          <p>
            I'm a Full Stack Engineer and tech enthusiast. My passion for tech started when I was a little kid playing videogames.
            That passion for how videogames are made lead me to learn to program and make a few videogames.
            Later along I decided to learn web development and started an amazing journey building web apps for some clients and landing my dream job.
            My goal is to make people's lives easier by making tools to assist them in their day to day operations.
            This drive reflects on my work as I build applications and contribute to open source projects fostering a better community. One of my core beliefs is that every person has the potential to do great things.
          </p>
        </section>
      </section>
      <section class="child-container skills-container">
        <section class="content-container">
          <h2>Things I Can Do</h2>
          <p>
            I am a dynamic, quick thinking creative professional that loves to develop beautiful and easy to use websites and web apps.
            One thing I'm most passionate about is immersing myself into a topic like machine learning just for fun.
            I'm also a pretty easy guy to work with. The following is a rough overview of my skillset.
          </p>
          <section class="items-container">
            <section class="item">
              <font-awesome-icon
                class="item-icon"
                :icon="['fas', 'code']"
              />
              <p>Experience on Full Stack technologies like React, Vue, NodeJS and GraphQL</p>
            </section>
            <section class="item">
              <font-awesome-icon
                class="item-icon"
                :icon="['fas', 'terminal']"
              />
              <p>Daily user of Linux/Unix systems having a basic understanding on how it operates</p>
            </section>
            <section class="item">
              <font-awesome-icon
                class="item-icon"
                :icon="['fas', 'code-branch']"
              />
              <p>Managed projects using Git for version control</p>
            </section>
            <section class="item">
              <font-awesome-icon
                class="item-icon"
                :icon="['fas', 'bug']"
              />
              <p>Always willing to get into the weeds to analyze and solve bugs</p>
            </section>
            <section class="item">
              <font-awesome-icon
                class="item-icon"
                :icon="['fas', 'server']"
              />
              <p>Expertise in both relational and non-relational databases</p>
            </section>
            <section class="item">
              <font-awesome-icon
                class="item-icon"
                :icon="['fas', 'book']"
              />
              <p>Capable of learning new technologies on the job or outside to meet work or personal goals</p>
            </section>
          </section>
        </section>
      </section>
      <section class="child-container portfolio-container">
        <section class="content-container">
          <h2>Portfolio</h2>
        </section>
      </section>
      <section class="child-container contact-container">
        <section class="content-container">
          <h2>Contact Me</h2>
        </section>
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
@import '@/assets/scss/variables.scss';

.main-container {
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .child-container {
    border-bottom: 0.3rem solid $main-border-color;

    &:nth-child(4)  {
      border: none;
    }

    .content-container {
      width: 80%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .items-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .item {
          display: flex;
          align-items: center;
          width: 50%;

          .item-icon {
            font-size: 1.3rem;
            background-color: $main-accent-color;
            border-radius: 50%;
            padding: 1.3rem;
          }
        }

        .item > * {
          margin: 1rem;
        }
      }
    }

    .content-container > * {
      margin: 2rem 0;
    }
  }

  .about-container {
    margin-top: 0;
    padding-top: 0;

    #jumbotron {
      margin-top: 0;
      padding-top: 0;
      height: 20rem;
      background-image: url("../assets/img/spiral.jpg");
      background-position: center;
      background-repeat: no-repeat;
    }

    #title {
      color: $main-accent-color;
      font-size: 4rem;
    }
  }
}
</style>
