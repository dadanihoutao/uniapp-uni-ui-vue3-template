import type { PageResult } from '@/typings/global'
import type { GuessItem } from '@/typings/home'
import { http } from '@/utils/http'

/**
 * 获取猜你喜欢
 * @param data 分页参数
 * @returns
 */
export const getGoodsGuessLike = (data?) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: data
  })
}
