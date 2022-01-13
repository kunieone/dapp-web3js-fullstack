<template>
  <div class="wrap">
    <slot />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less">
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
