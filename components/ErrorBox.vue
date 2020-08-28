<template>
  <section class="error-box">
    <font-awesome-icon class="icon" :icon="['fas', 'bug']" />
    <p>{{ errorMessage }}</p>
  </section>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.error-box {
  background-color: $danger;
  padding: 2rem;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 1rem;
  }
}
</style>
