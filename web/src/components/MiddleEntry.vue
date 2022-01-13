<template>
  <div class="footer">
    <div class="footer-content">
      <button-wrap>
        <router-link to="/r/"><button>我是医生</button></router-link
        ><button>我是病人</button>
      </button-wrap>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less">
.footer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  user-select: none;
  font-family: Yuanti;
  flex-flow: column wrap;
  padding: 20px;
  background-color: #e65e5b;
  button-wrap {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    button {
      transition: all 0.4s ease-in-out;
      &:hover {
        transform: translate(0px, -4px);
      }
      border-style: none;

      cursor: pointer;
      background-color: rgb(255, 255, 255);
      height: 50px;
      box-shadow: 2px 2px 20px #d03d6ec5;
      border-radius: 25px;
      padding-left: 30px;
      font-size: 18px;
      padding-right: 30px;
      color: e95f8d;
    }
  }
}
</style>
