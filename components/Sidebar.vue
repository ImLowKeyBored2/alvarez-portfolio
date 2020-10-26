<template>
  <div class="sidebar">
    <v-btn @click.stop="drawer = !drawer">
      <v-icon class="drawer-icon">{{ drawer ? "fa-times" : "fa-bars" }}</v-icon>
    </v-btn>
    <v-card>
      <v-navigation-drawer
        v-if="drawer"
        v-model="drawer"
        temporary
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="@/assets/img/ori.jpg" alt="Ori Alvarez"></v-img>
            </v-list-item-avatar>

            <v-list-item-title></v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">Ori Alvarez </v-list-item-title>
              <v-list-item-subtitle
                >ori.alvarez@commithub.com</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "fa-ad" },
        { title: "My Account", icon: "fa-ad" },
        { title: "Users", icon: "fa-ad" },
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
