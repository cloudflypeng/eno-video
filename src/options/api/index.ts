import { efetch } from '@meanc/webext-fetch'

function search(baseUrl: string, params: Record<string, any>) {
  const defaultParams = {
    mid: 1,
    limit: 10,
    imestamp: Date.now().toString(),
    wd: '',
  }

  params = {
    ...defaultParams,
    ...params,
  }
  let url = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  url += 'index.php/ajax/suggest'
  url += `?${new URLSearchParams(params).toString()}`
  // 两个// 替换为一个/
  return efetch(url, {
    method: 'GET',
  })
}

export default {
  search,
}
