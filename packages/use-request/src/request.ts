import axios, { AxiosRequestConfig } from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformURL = (url: string, data: any) => {
  if (!data) {
    return { url, data }
  }
  let cloneData = data
  let cloneUrl = url
  try {
    cloneData = JSON.parse(JSON.stringify(data))
  } catch (error) {}

  Object.entries(cloneData).forEach(([key]) => {
    const reg = new RegExp(`/:${key}`)
    if (reg.test(cloneUrl)) {
      cloneUrl = cloneUrl.replace(`/:${key}`, `/${cloneData[key]}`)
      delete cloneData[key]
    }
  })

  return { url: cloneUrl, data: cloneData }
}

type RequestConfig = AxiosRequestConfig | string

const request = (config: RequestConfig) => {
  let params = config
  if (typeof config === 'object') {
    const axiosConfig = config as AxiosRequestConfig
    const { data, url } = transformURL(
      axiosConfig.url as string,
      axiosConfig.data
    )
    params = {
      ...axiosConfig,
      data,
      url,
    }

    if (
      (!params.method || params.method.toLocaleUpperCase() === 'GET') &&
      !params.params
    ) {
      params.params = data
    }
  }

  return (typeof config === 'object'
    ? axios(params as AxiosRequestConfig)
    : axios(params as string)
  )
    .then((response) => Promise.resolve(response.data))
    .catch((error) => {
      const { response } = error
      let message
      let statusCode = 0

      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        message = data.message || statusText
      } else {
        // eslint-disable-next-line prefer-destructuring
        message = error.message
      }
      return Promise.reject({
        statusCode,
        message,
      })
    })
}

export { axios }

export default request
