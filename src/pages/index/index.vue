<script setup lang="ts">
  const title = ref('')
  title.value = "张三";

  console.log(import.meta.env)

  const showRight = ref()
	const showLeft = ref()


  const confirm = () => {}
  // 打开窗口
  const showDrawer = (e: any) => {
    if (e === "showLeft") {
      showLeft.value.open()
    } else {
      showRight.value.open()
    }
  }
  // 关闭窗口
  const closeDrawer = (e: any) => {
    if (e === 'showLeft') {
      showLeft.value.close()
    } else {
      showRight.value.close()
    }
  }
  // 抽屉状态发生变化触发
  const change = (e: any, type: any) => {
    console.log(e, type)
    // console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
  }

  const toPage = () => {
    uni.navigateTo({
      url: '/pages/test/test'
    })
  }



</script>

<template>
  <view class="content">
    <button size="default" type="default" 
    style="color:#ffffff;backgroundColor:#1AAD19;borderColor:#1AAD19" 
    hover-class="is-hover">按钮</button>

    <!-- <image class="logo" src="/static/logo.png" /> -->
    <view class="text-area">
      <!-- <text class="title">{{ title }}</text> -->
      <!-- <van-button type="primary">按钮</van-button>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
      />
      <van-icon name="close" />
      <van-icon name="chat" info="99+" /> -->
    <button type="primary" @click="toPage()"><text class="word-btn-white">跳转test页面</text></button>
    <uni-badge text="1"></uni-badge>
    <uni-badge text="2" type="success" @click="bindClick"></uni-badge>
    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>

    		<uni-section title="左侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showLeft')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showLeft" mode="left" :width="320" @change="change($event,'showLeft')">
					<view class="close">
						<button @click="closeDrawer('showLeft')"><text class="word-btn-white">关闭Drawer</text></button>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

		<uni-section title="右侧滑出" type="line">
			<view class="example-body">
				<button type="primary" @click="showDrawer('showRight')"><text class="word-btn-white">显示Drawer</text>
				</button>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')">
					<view class="scroll-view">
						<scroll-view class="scroll-view-box" scroll-y="true">
							<view class="info">
								<text class="info-text">右侧遮罩只能通过按钮关闭，不能通过点击遮罩关闭</text>
							</view>
							<view class="close">
								<button @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
							<view class="info-content" v-for="item in 100" :key="item">
								<text>可滚动内容 {{item}}</text>
							</view>
							<view class="close">
								<button  @click="closeDrawer('showRight')"><text class="word-btn-white">关闭Drawer</text></button>
							</view>
						</scroll-view>
					</view>
				</uni-drawer>
			</view>
		</uni-section>

    </view>
  </view>
</template>

<style lang="scss">
.example-body {
	padding: 10px;
}
.scroll-view {
	/* #ifndef APP-NVUE */
	width: 100%;
	height: 100%;
	/* #endif */
	flex:1
}
// 处理抽屉内容滚动
.scroll-view-box {
	flex: 1;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}
.info {
	padding: 15px;
	color: #666;
}

.info-text {
	font-size: 14px;
	color: #666;
}
.info-content {
	padding: 5px 15px;
}
.close {
	padding: 10px;
}
</style>


