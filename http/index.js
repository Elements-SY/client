import { request } from './request' // 引入axios的封装方法
import api from './common'
export const topics = params => {
  // 主题首页
  return request('GET', api.topics, params)
}
