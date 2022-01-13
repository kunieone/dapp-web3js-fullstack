<template>
  <div class="nav-bar-wrap">
    <router-link to="/"><div class="logo">Medichain</div></router-link>
    <div class="nav-bar">
      <div class="left">
        <div class="el" v-for="(e, i) in arrLeft">
          <router-link :to="{ path: e.path }">
            {{ e.tag }}
          </router-link>
        </div>
      </div>
      <div class="right">
        <div class="el label" v-for="(e, i) in arrRight">
          <router-link :to="{ path: e.path }">
            {{ e.tag }}
          </router-link>
        </div>
        <i class="el bi bi-chevron-down"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  path: { tag: string; path: string }[];
}>();
import { ref } from "vue";
import router from "../router";

const arrLeft = ref(props.path);
// 分割为左右两个部分
const arrRight = ref(props.path);
arrLeft.value = arrLeft.value.slice(0, 4);
arrRight.value = arrRight.value.slice(4).reverse();
</script>
<style lang="less">
@media screen and (max-width: 820px) {
  .nav-bar-wrap {
    .label {
      display: none;
    }
  }
}

@media screen and (min-width: 820px) {
  .nav-bar-wrap {
    i {
      display: none;
    }
  }
}
@nav-color: #575757;
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
.nav-bar-wrap {
  background-color: rgb(255, 255, 255);

  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  .logo {
    text-decoration: none;

    margin-left: 14px;
    user-select: none;
    padding: 10px;
    font: 600 27px Meowscript;
    color: @nav-color;
  }
}
.nav-bar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left,
.right {
  display: flex;
  .el {
    user-select: none;
    // 每个标签元素
    cursor: pointer;
    font-weight: 700;
    color: @nav-color;
    padding: 10px;
    margin: 10px;
    border-radius: 0px;

    a {
      transition: color ease-in-out 0.2s;
      color: @nav-color;

      &:hover {
        color: whitesmoke;
      }
    }
    &:hover {
      transition: background-color ease-in-out 0.4s;
      border-radius: 5px;
      background-color: #e4585c;
    }
  }
}
</style>
