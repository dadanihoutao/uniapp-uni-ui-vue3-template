<script setup lang="ts">
  import { useMemberStore } from '@/stores'
  import { http } from '@/utils/http'

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
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @click="
        memberStore.setProfile({
          nickname: '黑马先锋',
          token: '123123132'
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @click="memberStore.clearProfile()" size="mini" plain type="warn">
      清理用户信息
    </button>
    <button @click="getData()" size="mini" plain type="warn">接口请求</button>

    <view>
      <view v-for="item in dataList" :key="item.id">
        <image :src="item.picture" mode="scaleToFill" />
      </view>
    </view>
  </view>
</template>

<style></style>
