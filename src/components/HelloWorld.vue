<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { reactive, UnwrapRef } from 'vue';

export default {
  props: {
    msg: String,
  },
  setup(): { state: UnwrapRef<{ count: number }> } {
    const state = reactive({ count: 0 });

    return {
      state,
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
