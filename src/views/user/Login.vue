<template>
  <div class="vueb-user-login">
    <a-form
      layout="vertical"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 14 }"
      hide-required-mark
    >
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username"></a-input>
      </a-form-item>
      <a-form-item label="密码" v-bind="validateInfos.password">
        <a-input-password v-model:value="modelRef.password"></a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button style="width: 100%" type="primary" @click="onSubmit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';
export default defineComponent({
  name: 'Login',
  setup() {
    const modelRef = reactive({
      username: '',
      password: '',
    });
    const rulesRef = reactive({
      username: [{ required: true, message: '用户名必填' }],
      password: [{ required: true, message: '密码为必填' }],
    });
    const { validate, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(modelRef);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return {
      validate,
      validateInfos,
      modelRef,
      rulesRef,
      onSubmit,
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
    .ant-input-password {
      border-top: none;
      border-left: none;
      border-right: none;
      border-radius: unset;
      &:focus {
        box-shadow: unset;
      }
    }
  }
}
</style>
