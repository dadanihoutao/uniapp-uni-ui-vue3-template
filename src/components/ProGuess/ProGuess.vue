<script setup lang="ts">
  import type { GuessItem } from '@/typings/home'
  import { getGoodsGuessLike } from './api'
  import type { PageParams } from '@/typings/global'

  // Required 必传的意思
  const pageParams: Required<PageParams> = {
    page: 1,
    pageSize: 10
  }
  const guessList = ref<GuessItem[]>([])
  const finish = ref<boolean>(false)
  const fetchGuessList = async () => {
    // 加载完所有数据后 直接 return
    if (finish.value) return
    const res = await getGoodsGuessLike(pageParams)
    guessList.value = guessList.value.concat(res.result.items)
    if (pageParams.page < res.result.pages) {
      pageParams.page++
    } else {
      finish.value = true
    }
  }

  // 从新加载数据
  const reloadData = () => {
    pageParams.page = 1
    guessList.value = []
    finish.value = false
    fetchGuessList()
  }

  onMounted(() => {
    fetchGuessList()
  })

  // 暴露
  defineExpose({
    fetchGuessList,
    reloadData
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
        {{ item.name }}
      </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">
    {{ finish ? '没有更多数据了~' : '正在加载...' }}
  </view>
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
