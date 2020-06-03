const fs = require('fs')
const chokidar = require('chokidar')
const path = require('path')

const mockPath = path.resolve(fs.realpathSync(process.cwd()), 'mock')
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

module.exports = function (prefix = '_') {
  const createMockHandler = (method, path, handler) => async (
    req,
    res,
    next
  ) => {
    await sleep(300)
    if (typeof handler === 'function') {
      handler(req, res, next)
    } else {
      res.json(handler)
    }
  }

  const getConfig = function () {
    const mockConfig = {}
    fs.readdirSync(mockPath).forEach((file) => {
      delete require.cache[`${mockPath}/${file}`]
      if (file.indexOf(prefix) < 0) {
        try {
          Object.assign(mockConfig, require(`${mockPath}/${file}`))
        } catch (error) {
          console.error(error)
        }
      }
    })

    return Object.keys(mockConfig).map((key) => {
      const splited = key.split(' ')
      let method = 'get'
      let path = key

      if (splited.length > 1) {
        method = splited[0].toLowerCase()
        path = splited[1]
      }

      return {
        path,
        method,
        handler: createMockHandler(method, path, mockConfig[key]),
      }
    })
  }

  let mockData = getConfig()

  const watcher = chokidar.watch([mockPath], {
    ignoreInitial: true,
  })

  watcher.on('all', (event, file) => {
    console.log(`[${event}] ${file}, Reload mock data`)
    mockData = getConfig()
  })

  return function (req, res, next) {
    const exceptPath = req.path
    const exceptMethod = req.method.toLowerCase()
    const match = mockData.find(
      (item) => item.path === exceptPath && item.method === exceptMethod
    )
    if (match) {
      return match.handler(req, res, next)
    }
    return next()
  }
}
