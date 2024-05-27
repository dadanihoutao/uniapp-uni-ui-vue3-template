import type { CategoryTopItem } from '@/typings/category'
import type { BannerItem } from '@/typings/home'
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
      distributionSite: 2
    }
  })
}

/**
 * 分类列表-小程序
 * @returns
 */
export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top'
  })
}
