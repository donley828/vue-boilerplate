<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    :mode="mode"
    :theme="theme"
    :style="{ lineHeight: '56px' }"
  >
    <template v-for="item in routes" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
          <icon-font :type="item.meta.icon"></icon-font>
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.name" :menu-info="item"></sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from '/@/store';
import SubMenu from './SubMenu.vue';
import IconFont from '/@/components/IconFont.vue';

export default defineComponent({
  name: 'Menu',
  components: {
    SubMenu,
    IconFont,
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
