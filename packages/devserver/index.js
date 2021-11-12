const fs = require('fs')
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware')
const paths = require('react-scripts/config/paths')
const path = require('path')
const apiMocker = require('mocker-api')
const mockPath = path.resolve(fs.realpathSync(process.cwd()), 'mock')
module.exports = (config) => {
  config.before = (app, server) => {
    app.use(evalSourceMapMiddleware(server))
    app.use(errorOverlayMiddleware())

    if (fs.existsSync(paths.proxySetup)) {
      require(paths.proxySetup)(app)
    }
    apiMocker(app, path.resolve(__dirname, `${mockPath}/app.js`))
  }
  return config
}
