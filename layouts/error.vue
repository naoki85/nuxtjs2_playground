<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      Not Found
    </h1>
    <h1 v-else>
      Something Wrong
    </h1>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>
