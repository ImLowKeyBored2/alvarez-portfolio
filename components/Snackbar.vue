<template>
  <v-snackbar v-model="snackbar" :color="type">
    <div v-if="icon" class="d-flex justify-center">
      <v-icon class="link-icon">fas fa-{{ icon }}</v-icon>
    </div>
    <p>{{ message }}</p>

    <template v-slot:action="{ attrs }">
      <v-btn color="secondary" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      snackbar: true,
    };
  },
};
</script>
