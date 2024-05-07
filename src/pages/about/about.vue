<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <van-button type="primary" @click="toTest()">去test 测试页面</van-button>
      <text>关于我们</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello')
title.value = '测试测试'


const toTest = () => {
  uni.navigateTo({
    url: '/pages/test/test'
  })
}


</script>

<style>
</style>
