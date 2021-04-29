<template>
  <a-layout class="layout">
    <a-layout-sider v-if="layout === 'sider'" collapsible :collapsed-width="48">
      sider
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header"></a-layout-header>
      <a-layout-content class="content">
        Content
        <a-date-picker></a-date-picker>
      </a-layout-content>
      <a-layout-footer class="footer" style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <setting-drawer></setting-drawer>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';
import { key } from '/@/store';
import SettingDrawer from './components/SettingDrawer.vue';

export default defineComponent({
  name: 'BasicLayout',
  components: {
    SettingDrawer,
  },
  setup() {
    const store = useStore(key);
    const theme = computed(() => store.state.app.theme);
    const layout = computed(() => store.state.app.layout);
    return {
      theme,
      layout,
    };
  },
});
</script>

<style scoped></style>
