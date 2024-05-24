<script setup lang="ts">
  import CustomNavbar from './componets/CustomNavbar.vue'
  import CategoryPanel from './componets/CategoryPanel.vue'

  import { getHomeBannerList, getCategoryList } from './api'
  import type { BannerItem, CategoryItem } from '@/types/home'
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

  // 初始化
  onLoad(() => {
    fetchBannerList()
    fetchCategoryList()
  })
</script>
<template>
  <view>
    <CustomNavbar />
    <ProSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <text>index</text>
  </view>
</template>

<style lang="scss"></style>
