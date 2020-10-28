<template>
  <div class="sidebar">
    <v-btn @click.stop="drawer = !drawer">
      <v-icon class="drawer-icon">{{ drawer ? "fa-times" : "fa-bars" }}</v-icon>
    </v-btn>
    <v-card>
      <v-navigation-drawer v-if="drawer" v-model="drawer" width="300" temporary>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                :src="author.fields.authorImage.fields.file.url"
                alt="Ori Alvarez"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-title></v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">{{
                author.fields.name
              }}</v-list-item-title>
              <v-list-item-subtitle>{{
                author.fields.email
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item v-for="item in externalItems" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <a :href="item.url" target="_blank" rel="noopener"
                ><v-list-item-title>{{ item.title }}</v-list-item-title></a
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item v-for="item in socialMediaItems" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <a :href="item.url" target="_blank" rel="noopener"
                ><v-list-item-title>{{ item.title }}</v-list-item-title></a
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
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
  data() {
    return {
      drawer: false,
      externalItems: [
        { title: "CommitHub", icon: "fa-robot", url: "https://commithub.com/" },
        {
          title: "Sudo",
          icon: "fa-podcast",
          url: "https://rss.com/podcasts/sudo/",
        },
      ],
      socialMediaItems: [
        {
          title: "Github",
          icon: "fab fa-github",
          url: "https://github.com/TheGameFreak720",
        },
        {
          title: "LinkedIn",
          icon: "fab fa-linkedin",
          url: "https://www.linkedin.com/in/ori-alvarez-pacheco/",
        },
        {
          title: "Twitter",
          icon: "fab fa-twitter",
          url: "https://twitter.com/MoonMan6033",
        },
        {
          title: "HackerRank",
          icon: "fab fa-hackerrank",
          url: "https://www.hackerrank.com/cyanide6033?hr_r=1",
        },
        {
          title: "Ko-fi",
          icon: "fa-coffee",
          url: "https://ko-fi.com/orialvarez",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0px;
  z-index: 999;
}

.drawer-icon {
  /* Important to override vuetify */
  font-size: 2em !important;
}
</style>
