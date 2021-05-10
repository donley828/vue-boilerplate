<template>
  <a-layout class="layout">
    <a-layout-sider
      v-if="layout === 'sider'"
      v-model:collapsed="collapsed"
      class="sider"
      :theme="theme"
      collapsible
    >
      <s-logo />
      <s-menu></s-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header" :theme="theme">
        <s-logo v-if="layout === 'header'" />
        <s-menu v-if="layout === 'header'"></s-menu>
      </a-layout-header>
      <a-layout-content class="content">
        Content1
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
import { defineComponent, computed, ref } from 'vue';
import { useStore } from '/@/store';
import SettingDrawer from './components/SettingDrawer.vue';
import SLogo from './components/Logo.vue';
import SMenu from './components/Menu.vue';

export default defineComponent({
  name: 'BasicLayout',
  components: {
    SettingDrawer,
    SLogo,
    SMenu,
  },
  setup() {
    const collapsed = ref<boolean>(false);
    const store = useStore();
    const theme = computed(() => store.state.app.theme);
    const layout = computed(() => store.state.app.layout);
    return {
      collapsed,
      theme,
      layout,
    };
  },
});
</script>

<style scoped></style>
