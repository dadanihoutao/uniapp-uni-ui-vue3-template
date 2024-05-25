// /src/pages/hot/hot.vue
<script setup lang="ts">
  import { onLoad } from '@dcloudio/uni-app'

  // 热门推荐页 标题和url
  const hotMap = [
    { type: '1', title: '特惠推荐', url: '/hot/preference' },
    { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
    { type: '3', title: '一站买全', url: '/hot/oneStop' },
    { type: '4', title: '新鲜好物', url: '/hot/new' }
  ]

  // 接收 url 传递过来的参数
  const query = defineProps<{
    type: string
  }>()

  onLoad(() => {
    const currenMap = hotMap.find((item) => item.type === query.type)
    uni.setNavigationBarTitle({ title: currenMap!.title })
  })
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image
        src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-05-20/84abb5b1-8344-49ae-afc1-9cb932f3d593.jpg"
      ></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text class="text active">抢先尝鲜</text>
      <text class="text">新品预告</text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view scroll-y class="scroll-view">
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in 10"
          :key="goods"
          :url="`/pages/goods/goods?id=`"
        >
          <image
            class="thumb"
            src="https://yanxuan-item.nosdn.127.net/5e7864647286c7447eeee7f0025f8c11.png"
          ></image>
          <view class="name ellipsis">不含酒精，使用安心爽肤清洁湿巾</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">29.90</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">正在加载...</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  page {
    height: 100%;
    background-color: #f4f4f4;
  }
  .viewport {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 180rpx 0 0;
    height: 100%;
  }
  .cover {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 0 0 40rpx 40rpx;
    width: 750rpx;
    height: 225rpx;
  }
  .scroll-view {
    flex: 1;
  }
  .tabs {
    display: flex;
    position: relative;
    z-index: 9;
    justify-content: space-evenly;
    margin: 0 20rpx;
    border-radius: 10rpx;
    height: 100rpx;
    background-color: #fff;
    box-shadow: 0 4rpx 5rpx rgb(200 200 200 / 0.3);
    line-height: 90rpx;
    font-size: 28rpx;
    color: #333;
    .text {
      position: relative;
      margin: 0 20rpx;
    }
    .active {
      &::after {
        position: absolute;
        left: 50%;
        bottom: 24rpx;
        width: 40rpx;
        height: 4rpx;
        background-color: #27ba9b;
        content: '';
        transform: translate(-50%);
      }
    }
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx 20rpx;
    .navigator {
      margin-top: 20rpx;
      padding: 20rpx;
      border-radius: 10rpx;
      width: 345rpx;
      background-color: #fff;
    }
    .thumb {
      width: 305rpx;
      height: 305rpx;
    }
    .name {
      height: 88rpx;
      font-size: 26rpx;
    }
    .price {
      line-height: 1;
      font-size: 30rpx;
      color: #cf4444;
    }
    .symbol {
      font-size: 70%;
    }
    .decimal {
      font-size: 70%;
    }
  }
  .loading-text {
    padding: 20rpx 0 50rpx;
    text-align: center;
    font-size: 28rpx;
    color: #666;
  }
</style>
