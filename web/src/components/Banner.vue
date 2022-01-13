<template>
  <banner-wrap>
    <banner-top>
      <banner-left class="focus-in-expand">
        <p>医盟链</p>
        <small-intro>区块链+医疗解决方案</small-intro>
      </banner-left>
      <banner-right>
        <img src="../assets/index.svg" alt="" srcset="" />
      </banner-right>
    </banner-top>
    <banner-bottom> <p>——一个用户友好、安全的去中心化医疗平台——</p></banner-bottom>
  </banner-wrap>
</template>
<script lang="ts" setup></script>
<style lang="less">
.focus-in-expand {
  color: rgb(235, 98, 64);
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.shadow-drop-2-top {
  animation: shadow-drop-2-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@media screen and (max-width: 1220px) {
  banner-wrap {
    height: 100vh;
    padding: 50px;
    banner-top {
      flex-direction: column;
    }
  }
}
banner-wrap {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  banner-top {
    display: flex;
    justify-content: center;
    align-items: center;
    banner-left {
      small-intro {
        font-size: 40px;
        color: #000;
      }
      &:hover {
        text-shadow: #ffffff 2px 2px 20px;
        transform: translate(0px, -4px);
      }

      transition: all 0.5s ease-in-out;
      color: rgb(32, 5, 5);
      font-family: YuanTi;
      font-size: 60px;
      font-weight: 200;
      user-select: none;
    }
    banner-right {
      img {
        &:hover {
          transform: translate(-15px, 0px);
        }
        transition: all 0.5s ease-out;
        max-width: 500px;
        padding: 20px;
      }
    }
  }
  banner-bottom {
    p {
      transition: all 0.5s ease-in-out;
      &:hover {
        transform: translate(0px, 5px);
        font-weight: 800;
        color: #586cf5;
      }
    }

    display: flex;
    justify-content: center;
    align-items: center;
    p {
      cursor: default;

      color: rgb(74, 74, 74);
      font-family: YuanTi;
      font-size: 20px;
    }
  }
}

@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}
@keyframes shadow-drop-2-top {
  0% {
    transform: translateZ(0) translateY(0);
    box-shadow: 0 0 0 0 transparent;
  }
  100% {
    transform: translateZ(50px) translateY(12px);
    box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35);
  }
}
</style>
