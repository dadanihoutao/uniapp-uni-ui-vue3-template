import type { PageParams } from '@/typings/global'
import type { HotResult } from '@/typings/hot'
import { http } from '@/utils/http'

// 交叉类型，添加 subType 字段的类型
/**
 * 获取热门推荐列表
 */
type HotParam = PageParams & { subType?: string }
export const getHotListAPI = (url: string, data?: HotParam) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data
  })
}
