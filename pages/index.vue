<template>
  <div>
    <Sidebar />
    <div class="container">
      <h1 class="title">
        lalvarez-portfolio
      </h1>
    </div>
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
.container {
  width: 75%;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
</style>
