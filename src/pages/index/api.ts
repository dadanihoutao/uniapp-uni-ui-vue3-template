import type { BannerItem, CategoryItem } from '@/typings/home'
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

/**
 * 首页-前台分类-小程序
 */
export const getCategoryList = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli'
  })
}
