<template>
  <div class="intro-wrap">
    <div class="intro">
      <h1>{{ title }}</h1>
      <h4>
        {{ text }}
      </h4>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string;
    text: string;
  }>(),
  {
    title: "Title",
    text: "Content",
  }
);
</script>
<style lang="less">
.intro-wrap {
  // transition: transform 0.5 ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
}
.intro {
  h1 {
    &:hover {
      color: #b13838;
    }
    line-height: 50px;
    transition: all 0.4s ease-out;
    cursor: pointer;
  }
  h4 {
    line-height: 27px;

    font-size: large;
  }

  box-shadow: 2px 2px 40px rgba(168, 168, 168, 0.514);
  min-height: 100px;
  padding: 30px;
  min-width: 350px;
  max-width: 850px;
  text-indent: 25px;
  margin: 30px;
  font-family: YuanTi;
  transition: all 0.4s ease-out;

  border-radius: 30px;
  color: rgb(106, 106, 106);

  &:hover {
    transform: translate(5px, 2px);
    color: black;
    box-shadow: 2px 20px 70px rgba(157, 157, 157, 0.514);
    font-weight: 700;
  }
}
</style>
