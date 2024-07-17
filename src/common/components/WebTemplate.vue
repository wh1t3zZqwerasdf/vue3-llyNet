<script setup lang="ts"></script>

<template>
  <div class="wrap-header">
    <slot name="header"></slot>
  </div>
  <div class="wrap-body">
    <div class="wrap-menu">
      <slot name="menu"></slot>
    </div>
    <div class="wrap-container">
      <div class="wrap-tabs">
        <slot name="tabs"></slot>
      </div>
      <div class="wrap-page">
        <slot></slot>
      </div>
    </div>
  </div>
  <div class="wrap-footer">
    <slot name="footer"></slot>
  </div>
</template>

<style lang="scss" scoped></style>
