<script setup lang="ts">
  import type { BannerItem } from '@/typings/home'
  import { ref } from 'vue'

  const activeIndex = ref<number>(0)

  // UniHelper 为 uni-app 提供事件类型，这样参数就会有提示，不用去查阅文档
  const handleChange: UniHelper.SwiperOnChange = (event) => {
    activeIndex.value = event.detail.current
  }

  // 重置索引
  const resetData = () => {
    activeIndex.value = 0
  }

  // 定义 props
  defineProps<{
    list: BannerItem[]
  }>()

  // 暴露
  defineExpose({
    resetData
  })
</script>

<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="3000"
      @change="handleChange"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
  :host {
    display: block;
    height: 280rpx;
  }
  /* 轮播图 */
  .carousel {
    overflow: hidden;
    position: relative;
    // height: 100%;
    background-color: #efefef;
    transform: translateY(0);
    .indicator {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 16rpx;
      justify-content: center;
      .dot {
        margin: 0 8rpx;
        border-radius: 6rpx;
        width: 30rpx;
        height: 6rpx;
        background-color: rgb(255 255 255 / 0.4);
      }
      .active {
        background-color: #fff;
      }
    }
    .navigator,
    .image {
      width: 100%;
      height: 100%;
    }
  }
</style>
