<template>
  <div>
    <div class="main-container">
      <section class="child-container">
        <About />
      </section>
      <section class="child-container">
        <Skills />
      </section>
      <section id="portfolio-container" class="child-container">
        <section class="content-container">
          <h2>Portfolio</h2>
          <p>
            A few of my project that I've been working on through my software engineer life.
            I feel very passionate about open source software and have made a few contributions to different projects.
            Feel free to send me feedback through GitHub on any of my projects.
          </p>
          <section
            class="project-container"
            v-for="project in projects[currentPage]"
            :key="project.fields.id"
          >
            <img
              :src="project.fields.backgroundImg.fields.file.url"
              :alt="project.fields.title"
            />
            <section class="project-information">
              <h3><strong>{{ project.fields.title }}</strong></h3>
              <p>{{ project.fields.description }}</p>
              <section>
                <a
                  v-if="project.fields.githubUrl"
                  :href="project.fields.githubUrl"
                  target="_blank"
                  rel="noopener"
                >
                  <font-awesome-icon
                    class="icon"
                    :icon="['fab', 'github']"
                  />
                </a>
                <a
                  v-if="project.fields.projectUrl"
                  :href="project.fields.projectUrl"
                  target="_blank"
                  rel="noopener"
                >
                  <font-awesome-icon
                    class="icon"
                    :icon="['fas', 'laptop-code']"
                  />
                </a>
              </section>
            </section>
          </section>
          <section class="pagination">
            <button
              :disabled="prevPage === null"
               v-on:click="handlePrevPage"
            >
              Previous
            </button>
            <button
              :disabled="nextPage === null"
              v-on:click="handleNextPage"
            >
              Next
            </button>
          </section>
        </section>
      </section>
      <section id="contact-container" class="child-container">
        <section class="content-container">
          <h2>Contact Me</h2>
          <p>Have some questions or just want to just chat? Shoot me a message</p>
          <form v-on:submit="handleSubmit">
            <section class="first-section">
              <label for="name" class="hidden-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                v-model="name"
                placeholder="Name"
              >
              <label for="email" class="hidden-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                v-model="email"
                placeholder="Email"
              >
            </section>
            <section class="second-section">
              <label for="subject" class="hidden-label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                v-model="subject"
                placeholder="Subject"
              >
              <label for="message" class="hidden-label">
                Message
              </label>
              <textarea
                id="message"
                required
                v-model="message"
                placeholder="Message"
              />
            </section>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </section>
    </div>
    <Sidebar />
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
import axios from 'axios';

import Sidebar from '~/components/Sidebar.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue'

const client = createClient()

export default {
  components: {
    Sidebar,
    About,
    Skills
  },
  data () {
    return {
      projects: [],
      pageNumberCount: 0,
      currentPage: 0,
      prevPage: null,
      nextPage: null,
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  asyncData ({env}) {
    return Promise.all([
      client.getEntries()
    ]).then(([projects]) => {

      function chunk(arr, chunkSize) {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
          chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
      }

      const projectsChunked = chunk(projects.items, 3);
      const pageNumberCount = projectsChunked.length - 1;
      let nextPage = null;

      if (pageNumberCount > 1) {
        nextPage = 1;
      }

      return {
        projects: projectsChunked,
        pageNumberCount,
        nextPage
      }
    }).catch(err => console.error(`[Projects] Could not load projects: ${err}`))
  },
  methods: {
    handlePrevPage: function() {
      const tempPrevPage = this.currentPage - 1;

      if (tempPrevPage > 0) {
        this.prevPage = tempPrevPage;
        this.nextPage = this.currentPage;
        this.currentPage = tempPrevPage;
      }

      if (tempPrevPage === 0) {
        this.prevPage = null;
        this.nextPage = this.currentPage;
        this.currentPage = tempPrevPage;
      }
    },
    handleNextPage: function() {
      const tempNextPage = this.currentPage + 1;

      if (tempNextPage >= 0 && tempNextPage < this.pageNumberCount) {
        this.nextPage = tempNextPage;
        this.prevPage = this.currentPage;
        this.currentPage = tempNextPage;
      }

      if (tempNextPage === this.pageNumberCount) {
        this.nextPage = null;
        this.currentPage = tempNextPage;
      }
    },
    handleSubmit: function(event) {
      event.preventDefault();
       axios
        .post(
          'https://us-central1-lalvarez-portfolio.cloudfunctions.net/contactUsEmail',
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        )
        .then(res => {
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .child-container {
    border-bottom: 0.3rem solid $main-border-color;

    &:nth-child(4)  {
      border: none;
    }
  }

  .project-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.3rem solid $main-border-color;
    padding: 2rem 0;

    img {
      width: 50%;
      border-radius: 2%;
      height: 25rem;
    }

    .project-information {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      a:nth-child(1)  {
        margin-right: 1rem;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;

    button {
      margin: 0 1rem;
      padding: 1rem 3rem;
      cursor: pointer;
      text-align: center;
      border-radius: 0.5rem;
      color: white;
      font-size: 1rem;
      text-decoration: none;
      background-color: $main-accent-color;
      border: 3px solid $main-accent-color-lighter;

      &:focus, &:hover {
        background-color: $main-accent-color-darker;
      }

      &:disabled {
        background-color: #cccccc;
        border-color: #999999;
        color: #666666;
      }
    }
  }

  .hidden-label {
    display: none;
  }

  form {
    .first-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;

      input {
        width: 40%;
        border-radius: 0.5rem;
        border: 3px solid $input-border-color;
        font-size: 1rem;
        padding: 0.5rem;

        &:focus {
          border: 3px solid $input-border-color-focus;
        }
      }
    }

    .second-section {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      input, textarea {
        font-size: 1rem;
        border-radius: 0.5rem;
        border: 3px solid $input-border-color;
        font-size: 1rem;
        padding: 0.5rem;

        &:focus {
          border: 3px solid $input-border-color-focus;
        }
      }

      textarea {
        margin: 1rem 0;
        height: 10rem;
        resize: none;
      }
    }

    input[type=submit] {
      font-size: 1rem;
      padding: 1rem 3rem;
      text-align: center;
      cursor: pointer;
      border-radius: 0.5rem;
      color: white;
      text-decoration: none;
      background-color: $main-accent-color;
      border: 3px solid $main-accent-color-lighter;

      &:focus, &:hover {
        background-color: $main-accent-color-darker;
      }
    }
  }
}
</style>
