// /src/pages/hot/hot.vue
<script setup lang="ts">
  import { onLoad } from '@dcloudio/uni-app'
  import { getHotListAPI } from './api'
  import type { SubTypeItem } from '@/typings/hot'

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

  const currenMap = hotMap.find((item) => item.type === query.type)

  onLoad(() => {
    uni.setNavigationBarTitle({ title: currenMap!.title })
    fetchHotData()
  })

  // 获取数据
  const bannerPicture = ref<string>()
  const subTypes = ref<SubTypeItem[]>([])
  const activeIndex = ref(0)
  const fetchHotData = async () => {
    const res = await getHotListAPI(currenMap!.url)
    bannerPicture.value = res.result.bannerPicture
    subTypes.value = res.result.subTypes
  }

  // tab 切换
  const handleTabClick = (index: number) => {
    activeIndex.value = index
  }

  // 触底
  const handleScrollToLower = async () => {
    // 获取当前选项
    const currSubType = subTypes.value[activeIndex.value]
    // 当前页码累加
    currSubType.goodsItems.page++
    // 调用 api 获取数据
    const res = await getHotListAPI(currenMap!.url, {
      subType: currSubType.id,
      page: currSubType.goodsItems.page,
      pageSize: currSubType.goodsItems.pageSize
    })

    // 新的列表选项
    const newSubType = res.result.subTypes[activeIndex.value]
    // 数组追加
    currSubType.goodsItems.items = currSubType.goodsItems.items.concat(
      newSubType.goodsItems.items
    )
  }
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        class="text"
        :class="{ active: index === activeIndex }"
        @click="handleTabClick(index)"
        >{{ item.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <view class="scroll-view-wrap">
      <scroll-view
        scroll-y
        class="scroll-view"
        v-for="(item, index) in subTypes"
        :key="item.id"
        v-show="index === activeIndex"
        @scrolltolower="handleScrollToLower"
      >
        <view class="goods">
          <navigator
            hover-class="none"
            class="navigator"
            v-for="goods in item.goodsItems.items"
            :key="goods.id"
            :url="`/pages/goods/goods?id=${goods.id}`"
          >
            <image class="thumb" :src="goods.picture"></image>
            <view class="name ellipsis">{{ goods.name }}</view>
            <view class="price">
              <text class="symbol">¥</text>
              <text class="number">{{ goods.price }}</text>
            </view>
          </navigator>
        </view>
        <view class="loading-text">正在加载...</view>
      </scroll-view>
    </view>
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
    // padding: 180rpx 0 0;
    height: 100%;
  }
  .cover {
    overflow: hidden;
    // position: absolute;
    // left: 0;
    // top: 0;
    // padding: 180rpx 0 0;
    border-radius: 0 0 40rpx 40rpx;
    width: 750rpx;
    height: 225rpx;
    image {
      width: 100%;
      height: 225rpx;
    }
  }
  .scroll-view-wrap {
    overflow: hidden;
    flex: 1;
  }
  .scroll-view {
    height: 100%;
  }
  .tabs {
    display: flex;
    position: relative;
    z-index: 9;
    justify-content: space-evenly;
    margin: 0 20rpx;
    margin-top: -50rpx;
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
      width: 305rpx;
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
