// src/pages/goods/goods.vue
<script setup lang="ts">
  // 获取屏幕边界到安全区域距离
  const { safeAreaInsets } = uni.getSystemInfoSync()

  const query = defineProps<{
    id: string
  }>()

  console.log(query)
</script>

<template>
  <scroll-view scroll-y class="viewport">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper circular>
          <swiper-item>
            <image
              mode="aspectFill"
              src="https://yanxuan-item.nosdn.127.net/99c83709ca5f9fd5c5bb35d207ad7822.png"
            />
          </swiper-item>
          <swiper-item>
            <image
              mode="aspectFill"
              src="https://yanxuan-item.nosdn.127.net/f9107d47c08f0b99c097e30055c39e1a.png"
            />
          </swiper-item>
          <swiper-item>
            <image
              mode="aspectFill"
              src="https://yanxuan-item.nosdn.127.net/754c56785cc8c39f7414752f62d79872.png"
            />
          </swiper-item>
          <swiper-item>
            <image
              mode="aspectFill"
              src="https://yanxuan-item.nosdn.127.net/ef16f8127610ef56a2a10466d6dae157.jpg"
            />
          </swiper-item>
          <swiper-item>
            <image
              mode="aspectFill"
              src="https://yanxuan-item.nosdn.127.net/1f0c3f5d32b0e804deb9b3d56ea6c3b2.png"
            />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">1</text>
          <text class="split">/</text>
          <text class="total">5</text>
        </view>
      </view>

      <!-- 商品简介 -->
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">29.90</text>
        </view>
        <view class="name ellipsis">云珍·轻软旅行长绒棉方巾 </view>
        <view class="desc"> 轻巧无捻小方巾，旅行便携 </view>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view class="item arrow">
          <text class="label">选择</text>
          <text class="text ellipsis"> 请选择商品规格 </text>
        </view>
        <view class="item arrow">
          <text class="label">送至</text>
          <text class="text ellipsis"> 请选择收获地址 </text>
        </view>
        <view class="item arrow">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>

    <!-- 商品详情 -->
    <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item">
            <text class="label">属性名</text>
            <text class="value">属性值</text>
          </view>
          <view class="item">
            <text class="label">属性名</text>
            <text class="value">属性值</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image
          mode="widthFix"
          src="https://yanxuan-item.nosdn.127.net/a8d266886d31f6eb0d7333c815769305.jpg"
        ></image>
        <image
          mode="widthFix"
          src="https://yanxuan-item.nosdn.127.net/a9bee1cb53d72e6cdcda210071cbd46a.jpg"
        ></image>
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar panel">
      <view class="title">
        <text>同类推荐</text>
      </view>
      <view class="content">
        <navigator
          v-for="item in 4"
          :key="item"
          class="goods navigator"
          hover-class="none"
          :url="`/pages/goods/goods?id=`"
        >
          <image
            class="image"
            mode="aspectFill"
            src="https://yanxuan-item.nosdn.127.net/e0cea368f41da1587b3b7fc523f169d7.png"
          ></image>
          <view class="name ellipsis">简约山形纹全棉提花毛巾</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">18.50</text>
          </view>
        </navigator>
      </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view
    class="toolbar"
    :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }"
  >
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <button class="icons-button" open-type="contact">
        <text class="icon-handset"></text>客服
      </button>
      <navigator
        class="icons-button navigator"
        url="/pages/cart/cart"
        open-type="switchTab"
      >
        <text class="icon-cart"></text>购物车
      </navigator>
    </view>
    <view class="buttons">
      <view class="addcart"> 加入购物车 </view>
      <view class="buynow"> 立即购买 </view>
    </view>
  </view>
</template>

<style lang="scss">
  page {
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 100%;
  }
  .viewport {
    background-color: #f4f4f4;
  }
  .panel {
    margin-top: 20rpx;
    background-color: #fff;
    .title {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx 60rpx 30rpx 6rpx;
      height: 90rpx;
      line-height: 1;
      text {
        padding-left: 10rpx;
        border-left: 4rpx solid #27ba9b;
        font-weight: 600;
        font-size: 28rpx;
        color: #333;
      }
      .navigator {
        font-size: 24rpx;
        color: #666;
      }
    }
  }
  .arrow {
    &::after {
      position: absolute;
      right: 30rpx;
      top: 50%;
      // font-family: 'erabbit' !important;
      font-size: 32rpx;
      color: #ccc;
      content: '\e6c2';
      transform: translateY(-50%);
    }
  }
  /* 商品信息 */
  .goods {
    background-color: #fff;
    .preview {
      position: relative;
      height: 750rpx;
      .image {
        width: 750rpx;
        height: 750rpx;
      }
      .indicator {
        position: absolute;
        right: 30rpx;
        bottom: 30rpx;
        padding: 0 24rpx;
        border-radius: 30rpx;
        height: 40rpx;
        background-color: rgb(0 0 0 / 0.3);
        line-height: 40rpx;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
        .current {
          font-size: 26rpx;
        }
        .split {
          margin: 0 1rpx 0 2rpx;
          font-size: 24rpx;
        }
        .total {
          font-size: 24rpx;
        }
      }
    }
    .meta {
      position: relative;
      border-bottom: 1rpx solid #eaeaea;
      .price {
        box-sizing: border-box;
        padding: 25rpx 30rpx 0;
        height: 130rpx;
        background-color: #35c8a9;
        font-size: 34rpx;
        color: #fff;
      }
      .number {
        font-size: 56rpx;
      }
      .brand {
        overflow: hidden;
        position: absolute;
        right: 30rpx;
        top: 26rpx;
        width: 160rpx;
        height: 80rpx;
      }
      .name {
        margin: 20rpx;
        max-height: 88rpx;
        line-height: 1.4;
        font-size: 32rpx;
        color: #333;
      }
      .desc {
        padding: 0 20rpx 30rpx;
        line-height: 1;
        font-size: 24rpx;
        color: #cf4444;
      }
    }
    .action {
      padding-left: 20rpx;
      .item {
        display: flex;
        position: relative;
        align-items: center;
        padding-right: 60rpx;
        border-bottom: 1rpx solid #eaeaea;
        height: 90rpx;
        font-size: 26rpx;
        color: #333;
        &:last-child {
          border-bottom: 0 none;
        }
      }
      .label {
        margin: 0 16rpx 0 10rpx;
        width: 60rpx;
        color: #898b94;
      }
      .text {
        flex: 1;
        -webkit-line-clamp: 1;
      }
    }
  }
  /* 商品详情 */
  .detail {
    padding-left: 20rpx;
    .content {
      margin-left: -20rpx;
      .image {
        width: 100%;
      }
    }
    .properties {
      margin-bottom: 30rpx;
      padding: 0 20rpx;
      .item {
        display: flex;
        padding: 10rpx;
        border-bottom: 1rpx dashed #ccc;
        line-height: 2;
        font-size: 26rpx;
        color: #333;
      }
      .label {
        width: 200rpx;
      }
      .value {
        flex: 1;
      }
    }
  }
  /* 同类推荐 */
  .similar {
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 0 20rpx 200rpx;
      background-color: #f4f4f4;
      .goods {
        margin: 20rpx 7rpx;
        padding: 24rpx 20rpx 20rpx;
        border-radius: 10rpx;
        width: 340rpx;
        background-color: #fff;
      }
      .image {
        width: 300rpx;
        height: 260rpx;
      }
      .name {
        margin: 10rpx 0;
        height: 80rpx;
        font-size: 26rpx;
        color: #262626;
      }
      .price {
        line-height: 1;
        font-size: 20rpx;
        color: #cf4444;
      }
      .number {
        margin-left: 2rpx;
        font-size: 26rpx;
      }
    }
    .navigator {
      &:nth-child(even) {
        margin-right: 0;
      }
    }
  }
  /* 底部工具栏 */
  .toolbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    box-sizing: content-box;
    padding: 0 20rpx var(--window-bottom);
    border-top: 1rpx solid #eaeaea;
    height: 100rpx;
    background-color: #fff;
    .buttons {
      display: flex;
      & > view {
        border-radius: 72rpx;
        width: 220rpx;
        line-height: 72rpx;
        text-align: center;
        font-size: 26rpx;
        color: #fff;
      }
      .addcart {
        background-color: #ffa868;
      }
      .buynow,
      .payment {
        margin-left: 20rpx;
        background-color: #27ba9b;
      }
    }
    .icons {
      display: flex;
      align-items: center;
      flex: 1;
      padding-right: 10rpx;
      .icons-button {
        flex: 1;
        margin: 0;
        padding: 0;
        border-radius: 0;
        background-color: #fff;
        line-height: 1.4;
        text-align: center;
        font-size: 20rpx;
        color: #333;
        &::after {
          border: none;
        }
      }
      text {
        display: block;
        font-size: 34rpx;
      }
    }
  }
</style>
