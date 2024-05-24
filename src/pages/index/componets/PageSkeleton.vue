<template name="skeleton">
  <view class="sk-container">
    <view class="scroll-view-wrap scroll-view-wrap">
      <view>
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
          </swiper>
          <view class="indicator ProSwiper--indicator">
            <text class="dot ProSwiper--dot active ProSwiper--active"></text>
            <text class="dot ProSwiper--dot"></text>
            <text class="dot ProSwiper--dot"></text>
            <text class="dot ProSwiper--dot"></text>
            <text class="dot ProSwiper--dot"></text>
          </view>
        </view>
      </view>
      <view>
        <view class="category CategoryPanel--category">
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-87 sk-text"
              >居家</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-704 sk-text"
              >锦鲤</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-852 sk-text"
              >服饰</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-307 sk-text"
              >母婴</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-18 sk-text"
              >个护</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-556 sk-text"
              >严选</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-557 sk-text"
              >数码</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-236 sk-text"
              >运动</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-619 sk-text"
              >杂项</text
            >
          </navigator>
          <navigator
            class="category-item CategoryPanel--category-item"
            hover-class="none"
          >
            <image class="icon CategoryPanel--icon sk-image"></image>
            <text
              class="text CategoryPanel--text sk-transparent sk-text-14-2857-510 sk-text"
              >品牌</text
            >
          </navigator>
        </view>
      </view>
      <view>
        <view class="panel HotPanels--panel hot HotPanels--hot">
          <view class="item HotPanels--item">
            <view class="title HotPanels--title">
              <text
                class="title-text HotPanels--title-text sk-transparent sk-text-14-2857-524 sk-text"
                >特惠推荐</text
              >
              <text
                class="title-desc HotPanels--title-desc sk-transparent sk-text-14-2857-185 sk-text"
                >精选全攻略</text
              >
            </view>
            <navigator class="cards HotPanels--cards" hover-class="none">
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanels--item">
            <view class="title HotPanels--title">
              <text
                class="title-text HotPanels--title-text sk-transparent sk-text-14-2857-711 sk-text"
                >爆款推荐</text
              >
              <text
                class="title-desc HotPanels--title-desc sk-transparent sk-text-14-2857-546 sk-text"
                >最受欢迎</text
              >
            </view>
            <navigator class="cards HotPanels--cards" hover-class="none">
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanels--item">
            <view class="title HotPanels--title">
              <text
                class="title-text HotPanels--title-text sk-transparent sk-text-14-2857-748 sk-text"
                >一站买全</text
              >
              <text
                class="title-desc HotPanels--title-desc sk-transparent sk-text-14-2857-302 sk-text"
                >精心优选</text
              >
            </view>
            <navigator class="cards HotPanels--cards" hover-class="none">
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
            </navigator>
          </view>
          <view class="item HotPanels--item">
            <view class="title HotPanels--title">
              <text
                class="title-text HotPanels--title-text sk-transparent sk-text-14-2857-252 sk-text"
                >新鲜好物</text
              >
              <text
                class="title-desc HotPanels--title-desc sk-transparent sk-text-14-2857-874 sk-text"
                >生活加分项</text
              >
            </view>
            <navigator class="cards HotPanels--cards" hover-class="none">
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
              <image
                class="image HotPanels--image sk-image"
                mode="scaleToFill"
              ></image>
            </navigator>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style>
  .sk-transparent {
    color: transparent !important;
  }
  .sk-text-3-5714-908 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 3.5714%,
      #eee 0%,
      #eee 96.4286%,
      transparent 0%
    ) !important;
    background-size: 100% 28rpx;
  }
  .sk-text {
    background-color: transparent !important;
    background-repeat: repeat-y !important;
    background-origin: content-box !important;
    background-clip: content-box !important;
    color: transparent !important;
  }
  .sk-text-14-2857-729 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 39.2rpx;
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
  .sk-text-14-2857-704 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-852 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-307 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-18 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-556 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-557 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-236 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-619 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-510 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 36.4rpx;
  }
  .sk-text-14-2857-524 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
  }
  .sk-text-14-2857-185 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
  }
  .sk-text-14-2857-711 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
  }
  .sk-text-14-2857-546 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
  }
  .sk-text-14-2857-748 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
  }
  .sk-text-14-2857-302 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
  }
  .sk-text-14-2857-252 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 44.8rpx;
  }
  .sk-text-14-2857-874 {
    position: relative !important;
    background-image: linear-gradient(
      transparent 14.2857%,
      #eee 0%,
      #eee 85.7143%,
      transparent 0%
    ) !important;
    background-size: 100% 33.6rpx;
  }
  .sk-image {
    background: #efefef !important;
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
