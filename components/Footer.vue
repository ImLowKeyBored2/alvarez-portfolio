<template>
  <footer class="child-container">
    <p>&copy {{ currentYear }} Luis Alvarez</p>
  </footer>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      currentYear: moment().format('YYYY')
    }
  }
}
</script>

<style lang="scss">
  footer {
    text-align: center;
  }
</style>
