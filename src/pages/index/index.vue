<script setup lang="ts">
  import CustomNavbar from './componets/CustomNavbar.vue'
  import CategoryPanel from './componets/CategoryPanel.vue'
  import HotPanels from './componets/HotPanels.vue'
  import ProGuess from '@/components/ProGuess/ProGuess.vue'
  import PageSkeleton from './componets/PageSkeleton.vue'
  import ProSwiper from '@/components/ProSwiper/ProSwiper.vue'

  import { getHomeBannerList, getCategoryList, getHomeHot } from './api'
  import type { BannerItem, CategoryItem, HotItem } from '@/typings/home'
  // 获取轮播图数据
  const bannerRef = ref<InstanceType<typeof ProSwiper>>()
  const bannerList = ref<BannerItem[]>([])
  const fetchBannerList = async () => {
    const res = await getHomeBannerList()
    bannerList.value = res.result
    bannerRef.value?.resetData()
  }

  // 获取前台分类
  const categoryList = ref<CategoryItem[]>([])
  const fetchCategoryList = async () => {
    const res = await getCategoryList()
    categoryList.value = res.result
  }

  // 获取热门列表
  const hotList = ref<HotItem[]>([])
  const fetchHotList = async () => {
    const res = await getHomeHot()
    hotList.value = res.result
  }

  const guessRef = ref<InstanceType<typeof ProGuess>>()
  // 滚动触底
  const handleScrollToLower = () => {
    guessRef.value?.fetchGuessList()
  }

  // 下拉刷新被触发
  const isTriggered = ref(false)
  const handleRefresherrefresh = async () => {
    isTriggered.value = true
    // 从新加载猜你喜欢数据
    guessRef.value?.reloadData()
    await init()
    isTriggered.value = false
  }

  // 初始化
  const isLoading = ref(false)
  onLoad(async () => {
    isLoading.value = true
    await init()
    isLoading.value = false
  })

  const init = async () => {
    await Promise.all([fetchBannerList(), fetchCategoryList(), fetchHotList()])
  }
</script>
<template>
  <CustomNavbar />
  <view class="scroll-view-wrap">
    <scroll-view
      class="scroll-view"
      scroll-y
      refresher-enabled
      :refresher-triggered="isTriggered"
      @refresherrefresh="handleRefresherrefresh"
      @scrolltolower="handleScrollToLower"
    >
      <!-- 骨架屏 -->
      <PageSkeleton v-if="isLoading" />
      <template v-else>
        <ProSwiper ref="bannerRef" :list="bannerList" />
        <CategoryPanel :list="categoryList" />
        <HotPanels :list="hotList" />
        <ProGuess ref="guessRef" />
      </template>
    </scroll-view>
  </view>
</template>

<style lang="scss">
  page {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #f7f7f7;
  }
  .scroll-view-wrap {
    overflow: hidden;
    flex: 1;
    .scroll-view {
      height: 100%;
    }
  }
</style>
