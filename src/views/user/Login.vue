<template>
  <div :class="loginPrefixCls">
    <a-form
      layout="vertical"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      hide-required-mark
    >
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username"></a-input>
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input-password v-model:value="modelRef.password"></a-input-password>
      </a-form-item>
      <a-form-item style="margin-bottom: 0">
        <a-checkbox>记住我</a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button
          style="width: 100%"
          type="primary"
          html-type="submit"
          :loading="loading"
          @click="onSubmit"
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from '@ant-design-vue/use';
import { login } from '/@/api/user';
import { useStore } from '/@/store';
import { useStyle } from '/@/core/hooks/useStyle';

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore();
    const router = useRouter();

    const modelRef = reactive({
      username: '',
      password: '',
    });
    const rulesRef = reactive({
      username: [{ required: true, message: '用户名必填' }],
      password: [{ required: true, message: '密码为必填' }],
    });
    const { validate, validateInfos } = useForm(modelRef, rulesRef);
    const { fetch, loading, data } = login(toRaw(modelRef));
    const onSubmit = () => {
      validate()
        .then(() => {
          fetch().then(() => {
            if (data.value.code === 200) {
              store.commit('user/SET_TOKEN', data.value.token);
              router.push({ path: '/' });
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const { prefixCls: loginPrefixCls } = useStyle('user-login');

    return {
      validate,
      validateInfos,
      modelRef,
      rulesRef,
      onSubmit,
      loading,
      loginPrefixCls,
    };
  },
});
</script>

<style scoped lang="less">
.@{namespace}-user-login {
  color: red;
  ::v-deep(.ant-form-item) {
    label {
      font-size: 12px;
    }
    .ant-input,
    .ant-input-password,
    .ant-input-affix-wrapper {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: unset;

      &-focused,
      &:focus {
        box-shadow: unset;
      }
    }
  }
}
</style>
