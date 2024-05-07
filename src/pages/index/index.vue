<template>
  <view class="content">
    <!-- <image class="logo" src="/static/logo.png" /> -->
    <view class="text-area">
      <!-- <text class="title">{{ title }}</text> -->
      <van-button type="primary">按钮</van-button>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
      />
      <van-icon name="close" />
      <van-icon name="chat" info="99+" />

    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
title.value = '测试测试'
</script>

<style>
</style>
