<template>
  <a-sub-menu :key="menuInfo.name" v-bind="$attrs">
    <template #title>
      <icon-font :type="menuInfo.meta.icon"></icon-font>
      <span>{{ menuInfo.meta.title }}</span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
          <icon-font :type="menuInfo.meta.icon"></icon-font>
          {{ item.meta.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :key="item.name" :menu-info="item"></sub-menu>
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconFont from '/@/components/IconFont.vue';
export default defineComponent({
  name: 'SubMenu',
  components: {
    IconFont,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style scoped></style>
