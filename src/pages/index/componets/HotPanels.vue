<script setup lang="ts">
  import type { HotItem } from '@/typings/home'

  defineProps<{
    list: HotItem[]
  }>()
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator hover-class="none" url="/pages/hot/hot" class="cards">
        <image
          v-for="img in item.pictures"
          :key="img"
          class="image"
          mode="scaleToFill"
          :src="img"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
  /* 热门推荐 */
  .hot {
    display: flex;
    flex-wrap: wrap;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    min-height: 508rpx;
    background-color: #fff;
    .title {
      display: flex;
      position: relative;
      align-items: center;
      padding: 24rpx 24rpx 0;
      font-size: 32rpx;
      color: #262626;
      .title-desc {
        margin-left: 18rpx;
        font-size: 24rpx;
        color: #7f7f7f;
      }
    }
    .item {
      display: flex;
      flex-direction: column;
      border-right: 1rpx solid #eee;
      border-top: 1rpx solid #eee;
      width: 49%;
      height: 254rpx;
      .title {
        justify-content: start;
      }
      &:nth-child(2n) {
        border-right: 0 none;
      }
      &:nth-child(-n + 2) {
        border-top: 0 none;
      }
      .image {
        width: 150rpx;
        height: 150rpx;
      }
    }
    .cards {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      padding: 15rpx 20rpx;
    }
  }
</style>
