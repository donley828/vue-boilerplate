<template>
  <a-dropdown :trigger="['click']">
    <div>
      <span>{{ username }}</span>
      <DownOutlined />
    </div>
    <!--    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />-->

    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;" @click="showQuit">退出</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script>
import { defineComponent, createVNode, computed } from 'vue';
import { useStore } from '/@/store';
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined, DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'UserMenu',
  components: {
    DownOutlined,
  },
  setup() {
    const store = useStore();

    const username = computed(() => store.state.user.name);
    const showQuit = () => {
      Modal.confirm({
        title: '你想要退出吗？',
        icon: createVNode(ExclamationCircleOutlined),
        onOk() {
          return store.dispatch('user/Logout').then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 16);
          });
        },
        onCancel() {
          console.log('cancel');
        },
      });
    };
    console.log(username);

    return {
      username,
      showQuit,
    };
  },
});
</script>

<style scoped></style>
