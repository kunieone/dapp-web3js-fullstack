<template>
  <div class="input-box">
    <div class="input-wrap">
      <input type="text" class="input-span" placeholder="请输入手机号或邮箱" />
    </div>
    <div class="password-wrap">
      <input type="password" class="password-span" placeholder="请输入密码" />
    </div>
    <div class="hospital-wrap">
      <input type="text" class="password-span" placeholder="所属医院编号" />
    </div>
    <div class="submit-wrap">
      <button class="submit-span">123</button>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less">
input,
button {
  background: none;
  outline: none;
  border: none;
}
.input-box {
  text-decoration: none;
  .submit-span {
    background-color: rgb(233, 153, 153);
    padding: 10px 20px;
    width: 400px;
    height: 55px;
    align-self: start;
    border-radius: 35px;
  }
  .input-span,
  · .password-span {
    box-shadow: 2px 2px 15px rgb(228, 228, 228) inset;
    border-radius: 35px;
    width: 400px;
    height: 37px;
    padding: 10px 20px;
    &::placeholder {
      color: rgb(141, 141, 141);
      user-select: none;
    }
  }

  height: auto;
  display: flex;
  height: 300px;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: right;
  width: 100%;
}
</style>
