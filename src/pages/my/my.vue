<script setup lang="ts">
  import { useMemberStore } from '@/stores'
  import { http } from '@/utils/http'

  const memberStore = useMemberStore()

  console.log(memberStore)

  const getData = async () => {
    const res = await http<string[]>({
      url: '/home/new',
      method: 'GET',
      data: {}
    })
    console.log(res)
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
  </view>
</template>

<style></style>
