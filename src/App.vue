<script setup lang="ts">
import zhCnMap from '@/utils/modules/zh-cn';
import { ButtonConfigContext, MessageConfigContext } from 'element-plus';

/* 全局配置 */
type elOptions = {
  size?: 'small' | 'large' | 'default' | '';
  zIndex?: number;
  locale?: typeof zhCnMap;
  button?: ButtonConfigContext;
  message?: MessageConfigContext;
};

const options = reactive<elOptions>({
  size: 'default',
  zIndex: 2000,
  locale: zhCnMap,
  button: {
    autoInsertSpace: true
  },
  message: {
    max: 5
  }
});

onMounted(() => {
  console.log(zhCnMap);
});
</script>

<template>
  <el-config-provider :size="options.size" :z-index="options.zIndex" :locale="options.locale" :message="options.message"
    :button="options.button">
    <!-- <BrowserModel /> -->
    <router-view></router-view>
  </el-config-provider>
</template>

<style>
/*解决el-dialog和el-message等弹出层出现空白区域问题*/
body {
  width: 100vw !important;
}
</style>
<style scoped></style>
