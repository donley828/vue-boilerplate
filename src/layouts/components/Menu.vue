<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    :mode="mode"
    :theme="theme"
    :style="{ lineHeight: '56px' }"
  >
    <a-menu-item key="1">
      <pie-chart-outlined />
      <span>Option 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <desktop-outlined />
      <span>Option 2</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #title>
        <span>
          <user-outlined />
          <span>User</span>
        </span>
      </template>
      <a-menu-item key="3">Tom</a-menu-item>
      <a-menu-item key="4">Bill</a-menu-item>
      <a-menu-item key="5">Alex</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from '/@/store';
import { PieChartOutlined, DesktopOutlined, UserOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'Menu',
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(['1']);

    const store = useStore();
    const mode = computed((): string => {
      return store.state.app.layout === 'header' ? 'horizontal' : 'vertical';
    });
    const theme = computed((): string => store.state.app.theme);
    const routes = computed(() => store.state.user.routes);
    console.log(routes.value);
    return {
      selectedKeys,
      mode,
      theme,
      routes,
    };
  },
});
</script>

<style scoped></style>
