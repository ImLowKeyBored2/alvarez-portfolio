<template>
  <section class="toaster" :class="type">
    <section v-if="icon">
      <v-icon class="link-icon">fas fa-{{ icon }}</v-icon>
    </section>
    <p>{{ message }}</p>
  </section>
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
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.success {
  background-color: $success;
}

.danger {
  background-color: $danger;
}

.normal {
  background-color: $main-accent-color;
}

.toaster {
  padding: 1rem;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: fixed;
  z-index: 0;
  bottom: 0;
  margin: 1rem 0;

  .link-icon {
    margin-right: 1rem;
  }
}
</style>
