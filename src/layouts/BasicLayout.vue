<template>
  <a-layout class="layout">
    <a-layout-header class="header"></a-layout-header>
    <a-layout-content class="content"> Content </a-layout-content>
    <a-layout-footer class="footer" style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
  <setting-drawer></setting-drawer>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent } from 'vue';
import { key } from '../store';
import SettingDrawer from './components/SettingDrawer.vue';

export default defineComponent({
  name: 'BasicLayout',
  components: {
    SettingDrawer,
  },
  setup(props) {
    const store = useStore(key);
    console.log(store.state.app, props);
  },
});
</script>

<style scoped></style>
