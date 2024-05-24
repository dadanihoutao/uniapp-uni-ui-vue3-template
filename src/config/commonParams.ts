import { useMemberStore } from '@/stores'
import { APP_ID, APP_VERSION } from './app'

const commonParams = {
  isLoading: true,
  appid: APP_ID,
  v: APP_VERSION // 系统版本，用于获取最新版数据
}

export function getCommonParams() {
  const memberStore = useMemberStore()

  return Object.assign(
    {
      token: memberStore.profile?.token,
      uuid: memberStore.profile?.uuid,
      timestamp: Date.now()
    },
    commonParams
  )
}
export function setCommonParams(params: object) {
  Object.assign(commonParams, params)
}
