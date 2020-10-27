<template>
  <section>
    <section class="main-container">
      <Sidebar :author="author" />
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
            A few of the projects that I've been working on through my software
            engineer life. I feel very passionate about open source software and
            have made a few contributions to different projects. Feel free to
            send me feedback through GitHub on any of my projects.
          </p>
          <section
            v-for="project in projects[currentPage]"
            :key="project.fields.id"
            class="project-container"
          >
            <img
              :src="project.fields.backgroundImg.fields.file.url"
              :alt="project.fields.title"
            />
            <section class="project-information">
              <h3>
                <strong>{{ project.fields.title }}</strong>
              </h3>
              <p>{{ project.fields.description }}</p>
              <section>
                <a
                  v-if="project.fields.githubUrl"
                  :href="project.fields.githubUrl"
                  target="_blank"
                  rel="noopener"
                >
                  <v-icon class="link-icon">fab fa-github</v-icon>
                </a>
                <a
                  v-if="project.fields.projectUrl"
                  :href="project.fields.projectUrl"
                  target="_blank"
                  rel="noopener"
                >
                  <v-icon class="link-icon">fas fa-laptop-code</v-icon>
                </a>
              </section>
            </section>
          </section>
          <ErrorBox
            v-if="!projects.length"
            error-message="There was an error loading the projects. Please try again later."
          />
          <section class="pagination">
            <v-btn
              x-large
              color="primary"
              :disabled="prevPage === null"
              @click="handlePrevPage"
              >Previous</v-btn
            >
            <v-btn
              x-large
              color="primary"
              :disabled="nextPage === null"
              @click="handleNextPage"
              >Next</v-btn
            >
          </section>
        </section>
      </section>
      <section class="child-container">
        <ContactForm />
        <Footer />
      </section>
    </section>
  </section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

import Sidebar from "~/components/Sidebar.vue";
import About from "~/components/About.vue";
import Skills from "~/components/Skills.vue";
import ContactForm from "~/components/ContactForm.vue";
import Footer from "~/components/Footer.vue";
import ErrorBox from "~/components/ErrorBox.vue";

const client = createClient();

export default {
  components: {
    Sidebar,
    About,
    Skills,
    ContactForm,
    Footer,
    ErrorBox,
  },
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "project",
      }),

      client.getEntries({
        content_type: "author",
      }),
    ])
      .then(([projects, authors]) => {
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
          author: authors.items[0],
          projects: projectsChunked,
          pageNumberCount,
          nextPage,
        };
      })
      .catch((err) =>
        console.error(`[Contentful] Could not load content: ${err}`)
      );
  },
  data() {
    return {
      projects: [],
      author: null,
      pageNumberCount: 0,
      currentPage: 0,
      prevPage: null,
      nextPage: null,
    };
  },
  methods: {
    handlePrevPage: function () {
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
    handleNextPage: function () {
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
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .child-container {
    border-bottom: 0.3rem solid $main-border-color;

    &:nth-child(5) {
      border: none;
    }
  }

  .project-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.3rem solid $main-border-color;
    padding: 2rem 0;

    @media (max-width: $tablet-lg) {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 50%;
      border-radius: 2%;
      height: 20rem;

      @media (max-width: $desktop-sm) {
        height: 15rem;
      }

      @media (max-width: $tablet-sm) {
        width: 100%;
        height: 15rem;
      }
    }

    .project-information {
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      @media (max-width: $tablet-lg) {
        width: 100%;
        height: 15rem;
      }

      a:nth-child(1) {
        margin-right: 1rem;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;

    button {
      margin: 0 1rem;
    }
  }
}
</style>
