<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      Not Found
    </h1>
    <h1 v-else>
      Something Wrong
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Error extends Vue {
  @Prop()
  public error!: any
}
</script>
