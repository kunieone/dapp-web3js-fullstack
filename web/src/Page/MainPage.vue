<template>
  <Banner></Banner>
  <MiddleEntry></MiddleEntry>

  <MiddleWrap>
    <Intro
      title="介绍"
      text="医盟链是一个搭建在区块链上的医疗服务平台。在这里你可以申请看病服务，也可以作为医生接收他人的申请病例单。与以往服务平台的不同点是，我们的服务平台数据是存放在一个去中心化的并在技术上有安全保障的区块链上。"
    />
    <Intro
      title="确保你的隐私安全"
      text="不像传统医疗行业，你的所有病单数据，总是存放在一个中心化的医院，不能完全保证数据的安全，而我们将您的这些数据上链，并且使用非对称加密，在技术上保证了您的隐私安全，攻击者想要窃取，篡改你的数据难上加难。"
    ></Intro>
    <Intro
      title="灵感"
      text="传统的医疗软件系统大都使用中心化的存储方式存储病历数据，系统将电子 病历数据存储到数据库当中，这种中心化的存储方式存在病历数据易泄露和信息 共享难的缺点。本文研究的基于区块链技术的电子病历存证系统，是一种防止用 户数据泄露、篡改和实现数据共享的一种数据安全解决方案。本系统将传统的电子病历数据拆分成患者个人信息数据和单条的病例数据，使用传统数据库和区块链技术相结合的方式存储数据，将单条病例数据存储在传统数据库中，而将患者 个人信息数据和病例在数据库中的索引数据存储在区块链网络中。系统通过对不 同所有权的数据分离存储的方式，解决信息所有权错位和数据安全共享等难题。"
    ></Intro>
  </MiddleWrap>
</template>
<script lang="ts" setup>
import MiddleEntry from "../components/MiddleEntry.vue";
import Intro from "../components/Intro.vue";
import MiddleWrap from "../components/MiddleWrap.vue";
import Banner from "../components/Banner.vue";
</script>
<style lang="less"></style>
