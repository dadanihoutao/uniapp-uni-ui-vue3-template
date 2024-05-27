<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text class="icon-search sk-transparent sk-text-14-2857-616 sk-text"
            >女靴</text
          >
        </view>
      </view>
      <view class="categories categories">
        <scroll-view :scroll-y="true" class="primary primary">
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-103 sk-text"
              >居家</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-859 sk-text"
              >美食</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-286 sk-text"
              >服饰</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-959 sk-text"
              >母婴</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-687 sk-text"
              >个护</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-913 sk-text"
              >严选</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-282 sk-text"
              >数码</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-75 sk-text"
              >运动</text
            >
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-87 sk-text"
              >杂项</text
            >
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary secondary">
          <view class="banner banner">
            <view class="carousel ProSwiper--carousel">
              <swiper
                :circular="true"
                :interval="3000"
                :current="0"
                :autoplay="false"
              >
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0) translateZ(0);
                  "
                >
                  <navigator
                    class="navigator ProSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image ProSwiper--image sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0) translateZ(0);
                  "
                >
                  <navigator
                    class="navigator ProSwiper--navigator"
                    hover-class="none"
                  >
                    <image
                      class="image ProSwiper--image sk-image"
                      mode="aspectFill"
                    ></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator ProSwiper--indicator">
                <text
                  class="dot ProSwiper--dot active ProSwiper--active"
                ></text>
                <text class="dot ProSwiper--dot"></text>
                <text class="dot ProSwiper--dot"></text>
                <text class="dot ProSwiper--dot"></text>
                <text class="dot ProSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-6667-590 sk-text"
                >居家生活用品</text
              >
              <navigator
                class="more sk-transparent sk-text-30-0000-334 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-461 sk-text"
                  >钻石陶瓷涂层多用锅18cm 小奶锅</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text
                    class="number sk-transparent sk-text-14-2857-829 sk-text"
                    >149.00</text
                  >
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-200 sk-text"
                  >极光限定 珠光蓝珐琅锅</view
                >
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text
                    class="number sk-transparent sk-text-14-2857-986 sk-text"
                    >199.00</text
                  >
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-6667-666 sk-text"
                >收纳</text
              >
              <navigator
                class="more sk-transparent sk-text-30-0000-505 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
                >全部</navigator
              >
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-852 sk-text"
                  >给衣柜减减肥，真空防潮压缩袋</view
                >
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-743 sk-text"
                  >爆款明星好物，抽屉式透明储物柜</view
                >
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view
                  class="name ellipsis sk-transparent sk-text-14-2857-436 sk-text"
                  >衣柜省空间神器，棉麻涤·收纳挂袋</view
                >
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
  .sk-transparent {
    color: transparent !important;
  }
  .sk-text-14-2857-616 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.2rpx;
  }
  .sk-text {
    background-color: transparent !important;
    background-repeat: repeat-y !important;
    background-origin: content-box !important;
    background-clip: content-box !important;
    color: transparent !important;
  }
  .sk-text-14-2857-103 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-859 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-286 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-959 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-687 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-913 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-282 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-75 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-87 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-26-6667-590 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 26.6667%,
      #eee 0%,
      #eee 73.3333%,
      transparent 0%
    ) !important;
    background-size: 100% 60rpx;
  }
  .sk-text-30-0000-334 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 30%,
      #eee 0%,
      #eee 70%,
      transparent 0%
    ) !important;
    background-size: 100% 60rpx;
  }
  .sk-text-14-2857-461 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
  }
  .sk-opacity {
    opacity: 0 !important;
  }
  .sk-text-14-2857-829 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
  }
  .sk-text-14-2857-200 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
  }
  .sk-text-14-2857-986 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
  }
  .sk-text-26-6667-666 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 26.6667%,
      #eee 0%,
      #eee 73.3333%,
      transparent 0%
    ) !important;
    background-size: 100% 60rpx;
  }
  .sk-text-30-0000-505 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 30%,
      #eee 0%,
      #eee 70%,
      transparent 0%
    ) !important;
    background-size: 100% 60rpx;
  }
  .sk-text-14-2857-852 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
  }
  .sk-text-14-2857-743 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
  }
  .sk-text-14-2857-436 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 30.8rpx;
  }
  .sk-image {
    background: #efefef !important;
  }
  .sk-pseudo::before,
  .sk-pseudo::after {
    border-color: transparent !important;
    background: #efefef !important;
    background-image: none !important;
    color: transparent !important;
  }
  .sk-pseudo-rect::before,
  .sk-pseudo-rect::after {
    border-radius: 0 !important;
  }
  .sk-pseudo-circle::before,
  .sk-pseudo-circle::after {
    border-radius: 50% !important;
  }
  .sk-container {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
</style>
