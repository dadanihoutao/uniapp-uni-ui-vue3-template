<template>
  <view class="content">
    <view class="text-area">
      <van-button type="primary" @click="goback()">返回</van-button>
      <text>测试页面</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const title = ref('Hello')
title.value = '测试测试'


const goback = () => {
  uni.navigateBack()
}


</script>

<style>
</style>
