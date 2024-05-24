<script setup lang="ts">
  import CustomNavbar from './componets/CustomNavbar.vue'
  import { getHomeBannerList } from './api'
  import type { BannerItem } from '@/types/home'
  // 获取轮播图数据
  const bannerList = ref<BannerItem[]>([])
  const fetchBannerList = async () => {
    const res = await getHomeBannerList()
    bannerList.value = res.result
  }

  // 初始化
  onLoad(() => {
    fetchBannerList()
  })
</script>
<template>
  <view>
    <CustomNavbar />
    <ProSwiper :list="bannerList" />
    <text>index</text>
  </view>
</template>

<style lang="scss"></style>
