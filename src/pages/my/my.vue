<script setup lang="ts">
  import { useMemberStore } from '@/stores'
  import { http } from '@/utils/http'
  import baseHttp from '@/utils/request'

  const memberStore = useMemberStore()

  console.log(memberStore)

  type ResDataType = {
    desc: string
    id: string
    name: string
    orderNum: number
    picture: string
    price: string
  }

  const dataList = ref<ResDataType[]>([])
  const getData = async () => {
    const res = await http<ResDataType[]>({
      url: '/home/new',
      method: 'GET',
      data: {}
    })
    console.log(res)
    if (res.code === '1') {
      dataList.value = res.result
    }
  }
  const saveMember = () => {
    memberStore.setProfile({
      nickname: '黑马先锋',
      token: '123123132'
    })
  }

  const toSetting = () => {
    uni.navigateTo({
      url: '/pages-member/settings/settings'
    })
  }

  // 测试另外一个请求
  const toRequest = async () => {
    const res = await baseHttp.get('/home/new')
    console.log(res)
  }
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @click="saveMember" size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @click="memberStore.clearProfile()" size="mini" plain type="warn">
      清理用户信息
    </button>
    <button @click="getData()" size="mini" plain type="warn">接口请求</button>
    <button @click="toSetting()" size="mini" plain type="warn">跳转设置</button>
    <button @click="toRequest()" size="mini" plain type="warn">
      测试request函数
    </button>
    <navigator
      class="settings"
      url="/pages-member/settings/settings"
      hover-class="none"
    >
      设置
    </navigator>
    <view>
      <view v-for="item in dataList" :key="item.id">
        <image :src="item.picture" mode="scaleToFill" />
      </view>
    </view>
  </view>
</template>

<style></style>
