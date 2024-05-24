import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 获取首页 banner 列表
 * 广告区域展示位置
 * 1 为首页（默认值）
 * 2 为商品分类页
 * @returns
 */
export const getHomeBannerList = () => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite: 1
    }
  })
}
