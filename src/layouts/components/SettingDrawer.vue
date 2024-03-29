<template>
  <a-button type="primary" class="btn" @click="showDrawer">
    <template #icon><SettingOutlined /></template>
  </a-button>
  <a-drawer v-model:visible="visible" placement="right" :closable="false">
    <a-divider orientation="left">主题</a-divider>
    <a-switch :checked="theme" @click="selectTheme"></a-switch>
    <a-divider orientation="left">布局</a-divider>
    <div class="picker">
      <div
        v-for="(item, idx) in ['header', 'sider']"
        :key="`layout-${idx}`"
        :class="['picker-item', `picker-item-${item}`, { active: item === layout }]"
        @click="() => selectLayout(item)"
      ></div>
    </div>
    <a-divider orientation="left">主题色</a-divider>
    <div v-if="false" style="height: 20px">
      <a-tooltip v-for="(item, index) in colorList" :key="index">
        <template #title>
          {{ item.key }}
        </template>
        <a-tag :color="item.color" @click="selectThemeColor(item.color)">
          <CheckOutlined />
        </a-tag>
      </a-tooltip>
    </div>
    <a-divider orientation="left">顶栏颜色</a-divider>
    <a-divider orientation="left">侧边栏颜色</a-divider>
  </a-drawer>
</template>

<script lang="ts">
import { useStore } from '/@/store';
import { updateDarkTheme, changeThemeColor } from '/@/utils/theme';
import { defineComponent, ref, computed } from 'vue';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'SettingDrawer',
  components: {
    SettingOutlined,
    CheckOutlined,
  },
  setup() {
    const visible = ref<boolean>(false);
    const showDrawer = () => (visible.value = true);

    const store = useStore();
    // app - theme
    const theme = computed((): boolean => store.state.app.theme === 'dark');
    const selectTheme = (checked: boolean) => {
      const mode = checked ? 'dark' : 'light';
      store.dispatch('app/SetTheme', mode);
      updateDarkTheme(mode);
    };
    // app - layout
    const layout = computed((): string => store.state.app.layout);
    const selectLayout = (val: string) => {
      if (val !== layout.value) {
        store.dispatch('app/SetLayout', val);
      }
    };
    // app - themeColor
    const colorList = [
      {
        key: '极客蓝',
        color: '#2F54EB',
      },
      {
        key: '酱紫',
        color: '#722ED1',
      },
      {
        key: '庆化蓝',
        color: '#008CC9',
      },
    ];
    const selectThemeColor = (color: string) => {
      changeThemeColor(color);
    };

    return {
      visible,
      showDrawer,
      theme,
      selectTheme,
      layout,
      selectLayout,
      colorList,
      selectThemeColor,
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
.picker {
  display: flex;
}
.picker-item {
  width: 56px;
  height: 48px;
  background-color: #f0f2f5;
  margin-right: 24px;
  border-radius: 4px;
  position: relative;
  box-shadow: rgb(0 0 0 / 5%) 0 1px 2px 0;
  transition: box-shadow 0.5s ease-out;
  overflow: hidden;
}
.picker-item.active {
  border: 2px solid #0960bd;
  padding: 12px;
}
.picker-item:hover {
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
}
.picker-item-header::after,
.picker-item-sider::before,
.picker-item-sider::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
}
.picker-item-header::after {
  background-color: #273452;
  width: 100%;
  height: 22%;
}
.picker-item-sider::before {
  background-color: #273452;
  width: 33%;
  height: 100%;
  z-index: 1;
}
.picker-item-sider::after {
  background-color: #ffffff;
  width: 100%;
  height: 22%;
}
</style>
