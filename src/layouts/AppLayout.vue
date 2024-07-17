<script setup lang="ts">
import WebTemplate from '@/common/components/WebTemplate.vue';
import BaseWebHeader from '@/components/base/BaseWebHeader.vue';
</script>

<template>
  <WebTemplate>
    <!-- 头部菜单 -->
    <template #header>
      <BaseWebHeader />
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
<style lang="sass" scoped></style>