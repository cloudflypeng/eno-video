import { efetch } from '@meanc/webext-fetch'

function search(baseUrl: string, params: Record<string, any>) {
  const defaultParams = {
    ac: 'detail',
    pg: 1,
    wd: '',
    at: 'json',
    h: 3600,
  }

  params = {
    ...defaultParams,
    ...params,
  }
  let url = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  url += 'api.php/provide/vod'
  url += `?${new URLSearchParams(params).toString()}`
  // 两个// 替换为一个/
  return efetch(url, {
    method: 'GET',
  })
}

export default {
  search,
}
