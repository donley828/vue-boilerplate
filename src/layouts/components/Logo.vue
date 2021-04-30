<template>
  <div class="logo">
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Logo',
});
</script>

<style scoped>
.logo {
  width: 200px;
  height: 56px;
  padding: 12px 8px;
}
.logo > div {
  background-color: #4d5c69;
  width: 100%;
  height: 100%;
}
</style>
