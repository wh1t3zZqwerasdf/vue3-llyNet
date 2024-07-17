<template>
  <WebTemplate>
    <!-- 头部菜单 -->
    <template #header>
      菜单栏
    </template>
    <!-- 标签页 -->
    <template #tabs>
      标签页
    </template>

    <div class="wrap-main">
      <div class="wrap-page">
        主体内容
      </div>
    </div>
  </WebTemplate>
</template>

<script setup lang="ts">
import WebTemplate from '@/common/components/WebTemplate.vue';
</script>
<style lang="sass" scoped></style>