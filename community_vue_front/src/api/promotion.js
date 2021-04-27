import request from '@/utils/request'

export function getPromotion() {
  return request({
    url: '/promotion/show',
    method: 'get'
  })
}