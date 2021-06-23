<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    :mode="mode"
    :theme="theme"
    :style="{ lineHeight: '56px' }"
    @select="handleSelect"
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
import { useRouter } from 'vue-router';
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
    const store = useStore();
    const mode = computed((): string => {
      return store.state.app.layout === 'header' ? 'horizontal' : 'vertical';
    });
    const theme = computed((): string => store.state.app.theme);

    const router = useRouter();
    const selectedKeys = ref<string[]>([router.currentRoute.value.name]);
    const routes = computed(() => store.state.user.routes);
    const handleSelect = (e) => {
      router.push({ name: e.key });
    };
    return {
      mode,
      theme,

      selectedKeys,
      routes,
      handleSelect,
    };
  },
});
</script>

<style scoped></style>
