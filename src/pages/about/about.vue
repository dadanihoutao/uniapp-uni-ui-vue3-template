<script setup lang="ts">
  const title = ref('Hello')
  title.value = '测试测试'

  onReady(() => {
    console.log('on ready')
  })

  const type = ref('center')
  const msgType = ref<any>('success')
  const messageText = ref('这是一条成功提示')
  const value = ref('')

  const change = (e) => {
    console.log('当前模式：' + e.type + ',状态：' + e.show)
  }
  const popup = ref()
  const toggle = (t: string) => {
    console.log(t)
    type.value = t
    // open 方法传入参数 等同在 uni-popup 组件上绑定 type属性
    popup.value.open(t)
  }

  const message = ref()
  const messageToggle = (type: string) => {
    msgType.value = type
    messageText.value = `这是一条${type}消息提示`
    message.value.open()
  }

  const alertDialog = ref()
  const dialogToggle = (type: string) => {
    msgType.value = type
    alertDialog.value.open()
  }

  const dialogConfirm = () => {
    console.log('点击确认')
    messageText.value = `点击确认了 ${msgType.value} 窗口`
    message.value.open()
  }

  const inputDialog = ref()
  const inputDialogToggle = () => {
    inputDialog.value.open()
  }
  const dialogClose = () => {
    console.log('点击关闭')
  }
  const dialogInputConfirm = (val) => {
    uni.showLoading({
      title: '3秒后会关闭'
    })

    setTimeout(() => {
      uni.hideLoading()
      console.log(val)
      value.value = val
      // 关闭窗口后，恢复默认内容
      inputDialog.value.close()
    }, 3000)
  }

  const share = ref()
  const shareToggle = () => {
    share.value.open()
  }
</script>

<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <!-- <van-button type="primary" @click="toTest()">去test 测试页面</van-button> -->
      <text>关于我们</text>
    </view>

    <uni-section title="基本示例" type="line">
      <view class="example-body box">
        <button class="button" type="primary" @click="toggle('top')">
          <text class="button-text">顶部1</text>
        </button>
        <button class="button" type="primary" @click="toggle('bottom')">
          <text class="button-text">底部2</text>
        </button>
        <button class="button" type="primary" @click="toggle('center')">
          <text class="button-text">居中</text>
        </button>
        <button class="button" type="primary" @click="toggle('left')">
          <text class="button-text">左侧</text>
        </button>
        <button class="button" type="primary" @click="toggle('right')">
          <text class="button-text">右侧</text>
        </button>
      </view>
    </uni-section>

    <uni-section title="提示消息" type="line">
      <view class="example-body box">
        <button class="button popup-success" @click="messageToggle('success')">
          <text class="button-text success-text">成功</text>
        </button>
        <button class="button popup-error" @click="messageToggle('error')">
          <text class="button-text error-text">失败</text>
        </button>
        <button class="button popup-warn" @click="messageToggle('warn')">
          <text class="button-text warn-text">警告</text>
        </button>
        <button class="button popup-info" @click="messageToggle('info')">
          <text class="button-text info-text">信息</text>
        </button>
      </view>
    </uni-section>

    <uni-section title="对话框示例" type="line" class="hideOnPc">
      <view class="example-body box">
        <button class="button popup-success" @click="dialogToggle('success')">
          <text class="button-text success-text">成功</text>
        </button>
        <button class="button popup-error" @click="dialogToggle('error')">
          <text class="button-text error-text">失败</text>
        </button>
        <button class="button popup-warn" @click="dialogToggle('warn')">
          <text class="button-text warn-text">警告</text>
        </button>
        <button class="button popup-info" @click="dialogToggle('info')">
          <text class="button-text info-text">信息</text>
        </button>
      </view>
    </uni-section>

    <uni-section title="输入框示例" type="line" padding>
      <view class="dialog-box">
        <text class="dialog-text">输入内容：{{ value }}</text>
      </view>
      <button class="button" type="primary" @click="inputDialogToggle">
        <text class="button-text">输入对话框</text>
      </button>
    </uni-section>
    <uni-section title="底部分享示例" type="line" padding>
      <button class="button" type="primary" @click="shareToggle">
        <text class="button-text">分享模版示例</text>
      </button>
    </uni-section>
    <view>
      <!-- 普通弹窗 -->
      <uni-popup ref="popup" background-color="#fff" @change="change">
        <view
          class="popup-content"
          :class="{ 'popup-height': type === 'left' || type === 'right' }"
          ><text class="text">popup 内容</text></view
        >
      </uni-popup>
    </view>

    <view>
      <!-- 提示信息弹窗 -->
      <uni-popup ref="message" type="message">
        <uni-popup-message
          :type="msgType"
          :message="messageText"
          :duration="2000"
        ></uni-popup-message>
      </uni-popup>
    </view>

    <view>
      <!-- 提示窗示例 -->
      <uni-popup ref="alertDialog" type="dialog">
        <uni-popup-dialog
          :type="msgType"
          cancelText="关闭"
          confirmText="同意"
          title="通知"
          content="欢迎使用 uni-popup!"
          @confirm="dialogConfirm"
          @close="dialogClose"
        ></uni-popup-dialog>
      </uni-popup>
    </view>

    <view>
      <!-- 输入框示例 -->
      <uni-popup ref="inputDialog" type="dialog">
        <uni-popup-dialog
          ref="inputClose"
          mode="input"
          title="输入内容"
          value="对话框预置提示内容!"
          placeholder="请输入内容1"
          @confirm="dialogInputConfirm"
        ></uni-popup-dialog>
      </uni-popup>
    </view>

    <view>
      <!-- 分享示例 -->
      <uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
        <uni-popup-share></uni-popup-share>
      </uni-popup>
    </view>
  </view>
</template>

<style lang="scss">
  @mixin flex {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
  }
  @mixin height {
    flex: 1;
    /* #ifndef APP-NVUE */
    height: 100%;
    /* #endif */
  }
  .box {
    @include flex;
  }
  .button {
    @include flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0 5px;
    border-radius: 5px;
    height: 35px;
  }
  .example-body {
    padding: 10px 0;
    background-color: #fff;
  }
  .button-text {
    font-size: 12px;
    color: #fff;
  }
  .popup-content {
    @include flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: 50px;
    background-color: #fff;
  }
  .popup-height {
    @include height;
    width: 200px;
  }
  .text {
    font-size: 12px;
    color: #333;
  }
  .popup-success {
    background-color: #e1f3d8;
    color: #fff;
  }
  .popup-warn {
    background-color: #faecd8;
    color: #fff;
  }
  .popup-error {
    background-color: #fde2e2;
    color: #fff;
  }
  .popup-info {
    background-color: #f2f6fc;
    color: #fff;
  }
  .success-text {
    color: #09bb07;
  }
  .warn-text {
    color: #e6a23c;
  }
  .error-text {
    color: #f56c6c;
  }
  .info-text {
    color: #909399;
  }
  .dialog,
  .share {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
  }
  .dialog-box {
    padding: 10px;
  }
  .dialog .button,
  .share .button {
    flex: 1;
    margin: 0;
    margin-top: 10px;
    padding: 3px 0;
    /* #ifndef APP-NVUE */
    width: 100%;
    /* #endif */
  }
  .dialog-text {
    font-size: 14px;
    color: #333;
  }
</style>
