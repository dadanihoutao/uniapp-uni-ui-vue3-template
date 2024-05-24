<script setup lang="ts">
  import type { GuessItem } from '@/typings/home'
  import { getGoodsGuessLike } from './api'

  const guessList = ref<GuessItem[]>([])
  const fetchGuessList = async () => {
    const res = await getGoodsGuessLike()
    guessList.value = res.result.items
  }

  onMounted(() => {
    fetchGuessList()
  })
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=4007498`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name">
        德国THORE男表 超薄手表男士休闲简约夜光石英防水直径40毫米
      </view>
      <view class="price">
        <text class="small">¥</text>
        <text>899.00</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> 正在加载... </view>
</template>

<style lang="scss">
  :host {
    display: block;
  }
  /* 分类标题 */
  .caption {
    display: flex;
    justify-content: center;
    padding: 36rpx 0 40rpx;
    line-height: 1;
    font-size: 32rpx;
    color: #262626;
    .text {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 28rpx 0 30rpx;
      &::before,
      &::after {
        margin: 0 10rpx;
        width: 20rpx;
        height: 20rpx;
        background-image: url('@/static/images/bubble.png');
        background-size: contain;
        content: '';
      }
    }
  }
  /* 猜你喜欢 */
  .guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;
    .guess-item {
      overflow: hidden;
      margin-bottom: 20rpx;
      padding: 24rpx 20rpx 20rpx;
      border-radius: 10rpx;
      width: 315rpx;
      background-color: #fff;
    }
    .image {
      width: 304rpx;
      height: 304rpx;
    }
    .name {
      display: -webkit-box;
      overflow: hidden;
      margin: 10rpx 0;
      height: 75rpx;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      font-size: 26rpx;
      color: #262626;
      -webkit-box-orient: vertical;
    }
    .price {
      padding-top: 4rpx;
      line-height: 1;
      font-size: 26rpx;
      color: #cf4444;
    }
    .small {
      font-size: 80%;
    }
  }
  // 加载提示文字
  .loading-text {
    padding: 20rpx 0;
    text-align: center;
    font-size: 28rpx;
    color: #666;
  }
</style>
