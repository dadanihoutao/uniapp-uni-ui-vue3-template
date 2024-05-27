<script setup lang="ts">
  import type { BannerItem } from '@/typings/home'
  import { getCategoryTopAPI, getHomeBannerList } from './api'
  import type { CategoryTopItem } from '@/typings/category'
  import PageSkeleton from './components/PageSkeleton.vue'

  // 获取banner
  const bannerList = ref<BannerItem[]>([])
  const fetchBannerList = async () => {
    const res = await getHomeBannerList()
    console.log(res)
    bannerList.value = res.result
  }

  // 获取分类列表数据
  const categoryList = ref<CategoryTopItem[]>([])
  const getCategoryTopData = async () => {
    const res = await getCategoryTopAPI()
    categoryList.value = res.result
  }

  // 高亮下标
  const activeIndex = ref(0)

  // 获取当前 tab 对应children 数据
  const currTabData = computed(() => {
    return categoryList.value[activeIndex.value]?.children || []
  })

  const isFinish = ref(false)
  onLoad(async () => {
    await Promise.all([fetchBannerList(), getCategoryTopData()])
    isFinish.value = true
  })
</script>

<template>
  <view class="viewport">
    <template v-if="isFinish">
      <!-- 搜索框 -->
      <view class="search">
        <view class="input">
          <text class="icon-search">女靴</text>
        </view>
      </view>
      <!-- 分类 -->
      <view class="categories">
        <!-- 左侧：一级分类 -->
        <scroll-view class="primary" scroll-y>
          <view
            v-for="(item, index) in categoryList"
            :key="item.id"
            class="item"
            @click="activeIndex = index"
            :class="{ active: index === activeIndex }"
          >
            <text class="name"> {{ item.name }} </text>
          </view>
        </scroll-view>
        <!-- 右侧：二级分类 -->
        <scroll-view class="secondary" scroll-y>
          <!-- 焦点图 -->
          <ProSwiper class="banner" :list="bannerList" />
          <!-- 内容区域 -->
          <view class="panel" v-for="item in currTabData" :key="item.id">
            <view class="title">
              <text class="name">{{ item.name }}</text>
              <navigator class="more" hover-class="none">全部</navigator>
            </view>
            <view class="section">
              <navigator
                v-for="goods in item.goods"
                :key="goods.id"
                class="goods"
                hover-class="none"
                :url="`/pages/goods/goods?id=${goods.id}`"
              >
                <image class="image" :src="goods.picture"></image>
                <view class="name ellipsis">{{ goods.name }}</view>
                <view class="price">
                  <text class="symbol">¥</text>
                  <text class="number">{{ goods.price }}</text>
                </view>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </template>
    <PageSkeleton v-else />
  </view>
</template>

<style lang="scss">
  page {
    overflow: hidden;
    height: 100%;
  }
  .viewport {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .search {
    padding: 0 30rpx 20rpx;
    background-color: #fff;
    .input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 26rpx;
      border-radius: 32rpx;
      height: 64rpx;
      background-color: #f3f4f4;
      font-size: 28rpx;
      color: #8b8b8b;
    }
  }
  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }
  /* 分类 */
  .categories {
    display: flex;
    flex: 1;
    min-height: 400rpx;
  }
  /* 一级分类 */
  .primary {
    overflow: hidden;
    flex: none;
    width: 180rpx;
    background-color: #f6f6f6;
    .item {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      height: 96rpx;
      font-size: 26rpx;
      color: #595c63;
      &::after {
        position: absolute;
        left: 42rpx;
        bottom: 0;
        border-top: 1rpx solid #e3e4e7;
        width: 96rpx;
        content: '';
      }
    }
    .active {
      background-color: #fff;
      &::before {
        position: absolute;
        left: 0;
        top: 0;
        width: 8rpx;
        height: 100%;
        background-color: #27ba9b;
        content: '';
      }
    }
  }
  .primary .item:last-child::after,
  .primary .active::after {
    display: none;
  }
  /* 二级分类 */
  .secondary {
    background-color: #fff;
    .carousel {
      overflow: hidden;
      margin: 0 30rpx 20rpx;
      border-radius: 4rpx;
      height: 200rpx;
    }
    .panel {
      margin: 0 30rpx 0rpx;
    }
    .title {
      border-bottom: 1rpx solid #f7f7f8;
      height: 60rpx;
      line-height: 60rpx;
      font-size: 28rpx;
      color: #333;
      .more {
        float: right;
        padding-left: 20rpx;
        font-size: 24rpx;
        color: #999;
      }
    }
    .section {
      display: flex;
      flex-wrap: wrap;
      padding: 20rpx 0;
      width: 100%;
      .goods {
        margin: 0rpx 30rpx 20rpx 0;
        width: 150rpx;
        &:nth-child(3n) {
          margin-right: 0;
        }
        image {
          width: 150rpx;
          height: 150rpx;
        }
        .name {
          padding: 5rpx;
          font-size: 22rpx;
          color: #333;
        }
        .price {
          padding: 5rpx;
          font-size: 18rpx;
          color: #cf4444;
        }
        .number {
          margin-left: 2rpx;
          font-size: 24rpx;
        }
      }
    }
  }
</style>
