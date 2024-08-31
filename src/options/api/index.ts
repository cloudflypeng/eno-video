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

function getTypes(baseUrl: string) {
  const params = {
    ac: 'list',
    pg: 1,
    t: 1,
  } as Record<string, any>
  let url = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  url += 'api.php/provide/vod'
  url += `?${new URLSearchParams(params).toString()}`
  // 两个// 替换为一个/
  return efetch(url, {
    method: 'GET',
  })
}

function getMoviesByType(baseUrl: string, typeId: string | number) {
  const params = {
    ac: 'detail',
    pg: 1,
    t: typeId,
  } as Record<string, any>

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
  getTypes,
  getMoviesByType,
}
