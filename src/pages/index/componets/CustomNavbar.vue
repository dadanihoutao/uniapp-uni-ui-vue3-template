<script setup lang="ts" name="CustomNavbar">
  // 获取安全区域数据
  const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss">
  /* 自定义导航条 */
  .navbar {
    display: flex;
    position: relative;
    flex-direction: column;
    padding-top: 20px;
    background-image: url("@/static/images/navigator_bg.png");
    background-size: cover;
    .logo {
      display: flex;
      align-items: center;
      padding-left: 30rpx;
      padding-top: 20rpx;
      height: 64rpx;
      .logo-image {
        width: 166rpx;
        height: 39rpx;
      }
      .logo-text {
        flex: 1;
        margin: 2rpx 0 0 20rpx;
        padding-left: 20rpx;
        border-left: 1rpx solid #fff;
        line-height: 28rpx;
        font-size: 26rpx;
        color: #fff;
      }
    }
    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16rpx 20rpx;
      padding: 0 10rpx 0 26rpx;
      border-radius: 32rpx;
      height: 64rpx;
      background-color: rgb(255 255 255 / 0.5);
      font-size: 28rpx;
      color: #fff;
    }
    .icon-search {
      &::before {
        margin-right: 10rpx;
      }
    }
    .icon-scan {
      padding: 15rpx;
      font-size: 30rpx;
    }
  }
</style>
