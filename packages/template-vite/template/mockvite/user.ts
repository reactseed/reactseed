import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/getUser',
        method: 'get',
        response: () => {
            console.log('body>>>>>>>>')
            return {
                code: 0,
                message: 'ok',
                data: ['aa123', 'bb123']
            }
        }
    },
    {
      url: '/api/test',
      method: 'get',
      response: () => {
          console.log('testbody>>>>>>>>')
          return {
              code: 0,
              message: 'ok',
              data: ['aatest', 'bbtest']
          }
      }
  }
] as MockMethod[]