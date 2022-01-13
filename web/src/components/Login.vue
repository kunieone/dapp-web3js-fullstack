<template>
  <div class="input-box">
    <div class="input-wrap">
      <input type="text" class="input-span" placeholder="请输入手机号或邮箱" />
    </div>
    <div class="password-wrap">
      <input type="password" class="password-span" placeholder="请输入密码" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less">
.input-box {
  text-decoration: none;

  .input-span,
  .password-span {
    &::placeholder {
      color: rgb(141, 141, 141);
      user-select: none;
    }
    background: none;
    outline: none;
    border: none;
    height: 37px;
    box-shadow: 2px 2px 15px rgb(228, 228, 228) inset;
    border-radius: 35px;
    padding: 10px 20px;
    width: 400px;
  }

  height: auto;
  display: flex;
  height: 300px;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
</style>
