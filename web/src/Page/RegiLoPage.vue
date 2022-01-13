<template>
  <div class="wrap">
    <div class="transparent-box">
      <div class="l-box">
        <div class="tab-wrap">
          <router-link to="register">
            <span class="tab1 tab" :class="{ selected: isLoginSelected }">注册 </span>
          </router-link>
          <router-link to="./login">
            <span class="tab2 tab" :class="{ selected: isRegisterSelected }">登录 </span>
          </router-link>
        </div>
        <div class="router">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>

      <div class="r-box">
        <img src="../assets/woman_doctor.svg" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

let isLoginSelected: any = ref(true);
let isRegisterSelected: any = ref(false);
watch(
  () => route.path,
  (e) => {
    console.log("监听到变化");
    if (e == "/r/register") {
      isLoginSelected.value = true;
      isRegisterSelected.value = false;
    } else if (e == "/r/login") {
      isRegisterSelected.value = true;
      isLoginSelected.value = false;
    }
  }
);
</script>

<style lang="less">
.wrap {
  position: relative;
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;

  .transparent-box {
    height: 90%;
 border-radius: 25px;
      background-color: rgb(255, 255, 255);
      box-shadow: 2px 2px rgb(211, 211, 211) 20px;
    width: 90%;

    // background-color: antiquewhite;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;

    .l-box {
      .router {
        height: 60vh;
      }

      .tab-wrap {
        .tab {
          transition: all 0.2s ease-in-out;

          &:hover {
            color: #e65e5b;
          }
          cursor: pointer;

          user-select: none;
          font-size: 40px;
          font-weight: 700;
        }
        .dot {
          cursor: default;
        }
        .selected {
          color: #e65e5b;
        }
      }
      width: 50vw;
      height: 70vh;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: space-around;
    }
    .r-box {
      position: relative;
      img {
        max-width: 400px;
        transition: all 0.4s ease-in-out;
        &:hover {
          transform: translate(-4px, 2px);
        }
        position: absolute;
        right: 30px;
        bottom: 0px;
      }
      width: 34vw;
      display: flex;
      display: inline-block;
      justify-content: space-between;
      flex-direction: column;
      height: 60vh;
    }
  }
}
</style>
