<template>
  <!-- 主标题 -->
  <Nav :path="content"></Nav>

  <!-- 这里是路由 -->
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <!-- 这里是路由 -->
</template>
<script lang="ts" setup>
import Nav from "./components/Nav.vue";

let content: { tag: string; path: string }[] = [
  { tag: "关于", path: "/about" },
  { tag: "名医", path: "/fames" },
  { tag: "病例", path: "/forms" },
  { tag: "我的", path: "/me" },
  { tag: "数据", path: "/data" },
  { tag: "医疗区块", path: "/explorer" },
];
</script>

<style lang="less">
@import url("bootstrap-icons/font/bootstrap-icons.css");
// 引入bootstrap-icons
html,
body {
  background-color: rgb(247, 247, 247);
}
// 去除A标签默认样式
a {
  text-decoration: none; /* 去除默认的下划线 */
  outline: none; /* 去除旧版浏览器的点击后的外虚线框 */
  color: #000; /* 去除默认的颜色和点击后变化的颜色 */
}
img {
  width: 90%;
}
</style>
