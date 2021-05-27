<template>
  <div :class="layoutPrefixCls">
    <div :class="`${layoutPrefixCls}__right`">
      <h2>欢迎</h2>
      <router-view></router-view>
      <p>如果你没有账户请<a-button type="link">联系管理员</a-button></p>
      <p>Made by ©️</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStyle } from '/@/core/hooks/useStyle';
export default defineComponent({
  name: 'UserLayout',
  setup() {
    const { prefixCls: layoutPrefixCls } = useStyle('user-layout');

    return {
      layoutPrefixCls,
    };
  },
});
</script>

<style scoped lang="less">
.@{namespace}-user-layout {
  width: 100%;
  height: 100%;
  background-color: #265ae5;
  &__right {
    width: 40%;
    min-width: 500px;
    max-width: 700px;
    height: 100%;
    background-color: #ffffff;
    float: right;
    box-sizing: border-box;
    padding: 40px;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
    h2 {
      margin-top: 200px;
    }
  }
}
</style>
