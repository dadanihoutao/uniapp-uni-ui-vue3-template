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

    <uni-badge text="1"></uni-badge>
    <uni-badge text="2" type="success" @click="bindClick"></uni-badge>
    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>


    </view>
  </view>
</template>

<script setup lang="ts">
  const title = ref('')
  title.value = '张三'

</script>

<style>
</style>
