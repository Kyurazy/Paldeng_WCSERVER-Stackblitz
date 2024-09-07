<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  msg: String
})
</script>

<style scoped>
.hello {
  text-align: center;
  font-size: 2rem;
  margin: 2rem 0;
}
</style>
