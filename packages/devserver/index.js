const fs = require('fs')
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware')
const paths = require('react-scripts/config/paths')
const path = require('path')
const bodyParser = require('body-parser')
const createMockMiddleware = require('./createMockMiddleware')

module.exports = (config) => {
  config.before = (app, server) => {
    app.use(evalSourceMapMiddleware(server))
    app.use(errorOverlayMiddleware())

    if (fs.existsSync(paths.proxySetup)) {
      require(paths.proxySetup)(app)
    }

    app.use(bodyParser.json())
    app.use(createMockMiddleware())
  }
  return config
}
