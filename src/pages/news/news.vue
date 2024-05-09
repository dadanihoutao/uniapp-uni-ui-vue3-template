<script setup lang="ts">
  const title = ref('Hello')
  title.value = '123'

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
      <text>新闻页面</text>
    </view>
  </view>
</template>

<style lang="scss"></style>
