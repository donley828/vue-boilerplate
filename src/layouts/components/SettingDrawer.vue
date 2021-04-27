<template>
  <a-button type="primary" class="btn" @click="showDrawer">
    <template #icon><SettingOutlined /></template>
  </a-button>
  <a-drawer v-model:visible="visible" placement="right" :closable="false"></a-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: 'SettingDrawer',
  components: {
    SettingOutlined,
  },
  setup() {
    const visible = ref<boolean>(false);
    const showDrawer = () => (visible.value = true);
    return {
      visible,
      showDrawer,
    };
  },
});
</script>

<style scoped>
.btn {
  position: fixed;
  top: 50%;
  right: 0;
}
</style>
