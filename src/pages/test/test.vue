<script setup lang="ts">
const title = ref('Hello')
title.value = '测试测试'

onLoad(() => {
  console.log('页面加载完成')
})

const goback = () => {
  uni.navigateBack()
}


</script>

<template>
  <view class="content">
    <view class="text-area">
      <button type="primary" @click="goback()">返回</button>
      <text>测试页面</text>
    </view>
  </view>
</template>

<style>
</style>
