<script setup lang="ts">
  const title = ref('Hello')
  title.value = '123'

  onLoad(() => {
    console.log('页面加载完成')
  })

  const goBack = () => {
    uni.navigateBack()
  }
</script>

<template>
  <view class="content">
    <view class="text-area">
      <button type="primary" @click="goBack()">返回</button>
      <text>测试页面</text>
      <image src="" mode="scaleToFill" />
    </view>
  </view>
</template>

<style></style>
