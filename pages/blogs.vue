<template>
  <section id="blogs" class="main-container">
    <h1>Blogs</h1>
    <div v-for="blog in blogs" :key="blog.fields.id" class="blogs">
      <section>
        <img
          :src="blog.fields.backgroundImage.fields.file.url"
          :alt="`${blog.fields.title} background`"
        />
        <h2>{{ blog.fields.title }}</h2>
        <h3>Date Published: {{ parseDate(blog.fields.datePublished) }}</h3>
      </section>
    </div>
  </section>
</template>

<script>
import moment from "moment";
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "blogPost",
      }),
    ])
      .then(([blogs]) => {
        console.log(blogs);
        return {
          blogs: blogs.items,
        };
      })
      .catch((err) =>
        console.error(`[Contentful] Could not load content: ${err}`)
      );
  },
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    parseDate: function (timestamp) {
      return moment(timestamp).format("dddd, MMMM Do YYYY");
    },
  },
};
</script>

<style lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.blogs {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  section {
    margin: 1rem 0;
    img {
      width: 50%;
    }
  }
}
</style>
