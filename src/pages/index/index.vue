<script setup lang="ts">
  import CustomNavbar from './componets/CustomNavbar.vue'
  import CategoryPanel from './componets/CategoryPanel.vue'
  import HotPanels from './componets/HotPanels.vue'

  import { getHomeBannerList, getCategoryList, getHomeHot } from './api'
  import type { BannerItem, CategoryItem, HotItem } from '@/typings/home'
  // 获取轮播图数据
  const bannerList = ref<BannerItem[]>([])
  const fetchBannerList = async () => {
    const res = await getHomeBannerList()
    bannerList.value = res.result
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

  // 初始化
  onLoad(() => {
    fetchBannerList()
    fetchCategoryList()
    fetchHotList()
  })
</script>
<template>
  <CustomNavbar />
  <view class="scroll-view-wrap">
    <scroll-view class="scroll-view" scroll-y>
      <ProSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanels :list="hotList" />
      <ProGuess />
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
