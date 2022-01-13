<template>
  <div class="regi-wrap">
    <radius-form>
      <h1 class="title">
        <router-link to="register" class="redir-tag"> <span>注册</span> </router-link>

        <span> | </span>
        <router-link to="login" class="redir-tag">
          <span>登录</span>
        </router-link>
      </h1>

      <keep-alive>
        <transition animation="out-in">
          <router-view> </router-view>
        </transition>
      </keep-alive>
      <div>
        <div class="back">
          <a href="/">
            <i class="bi bi-arrow-left-square-fill"></i>
          </a>
          <!-- <p>返回主页</p> -->
        </div>
        <img class="doc-img" src="../assets/man_doctor.svg" alt="" />
      </div>
    </radius-form>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less">
@import url(.././assets/css/register);

.regi-wrap {
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    background: none;
    outline: none;
    border: 0px;
  }
  radius-form {
    .title {
      left: 65px;
      font-size: 46px;
      top: 65px;
      margin: auto;
      position: relative;
      .redir-tag {
        &:hover {
          transform: translate(0px, -4px);

          color: #e4585c;
        }
        transition: all 0.5s ease-in-out;
      }
    }
    position: relative;
    width: 80vw;
    border-width: 0px;
    height: 83vh;
    background-color: rgb(255, 255, 255);
    border-radius: 30px;
    box-shadow: gainsboro 2px 2px 50px;
    min-width: 700px;

    .doc-img {
      position: absolute;
      bottom: 0px;
      right: 50px;
      max-width: 300px;
      height: 300px;

      overflow: hidden;
    }
  }
}
@media screen and (max-width: 1220px) {
  .regi-wrap {
    height: 120vh;
  }
}
</style>
